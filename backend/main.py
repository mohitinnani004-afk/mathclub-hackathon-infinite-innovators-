"""
Member 1: Algorithmic Core & Math Engine
==========================================
Smart Exam Slot Management — FastAPI Backend

Campus & Building Architecture:
  - 3 Blocks:
      * CB  (Central Block):    5 Floors (1 to 5) — 10 Classrooms (cap 70) + 6 Labs (cap 35) per floor = 80 rooms
      * AB1 (Academic Block 1): 4 Floors (1 to 4) — 10 Classrooms (cap 70) + 6 Labs (cap 35) per floor = 64 rooms
      * AB2 (Academic Block 2): 4 Floors (1 to 4) — 10 Classrooms (cap 70) + 6 Labs (cap 35) per floor = 64 rooms
  - Total Campus Capacity: 208 Rooms (130 Classrooms @ 70 seats + 78 Labs @ 35 seats)
  - Examination starts Floor 1 -> Floor 5 in CB, then Floor 1 -> Floor 4 in AB1, then AB2.
  - Non-overlapping room allocation per slot: courses running simultaneously receive distinct classrooms.
"""

from fastapi import FastAPI, UploadFile, File, HTTPException
from fastapi.middleware.cors import CORSMiddleware
from fastapi.responses import JSONResponse
import networkx as nx
from collections import defaultdict
import io
import csv
import json
from typing import Optional, List, Dict, Any
import uvicorn

app = FastAPI(
    title="Smart Exam Slot Management API",
    description="Graph-coloring exam scheduler for 4,000+ students across CB, AB1, AB2 blocks (70 students per class)",
    version="2.1.0"
)

app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

# ─────────────────────────────────────────────────────────────
# Campus Room Inventory Generator
# ─────────────────────────────────────────────────────────────

def generate_campus_rooms() -> List[Dict[str, Any]]:
    """
    Generates the ordered room inventory:
      1. Classrooms (70 capacity) ordered:
         CB (Floors 1-5, Rooms 01-10) -> AB1 (Floors 1-4, Rooms 01-10) -> AB2 (Floors 1-4, Rooms 01-10)
      2. Labs (35 capacity) ordered:
         CB (Floors 1-5, Labs 01-06) -> AB1 (Floors 1-4, Labs 01-06) -> AB2 (Floors 1-4, Labs 01-06)
    """
    classrooms = []
    labs = []

    block_configs = [
        {"block": "CB",  "floors": 5, "label": "Central Block"},
        {"block": "AB1", "floors": 4, "label": "Academic Block 1"},
        {"block": "AB2", "floors": 4, "label": "Academic Block 2"}
    ]

    for b in block_configs:
        blk = b["block"]
        for flr in range(1, b["floors"] + 1):
            # 10 Classrooms per floor, 70 capacity each
            for r_num in range(1, 11):
                room_id = f"{blk}-{flr}{str(r_num).zfill(2)}"
                classrooms.append({
                    "room_id": room_id,
                    "capacity": 70,
                    "type": "classroom",
                    "block": blk,
                    "floor": flr,
                    "display_name": f"{blk} Floor {flr} • Room {room_id}"
                })

    for b in block_configs:
        blk = b["block"]
        for flr in range(1, b["floors"] + 1):
            # 6 Labs per floor, 35 capacity each
            for l_num in range(1, 7):
                lab_id = f"{blk}-L{flr}{str(l_num).zfill(2)}"
                labs.append({
                    "room_id": lab_id,
                    "capacity": 35,
                    "type": "lab",
                    "block": blk,
                    "floor": flr,
                    "display_name": f"{blk} Floor {flr} • Lab {lab_id}"
                })

    # Theory exams prioritize classrooms (Floor 1-5 CB -> AB1 -> AB2), followed by labs
    return classrooms + labs


DEFAULT_ROOMS = generate_campus_rooms()

SLOT_LABELS = {
    1:  "Slot 1 (Day 1 - Morning 09:00 - 12:00)",
    2:  "Slot 2 (Day 1 - Afternoon 14:00 - 17:00)",
    3:  "Slot 3 (Day 2 - Morning 09:00 - 12:00)",
    4:  "Slot 4 (Day 2 - Afternoon 14:00 - 17:00)",
    5:  "Slot 5 (Day 3 - Morning 09:00 - 12:00)",
    6:  "Slot 6 (Day 3 - Afternoon 14:00 - 17:00)",
    7:  "Slot 7 (Day 4 - Morning 09:00 - 12:00)",
    8:  "Slot 8 (Day 4 - Afternoon 14:00 - 17:00)",
    9:  "Slot 9 (Day 5 - Morning 09:00 - 12:00)",
    10: "Slot 10 (Day 5 - Afternoon 14:00 - 17:00)",
    11: "Slot 11 (Day 6 - Morning 09:00 - 12:00)",
    12: "Slot 12 (Day 6 - Afternoon 14:00 - 17:00)",
}


# ─────────────────────────────────────────────────────────────
# Core Graph Coloring & Math Engine
# ─────────────────────────────────────────────────────────────

def build_conflict_graph(records: List[Dict[str, str]]) -> nx.Graph:
    """
    Construct G=(V,E):
      V = course codes
      E = edge A-B if any student is enrolled in both
      W = number of shared students
    """
    G = nx.Graph()

    course_names: Dict[str, str] = {}
    student_per_course: Dict[str, set] = defaultdict(set)

    for r in records:
        code = r["course_code"]
        course_names[code] = r.get("course_name", code)
        student_per_course[code].add(r["student_id"])

    for code, name in course_names.items():
        G.add_node(code, label=name, student_count=len(student_per_course[code]))

    # Map student -> set of enrolled courses
    student_courses: Dict[str, set] = defaultdict(set)
    for r in records:
        student_courses[r["student_id"]].add(r["course_code"])

    # Compute conflict edges
    edge_weights: Dict[tuple, int] = defaultdict(int)
    for sid, enrolled in student_courses.items():
        enrolled_list = sorted(enrolled)
        for i in range(len(enrolled_list)):
            for j in range(i + 1, len(enrolled_list)):
                edge_weights[(enrolled_list[i], enrolled_list[j])] += 1

    for (u, v), w in edge_weights.items():
        G.add_edge(u, v, weight=w)

    return G


def welsh_powell_coloring(G: nx.Graph) -> Dict[str, int]:
    """
    Welsh-Powell Graph Coloring Algorithm:
      1. Order vertices by decreasing degree.
      2. Greedily assign lowest feasible color index (slot).
      Guarantees zero exam clash between connected nodes.
    """
    sorted_nodes = sorted(G.nodes(), key=lambda n: G.degree(n), reverse=True)
    coloring: Dict[str, int] = {}

    for node in sorted_nodes:
        neighbor_colors = {
            coloring[nb] for nb in G.neighbors(node) if nb in coloring
        }
        slot = 1
        while slot in neighbor_colors:
            slot += 1
        coloring[node] = slot

    return coloring


def allocate_slot_rooms(courses_in_slot: List[Dict[str, Any]], rooms: List[Dict[str, Any]]) -> None:
    """
    Allocates distinct, collision-free rooms for all courses running concurrently in a slot.
    Packs students into 70-student classrooms starting from CB Floor 1 to 5, then AB1, then AB2.
    Modifies each course dictionary in-place by attaching 'rooms' list.
    """
    room_idx = 0
    total_rooms = len(rooms)

    for course in courses_in_slot:
        remaining = course["student_count"]
        allocated_rooms = []

        while remaining > 0 and room_idx < total_rooms:
            room = rooms[room_idx]
            assigned = min(remaining, room["capacity"])
            allocated_rooms.append({
                "room_id":        room["room_id"],
                "assigned_count": assigned,
                "capacity":       room["capacity"],
                "type":           room.get("type", "classroom"),
                "block":          room.get("block", ""),
                "floor":          room.get("floor", 0),
                "display_name":   room.get("display_name", f"{room['block']} Floor {room['floor']} • Room {room['room_id']}")
            })
            remaining -= assigned
            room_idx += 1

        if remaining > 0:
            allocated_rooms.append({
                "room_id":        "OVERFLOW",
                "assigned_count": remaining,
                "capacity":       remaining,
                "type":           "overflow",
                "block":          "OVERFLOW",
                "floor":          0,
                "display_name":   "Campus Room Capacity Exceeded",
                "note":           "Additional halls required"
            })

        course["rooms"] = allocated_rooms
        course["rooms_used"] = len(allocated_rooms)
        # Invigilators: 1 invigilator per room assigned
        course["invigilators"] = len(allocated_rooms)


def build_output_schema(
    records: List[Dict[str, str]],
    G: nx.Graph,
    coloring: Dict[str, int],
    rooms: List[Dict[str, Any]]
) -> Dict[str, Any]:
    """Package solver results into complete, frontend-ready schema."""
    unique_students = {r["student_id"] for r in records}
    unique_courses  = {r["course_code"] for r in records}
    slots_used      = max(coloring.values()) if coloring else 0
    clashes_resolved = G.number_of_edges()

    # Per-course student counts & course names
    course_student_map: Dict[str, set] = defaultdict(set)
    course_names: Dict[str, str] = {}
    for r in records:
        course_student_map[r["course_code"]].add(r["student_id"])
        course_names[r["course_code"]] = r.get("course_name", r["course_code"])

    # Group courses by slot
    slot_courses: Dict[int, List[str]] = defaultdict(list)
    for course, slot in coloring.items():
        slot_courses[slot].append(course)

    schedule = []
    # Track overall block utilization across the whole schedule
    block_room_usage = defaultdict(lambda: {"rooms_used": 0, "students_seated": 0})
    floor_room_usage = defaultdict(lambda: {"rooms_used": 0, "students_seated": 0})

    for slot_id in sorted(slot_courses.keys()):
        courses_in_slot = []
        total_slot_students = 0

        # Sort courses in slot by student count descending for orderly floor allocation
        sorted_codes = sorted(slot_courses[slot_id], key=lambda c: len(course_student_map.get(c, set())), reverse=True)

        for code in sorted_codes:
            sc = len(course_student_map.get(code, set()))
            total_slot_students += sc
            courses_in_slot.append({
                "course_code":   code,
                "course_name":   course_names.get(code, code),
                "student_count": sc
            })

        # Allocate non-colliding rooms sequentially across CB (Floor 1-5), AB1 (1-4), AB2 (1-4)
        allocate_slot_rooms(courses_in_slot, rooms)

        for c in courses_in_slot:
            for rm in c.get("rooms", []):
                blk = rm.get("block")
                flr = rm.get("floor")
                if blk and blk != "OVERFLOW":
                    block_room_usage[blk]["rooms_used"] += 1
                    block_room_usage[blk]["students_seated"] += rm["assigned_count"]
                    floor_key = f"{blk}-F{flr}"
                    floor_room_usage[floor_key]["rooms_used"] += 1
                    floor_room_usage[floor_key]["students_seated"] += rm["assigned_count"]

        schedule.append({
            "slot_id":             slot_id,
            "slot_label":          SLOT_LABELS.get(slot_id, f"Slot {slot_id}"),
            "courses":             courses_in_slot,
            "total_slot_students": total_slot_students,
            "total_rooms_used":    sum(c["rooms_used"] for c in courses_in_slot),
            "total_invigilators":  sum(c["invigilators"] for c in courses_in_slot)
        })

    # Vis.js graph nodes and edges
    nodes = []
    for node, data in G.nodes(data=True):
        nodes.append({
            "id":            node,
            "label":         data.get("label", node),
            "slot":          coloring.get(node, 0),
            "student_count": data.get("student_count", 0),
            "degree":        G.degree(node)
        })

    edges = []
    for u, v, data in G.edges(data=True):
        edges.append({
            "from":   u,
            "to":     v,
            "weight": data.get("weight", 1)
        })

    return {
        "summary": {
            "total_students":    len(unique_students),
            "total_courses":     len(unique_courses),
            "slots_required":    slots_used,
            "clashes_resolved":  clashes_resolved,
            "chromatic_number":  slots_used,
            "graph_density":     round(nx.density(G), 4),
            "algorithm":         "Welsh-Powell Graph Coloring",
            "total_rooms":       len(rooms),
            "max_slot_capacity": sum(r["capacity"] for r in rooms),
            "building_blocks":   ["CB (5 Floors)", "AB1 (4 Floors)", "AB2 (4 Floors)"],
            "classroom_capacity": 70,
            "lab_capacity": 35,
            "room_breakdown": {
                "classrooms": sum(1 for r in rooms if r.get("type") == "classroom"),
                "labs":       sum(1 for r in rooms if r.get("type") == "lab"),
                "cb_rooms":   80,
                "ab1_rooms":  64,
                "ab2_rooms":  64,
                "capacity_per_classroom": 70,
                "capacity_per_lab": 35
            }
        },
        "schedule": schedule,
        "graph_data": {"nodes": nodes, "edges": edges},
        "room_summary": {
            "blocks": dict(block_room_usage),
            "floors": dict(floor_room_usage)
        }
    }


def parse_csv_content(content: str) -> List[Dict[str, str]]:
    """Parse CSV into normalized enrollment records."""
    reader = csv.DictReader(io.StringIO(content))
    raw_rows = list(reader)
    if not raw_rows:
        raise ValueError("CSV file is empty")

    normalized = []
    for row in raw_rows:
        norm = {k.strip().lower().replace(" ", "_"): str(v).strip() for k, v in row.items()}
        normalized.append(norm)

    required = {"student_id", "course_code", "course_name"}
    missing = required - set(normalized[0].keys())
    if missing:
        raise ValueError(f"Missing required columns: {missing}")

    records = []
    seen = set()
    for row in normalized:
        sid  = row.get("student_id", "").strip()
        code = row.get("course_code", "").strip().upper()
        name = row.get("course_name", "").strip()
        if not sid or not code:
            continue
        key = (sid, code)
        if key in seen:
            continue
        seen.add(key)
        records.append({"student_id": sid, "course_code": code, "course_name": name})

    if not records:
        raise ValueError("No valid enrollment records found")
    return records


# ─────────────────────────────────────────────────────────────
# API Endpoints
# ─────────────────────────────────────────────────────────────

@app.get("/")
def root():
    return {
        "service":  "Smart Exam Slot Management API",
        "version":  "2.1.0",
        "blocks":   ["CB (5 floors)", "AB1 (4 floors)", "AB2 (4 floors)"],
        "classrooms": 130,
        "labs": 78,
        "classroom_cap": 70,
        "endpoints": ["/api/schedule", "/api/solve", "/api/rooms", "/health"]
    }


@app.get("/health")
def health():
    return {
        "status":       "healthy",
        "algorithm":    "Welsh-Powell Graph Coloring",
        "total_rooms":  len(DEFAULT_ROOMS),
        "classroom_cap": 70,
        "lab_cap": 35,
        "max_capacity": sum(r["capacity"] for r in DEFAULT_ROOMS)
    }


@app.get("/api/rooms")
def list_rooms(block: Optional[str] = None, floor: Optional[int] = None):
    """List campus rooms, optionally filtered by block or floor."""
    rooms = DEFAULT_ROOMS
    if block:
        rooms = [r for r in rooms if r.get("block", "").upper() == block.upper()]
    if floor:
        rooms = [r for r in rooms if r.get("floor") == floor]
    return {
        "total": len(rooms),
        "classrooms": sum(1 for r in rooms if r.get("type") == "classroom"),
        "labs": sum(1 for r in rooms if r.get("type") == "lab"),
        "rooms": rooms
    }


@app.post("/api/schedule")
async def schedule_exams(
    file: UploadFile = File(...),
    rooms_json: Optional[str] = None
):
    """Upload CSV/JSON enrollment file -> compute optimized exam schedule."""
    try:
        content_bytes = await file.read()
        content_str   = content_bytes.decode("utf-8-sig")

        if file.filename and file.filename.endswith(".json"):
            data    = json.loads(content_str)
            raw     = data if isinstance(data, list) else data.get("enrollments", [])
            records = [
                {
                    "student_id":  str(r.get("student_id", "")).strip(),
                    "course_code": str(r.get("course_code", "")).strip().upper(),
                    "course_name": str(r.get("course_name", "")).strip()
                }
                for r in raw if r.get("student_id") and r.get("course_code")
            ]
        else:
            records = parse_csv_content(content_str)

        rooms    = json.loads(rooms_json) if rooms_json else DEFAULT_ROOMS
        G        = build_conflict_graph(records)
        coloring = welsh_powell_coloring(G)
        result   = build_output_schema(records, G, coloring, rooms)
        return JSONResponse(content=result)

    except ValueError as e:
        raise HTTPException(status_code=400, detail=str(e))
    except Exception as e:
        raise HTTPException(status_code=500, detail=f"Solver error: {str(e)}")


@app.post("/api/solve")
async def solve_from_json(payload: dict):
    """JSON body endpoint: {enrollments: [...], rooms: [...]}"""
    try:
        enrollments = payload.get("enrollments", [])
        rooms       = payload.get("rooms", DEFAULT_ROOMS)
        if not enrollments:
            raise ValueError("No enrollment data provided")

        records = [
            {
                "student_id":  str(r.get("student_id", "")).strip(),
                "course_code": str(r.get("course_code", "")).strip().upper(),
                "course_name": str(r.get("course_name", "")).strip()
            }
            for r in enrollments if r.get("student_id") and r.get("course_code")
        ]

        G        = build_conflict_graph(records)
        coloring = welsh_powell_coloring(G)
        result   = build_output_schema(records, G, coloring, rooms)
        return JSONResponse(content=result)

    except ValueError as e:
        raise HTTPException(status_code=400, detail=str(e))
    except Exception as e:
        raise HTTPException(status_code=500, detail=f"Solver error: {str(e)}")


if __name__ == "__main__":
    uvicorn.run("main:app", host="0.0.0.0", port=8000, reload=False)
