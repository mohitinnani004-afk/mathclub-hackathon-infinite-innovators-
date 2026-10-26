// Mock data — 4,000 students across 3 campus blocks (CB, AB1, AB2)
// 70 students per classroom, no student has overlapping exams

export const MOCK_DATA = {
  "summary": {
    "total_students": 4000,
    "total_courses": 52,
    "slots_required": 13,
    "conflict_pairs": 350,
    "slot_count_is_heuristic": true,
    "room_allocation_feasible": true,
    "overflow_courses": [],
    "graph_density": 0.264,
    "algorithm": "Welsh-Powell Graph Coloring",
    "total_rooms": 208,
    "max_slot_capacity": 11830,
    "building_blocks": [
      "CB (5 Floors)",
      "AB1 (4 Floors)",
      "AB2 (4 Floors)"
    ],
    "classroom_capacity": 70,
    "lab_capacity": 35,
    "room_breakdown": {
      "classrooms": 130,
      "labs": 78,
      "cb_rooms": 80,
      "ab1_rooms": 64,
      "ab2_rooms": 64,
      "capacity_per_classroom": 70,
      "capacity_per_lab": 35
    }
  },
  "schedule": [
    {
      "slot_id": 1,
      "slot_label": "Slot 1 (Day 1 - Morning 09:00 - 12:00)",
      "courses": [
        {
          "course_code": "MAT1001",
          "course_name": "Calculus & Linear Algebra",
          "student_count": 1998,
          "rooms": [
            {
              "room_id": "CB-101",
              "assigned_count": 70,
              "capacity": 70,
              "type": "classroom",
              "block": "CB",
              "floor": 1,
              "display_name": "CB Floor 1 \u2022 Room CB-101"
            },
            {
              "room_id": "CB-102",
              "assigned_count": 70,
              "capacity": 70,
              "type": "classroom",
              "block": "CB",
              "floor": 1,
              "display_name": "CB Floor 1 \u2022 Room CB-102"
            },
            {
              "room_id": "CB-103",
              "assigned_count": 70,
              "capacity": 70,
              "type": "classroom",
              "block": "CB",
              "floor": 1,
              "display_name": "CB Floor 1 \u2022 Room CB-103"
            },
            {
              "room_id": "CB-104",
              "assigned_count": 70,
              "capacity": 70,
              "type": "classroom",
              "block": "CB",
              "floor": 1,
              "display_name": "CB Floor 1 \u2022 Room CB-104"
            },
            {
              "room_id": "CB-105",
              "assigned_count": 70,
              "capacity": 70,
              "type": "classroom",
              "block": "CB",
              "floor": 1,
              "display_name": "CB Floor 1 \u2022 Room CB-105"
            },
            {
              "room_id": "CB-106",
              "assigned_count": 70,
              "capacity": 70,
              "type": "classroom",
              "block": "CB",
              "floor": 1,
              "display_name": "CB Floor 1 \u2022 Room CB-106"
            },
            {
              "room_id": "CB-107",
              "assigned_count": 70,
              "capacity": 70,
              "type": "classroom",
              "block": "CB",
              "floor": 1,
              "display_name": "CB Floor 1 \u2022 Room CB-107"
            },
            {
              "room_id": "CB-108",
              "assigned_count": 70,
              "capacity": 70,
              "type": "classroom",
              "block": "CB",
              "floor": 1,
              "display_name": "CB Floor 1 \u2022 Room CB-108"
            },
            {
              "room_id": "CB-109",
              "assigned_count": 70,
              "capacity": 70,
              "type": "classroom",
              "block": "CB",
              "floor": 1,
              "display_name": "CB Floor 1 \u2022 Room CB-109"
            },
            {
              "room_id": "CB-110",
              "assigned_count": 70,
              "capacity": 70,
              "type": "classroom",
              "block": "CB",
              "floor": 1,
              "display_name": "CB Floor 1 \u2022 Room CB-110"
            },
            {
              "room_id": "CB-201",
              "assigned_count": 70,
              "capacity": 70,
              "type": "classroom",
              "block": "CB",
              "floor": 2,
              "display_name": "CB Floor 2 \u2022 Room CB-201"
            },
            {
              "room_id": "CB-202",
              "assigned_count": 70,
              "capacity": 70,
              "type": "classroom",
              "block": "CB",
              "floor": 2,
              "display_name": "CB Floor 2 \u2022 Room CB-202"
            },
            {
              "room_id": "CB-203",
              "assigned_count": 70,
              "capacity": 70,
              "type": "classroom",
              "block": "CB",
              "floor": 2,
              "display_name": "CB Floor 2 \u2022 Room CB-203"
            },
            {
              "room_id": "CB-204",
              "assigned_count": 70,
              "capacity": 70,
              "type": "classroom",
              "block": "CB",
              "floor": 2,
              "display_name": "CB Floor 2 \u2022 Room CB-204"
            },
            {
              "room_id": "CB-205",
              "assigned_count": 70,
              "capacity": 70,
              "type": "classroom",
              "block": "CB",
              "floor": 2,
              "display_name": "CB Floor 2 \u2022 Room CB-205"
            },
            {
              "room_id": "CB-206",
              "assigned_count": 70,
              "capacity": 70,
              "type": "classroom",
              "block": "CB",
              "floor": 2,
              "display_name": "CB Floor 2 \u2022 Room CB-206"
            },
            {
              "room_id": "CB-207",
              "assigned_count": 70,
              "capacity": 70,
              "type": "classroom",
              "block": "CB",
              "floor": 2,
              "display_name": "CB Floor 2 \u2022 Room CB-207"
            },
            {
              "room_id": "CB-208",
              "assigned_count": 70,
              "capacity": 70,
              "type": "classroom",
              "block": "CB",
              "floor": 2,
              "display_name": "CB Floor 2 \u2022 Room CB-208"
            },
            {
              "room_id": "CB-209",
              "assigned_count": 70,
              "capacity": 70,
              "type": "classroom",
              "block": "CB",
              "floor": 2,
              "display_name": "CB Floor 2 \u2022 Room CB-209"
            },
            {
              "room_id": "CB-210",
              "assigned_count": 70,
              "capacity": 70,
              "type": "classroom",
              "block": "CB",
              "floor": 2,
              "display_name": "CB Floor 2 \u2022 Room CB-210"
            },
            {
              "room_id": "CB-301",
              "assigned_count": 70,
              "capacity": 70,
              "type": "classroom",
              "block": "CB",
              "floor": 3,
              "display_name": "CB Floor 3 \u2022 Room CB-301"
            },
            {
              "room_id": "CB-302",
              "assigned_count": 70,
              "capacity": 70,
              "type": "classroom",
              "block": "CB",
              "floor": 3,
              "display_name": "CB Floor 3 \u2022 Room CB-302"
            },
            {
              "room_id": "CB-303",
              "assigned_count": 70,
              "capacity": 70,
              "type": "classroom",
              "block": "CB",
              "floor": 3,
              "display_name": "CB Floor 3 \u2022 Room CB-303"
            },
            {
              "room_id": "CB-304",
              "assigned_count": 70,
              "capacity": 70,
              "type": "classroom",
              "block": "CB",
              "floor": 3,
              "display_name": "CB Floor 3 \u2022 Room CB-304"
            },
            {
              "room_id": "CB-305",
              "assigned_count": 70,
              "capacity": 70,
              "type": "classroom",
              "block": "CB",
              "floor": 3,
              "display_name": "CB Floor 3 \u2022 Room CB-305"
            },
            {
              "room_id": "CB-306",
              "assigned_count": 70,
              "capacity": 70,
              "type": "classroom",
              "block": "CB",
              "floor": 3,
              "display_name": "CB Floor 3 \u2022 Room CB-306"
            },
            {
              "room_id": "CB-307",
              "assigned_count": 70,
              "capacity": 70,
              "type": "classroom",
              "block": "CB",
              "floor": 3,
              "display_name": "CB Floor 3 \u2022 Room CB-307"
            },
            {
              "room_id": "CB-308",
              "assigned_count": 70,
              "capacity": 70,
              "type": "classroom",
              "block": "CB",
              "floor": 3,
              "display_name": "CB Floor 3 \u2022 Room CB-308"
            },
            {
              "room_id": "CB-309",
              "assigned_count": 38,
              "capacity": 70,
              "type": "classroom",
              "block": "CB",
              "floor": 3,
              "display_name": "CB Floor 3 \u2022 Room CB-309"
            }
          ],
          "rooms_used": 29,
          "invigilators": 29
        }
      ],
      "total_slot_students": 1998,
      "total_rooms_used": 29,
      "total_invigilators": 29
    },
    {
      "slot_id": 2,
      "slot_label": "Slot 2 (Day 1 - Afternoon 14:00 - 17:00)",
      "courses": [
        {
          "course_code": "MAT2001",
          "course_name": "Differential Equations & Complex Variables",
          "student_count": 1799,
          "rooms": [
            {
              "room_id": "CB-101",
              "assigned_count": 70,
              "capacity": 70,
              "type": "classroom",
              "block": "CB",
              "floor": 1,
              "display_name": "CB Floor 1 \u2022 Room CB-101"
            },
            {
              "room_id": "CB-102",
              "assigned_count": 70,
              "capacity": 70,
              "type": "classroom",
              "block": "CB",
              "floor": 1,
              "display_name": "CB Floor 1 \u2022 Room CB-102"
            },
            {
              "room_id": "CB-103",
              "assigned_count": 70,
              "capacity": 70,
              "type": "classroom",
              "block": "CB",
              "floor": 1,
              "display_name": "CB Floor 1 \u2022 Room CB-103"
            },
            {
              "room_id": "CB-104",
              "assigned_count": 70,
              "capacity": 70,
              "type": "classroom",
              "block": "CB",
              "floor": 1,
              "display_name": "CB Floor 1 \u2022 Room CB-104"
            },
            {
              "room_id": "CB-105",
              "assigned_count": 70,
              "capacity": 70,
              "type": "classroom",
              "block": "CB",
              "floor": 1,
              "display_name": "CB Floor 1 \u2022 Room CB-105"
            },
            {
              "room_id": "CB-106",
              "assigned_count": 70,
              "capacity": 70,
              "type": "classroom",
              "block": "CB",
              "floor": 1,
              "display_name": "CB Floor 1 \u2022 Room CB-106"
            },
            {
              "room_id": "CB-107",
              "assigned_count": 70,
              "capacity": 70,
              "type": "classroom",
              "block": "CB",
              "floor": 1,
              "display_name": "CB Floor 1 \u2022 Room CB-107"
            },
            {
              "room_id": "CB-108",
              "assigned_count": 70,
              "capacity": 70,
              "type": "classroom",
              "block": "CB",
              "floor": 1,
              "display_name": "CB Floor 1 \u2022 Room CB-108"
            },
            {
              "room_id": "CB-109",
              "assigned_count": 70,
              "capacity": 70,
              "type": "classroom",
              "block": "CB",
              "floor": 1,
              "display_name": "CB Floor 1 \u2022 Room CB-109"
            },
            {
              "room_id": "CB-110",
              "assigned_count": 70,
              "capacity": 70,
              "type": "classroom",
              "block": "CB",
              "floor": 1,
              "display_name": "CB Floor 1 \u2022 Room CB-110"
            },
            {
              "room_id": "CB-201",
              "assigned_count": 70,
              "capacity": 70,
              "type": "classroom",
              "block": "CB",
              "floor": 2,
              "display_name": "CB Floor 2 \u2022 Room CB-201"
            },
            {
              "room_id": "CB-202",
              "assigned_count": 70,
              "capacity": 70,
              "type": "classroom",
              "block": "CB",
              "floor": 2,
              "display_name": "CB Floor 2 \u2022 Room CB-202"
            },
            {
              "room_id": "CB-203",
              "assigned_count": 70,
              "capacity": 70,
              "type": "classroom",
              "block": "CB",
              "floor": 2,
              "display_name": "CB Floor 2 \u2022 Room CB-203"
            },
            {
              "room_id": "CB-204",
              "assigned_count": 70,
              "capacity": 70,
              "type": "classroom",
              "block": "CB",
              "floor": 2,
              "display_name": "CB Floor 2 \u2022 Room CB-204"
            },
            {
              "room_id": "CB-205",
              "assigned_count": 70,
              "capacity": 70,
              "type": "classroom",
              "block": "CB",
              "floor": 2,
              "display_name": "CB Floor 2 \u2022 Room CB-205"
            },
            {
              "room_id": "CB-206",
              "assigned_count": 70,
              "capacity": 70,
              "type": "classroom",
              "block": "CB",
              "floor": 2,
              "display_name": "CB Floor 2 \u2022 Room CB-206"
            },
            {
              "room_id": "CB-207",
              "assigned_count": 70,
              "capacity": 70,
              "type": "classroom",
              "block": "CB",
              "floor": 2,
              "display_name": "CB Floor 2 \u2022 Room CB-207"
            },
            {
              "room_id": "CB-208",
              "assigned_count": 70,
              "capacity": 70,
              "type": "classroom",
              "block": "CB",
              "floor": 2,
              "display_name": "CB Floor 2 \u2022 Room CB-208"
            },
            {
              "room_id": "CB-209",
              "assigned_count": 70,
              "capacity": 70,
              "type": "classroom",
              "block": "CB",
              "floor": 2,
              "display_name": "CB Floor 2 \u2022 Room CB-209"
            },
            {
              "room_id": "CB-210",
              "assigned_count": 70,
              "capacity": 70,
              "type": "classroom",
              "block": "CB",
              "floor": 2,
              "display_name": "CB Floor 2 \u2022 Room CB-210"
            },
            {
              "room_id": "CB-301",
              "assigned_count": 70,
              "capacity": 70,
              "type": "classroom",
              "block": "CB",
              "floor": 3,
              "display_name": "CB Floor 3 \u2022 Room CB-301"
            },
            {
              "room_id": "CB-302",
              "assigned_count": 70,
              "capacity": 70,
              "type": "classroom",
              "block": "CB",
              "floor": 3,
              "display_name": "CB Floor 3 \u2022 Room CB-302"
            },
            {
              "room_id": "CB-303",
              "assigned_count": 70,
              "capacity": 70,
              "type": "classroom",
              "block": "CB",
              "floor": 3,
              "display_name": "CB Floor 3 \u2022 Room CB-303"
            },
            {
              "room_id": "CB-304",
              "assigned_count": 70,
              "capacity": 70,
              "type": "classroom",
              "block": "CB",
              "floor": 3,
              "display_name": "CB Floor 3 \u2022 Room CB-304"
            },
            {
              "room_id": "CB-305",
              "assigned_count": 70,
              "capacity": 70,
              "type": "classroom",
              "block": "CB",
              "floor": 3,
              "display_name": "CB Floor 3 \u2022 Room CB-305"
            },
            {
              "room_id": "CB-306",
              "assigned_count": 49,
              "capacity": 70,
              "type": "classroom",
              "block": "CB",
              "floor": 3,
              "display_name": "CB Floor 3 \u2022 Room CB-306"
            }
          ],
          "rooms_used": 26,
          "invigilators": 26
        }
      ],
      "total_slot_students": 1799,
      "total_rooms_used": 26,
      "total_invigilators": 26
    },
    {
      "slot_id": 3,
      "slot_label": "Slot 3 (Day 2 - Morning 09:00 - 12:00)",
      "courses": [
        {
          "course_code": "PHY1001",
          "course_name": "Engineering Physics",
          "student_count": 941,
          "rooms": [
            {
              "room_id": "CB-101",
              "assigned_count": 70,
              "capacity": 70,
              "type": "classroom",
              "block": "CB",
              "floor": 1,
              "display_name": "CB Floor 1 \u2022 Room CB-101"
            },
            {
              "room_id": "CB-102",
              "assigned_count": 70,
              "capacity": 70,
              "type": "classroom",
              "block": "CB",
              "floor": 1,
              "display_name": "CB Floor 1 \u2022 Room CB-102"
            },
            {
              "room_id": "CB-103",
              "assigned_count": 70,
              "capacity": 70,
              "type": "classroom",
              "block": "CB",
              "floor": 1,
              "display_name": "CB Floor 1 \u2022 Room CB-103"
            },
            {
              "room_id": "CB-104",
              "assigned_count": 70,
              "capacity": 70,
              "type": "classroom",
              "block": "CB",
              "floor": 1,
              "display_name": "CB Floor 1 \u2022 Room CB-104"
            },
            {
              "room_id": "CB-105",
              "assigned_count": 70,
              "capacity": 70,
              "type": "classroom",
              "block": "CB",
              "floor": 1,
              "display_name": "CB Floor 1 \u2022 Room CB-105"
            },
            {
              "room_id": "CB-106",
              "assigned_count": 70,
              "capacity": 70,
              "type": "classroom",
              "block": "CB",
              "floor": 1,
              "display_name": "CB Floor 1 \u2022 Room CB-106"
            },
            {
              "room_id": "CB-107",
              "assigned_count": 70,
              "capacity": 70,
              "type": "classroom",
              "block": "CB",
              "floor": 1,
              "display_name": "CB Floor 1 \u2022 Room CB-107"
            },
            {
              "room_id": "CB-108",
              "assigned_count": 70,
              "capacity": 70,
              "type": "classroom",
              "block": "CB",
              "floor": 1,
              "display_name": "CB Floor 1 \u2022 Room CB-108"
            },
            {
              "room_id": "CB-109",
              "assigned_count": 70,
              "capacity": 70,
              "type": "classroom",
              "block": "CB",
              "floor": 1,
              "display_name": "CB Floor 1 \u2022 Room CB-109"
            },
            {
              "room_id": "CB-110",
              "assigned_count": 70,
              "capacity": 70,
              "type": "classroom",
              "block": "CB",
              "floor": 1,
              "display_name": "CB Floor 1 \u2022 Room CB-110"
            },
            {
              "room_id": "CB-201",
              "assigned_count": 70,
              "capacity": 70,
              "type": "classroom",
              "block": "CB",
              "floor": 2,
              "display_name": "CB Floor 2 \u2022 Room CB-201"
            },
            {
              "room_id": "CB-202",
              "assigned_count": 70,
              "capacity": 70,
              "type": "classroom",
              "block": "CB",
              "floor": 2,
              "display_name": "CB Floor 2 \u2022 Room CB-202"
            },
            {
              "room_id": "CB-203",
              "assigned_count": 70,
              "capacity": 70,
              "type": "classroom",
              "block": "CB",
              "floor": 2,
              "display_name": "CB Floor 2 \u2022 Room CB-203"
            },
            {
              "room_id": "CB-204",
              "assigned_count": 31,
              "capacity": 70,
              "type": "classroom",
              "block": "CB",
              "floor": 2,
              "display_name": "CB Floor 2 \u2022 Room CB-204"
            }
          ],
          "rooms_used": 14,
          "invigilators": 14
        },
        {
          "course_code": "CHY1001",
          "course_name": "Engineering Chemistry",
          "student_count": 364,
          "rooms": [
            {
              "room_id": "CB-205",
              "assigned_count": 70,
              "capacity": 70,
              "type": "classroom",
              "block": "CB",
              "floor": 2,
              "display_name": "CB Floor 2 \u2022 Room CB-205"
            },
            {
              "room_id": "CB-206",
              "assigned_count": 70,
              "capacity": 70,
              "type": "classroom",
              "block": "CB",
              "floor": 2,
              "display_name": "CB Floor 2 \u2022 Room CB-206"
            },
            {
              "room_id": "CB-207",
              "assigned_count": 70,
              "capacity": 70,
              "type": "classroom",
              "block": "CB",
              "floor": 2,
              "display_name": "CB Floor 2 \u2022 Room CB-207"
            },
            {
              "room_id": "CB-208",
              "assigned_count": 70,
              "capacity": 70,
              "type": "classroom",
              "block": "CB",
              "floor": 2,
              "display_name": "CB Floor 2 \u2022 Room CB-208"
            },
            {
              "room_id": "CB-209",
              "assigned_count": 70,
              "capacity": 70,
              "type": "classroom",
              "block": "CB",
              "floor": 2,
              "display_name": "CB Floor 2 \u2022 Room CB-209"
            },
            {
              "room_id": "CB-210",
              "assigned_count": 14,
              "capacity": 70,
              "type": "classroom",
              "block": "CB",
              "floor": 2,
              "display_name": "CB Floor 2 \u2022 Room CB-210"
            }
          ],
          "rooms_used": 6,
          "invigilators": 6
        }
      ],
      "total_slot_students": 1305,
      "total_rooms_used": 20,
      "total_invigilators": 20
    },
    {
      "slot_id": 4,
      "slot_label": "Slot 4 (Day 2 - Afternoon 14:00 - 17:00)",
      "courses": [
        {
          "course_code": "CSE1001",
          "course_name": "Problem Solving & Python Programming",
          "student_count": 1106,
          "rooms": [
            {
              "room_id": "CB-101",
              "assigned_count": 70,
              "capacity": 70,
              "type": "classroom",
              "block": "CB",
              "floor": 1,
              "display_name": "CB Floor 1 \u2022 Room CB-101"
            },
            {
              "room_id": "CB-102",
              "assigned_count": 70,
              "capacity": 70,
              "type": "classroom",
              "block": "CB",
              "floor": 1,
              "display_name": "CB Floor 1 \u2022 Room CB-102"
            },
            {
              "room_id": "CB-103",
              "assigned_count": 70,
              "capacity": 70,
              "type": "classroom",
              "block": "CB",
              "floor": 1,
              "display_name": "CB Floor 1 \u2022 Room CB-103"
            },
            {
              "room_id": "CB-104",
              "assigned_count": 70,
              "capacity": 70,
              "type": "classroom",
              "block": "CB",
              "floor": 1,
              "display_name": "CB Floor 1 \u2022 Room CB-104"
            },
            {
              "room_id": "CB-105",
              "assigned_count": 70,
              "capacity": 70,
              "type": "classroom",
              "block": "CB",
              "floor": 1,
              "display_name": "CB Floor 1 \u2022 Room CB-105"
            },
            {
              "room_id": "CB-106",
              "assigned_count": 70,
              "capacity": 70,
              "type": "classroom",
              "block": "CB",
              "floor": 1,
              "display_name": "CB Floor 1 \u2022 Room CB-106"
            },
            {
              "room_id": "CB-107",
              "assigned_count": 70,
              "capacity": 70,
              "type": "classroom",
              "block": "CB",
              "floor": 1,
              "display_name": "CB Floor 1 \u2022 Room CB-107"
            },
            {
              "room_id": "CB-108",
              "assigned_count": 70,
              "capacity": 70,
              "type": "classroom",
              "block": "CB",
              "floor": 1,
              "display_name": "CB Floor 1 \u2022 Room CB-108"
            },
            {
              "room_id": "CB-109",
              "assigned_count": 70,
              "capacity": 70,
              "type": "classroom",
              "block": "CB",
              "floor": 1,
              "display_name": "CB Floor 1 \u2022 Room CB-109"
            },
            {
              "room_id": "CB-110",
              "assigned_count": 70,
              "capacity": 70,
              "type": "classroom",
              "block": "CB",
              "floor": 1,
              "display_name": "CB Floor 1 \u2022 Room CB-110"
            },
            {
              "room_id": "CB-201",
              "assigned_count": 70,
              "capacity": 70,
              "type": "classroom",
              "block": "CB",
              "floor": 2,
              "display_name": "CB Floor 2 \u2022 Room CB-201"
            },
            {
              "room_id": "CB-202",
              "assigned_count": 70,
              "capacity": 70,
              "type": "classroom",
              "block": "CB",
              "floor": 2,
              "display_name": "CB Floor 2 \u2022 Room CB-202"
            },
            {
              "room_id": "CB-203",
              "assigned_count": 70,
              "capacity": 70,
              "type": "classroom",
              "block": "CB",
              "floor": 2,
              "display_name": "CB Floor 2 \u2022 Room CB-203"
            },
            {
              "room_id": "CB-204",
              "assigned_count": 70,
              "capacity": 70,
              "type": "classroom",
              "block": "CB",
              "floor": 2,
              "display_name": "CB Floor 2 \u2022 Room CB-204"
            },
            {
              "room_id": "CB-205",
              "assigned_count": 70,
              "capacity": 70,
              "type": "classroom",
              "block": "CB",
              "floor": 2,
              "display_name": "CB Floor 2 \u2022 Room CB-205"
            },
            {
              "room_id": "CB-206",
              "assigned_count": 56,
              "capacity": 70,
              "type": "classroom",
              "block": "CB",
              "floor": 2,
              "display_name": "CB Floor 2 \u2022 Room CB-206"
            }
          ],
          "rooms_used": 16,
          "invigilators": 16
        },
        {
          "course_code": "MEC4001",
          "course_name": "Heat & Mass Transfer",
          "student_count": 342,
          "rooms": [
            {
              "room_id": "CB-207",
              "assigned_count": 70,
              "capacity": 70,
              "type": "classroom",
              "block": "CB",
              "floor": 2,
              "display_name": "CB Floor 2 \u2022 Room CB-207"
            },
            {
              "room_id": "CB-208",
              "assigned_count": 70,
              "capacity": 70,
              "type": "classroom",
              "block": "CB",
              "floor": 2,
              "display_name": "CB Floor 2 \u2022 Room CB-208"
            },
            {
              "room_id": "CB-209",
              "assigned_count": 70,
              "capacity": 70,
              "type": "classroom",
              "block": "CB",
              "floor": 2,
              "display_name": "CB Floor 2 \u2022 Room CB-209"
            },
            {
              "room_id": "CB-210",
              "assigned_count": 70,
              "capacity": 70,
              "type": "classroom",
              "block": "CB",
              "floor": 2,
              "display_name": "CB Floor 2 \u2022 Room CB-210"
            },
            {
              "room_id": "CB-301",
              "assigned_count": 62,
              "capacity": 70,
              "type": "classroom",
              "block": "CB",
              "floor": 3,
              "display_name": "CB Floor 3 \u2022 Room CB-301"
            }
          ],
          "rooms_used": 5,
          "invigilators": 5
        },
        {
          "course_code": "EEE3001",
          "course_name": "Power Electronics & Converters",
          "student_count": 327,
          "rooms": [
            {
              "room_id": "CB-302",
              "assigned_count": 70,
              "capacity": 70,
              "type": "classroom",
              "block": "CB",
              "floor": 3,
              "display_name": "CB Floor 3 \u2022 Room CB-302"
            },
            {
              "room_id": "CB-303",
              "assigned_count": 70,
              "capacity": 70,
              "type": "classroom",
              "block": "CB",
              "floor": 3,
              "display_name": "CB Floor 3 \u2022 Room CB-303"
            },
            {
              "room_id": "CB-304",
              "assigned_count": 70,
              "capacity": 70,
              "type": "classroom",
              "block": "CB",
              "floor": 3,
              "display_name": "CB Floor 3 \u2022 Room CB-304"
            },
            {
              "room_id": "CB-305",
              "assigned_count": 70,
              "capacity": 70,
              "type": "classroom",
              "block": "CB",
              "floor": 3,
              "display_name": "CB Floor 3 \u2022 Room CB-305"
            },
            {
              "room_id": "CB-306",
              "assigned_count": 47,
              "capacity": 70,
              "type": "classroom",
              "block": "CB",
              "floor": 3,
              "display_name": "CB Floor 3 \u2022 Room CB-306"
            }
          ],
          "rooms_used": 5,
          "invigilators": 5
        },
        {
          "course_code": "CIV2002",
          "course_name": "Surveying & Geomatics Engineering",
          "student_count": 281,
          "rooms": [
            {
              "room_id": "CB-307",
              "assigned_count": 70,
              "capacity": 70,
              "type": "classroom",
              "block": "CB",
              "floor": 3,
              "display_name": "CB Floor 3 \u2022 Room CB-307"
            },
            {
              "room_id": "CB-308",
              "assigned_count": 70,
              "capacity": 70,
              "type": "classroom",
              "block": "CB",
              "floor": 3,
              "display_name": "CB Floor 3 \u2022 Room CB-308"
            },
            {
              "room_id": "CB-309",
              "assigned_count": 70,
              "capacity": 70,
              "type": "classroom",
              "block": "CB",
              "floor": 3,
              "display_name": "CB Floor 3 \u2022 Room CB-309"
            },
            {
              "room_id": "CB-310",
              "assigned_count": 70,
              "capacity": 70,
              "type": "classroom",
              "block": "CB",
              "floor": 3,
              "display_name": "CB Floor 3 \u2022 Room CB-310"
            },
            {
              "room_id": "CB-401",
              "assigned_count": 1,
              "capacity": 70,
              "type": "classroom",
              "block": "CB",
              "floor": 4,
              "display_name": "CB Floor 4 \u2022 Room CB-401"
            }
          ],
          "rooms_used": 5,
          "invigilators": 5
        },
        {
          "course_code": "CHM3001",
          "course_name": "Fluid Flow & Heat Transfer Operations",
          "student_count": 169,
          "rooms": [
            {
              "room_id": "CB-402",
              "assigned_count": 70,
              "capacity": 70,
              "type": "classroom",
              "block": "CB",
              "floor": 4,
              "display_name": "CB Floor 4 \u2022 Room CB-402"
            },
            {
              "room_id": "CB-403",
              "assigned_count": 70,
              "capacity": 70,
              "type": "classroom",
              "block": "CB",
              "floor": 4,
              "display_name": "CB Floor 4 \u2022 Room CB-403"
            },
            {
              "room_id": "CB-404",
              "assigned_count": 29,
              "capacity": 70,
              "type": "classroom",
              "block": "CB",
              "floor": 4,
              "display_name": "CB Floor 4 \u2022 Room CB-404"
            }
          ],
          "rooms_used": 3,
          "invigilators": 3
        }
      ],
      "total_slot_students": 2225,
      "total_rooms_used": 34,
      "total_invigilators": 34
    },
    {
      "slot_id": 5,
      "slot_label": "Slot 5 (Day 3 - Morning 09:00 - 12:00)",
      "courses": [
        {
          "course_code": "ENV1001",
          "course_name": "Environmental Science & Sustainability",
          "student_count": 579,
          "rooms": [
            {
              "room_id": "CB-101",
              "assigned_count": 70,
              "capacity": 70,
              "type": "classroom",
              "block": "CB",
              "floor": 1,
              "display_name": "CB Floor 1 \u2022 Room CB-101"
            },
            {
              "room_id": "CB-102",
              "assigned_count": 70,
              "capacity": 70,
              "type": "classroom",
              "block": "CB",
              "floor": 1,
              "display_name": "CB Floor 1 \u2022 Room CB-102"
            },
            {
              "room_id": "CB-103",
              "assigned_count": 70,
              "capacity": 70,
              "type": "classroom",
              "block": "CB",
              "floor": 1,
              "display_name": "CB Floor 1 \u2022 Room CB-103"
            },
            {
              "room_id": "CB-104",
              "assigned_count": 70,
              "capacity": 70,
              "type": "classroom",
              "block": "CB",
              "floor": 1,
              "display_name": "CB Floor 1 \u2022 Room CB-104"
            },
            {
              "room_id": "CB-105",
              "assigned_count": 70,
              "capacity": 70,
              "type": "classroom",
              "block": "CB",
              "floor": 1,
              "display_name": "CB Floor 1 \u2022 Room CB-105"
            },
            {
              "room_id": "CB-106",
              "assigned_count": 70,
              "capacity": 70,
              "type": "classroom",
              "block": "CB",
              "floor": 1,
              "display_name": "CB Floor 1 \u2022 Room CB-106"
            },
            {
              "room_id": "CB-107",
              "assigned_count": 70,
              "capacity": 70,
              "type": "classroom",
              "block": "CB",
              "floor": 1,
              "display_name": "CB Floor 1 \u2022 Room CB-107"
            },
            {
              "room_id": "CB-108",
              "assigned_count": 70,
              "capacity": 70,
              "type": "classroom",
              "block": "CB",
              "floor": 1,
              "display_name": "CB Floor 1 \u2022 Room CB-108"
            },
            {
              "room_id": "CB-109",
              "assigned_count": 19,
              "capacity": 70,
              "type": "classroom",
              "block": "CB",
              "floor": 1,
              "display_name": "CB Floor 1 \u2022 Room CB-109"
            }
          ],
          "rooms_used": 9,
          "invigilators": 9
        },
        {
          "course_code": "CSE2001",
          "course_name": "Data Structures & Algorithms",
          "student_count": 460,
          "rooms": [
            {
              "room_id": "CB-110",
              "assigned_count": 70,
              "capacity": 70,
              "type": "classroom",
              "block": "CB",
              "floor": 1,
              "display_name": "CB Floor 1 \u2022 Room CB-110"
            },
            {
              "room_id": "CB-201",
              "assigned_count": 70,
              "capacity": 70,
              "type": "classroom",
              "block": "CB",
              "floor": 2,
              "display_name": "CB Floor 2 \u2022 Room CB-201"
            },
            {
              "room_id": "CB-202",
              "assigned_count": 70,
              "capacity": 70,
              "type": "classroom",
              "block": "CB",
              "floor": 2,
              "display_name": "CB Floor 2 \u2022 Room CB-202"
            },
            {
              "room_id": "CB-203",
              "assigned_count": 70,
              "capacity": 70,
              "type": "classroom",
              "block": "CB",
              "floor": 2,
              "display_name": "CB Floor 2 \u2022 Room CB-203"
            },
            {
              "room_id": "CB-204",
              "assigned_count": 70,
              "capacity": 70,
              "type": "classroom",
              "block": "CB",
              "floor": 2,
              "display_name": "CB Floor 2 \u2022 Room CB-204"
            },
            {
              "room_id": "CB-205",
              "assigned_count": 70,
              "capacity": 70,
              "type": "classroom",
              "block": "CB",
              "floor": 2,
              "display_name": "CB Floor 2 \u2022 Room CB-205"
            },
            {
              "room_id": "CB-206",
              "assigned_count": 40,
              "capacity": 70,
              "type": "classroom",
              "block": "CB",
              "floor": 2,
              "display_name": "CB Floor 2 \u2022 Room CB-206"
            }
          ],
          "rooms_used": 7,
          "invigilators": 7
        },
        {
          "course_code": "ECE3002",
          "course_name": "VLSI Design & System-on-Chip",
          "student_count": 357,
          "rooms": [
            {
              "room_id": "CB-207",
              "assigned_count": 70,
              "capacity": 70,
              "type": "classroom",
              "block": "CB",
              "floor": 2,
              "display_name": "CB Floor 2 \u2022 Room CB-207"
            },
            {
              "room_id": "CB-208",
              "assigned_count": 70,
              "capacity": 70,
              "type": "classroom",
              "block": "CB",
              "floor": 2,
              "display_name": "CB Floor 2 \u2022 Room CB-208"
            },
            {
              "room_id": "CB-209",
              "assigned_count": 70,
              "capacity": 70,
              "type": "classroom",
              "block": "CB",
              "floor": 2,
              "display_name": "CB Floor 2 \u2022 Room CB-209"
            },
            {
              "room_id": "CB-210",
              "assigned_count": 70,
              "capacity": 70,
              "type": "classroom",
              "block": "CB",
              "floor": 2,
              "display_name": "CB Floor 2 \u2022 Room CB-210"
            },
            {
              "room_id": "CB-301",
              "assigned_count": 70,
              "capacity": 70,
              "type": "classroom",
              "block": "CB",
              "floor": 3,
              "display_name": "CB Floor 3 \u2022 Room CB-301"
            },
            {
              "room_id": "CB-302",
              "assigned_count": 7,
              "capacity": 70,
              "type": "classroom",
              "block": "CB",
              "floor": 3,
              "display_name": "CB Floor 3 \u2022 Room CB-302"
            }
          ],
          "rooms_used": 6,
          "invigilators": 6
        },
        {
          "course_code": "AID3002",
          "course_name": "Deep Learning & Neural Networks",
          "student_count": 312,
          "rooms": [
            {
              "room_id": "CB-303",
              "assigned_count": 70,
              "capacity": 70,
              "type": "classroom",
              "block": "CB",
              "floor": 3,
              "display_name": "CB Floor 3 \u2022 Room CB-303"
            },
            {
              "room_id": "CB-304",
              "assigned_count": 70,
              "capacity": 70,
              "type": "classroom",
              "block": "CB",
              "floor": 3,
              "display_name": "CB Floor 3 \u2022 Room CB-304"
            },
            {
              "room_id": "CB-305",
              "assigned_count": 70,
              "capacity": 70,
              "type": "classroom",
              "block": "CB",
              "floor": 3,
              "display_name": "CB Floor 3 \u2022 Room CB-305"
            },
            {
              "room_id": "CB-306",
              "assigned_count": 70,
              "capacity": 70,
              "type": "classroom",
              "block": "CB",
              "floor": 3,
              "display_name": "CB Floor 3 \u2022 Room CB-306"
            },
            {
              "room_id": "CB-307",
              "assigned_count": 32,
              "capacity": 70,
              "type": "classroom",
              "block": "CB",
              "floor": 3,
              "display_name": "CB Floor 3 \u2022 Room CB-307"
            }
          ],
          "rooms_used": 5,
          "invigilators": 5
        }
      ],
      "total_slot_students": 1708,
      "total_rooms_used": 27,
      "total_invigilators": 27
    },
    {
      "slot_id": 6,
      "slot_label": "Slot 6 (Day 3 - Afternoon 14:00 - 17:00)",
      "courses": [
        {
          "course_code": "EEE1001",
          "course_name": "Basic Electrical & Electronics Engineering",
          "student_count": 745,
          "rooms": [
            {
              "room_id": "CB-101",
              "assigned_count": 70,
              "capacity": 70,
              "type": "classroom",
              "block": "CB",
              "floor": 1,
              "display_name": "CB Floor 1 \u2022 Room CB-101"
            },
            {
              "room_id": "CB-102",
              "assigned_count": 70,
              "capacity": 70,
              "type": "classroom",
              "block": "CB",
              "floor": 1,
              "display_name": "CB Floor 1 \u2022 Room CB-102"
            },
            {
              "room_id": "CB-103",
              "assigned_count": 70,
              "capacity": 70,
              "type": "classroom",
              "block": "CB",
              "floor": 1,
              "display_name": "CB Floor 1 \u2022 Room CB-103"
            },
            {
              "room_id": "CB-104",
              "assigned_count": 70,
              "capacity": 70,
              "type": "classroom",
              "block": "CB",
              "floor": 1,
              "display_name": "CB Floor 1 \u2022 Room CB-104"
            },
            {
              "room_id": "CB-105",
              "assigned_count": 70,
              "capacity": 70,
              "type": "classroom",
              "block": "CB",
              "floor": 1,
              "display_name": "CB Floor 1 \u2022 Room CB-105"
            },
            {
              "room_id": "CB-106",
              "assigned_count": 70,
              "capacity": 70,
              "type": "classroom",
              "block": "CB",
              "floor": 1,
              "display_name": "CB Floor 1 \u2022 Room CB-106"
            },
            {
              "room_id": "CB-107",
              "assigned_count": 70,
              "capacity": 70,
              "type": "classroom",
              "block": "CB",
              "floor": 1,
              "display_name": "CB Floor 1 \u2022 Room CB-107"
            },
            {
              "room_id": "CB-108",
              "assigned_count": 70,
              "capacity": 70,
              "type": "classroom",
              "block": "CB",
              "floor": 1,
              "display_name": "CB Floor 1 \u2022 Room CB-108"
            },
            {
              "room_id": "CB-109",
              "assigned_count": 70,
              "capacity": 70,
              "type": "classroom",
              "block": "CB",
              "floor": 1,
              "display_name": "CB Floor 1 \u2022 Room CB-109"
            },
            {
              "room_id": "CB-110",
              "assigned_count": 70,
              "capacity": 70,
              "type": "classroom",
              "block": "CB",
              "floor": 1,
              "display_name": "CB Floor 1 \u2022 Room CB-110"
            },
            {
              "room_id": "CB-201",
              "assigned_count": 45,
              "capacity": 70,
              "type": "classroom",
              "block": "CB",
              "floor": 2,
              "display_name": "CB Floor 2 \u2022 Room CB-201"
            }
          ],
          "rooms_used": 11,
          "invigilators": 11
        },
        {
          "course_code": "ENG1001",
          "course_name": "Technical English & Communication",
          "student_count": 468,
          "rooms": [
            {
              "room_id": "CB-202",
              "assigned_count": 70,
              "capacity": 70,
              "type": "classroom",
              "block": "CB",
              "floor": 2,
              "display_name": "CB Floor 2 \u2022 Room CB-202"
            },
            {
              "room_id": "CB-203",
              "assigned_count": 70,
              "capacity": 70,
              "type": "classroom",
              "block": "CB",
              "floor": 2,
              "display_name": "CB Floor 2 \u2022 Room CB-203"
            },
            {
              "room_id": "CB-204",
              "assigned_count": 70,
              "capacity": 70,
              "type": "classroom",
              "block": "CB",
              "floor": 2,
              "display_name": "CB Floor 2 \u2022 Room CB-204"
            },
            {
              "room_id": "CB-205",
              "assigned_count": 70,
              "capacity": 70,
              "type": "classroom",
              "block": "CB",
              "floor": 2,
              "display_name": "CB Floor 2 \u2022 Room CB-205"
            },
            {
              "room_id": "CB-206",
              "assigned_count": 70,
              "capacity": 70,
              "type": "classroom",
              "block": "CB",
              "floor": 2,
              "display_name": "CB Floor 2 \u2022 Room CB-206"
            },
            {
              "room_id": "CB-207",
              "assigned_count": 70,
              "capacity": 70,
              "type": "classroom",
              "block": "CB",
              "floor": 2,
              "display_name": "CB Floor 2 \u2022 Room CB-207"
            },
            {
              "room_id": "CB-208",
              "assigned_count": 48,
              "capacity": 70,
              "type": "classroom",
              "block": "CB",
              "floor": 2,
              "display_name": "CB Floor 2 \u2022 Room CB-208"
            }
          ],
          "rooms_used": 7,
          "invigilators": 7
        },
        {
          "course_code": "ITE2001",
          "course_name": "Web Application Development",
          "student_count": 327,
          "rooms": [
            {
              "room_id": "CB-209",
              "assigned_count": 70,
              "capacity": 70,
              "type": "classroom",
              "block": "CB",
              "floor": 2,
              "display_name": "CB Floor 2 \u2022 Room CB-209"
            },
            {
              "room_id": "CB-210",
              "assigned_count": 70,
              "capacity": 70,
              "type": "classroom",
              "block": "CB",
              "floor": 2,
              "display_name": "CB Floor 2 \u2022 Room CB-210"
            },
            {
              "room_id": "CB-301",
              "assigned_count": 70,
              "capacity": 70,
              "type": "classroom",
              "block": "CB",
              "floor": 3,
              "display_name": "CB Floor 3 \u2022 Room CB-301"
            },
            {
              "room_id": "CB-302",
              "assigned_count": 70,
              "capacity": 70,
              "type": "classroom",
              "block": "CB",
              "floor": 3,
              "display_name": "CB Floor 3 \u2022 Room CB-302"
            },
            {
              "room_id": "CB-303",
              "assigned_count": 47,
              "capacity": 70,
              "type": "classroom",
              "block": "CB",
              "floor": 3,
              "display_name": "CB Floor 3 \u2022 Room CB-303"
            }
          ],
          "rooms_used": 5,
          "invigilators": 5
        }
      ],
      "total_slot_students": 1540,
      "total_rooms_used": 23,
      "total_invigilators": 23
    },
    {
      "slot_id": 7,
      "slot_label": "Slot 7 (Day 4 - Morning 09:00 - 12:00)",
      "courses": [
        {
          "course_code": "CSE2002",
          "course_name": "Object Oriented Programming in Java",
          "student_count": 440,
          "rooms": [
            {
              "room_id": "CB-101",
              "assigned_count": 70,
              "capacity": 70,
              "type": "classroom",
              "block": "CB",
              "floor": 1,
              "display_name": "CB Floor 1 \u2022 Room CB-101"
            },
            {
              "room_id": "CB-102",
              "assigned_count": 70,
              "capacity": 70,
              "type": "classroom",
              "block": "CB",
              "floor": 1,
              "display_name": "CB Floor 1 \u2022 Room CB-102"
            },
            {
              "room_id": "CB-103",
              "assigned_count": 70,
              "capacity": 70,
              "type": "classroom",
              "block": "CB",
              "floor": 1,
              "display_name": "CB Floor 1 \u2022 Room CB-103"
            },
            {
              "room_id": "CB-104",
              "assigned_count": 70,
              "capacity": 70,
              "type": "classroom",
              "block": "CB",
              "floor": 1,
              "display_name": "CB Floor 1 \u2022 Room CB-104"
            },
            {
              "room_id": "CB-105",
              "assigned_count": 70,
              "capacity": 70,
              "type": "classroom",
              "block": "CB",
              "floor": 1,
              "display_name": "CB Floor 1 \u2022 Room CB-105"
            },
            {
              "room_id": "CB-106",
              "assigned_count": 70,
              "capacity": 70,
              "type": "classroom",
              "block": "CB",
              "floor": 1,
              "display_name": "CB Floor 1 \u2022 Room CB-106"
            },
            {
              "room_id": "CB-107",
              "assigned_count": 20,
              "capacity": 70,
              "type": "classroom",
              "block": "CB",
              "floor": 1,
              "display_name": "CB Floor 1 \u2022 Room CB-107"
            }
          ],
          "rooms_used": 7,
          "invigilators": 7
        },
        {
          "course_code": "ITE3001",
          "course_name": "Cloud Computing & Virtualization",
          "student_count": 414,
          "rooms": [
            {
              "room_id": "CB-108",
              "assigned_count": 70,
              "capacity": 70,
              "type": "classroom",
              "block": "CB",
              "floor": 1,
              "display_name": "CB Floor 1 \u2022 Room CB-108"
            },
            {
              "room_id": "CB-109",
              "assigned_count": 70,
              "capacity": 70,
              "type": "classroom",
              "block": "CB",
              "floor": 1,
              "display_name": "CB Floor 1 \u2022 Room CB-109"
            },
            {
              "room_id": "CB-110",
              "assigned_count": 70,
              "capacity": 70,
              "type": "classroom",
              "block": "CB",
              "floor": 1,
              "display_name": "CB Floor 1 \u2022 Room CB-110"
            },
            {
              "room_id": "CB-201",
              "assigned_count": 70,
              "capacity": 70,
              "type": "classroom",
              "block": "CB",
              "floor": 2,
              "display_name": "CB Floor 2 \u2022 Room CB-201"
            },
            {
              "room_id": "CB-202",
              "assigned_count": 70,
              "capacity": 70,
              "type": "classroom",
              "block": "CB",
              "floor": 2,
              "display_name": "CB Floor 2 \u2022 Room CB-202"
            },
            {
              "room_id": "CB-203",
              "assigned_count": 64,
              "capacity": 70,
              "type": "classroom",
              "block": "CB",
              "floor": 2,
              "display_name": "CB Floor 2 \u2022 Room CB-203"
            }
          ],
          "rooms_used": 6,
          "invigilators": 6
        },
        {
          "course_code": "MEC3002",
          "course_name": "Manufacturing Processes & CNC Machining",
          "student_count": 392,
          "rooms": [
            {
              "room_id": "CB-204",
              "assigned_count": 70,
              "capacity": 70,
              "type": "classroom",
              "block": "CB",
              "floor": 2,
              "display_name": "CB Floor 2 \u2022 Room CB-204"
            },
            {
              "room_id": "CB-205",
              "assigned_count": 70,
              "capacity": 70,
              "type": "classroom",
              "block": "CB",
              "floor": 2,
              "display_name": "CB Floor 2 \u2022 Room CB-205"
            },
            {
              "room_id": "CB-206",
              "assigned_count": 70,
              "capacity": 70,
              "type": "classroom",
              "block": "CB",
              "floor": 2,
              "display_name": "CB Floor 2 \u2022 Room CB-206"
            },
            {
              "room_id": "CB-207",
              "assigned_count": 70,
              "capacity": 70,
              "type": "classroom",
              "block": "CB",
              "floor": 2,
              "display_name": "CB Floor 2 \u2022 Room CB-207"
            },
            {
              "room_id": "CB-208",
              "assigned_count": 70,
              "capacity": 70,
              "type": "classroom",
              "block": "CB",
              "floor": 2,
              "display_name": "CB Floor 2 \u2022 Room CB-208"
            },
            {
              "room_id": "CB-209",
              "assigned_count": 42,
              "capacity": 70,
              "type": "classroom",
              "block": "CB",
              "floor": 2,
              "display_name": "CB Floor 2 \u2022 Room CB-209"
            }
          ],
          "rooms_used": 6,
          "invigilators": 6
        },
        {
          "course_code": "AID3001",
          "course_name": "Machine Learning & Predictive Modeling",
          "student_count": 372,
          "rooms": [
            {
              "room_id": "CB-210",
              "assigned_count": 70,
              "capacity": 70,
              "type": "classroom",
              "block": "CB",
              "floor": 2,
              "display_name": "CB Floor 2 \u2022 Room CB-210"
            },
            {
              "room_id": "CB-301",
              "assigned_count": 70,
              "capacity": 70,
              "type": "classroom",
              "block": "CB",
              "floor": 3,
              "display_name": "CB Floor 3 \u2022 Room CB-301"
            },
            {
              "room_id": "CB-302",
              "assigned_count": 70,
              "capacity": 70,
              "type": "classroom",
              "block": "CB",
              "floor": 3,
              "display_name": "CB Floor 3 \u2022 Room CB-302"
            },
            {
              "room_id": "CB-303",
              "assigned_count": 70,
              "capacity": 70,
              "type": "classroom",
              "block": "CB",
              "floor": 3,
              "display_name": "CB Floor 3 \u2022 Room CB-303"
            },
            {
              "room_id": "CB-304",
              "assigned_count": 70,
              "capacity": 70,
              "type": "classroom",
              "block": "CB",
              "floor": 3,
              "display_name": "CB Floor 3 \u2022 Room CB-304"
            },
            {
              "room_id": "CB-305",
              "assigned_count": 22,
              "capacity": 70,
              "type": "classroom",
              "block": "CB",
              "floor": 3,
              "display_name": "CB Floor 3 \u2022 Room CB-305"
            }
          ],
          "rooms_used": 6,
          "invigilators": 6
        },
        {
          "course_code": "ECE4001",
          "course_name": "Wireless & Cellular Communications",
          "student_count": 319,
          "rooms": [
            {
              "room_id": "CB-306",
              "assigned_count": 70,
              "capacity": 70,
              "type": "classroom",
              "block": "CB",
              "floor": 3,
              "display_name": "CB Floor 3 \u2022 Room CB-306"
            },
            {
              "room_id": "CB-307",
              "assigned_count": 70,
              "capacity": 70,
              "type": "classroom",
              "block": "CB",
              "floor": 3,
              "display_name": "CB Floor 3 \u2022 Room CB-307"
            },
            {
              "room_id": "CB-308",
              "assigned_count": 70,
              "capacity": 70,
              "type": "classroom",
              "block": "CB",
              "floor": 3,
              "display_name": "CB Floor 3 \u2022 Room CB-308"
            },
            {
              "room_id": "CB-309",
              "assigned_count": 70,
              "capacity": 70,
              "type": "classroom",
              "block": "CB",
              "floor": 3,
              "display_name": "CB Floor 3 \u2022 Room CB-309"
            },
            {
              "room_id": "CB-310",
              "assigned_count": 39,
              "capacity": 70,
              "type": "classroom",
              "block": "CB",
              "floor": 3,
              "display_name": "CB Floor 3 \u2022 Room CB-310"
            }
          ],
          "rooms_used": 5,
          "invigilators": 5
        },
        {
          "course_code": "EEE3002",
          "course_name": "Control Systems Engineering",
          "student_count": 302,
          "rooms": [
            {
              "room_id": "CB-401",
              "assigned_count": 70,
              "capacity": 70,
              "type": "classroom",
              "block": "CB",
              "floor": 4,
              "display_name": "CB Floor 4 \u2022 Room CB-401"
            },
            {
              "room_id": "CB-402",
              "assigned_count": 70,
              "capacity": 70,
              "type": "classroom",
              "block": "CB",
              "floor": 4,
              "display_name": "CB Floor 4 \u2022 Room CB-402"
            },
            {
              "room_id": "CB-403",
              "assigned_count": 70,
              "capacity": 70,
              "type": "classroom",
              "block": "CB",
              "floor": 4,
              "display_name": "CB Floor 4 \u2022 Room CB-403"
            },
            {
              "room_id": "CB-404",
              "assigned_count": 70,
              "capacity": 70,
              "type": "classroom",
              "block": "CB",
              "floor": 4,
              "display_name": "CB Floor 4 \u2022 Room CB-404"
            },
            {
              "room_id": "CB-405",
              "assigned_count": 22,
              "capacity": 70,
              "type": "classroom",
              "block": "CB",
              "floor": 4,
              "display_name": "CB Floor 4 \u2022 Room CB-405"
            }
          ],
          "rooms_used": 5,
          "invigilators": 5
        },
        {
          "course_code": "CIV4001",
          "course_name": "Geotechnical Engineering & Foundation Design",
          "student_count": 215,
          "rooms": [
            {
              "room_id": "CB-406",
              "assigned_count": 70,
              "capacity": 70,
              "type": "classroom",
              "block": "CB",
              "floor": 4,
              "display_name": "CB Floor 4 \u2022 Room CB-406"
            },
            {
              "room_id": "CB-407",
              "assigned_count": 70,
              "capacity": 70,
              "type": "classroom",
              "block": "CB",
              "floor": 4,
              "display_name": "CB Floor 4 \u2022 Room CB-407"
            },
            {
              "room_id": "CB-408",
              "assigned_count": 70,
              "capacity": 70,
              "type": "classroom",
              "block": "CB",
              "floor": 4,
              "display_name": "CB Floor 4 \u2022 Room CB-408"
            },
            {
              "room_id": "CB-409",
              "assigned_count": 5,
              "capacity": 70,
              "type": "classroom",
              "block": "CB",
              "floor": 4,
              "display_name": "CB Floor 4 \u2022 Room CB-409"
            }
          ],
          "rooms_used": 4,
          "invigilators": 4
        },
        {
          "course_code": "CHM3002",
          "course_name": "Mass Transfer Operations & Separation",
          "student_count": 172,
          "rooms": [
            {
              "room_id": "CB-410",
              "assigned_count": 70,
              "capacity": 70,
              "type": "classroom",
              "block": "CB",
              "floor": 4,
              "display_name": "CB Floor 4 \u2022 Room CB-410"
            },
            {
              "room_id": "CB-501",
              "assigned_count": 70,
              "capacity": 70,
              "type": "classroom",
              "block": "CB",
              "floor": 5,
              "display_name": "CB Floor 5 \u2022 Room CB-501"
            },
            {
              "room_id": "CB-502",
              "assigned_count": 32,
              "capacity": 70,
              "type": "classroom",
              "block": "CB",
              "floor": 5,
              "display_name": "CB Floor 5 \u2022 Room CB-502"
            }
          ],
          "rooms_used": 3,
          "invigilators": 3
        }
      ],
      "total_slot_students": 2626,
      "total_rooms_used": 42,
      "total_invigilators": 42
    },
    {
      "slot_id": 8,
      "slot_label": "Slot 8 (Day 4 - Afternoon 14:00 - 17:00)",
      "courses": [
        {
          "course_code": "MEC3001",
          "course_name": "Fluid Mechanics & Turbo Machinery",
          "student_count": 386,
          "rooms": [
            {
              "room_id": "CB-101",
              "assigned_count": 70,
              "capacity": 70,
              "type": "classroom",
              "block": "CB",
              "floor": 1,
              "display_name": "CB Floor 1 \u2022 Room CB-101"
            },
            {
              "room_id": "CB-102",
              "assigned_count": 70,
              "capacity": 70,
              "type": "classroom",
              "block": "CB",
              "floor": 1,
              "display_name": "CB Floor 1 \u2022 Room CB-102"
            },
            {
              "room_id": "CB-103",
              "assigned_count": 70,
              "capacity": 70,
              "type": "classroom",
              "block": "CB",
              "floor": 1,
              "display_name": "CB Floor 1 \u2022 Room CB-103"
            },
            {
              "room_id": "CB-104",
              "assigned_count": 70,
              "capacity": 70,
              "type": "classroom",
              "block": "CB",
              "floor": 1,
              "display_name": "CB Floor 1 \u2022 Room CB-104"
            },
            {
              "room_id": "CB-105",
              "assigned_count": 70,
              "capacity": 70,
              "type": "classroom",
              "block": "CB",
              "floor": 1,
              "display_name": "CB Floor 1 \u2022 Room CB-105"
            },
            {
              "room_id": "CB-106",
              "assigned_count": 36,
              "capacity": 70,
              "type": "classroom",
              "block": "CB",
              "floor": 1,
              "display_name": "CB Floor 1 \u2022 Room CB-106"
            }
          ],
          "rooms_used": 6,
          "invigilators": 6
        },
        {
          "course_code": "ITE3002",
          "course_name": "Information Security & Cryptography",
          "student_count": 358,
          "rooms": [
            {
              "room_id": "CB-107",
              "assigned_count": 70,
              "capacity": 70,
              "type": "classroom",
              "block": "CB",
              "floor": 1,
              "display_name": "CB Floor 1 \u2022 Room CB-107"
            },
            {
              "room_id": "CB-108",
              "assigned_count": 70,
              "capacity": 70,
              "type": "classroom",
              "block": "CB",
              "floor": 1,
              "display_name": "CB Floor 1 \u2022 Room CB-108"
            },
            {
              "room_id": "CB-109",
              "assigned_count": 70,
              "capacity": 70,
              "type": "classroom",
              "block": "CB",
              "floor": 1,
              "display_name": "CB Floor 1 \u2022 Room CB-109"
            },
            {
              "room_id": "CB-110",
              "assigned_count": 70,
              "capacity": 70,
              "type": "classroom",
              "block": "CB",
              "floor": 1,
              "display_name": "CB Floor 1 \u2022 Room CB-110"
            },
            {
              "room_id": "CB-201",
              "assigned_count": 70,
              "capacity": 70,
              "type": "classroom",
              "block": "CB",
              "floor": 2,
              "display_name": "CB Floor 2 \u2022 Room CB-201"
            },
            {
              "room_id": "CB-202",
              "assigned_count": 8,
              "capacity": 70,
              "type": "classroom",
              "block": "CB",
              "floor": 2,
              "display_name": "CB Floor 2 \u2022 Room CB-202"
            }
          ],
          "rooms_used": 6,
          "invigilators": 6
        },
        {
          "course_code": "CSE4001",
          "course_name": "Computer Networks & Protocols",
          "student_count": 353,
          "rooms": [
            {
              "room_id": "CB-203",
              "assigned_count": 70,
              "capacity": 70,
              "type": "classroom",
              "block": "CB",
              "floor": 2,
              "display_name": "CB Floor 2 \u2022 Room CB-203"
            },
            {
              "room_id": "CB-204",
              "assigned_count": 70,
              "capacity": 70,
              "type": "classroom",
              "block": "CB",
              "floor": 2,
              "display_name": "CB Floor 2 \u2022 Room CB-204"
            },
            {
              "room_id": "CB-205",
              "assigned_count": 70,
              "capacity": 70,
              "type": "classroom",
              "block": "CB",
              "floor": 2,
              "display_name": "CB Floor 2 \u2022 Room CB-205"
            },
            {
              "room_id": "CB-206",
              "assigned_count": 70,
              "capacity": 70,
              "type": "classroom",
              "block": "CB",
              "floor": 2,
              "display_name": "CB Floor 2 \u2022 Room CB-206"
            },
            {
              "room_id": "CB-207",
              "assigned_count": 70,
              "capacity": 70,
              "type": "classroom",
              "block": "CB",
              "floor": 2,
              "display_name": "CB Floor 2 \u2022 Room CB-207"
            },
            {
              "room_id": "CB-208",
              "assigned_count": 3,
              "capacity": 70,
              "type": "classroom",
              "block": "CB",
              "floor": 2,
              "display_name": "CB Floor 2 \u2022 Room CB-208"
            }
          ],
          "rooms_used": 6,
          "invigilators": 6
        },
        {
          "course_code": "AID4001",
          "course_name": "Natural Language Processing",
          "student_count": 308,
          "rooms": [
            {
              "room_id": "CB-209",
              "assigned_count": 70,
              "capacity": 70,
              "type": "classroom",
              "block": "CB",
              "floor": 2,
              "display_name": "CB Floor 2 \u2022 Room CB-209"
            },
            {
              "room_id": "CB-210",
              "assigned_count": 70,
              "capacity": 70,
              "type": "classroom",
              "block": "CB",
              "floor": 2,
              "display_name": "CB Floor 2 \u2022 Room CB-210"
            },
            {
              "room_id": "CB-301",
              "assigned_count": 70,
              "capacity": 70,
              "type": "classroom",
              "block": "CB",
              "floor": 3,
              "display_name": "CB Floor 3 \u2022 Room CB-301"
            },
            {
              "room_id": "CB-302",
              "assigned_count": 70,
              "capacity": 70,
              "type": "classroom",
              "block": "CB",
              "floor": 3,
              "display_name": "CB Floor 3 \u2022 Room CB-302"
            },
            {
              "room_id": "CB-303",
              "assigned_count": 28,
              "capacity": 70,
              "type": "classroom",
              "block": "CB",
              "floor": 3,
              "display_name": "CB Floor 3 \u2022 Room CB-303"
            }
          ],
          "rooms_used": 5,
          "invigilators": 5
        },
        {
          "course_code": "EEE2001",
          "course_name": "Electric Circuit Theory & Analysis",
          "student_count": 304,
          "rooms": [
            {
              "room_id": "CB-304",
              "assigned_count": 70,
              "capacity": 70,
              "type": "classroom",
              "block": "CB",
              "floor": 3,
              "display_name": "CB Floor 3 \u2022 Room CB-304"
            },
            {
              "room_id": "CB-305",
              "assigned_count": 70,
              "capacity": 70,
              "type": "classroom",
              "block": "CB",
              "floor": 3,
              "display_name": "CB Floor 3 \u2022 Room CB-305"
            },
            {
              "room_id": "CB-306",
              "assigned_count": 70,
              "capacity": 70,
              "type": "classroom",
              "block": "CB",
              "floor": 3,
              "display_name": "CB Floor 3 \u2022 Room CB-306"
            },
            {
              "room_id": "CB-307",
              "assigned_count": 70,
              "capacity": 70,
              "type": "classroom",
              "block": "CB",
              "floor": 3,
              "display_name": "CB Floor 3 \u2022 Room CB-307"
            },
            {
              "room_id": "CB-308",
              "assigned_count": 24,
              "capacity": 70,
              "type": "classroom",
              "block": "CB",
              "floor": 3,
              "display_name": "CB Floor 3 \u2022 Room CB-308"
            }
          ],
          "rooms_used": 5,
          "invigilators": 5
        },
        {
          "course_code": "ECE3003",
          "course_name": "Microprocessors & Embedded Systems",
          "student_count": 259,
          "rooms": [
            {
              "room_id": "CB-309",
              "assigned_count": 70,
              "capacity": 70,
              "type": "classroom",
              "block": "CB",
              "floor": 3,
              "display_name": "CB Floor 3 \u2022 Room CB-309"
            },
            {
              "room_id": "CB-310",
              "assigned_count": 70,
              "capacity": 70,
              "type": "classroom",
              "block": "CB",
              "floor": 3,
              "display_name": "CB Floor 3 \u2022 Room CB-310"
            },
            {
              "room_id": "CB-401",
              "assigned_count": 70,
              "capacity": 70,
              "type": "classroom",
              "block": "CB",
              "floor": 4,
              "display_name": "CB Floor 4 \u2022 Room CB-401"
            },
            {
              "room_id": "CB-402",
              "assigned_count": 49,
              "capacity": 70,
              "type": "classroom",
              "block": "CB",
              "floor": 4,
              "display_name": "CB Floor 4 \u2022 Room CB-402"
            }
          ],
          "rooms_used": 4,
          "invigilators": 4
        },
        {
          "course_code": "CIV3002",
          "course_name": "Concrete Technology & Construction Management",
          "student_count": 255,
          "rooms": [
            {
              "room_id": "CB-403",
              "assigned_count": 70,
              "capacity": 70,
              "type": "classroom",
              "block": "CB",
              "floor": 4,
              "display_name": "CB Floor 4 \u2022 Room CB-403"
            },
            {
              "room_id": "CB-404",
              "assigned_count": 70,
              "capacity": 70,
              "type": "classroom",
              "block": "CB",
              "floor": 4,
              "display_name": "CB Floor 4 \u2022 Room CB-404"
            },
            {
              "room_id": "CB-405",
              "assigned_count": 70,
              "capacity": 70,
              "type": "classroom",
              "block": "CB",
              "floor": 4,
              "display_name": "CB Floor 4 \u2022 Room CB-405"
            },
            {
              "room_id": "CB-406",
              "assigned_count": 45,
              "capacity": 70,
              "type": "classroom",
              "block": "CB",
              "floor": 4,
              "display_name": "CB Floor 4 \u2022 Room CB-406"
            }
          ],
          "rooms_used": 4,
          "invigilators": 4
        },
        {
          "course_code": "CHM2001",
          "course_name": "Chemical Process Principles & Calculations",
          "student_count": 166,
          "rooms": [
            {
              "room_id": "CB-407",
              "assigned_count": 70,
              "capacity": 70,
              "type": "classroom",
              "block": "CB",
              "floor": 4,
              "display_name": "CB Floor 4 \u2022 Room CB-407"
            },
            {
              "room_id": "CB-408",
              "assigned_count": 70,
              "capacity": 70,
              "type": "classroom",
              "block": "CB",
              "floor": 4,
              "display_name": "CB Floor 4 \u2022 Room CB-408"
            },
            {
              "room_id": "CB-409",
              "assigned_count": 26,
              "capacity": 70,
              "type": "classroom",
              "block": "CB",
              "floor": 4,
              "display_name": "CB Floor 4 \u2022 Room CB-409"
            }
          ],
          "rooms_used": 3,
          "invigilators": 3
        }
      ],
      "total_slot_students": 2389,
      "total_rooms_used": 39,
      "total_invigilators": 39
    },
    {
      "slot_id": 9,
      "slot_label": "Slot 9 (Day 5 - Morning 09:00 - 12:00)",
      "courses": [
        {
          "course_code": "EEE2002",
          "course_name": "Electrical Machines & Transformers",
          "student_count": 379,
          "rooms": [
            {
              "room_id": "CB-101",
              "assigned_count": 70,
              "capacity": 70,
              "type": "classroom",
              "block": "CB",
              "floor": 1,
              "display_name": "CB Floor 1 \u2022 Room CB-101"
            },
            {
              "room_id": "CB-102",
              "assigned_count": 70,
              "capacity": 70,
              "type": "classroom",
              "block": "CB",
              "floor": 1,
              "display_name": "CB Floor 1 \u2022 Room CB-102"
            },
            {
              "room_id": "CB-103",
              "assigned_count": 70,
              "capacity": 70,
              "type": "classroom",
              "block": "CB",
              "floor": 1,
              "display_name": "CB Floor 1 \u2022 Room CB-103"
            },
            {
              "room_id": "CB-104",
              "assigned_count": 70,
              "capacity": 70,
              "type": "classroom",
              "block": "CB",
              "floor": 1,
              "display_name": "CB Floor 1 \u2022 Room CB-104"
            },
            {
              "room_id": "CB-105",
              "assigned_count": 70,
              "capacity": 70,
              "type": "classroom",
              "block": "CB",
              "floor": 1,
              "display_name": "CB Floor 1 \u2022 Room CB-105"
            },
            {
              "room_id": "CB-106",
              "assigned_count": 29,
              "capacity": 70,
              "type": "classroom",
              "block": "CB",
              "floor": 1,
              "display_name": "CB Floor 1 \u2022 Room CB-106"
            }
          ],
          "rooms_used": 6,
          "invigilators": 6
        },
        {
          "course_code": "MEC2001",
          "course_name": "Engineering Mechanics & Statics",
          "student_count": 368,
          "rooms": [
            {
              "room_id": "CB-107",
              "assigned_count": 70,
              "capacity": 70,
              "type": "classroom",
              "block": "CB",
              "floor": 1,
              "display_name": "CB Floor 1 \u2022 Room CB-107"
            },
            {
              "room_id": "CB-108",
              "assigned_count": 70,
              "capacity": 70,
              "type": "classroom",
              "block": "CB",
              "floor": 1,
              "display_name": "CB Floor 1 \u2022 Room CB-108"
            },
            {
              "room_id": "CB-109",
              "assigned_count": 70,
              "capacity": 70,
              "type": "classroom",
              "block": "CB",
              "floor": 1,
              "display_name": "CB Floor 1 \u2022 Room CB-109"
            },
            {
              "room_id": "CB-110",
              "assigned_count": 70,
              "capacity": 70,
              "type": "classroom",
              "block": "CB",
              "floor": 1,
              "display_name": "CB Floor 1 \u2022 Room CB-110"
            },
            {
              "room_id": "CB-201",
              "assigned_count": 70,
              "capacity": 70,
              "type": "classroom",
              "block": "CB",
              "floor": 2,
              "display_name": "CB Floor 2 \u2022 Room CB-201"
            },
            {
              "room_id": "CB-202",
              "assigned_count": 18,
              "capacity": 70,
              "type": "classroom",
              "block": "CB",
              "floor": 2,
              "display_name": "CB Floor 2 \u2022 Room CB-202"
            }
          ],
          "rooms_used": 6,
          "invigilators": 6
        },
        {
          "course_code": "ITE4001",
          "course_name": "Mobile Application Engineering",
          "student_count": 355,
          "rooms": [
            {
              "room_id": "CB-203",
              "assigned_count": 70,
              "capacity": 70,
              "type": "classroom",
              "block": "CB",
              "floor": 2,
              "display_name": "CB Floor 2 \u2022 Room CB-203"
            },
            {
              "room_id": "CB-204",
              "assigned_count": 70,
              "capacity": 70,
              "type": "classroom",
              "block": "CB",
              "floor": 2,
              "display_name": "CB Floor 2 \u2022 Room CB-204"
            },
            {
              "room_id": "CB-205",
              "assigned_count": 70,
              "capacity": 70,
              "type": "classroom",
              "block": "CB",
              "floor": 2,
              "display_name": "CB Floor 2 \u2022 Room CB-205"
            },
            {
              "room_id": "CB-206",
              "assigned_count": 70,
              "capacity": 70,
              "type": "classroom",
              "block": "CB",
              "floor": 2,
              "display_name": "CB Floor 2 \u2022 Room CB-206"
            },
            {
              "room_id": "CB-207",
              "assigned_count": 70,
              "capacity": 70,
              "type": "classroom",
              "block": "CB",
              "floor": 2,
              "display_name": "CB Floor 2 \u2022 Room CB-207"
            },
            {
              "room_id": "CB-208",
              "assigned_count": 5,
              "capacity": 70,
              "type": "classroom",
              "block": "CB",
              "floor": 2,
              "display_name": "CB Floor 2 \u2022 Room CB-208"
            }
          ],
          "rooms_used": 6,
          "invigilators": 6
        },
        {
          "course_code": "CSE4002",
          "course_name": "Theory of Computation",
          "student_count": 334,
          "rooms": [
            {
              "room_id": "CB-209",
              "assigned_count": 70,
              "capacity": 70,
              "type": "classroom",
              "block": "CB",
              "floor": 2,
              "display_name": "CB Floor 2 \u2022 Room CB-209"
            },
            {
              "room_id": "CB-210",
              "assigned_count": 70,
              "capacity": 70,
              "type": "classroom",
              "block": "CB",
              "floor": 2,
              "display_name": "CB Floor 2 \u2022 Room CB-210"
            },
            {
              "room_id": "CB-301",
              "assigned_count": 70,
              "capacity": 70,
              "type": "classroom",
              "block": "CB",
              "floor": 3,
              "display_name": "CB Floor 3 \u2022 Room CB-301"
            },
            {
              "room_id": "CB-302",
              "assigned_count": 70,
              "capacity": 70,
              "type": "classroom",
              "block": "CB",
              "floor": 3,
              "display_name": "CB Floor 3 \u2022 Room CB-302"
            },
            {
              "room_id": "CB-303",
              "assigned_count": 54,
              "capacity": 70,
              "type": "classroom",
              "block": "CB",
              "floor": 3,
              "display_name": "CB Floor 3 \u2022 Room CB-303"
            }
          ],
          "rooms_used": 5,
          "invigilators": 5
        },
        {
          "course_code": "AID2001",
          "course_name": "Artificial Intelligence Foundations",
          "student_count": 313,
          "rooms": [
            {
              "room_id": "CB-304",
              "assigned_count": 70,
              "capacity": 70,
              "type": "classroom",
              "block": "CB",
              "floor": 3,
              "display_name": "CB Floor 3 \u2022 Room CB-304"
            },
            {
              "room_id": "CB-305",
              "assigned_count": 70,
              "capacity": 70,
              "type": "classroom",
              "block": "CB",
              "floor": 3,
              "display_name": "CB Floor 3 \u2022 Room CB-305"
            },
            {
              "room_id": "CB-306",
              "assigned_count": 70,
              "capacity": 70,
              "type": "classroom",
              "block": "CB",
              "floor": 3,
              "display_name": "CB Floor 3 \u2022 Room CB-306"
            },
            {
              "room_id": "CB-307",
              "assigned_count": 70,
              "capacity": 70,
              "type": "classroom",
              "block": "CB",
              "floor": 3,
              "display_name": "CB Floor 3 \u2022 Room CB-307"
            },
            {
              "room_id": "CB-308",
              "assigned_count": 33,
              "capacity": 70,
              "type": "classroom",
              "block": "CB",
              "floor": 3,
              "display_name": "CB Floor 3 \u2022 Room CB-308"
            }
          ],
          "rooms_used": 5,
          "invigilators": 5
        },
        {
          "course_code": "ECE4002",
          "course_name": "Electromagnetic Fields & Wave Propagation",
          "student_count": 282,
          "rooms": [
            {
              "room_id": "CB-309",
              "assigned_count": 70,
              "capacity": 70,
              "type": "classroom",
              "block": "CB",
              "floor": 3,
              "display_name": "CB Floor 3 \u2022 Room CB-309"
            },
            {
              "room_id": "CB-310",
              "assigned_count": 70,
              "capacity": 70,
              "type": "classroom",
              "block": "CB",
              "floor": 3,
              "display_name": "CB Floor 3 \u2022 Room CB-310"
            },
            {
              "room_id": "CB-401",
              "assigned_count": 70,
              "capacity": 70,
              "type": "classroom",
              "block": "CB",
              "floor": 4,
              "display_name": "CB Floor 4 \u2022 Room CB-401"
            },
            {
              "room_id": "CB-402",
              "assigned_count": 70,
              "capacity": 70,
              "type": "classroom",
              "block": "CB",
              "floor": 4,
              "display_name": "CB Floor 4 \u2022 Room CB-402"
            },
            {
              "room_id": "CB-403",
              "assigned_count": 2,
              "capacity": 70,
              "type": "classroom",
              "block": "CB",
              "floor": 4,
              "display_name": "CB Floor 4 \u2022 Room CB-403"
            }
          ],
          "rooms_used": 5,
          "invigilators": 5
        },
        {
          "course_code": "CIV2001",
          "course_name": "Strength of Materials & Solid Mechanics",
          "student_count": 221,
          "rooms": [
            {
              "room_id": "CB-404",
              "assigned_count": 70,
              "capacity": 70,
              "type": "classroom",
              "block": "CB",
              "floor": 4,
              "display_name": "CB Floor 4 \u2022 Room CB-404"
            },
            {
              "room_id": "CB-405",
              "assigned_count": 70,
              "capacity": 70,
              "type": "classroom",
              "block": "CB",
              "floor": 4,
              "display_name": "CB Floor 4 \u2022 Room CB-405"
            },
            {
              "room_id": "CB-406",
              "assigned_count": 70,
              "capacity": 70,
              "type": "classroom",
              "block": "CB",
              "floor": 4,
              "display_name": "CB Floor 4 \u2022 Room CB-406"
            },
            {
              "room_id": "CB-407",
              "assigned_count": 11,
              "capacity": 70,
              "type": "classroom",
              "block": "CB",
              "floor": 4,
              "display_name": "CB Floor 4 \u2022 Room CB-407"
            }
          ],
          "rooms_used": 4,
          "invigilators": 4
        },
        {
          "course_code": "CHM2002",
          "course_name": "Chemical Engineering Thermodynamics",
          "student_count": 190,
          "rooms": [
            {
              "room_id": "CB-408",
              "assigned_count": 70,
              "capacity": 70,
              "type": "classroom",
              "block": "CB",
              "floor": 4,
              "display_name": "CB Floor 4 \u2022 Room CB-408"
            },
            {
              "room_id": "CB-409",
              "assigned_count": 70,
              "capacity": 70,
              "type": "classroom",
              "block": "CB",
              "floor": 4,
              "display_name": "CB Floor 4 \u2022 Room CB-409"
            },
            {
              "room_id": "CB-410",
              "assigned_count": 50,
              "capacity": 70,
              "type": "classroom",
              "block": "CB",
              "floor": 4,
              "display_name": "CB Floor 4 \u2022 Room CB-410"
            }
          ],
          "rooms_used": 3,
          "invigilators": 3
        }
      ],
      "total_slot_students": 2442,
      "total_rooms_used": 40,
      "total_invigilators": 40
    },
    {
      "slot_id": 10,
      "slot_label": "Slot 10 (Day 5 - Afternoon 14:00 - 17:00)",
      "courses": [
        {
          "course_code": "MEC2002",
          "course_name": "Engineering Thermodynamics",
          "student_count": 441,
          "rooms": [
            {
              "room_id": "CB-101",
              "assigned_count": 70,
              "capacity": 70,
              "type": "classroom",
              "block": "CB",
              "floor": 1,
              "display_name": "CB Floor 1 \u2022 Room CB-101"
            },
            {
              "room_id": "CB-102",
              "assigned_count": 70,
              "capacity": 70,
              "type": "classroom",
              "block": "CB",
              "floor": 1,
              "display_name": "CB Floor 1 \u2022 Room CB-102"
            },
            {
              "room_id": "CB-103",
              "assigned_count": 70,
              "capacity": 70,
              "type": "classroom",
              "block": "CB",
              "floor": 1,
              "display_name": "CB Floor 1 \u2022 Room CB-103"
            },
            {
              "room_id": "CB-104",
              "assigned_count": 70,
              "capacity": 70,
              "type": "classroom",
              "block": "CB",
              "floor": 1,
              "display_name": "CB Floor 1 \u2022 Room CB-104"
            },
            {
              "room_id": "CB-105",
              "assigned_count": 70,
              "capacity": 70,
              "type": "classroom",
              "block": "CB",
              "floor": 1,
              "display_name": "CB Floor 1 \u2022 Room CB-105"
            },
            {
              "room_id": "CB-106",
              "assigned_count": 70,
              "capacity": 70,
              "type": "classroom",
              "block": "CB",
              "floor": 1,
              "display_name": "CB Floor 1 \u2022 Room CB-106"
            },
            {
              "room_id": "CB-107",
              "assigned_count": 21,
              "capacity": 70,
              "type": "classroom",
              "block": "CB",
              "floor": 1,
              "display_name": "CB Floor 1 \u2022 Room CB-107"
            }
          ],
          "rooms_used": 7,
          "invigilators": 7
        },
        {
          "course_code": "ECE2001",
          "course_name": "Signals & Systems",
          "student_count": 356,
          "rooms": [
            {
              "room_id": "CB-108",
              "assigned_count": 70,
              "capacity": 70,
              "type": "classroom",
              "block": "CB",
              "floor": 1,
              "display_name": "CB Floor 1 \u2022 Room CB-108"
            },
            {
              "room_id": "CB-109",
              "assigned_count": 70,
              "capacity": 70,
              "type": "classroom",
              "block": "CB",
              "floor": 1,
              "display_name": "CB Floor 1 \u2022 Room CB-109"
            },
            {
              "room_id": "CB-110",
              "assigned_count": 70,
              "capacity": 70,
              "type": "classroom",
              "block": "CB",
              "floor": 1,
              "display_name": "CB Floor 1 \u2022 Room CB-110"
            },
            {
              "room_id": "CB-201",
              "assigned_count": 70,
              "capacity": 70,
              "type": "classroom",
              "block": "CB",
              "floor": 2,
              "display_name": "CB Floor 2 \u2022 Room CB-201"
            },
            {
              "room_id": "CB-202",
              "assigned_count": 70,
              "capacity": 70,
              "type": "classroom",
              "block": "CB",
              "floor": 2,
              "display_name": "CB Floor 2 \u2022 Room CB-202"
            },
            {
              "room_id": "CB-203",
              "assigned_count": 6,
              "capacity": 70,
              "type": "classroom",
              "block": "CB",
              "floor": 2,
              "display_name": "CB Floor 2 \u2022 Room CB-203"
            }
          ],
          "rooms_used": 6,
          "invigilators": 6
        },
        {
          "course_code": "CSE3001",
          "course_name": "Database Management Systems",
          "student_count": 324,
          "rooms": [
            {
              "room_id": "CB-204",
              "assigned_count": 70,
              "capacity": 70,
              "type": "classroom",
              "block": "CB",
              "floor": 2,
              "display_name": "CB Floor 2 \u2022 Room CB-204"
            },
            {
              "room_id": "CB-205",
              "assigned_count": 70,
              "capacity": 70,
              "type": "classroom",
              "block": "CB",
              "floor": 2,
              "display_name": "CB Floor 2 \u2022 Room CB-205"
            },
            {
              "room_id": "CB-206",
              "assigned_count": 70,
              "capacity": 70,
              "type": "classroom",
              "block": "CB",
              "floor": 2,
              "display_name": "CB Floor 2 \u2022 Room CB-206"
            },
            {
              "room_id": "CB-207",
              "assigned_count": 70,
              "capacity": 70,
              "type": "classroom",
              "block": "CB",
              "floor": 2,
              "display_name": "CB Floor 2 \u2022 Room CB-207"
            },
            {
              "room_id": "CB-208",
              "assigned_count": 44,
              "capacity": 70,
              "type": "classroom",
              "block": "CB",
              "floor": 2,
              "display_name": "CB Floor 2 \u2022 Room CB-208"
            }
          ],
          "rooms_used": 5,
          "invigilators": 5
        },
        {
          "course_code": "ITE4002",
          "course_name": "Distributed Systems & Middleware",
          "student_count": 304,
          "rooms": [
            {
              "room_id": "CB-209",
              "assigned_count": 70,
              "capacity": 70,
              "type": "classroom",
              "block": "CB",
              "floor": 2,
              "display_name": "CB Floor 2 \u2022 Room CB-209"
            },
            {
              "room_id": "CB-210",
              "assigned_count": 70,
              "capacity": 70,
              "type": "classroom",
              "block": "CB",
              "floor": 2,
              "display_name": "CB Floor 2 \u2022 Room CB-210"
            },
            {
              "room_id": "CB-301",
              "assigned_count": 70,
              "capacity": 70,
              "type": "classroom",
              "block": "CB",
              "floor": 3,
              "display_name": "CB Floor 3 \u2022 Room CB-301"
            },
            {
              "room_id": "CB-302",
              "assigned_count": 70,
              "capacity": 70,
              "type": "classroom",
              "block": "CB",
              "floor": 3,
              "display_name": "CB Floor 3 \u2022 Room CB-302"
            },
            {
              "room_id": "CB-303",
              "assigned_count": 24,
              "capacity": 70,
              "type": "classroom",
              "block": "CB",
              "floor": 3,
              "display_name": "CB Floor 3 \u2022 Room CB-303"
            }
          ],
          "rooms_used": 5,
          "invigilators": 5
        },
        {
          "course_code": "AID4002",
          "course_name": "Big Data Analytics & Data Lakes",
          "student_count": 269,
          "rooms": [
            {
              "room_id": "CB-304",
              "assigned_count": 70,
              "capacity": 70,
              "type": "classroom",
              "block": "CB",
              "floor": 3,
              "display_name": "CB Floor 3 \u2022 Room CB-304"
            },
            {
              "room_id": "CB-305",
              "assigned_count": 70,
              "capacity": 70,
              "type": "classroom",
              "block": "CB",
              "floor": 3,
              "display_name": "CB Floor 3 \u2022 Room CB-305"
            },
            {
              "room_id": "CB-306",
              "assigned_count": 70,
              "capacity": 70,
              "type": "classroom",
              "block": "CB",
              "floor": 3,
              "display_name": "CB Floor 3 \u2022 Room CB-306"
            },
            {
              "room_id": "CB-307",
              "assigned_count": 59,
              "capacity": 70,
              "type": "classroom",
              "block": "CB",
              "floor": 3,
              "display_name": "CB Floor 3 \u2022 Room CB-307"
            }
          ],
          "rooms_used": 4,
          "invigilators": 4
        },
        {
          "course_code": "EEE4001",
          "course_name": "Power System Analysis & Grid Protection",
          "student_count": 263,
          "rooms": [
            {
              "room_id": "CB-308",
              "assigned_count": 70,
              "capacity": 70,
              "type": "classroom",
              "block": "CB",
              "floor": 3,
              "display_name": "CB Floor 3 \u2022 Room CB-308"
            },
            {
              "room_id": "CB-309",
              "assigned_count": 70,
              "capacity": 70,
              "type": "classroom",
              "block": "CB",
              "floor": 3,
              "display_name": "CB Floor 3 \u2022 Room CB-309"
            },
            {
              "room_id": "CB-310",
              "assigned_count": 70,
              "capacity": 70,
              "type": "classroom",
              "block": "CB",
              "floor": 3,
              "display_name": "CB Floor 3 \u2022 Room CB-310"
            },
            {
              "room_id": "CB-401",
              "assigned_count": 53,
              "capacity": 70,
              "type": "classroom",
              "block": "CB",
              "floor": 4,
              "display_name": "CB Floor 4 \u2022 Room CB-401"
            }
          ],
          "rooms_used": 4,
          "invigilators": 4
        },
        {
          "course_code": "CIV3001",
          "course_name": "Structural Analysis & Reinforced Concrete",
          "student_count": 248,
          "rooms": [
            {
              "room_id": "CB-402",
              "assigned_count": 70,
              "capacity": 70,
              "type": "classroom",
              "block": "CB",
              "floor": 4,
              "display_name": "CB Floor 4 \u2022 Room CB-402"
            },
            {
              "room_id": "CB-403",
              "assigned_count": 70,
              "capacity": 70,
              "type": "classroom",
              "block": "CB",
              "floor": 4,
              "display_name": "CB Floor 4 \u2022 Room CB-403"
            },
            {
              "room_id": "CB-404",
              "assigned_count": 70,
              "capacity": 70,
              "type": "classroom",
              "block": "CB",
              "floor": 4,
              "display_name": "CB Floor 4 \u2022 Room CB-404"
            },
            {
              "room_id": "CB-405",
              "assigned_count": 38,
              "capacity": 70,
              "type": "classroom",
              "block": "CB",
              "floor": 4,
              "display_name": "CB Floor 4 \u2022 Room CB-405"
            }
          ],
          "rooms_used": 4,
          "invigilators": 4
        }
      ],
      "total_slot_students": 2205,
      "total_rooms_used": 35,
      "total_invigilators": 35
    },
    {
      "slot_id": 11,
      "slot_label": "Slot 11 (Day 6 - Morning 09:00 - 12:00)",
      "courses": [
        {
          "course_code": "CSE4003",
          "course_name": "Compiler Design",
          "student_count": 385,
          "rooms": [
            {
              "room_id": "CB-101",
              "assigned_count": 70,
              "capacity": 70,
              "type": "classroom",
              "block": "CB",
              "floor": 1,
              "display_name": "CB Floor 1 \u2022 Room CB-101"
            },
            {
              "room_id": "CB-102",
              "assigned_count": 70,
              "capacity": 70,
              "type": "classroom",
              "block": "CB",
              "floor": 1,
              "display_name": "CB Floor 1 \u2022 Room CB-102"
            },
            {
              "room_id": "CB-103",
              "assigned_count": 70,
              "capacity": 70,
              "type": "classroom",
              "block": "CB",
              "floor": 1,
              "display_name": "CB Floor 1 \u2022 Room CB-103"
            },
            {
              "room_id": "CB-104",
              "assigned_count": 70,
              "capacity": 70,
              "type": "classroom",
              "block": "CB",
              "floor": 1,
              "display_name": "CB Floor 1 \u2022 Room CB-104"
            },
            {
              "room_id": "CB-105",
              "assigned_count": 70,
              "capacity": 70,
              "type": "classroom",
              "block": "CB",
              "floor": 1,
              "display_name": "CB Floor 1 \u2022 Room CB-105"
            },
            {
              "room_id": "CB-106",
              "assigned_count": 35,
              "capacity": 70,
              "type": "classroom",
              "block": "CB",
              "floor": 1,
              "display_name": "CB Floor 1 \u2022 Room CB-106"
            }
          ],
          "rooms_used": 6,
          "invigilators": 6
        },
        {
          "course_code": "ECE2002",
          "course_name": "Electronic Devices & Semiconductor Circuits",
          "student_count": 385,
          "rooms": [
            {
              "room_id": "CB-107",
              "assigned_count": 70,
              "capacity": 70,
              "type": "classroom",
              "block": "CB",
              "floor": 1,
              "display_name": "CB Floor 1 \u2022 Room CB-107"
            },
            {
              "room_id": "CB-108",
              "assigned_count": 70,
              "capacity": 70,
              "type": "classroom",
              "block": "CB",
              "floor": 1,
              "display_name": "CB Floor 1 \u2022 Room CB-108"
            },
            {
              "room_id": "CB-109",
              "assigned_count": 70,
              "capacity": 70,
              "type": "classroom",
              "block": "CB",
              "floor": 1,
              "display_name": "CB Floor 1 \u2022 Room CB-109"
            },
            {
              "room_id": "CB-110",
              "assigned_count": 70,
              "capacity": 70,
              "type": "classroom",
              "block": "CB",
              "floor": 1,
              "display_name": "CB Floor 1 \u2022 Room CB-110"
            },
            {
              "room_id": "CB-201",
              "assigned_count": 70,
              "capacity": 70,
              "type": "classroom",
              "block": "CB",
              "floor": 2,
              "display_name": "CB Floor 2 \u2022 Room CB-201"
            },
            {
              "room_id": "CB-202",
              "assigned_count": 35,
              "capacity": 70,
              "type": "classroom",
              "block": "CB",
              "floor": 2,
              "display_name": "CB Floor 2 \u2022 Room CB-202"
            }
          ],
          "rooms_used": 6,
          "invigilators": 6
        }
      ],
      "total_slot_students": 770,
      "total_rooms_used": 12,
      "total_invigilators": 12
    },
    {
      "slot_id": 12,
      "slot_label": "Slot 12 (Day 6 - Afternoon 14:00 - 17:00)",
      "courses": [
        {
          "course_code": "ECE3001",
          "course_name": "Digital Signal Processing",
          "student_count": 321,
          "rooms": [
            {
              "room_id": "CB-101",
              "assigned_count": 70,
              "capacity": 70,
              "type": "classroom",
              "block": "CB",
              "floor": 1,
              "display_name": "CB Floor 1 \u2022 Room CB-101"
            },
            {
              "room_id": "CB-102",
              "assigned_count": 70,
              "capacity": 70,
              "type": "classroom",
              "block": "CB",
              "floor": 1,
              "display_name": "CB Floor 1 \u2022 Room CB-102"
            },
            {
              "room_id": "CB-103",
              "assigned_count": 70,
              "capacity": 70,
              "type": "classroom",
              "block": "CB",
              "floor": 1,
              "display_name": "CB Floor 1 \u2022 Room CB-103"
            },
            {
              "room_id": "CB-104",
              "assigned_count": 70,
              "capacity": 70,
              "type": "classroom",
              "block": "CB",
              "floor": 1,
              "display_name": "CB Floor 1 \u2022 Room CB-104"
            },
            {
              "room_id": "CB-105",
              "assigned_count": 41,
              "capacity": 70,
              "type": "classroom",
              "block": "CB",
              "floor": 1,
              "display_name": "CB Floor 1 \u2022 Room CB-105"
            }
          ],
          "rooms_used": 5,
          "invigilators": 5
        },
        {
          "course_code": "CSE3003",
          "course_name": "Design & Analysis of Algorithms",
          "student_count": 286,
          "rooms": [
            {
              "room_id": "CB-106",
              "assigned_count": 70,
              "capacity": 70,
              "type": "classroom",
              "block": "CB",
              "floor": 1,
              "display_name": "CB Floor 1 \u2022 Room CB-106"
            },
            {
              "room_id": "CB-107",
              "assigned_count": 70,
              "capacity": 70,
              "type": "classroom",
              "block": "CB",
              "floor": 1,
              "display_name": "CB Floor 1 \u2022 Room CB-107"
            },
            {
              "room_id": "CB-108",
              "assigned_count": 70,
              "capacity": 70,
              "type": "classroom",
              "block": "CB",
              "floor": 1,
              "display_name": "CB Floor 1 \u2022 Room CB-108"
            },
            {
              "room_id": "CB-109",
              "assigned_count": 70,
              "capacity": 70,
              "type": "classroom",
              "block": "CB",
              "floor": 1,
              "display_name": "CB Floor 1 \u2022 Room CB-109"
            },
            {
              "room_id": "CB-110",
              "assigned_count": 6,
              "capacity": 70,
              "type": "classroom",
              "block": "CB",
              "floor": 1,
              "display_name": "CB Floor 1 \u2022 Room CB-110"
            }
          ],
          "rooms_used": 5,
          "invigilators": 5
        }
      ],
      "total_slot_students": 607,
      "total_rooms_used": 10,
      "total_invigilators": 10
    },
    {
      "slot_id": 13,
      "slot_label": "Slot 13",
      "courses": [
        {
          "course_code": "CSE3002",
          "course_name": "Operating Systems Principles",
          "student_count": 388,
          "rooms": [
            {
              "room_id": "CB-101",
              "assigned_count": 70,
              "capacity": 70,
              "type": "classroom",
              "block": "CB",
              "floor": 1,
              "display_name": "CB Floor 1 \u2022 Room CB-101"
            },
            {
              "room_id": "CB-102",
              "assigned_count": 70,
              "capacity": 70,
              "type": "classroom",
              "block": "CB",
              "floor": 1,
              "display_name": "CB Floor 1 \u2022 Room CB-102"
            },
            {
              "room_id": "CB-103",
              "assigned_count": 70,
              "capacity": 70,
              "type": "classroom",
              "block": "CB",
              "floor": 1,
              "display_name": "CB Floor 1 \u2022 Room CB-103"
            },
            {
              "room_id": "CB-104",
              "assigned_count": 70,
              "capacity": 70,
              "type": "classroom",
              "block": "CB",
              "floor": 1,
              "display_name": "CB Floor 1 \u2022 Room CB-104"
            },
            {
              "room_id": "CB-105",
              "assigned_count": 70,
              "capacity": 70,
              "type": "classroom",
              "block": "CB",
              "floor": 1,
              "display_name": "CB Floor 1 \u2022 Room CB-105"
            },
            {
              "room_id": "CB-106",
              "assigned_count": 38,
              "capacity": 70,
              "type": "classroom",
              "block": "CB",
              "floor": 1,
              "display_name": "CB Floor 1 \u2022 Room CB-106"
            }
          ],
          "rooms_used": 6,
          "invigilators": 6
        }
      ],
      "total_slot_students": 388,
      "total_rooms_used": 6,
      "total_invigilators": 6
    }
  ],
  "graph_data": {
    "nodes": [
      {
        "id": "MAT1001",
        "label": "Calculus & Linear Algebra",
        "slot": 1,
        "student_count": 1998,
        "degree": 51
      },
      {
        "id": "CSE1001",
        "label": "Problem Solving & Python Programming",
        "slot": 4,
        "student_count": 1106,
        "degree": 32
      },
      {
        "id": "CSE2001",
        "label": "Data Structures & Algorithms",
        "slot": 5,
        "student_count": 460,
        "degree": 12
      },
      {
        "id": "CSE2002",
        "label": "Object Oriented Programming in Java",
        "slot": 7,
        "student_count": 440,
        "degree": 12
      },
      {
        "id": "CSE4001",
        "label": "Computer Networks & Protocols",
        "slot": 8,
        "student_count": 353,
        "degree": 12
      },
      {
        "id": "CSE4002",
        "label": "Theory of Computation",
        "slot": 9,
        "student_count": 334,
        "degree": 12
      },
      {
        "id": "MAT2001",
        "label": "Differential Equations & Complex Variables",
        "slot": 2,
        "student_count": 1799,
        "degree": 51
      },
      {
        "id": "CSE3001",
        "label": "Database Management Systems",
        "slot": 10,
        "student_count": 324,
        "degree": 12
      },
      {
        "id": "CSE4003",
        "label": "Compiler Design",
        "slot": 11,
        "student_count": 385,
        "degree": 12
      },
      {
        "id": "CSE3003",
        "label": "Design & Analysis of Algorithms",
        "slot": 12,
        "student_count": 286,
        "degree": 12
      },
      {
        "id": "PHY1001",
        "label": "Engineering Physics",
        "slot": 3,
        "student_count": 941,
        "degree": 36
      },
      {
        "id": "CSE3002",
        "label": "Operating Systems Principles",
        "slot": 13,
        "student_count": 388,
        "degree": 12
      },
      {
        "id": "ENG1001",
        "label": "Technical English & Communication",
        "slot": 6,
        "student_count": 468,
        "degree": 23
      },
      {
        "id": "ITE2001",
        "label": "Web Application Development",
        "slot": 6,
        "student_count": 327,
        "degree": 9
      },
      {
        "id": "ITE3001",
        "label": "Cloud Computing & Virtualization",
        "slot": 7,
        "student_count": 414,
        "degree": 9
      },
      {
        "id": "ITE3002",
        "label": "Information Security & Cryptography",
        "slot": 8,
        "student_count": 358,
        "degree": 9
      },
      {
        "id": "ITE4001",
        "label": "Mobile Application Engineering",
        "slot": 9,
        "student_count": 355,
        "degree": 9
      },
      {
        "id": "ITE4002",
        "label": "Distributed Systems & Middleware",
        "slot": 10,
        "student_count": 304,
        "degree": 9
      },
      {
        "id": "ENV1001",
        "label": "Environmental Science & Sustainability",
        "slot": 5,
        "student_count": 579,
        "degree": 31
      },
      {
        "id": "CHY1001",
        "label": "Engineering Chemistry",
        "slot": 3,
        "student_count": 364,
        "degree": 19
      },
      {
        "id": "AID3002",
        "label": "Deep Learning & Neural Networks",
        "slot": 5,
        "student_count": 312,
        "degree": 9
      },
      {
        "id": "AID3001",
        "label": "Machine Learning & Predictive Modeling",
        "slot": 7,
        "student_count": 372,
        "degree": 9
      },
      {
        "id": "AID4001",
        "label": "Natural Language Processing",
        "slot": 8,
        "student_count": 308,
        "degree": 9
      },
      {
        "id": "AID2001",
        "label": "Artificial Intelligence Foundations",
        "slot": 9,
        "student_count": 313,
        "degree": 9
      },
      {
        "id": "AID4002",
        "label": "Big Data Analytics & Data Lakes",
        "slot": 10,
        "student_count": 269,
        "degree": 9
      },
      {
        "id": "EEE1001",
        "label": "Basic Electrical & Electronics Engineering",
        "slot": 6,
        "student_count": 745,
        "degree": 27
      },
      {
        "id": "ECE3002",
        "label": "VLSI Design & System-on-Chip",
        "slot": 5,
        "student_count": 357,
        "degree": 11
      },
      {
        "id": "ECE4001",
        "label": "Wireless & Cellular Communications",
        "slot": 7,
        "student_count": 319,
        "degree": 11
      },
      {
        "id": "ECE3003",
        "label": "Microprocessors & Embedded Systems",
        "slot": 8,
        "student_count": 259,
        "degree": 11
      },
      {
        "id": "ECE4002",
        "label": "Electromagnetic Fields & Wave Propagation",
        "slot": 9,
        "student_count": 282,
        "degree": 11
      },
      {
        "id": "ECE2001",
        "label": "Signals & Systems",
        "slot": 10,
        "student_count": 356,
        "degree": 11
      },
      {
        "id": "ECE2002",
        "label": "Electronic Devices & Semiconductor Circuits",
        "slot": 11,
        "student_count": 385,
        "degree": 11
      },
      {
        "id": "ECE3001",
        "label": "Digital Signal Processing",
        "slot": 12,
        "student_count": 321,
        "degree": 11
      },
      {
        "id": "EEE3001",
        "label": "Power Electronics & Converters",
        "slot": 4,
        "student_count": 327,
        "degree": 9
      },
      {
        "id": "EEE3002",
        "label": "Control Systems Engineering",
        "slot": 7,
        "student_count": 302,
        "degree": 9
      },
      {
        "id": "EEE2001",
        "label": "Electric Circuit Theory & Analysis",
        "slot": 8,
        "student_count": 304,
        "degree": 9
      },
      {
        "id": "EEE2002",
        "label": "Electrical Machines & Transformers",
        "slot": 9,
        "student_count": 379,
        "degree": 9
      },
      {
        "id": "EEE4001",
        "label": "Power System Analysis & Grid Protection",
        "slot": 10,
        "student_count": 263,
        "degree": 9
      },
      {
        "id": "MEC4001",
        "label": "Heat & Mass Transfer",
        "slot": 4,
        "student_count": 342,
        "degree": 9
      },
      {
        "id": "MEC3002",
        "label": "Manufacturing Processes & CNC Machining",
        "slot": 7,
        "student_count": 392,
        "degree": 9
      },
      {
        "id": "MEC3001",
        "label": "Fluid Mechanics & Turbo Machinery",
        "slot": 8,
        "student_count": 386,
        "degree": 9
      },
      {
        "id": "MEC2001",
        "label": "Engineering Mechanics & Statics",
        "slot": 9,
        "student_count": 368,
        "degree": 9
      },
      {
        "id": "MEC2002",
        "label": "Engineering Thermodynamics",
        "slot": 10,
        "student_count": 441,
        "degree": 9
      },
      {
        "id": "CIV2002",
        "label": "Surveying & Geomatics Engineering",
        "slot": 4,
        "student_count": 281,
        "degree": 9
      },
      {
        "id": "CIV4001",
        "label": "Geotechnical Engineering & Foundation Design",
        "slot": 7,
        "student_count": 215,
        "degree": 9
      },
      {
        "id": "CIV3002",
        "label": "Concrete Technology & Construction Management",
        "slot": 8,
        "student_count": 255,
        "degree": 9
      },
      {
        "id": "CIV2001",
        "label": "Strength of Materials & Solid Mechanics",
        "slot": 9,
        "student_count": 221,
        "degree": 9
      },
      {
        "id": "CIV3001",
        "label": "Structural Analysis & Reinforced Concrete",
        "slot": 10,
        "student_count": 248,
        "degree": 9
      },
      {
        "id": "CHM3001",
        "label": "Fluid Flow & Heat Transfer Operations",
        "slot": 4,
        "student_count": 169,
        "degree": 8
      },
      {
        "id": "CHM3002",
        "label": "Mass Transfer Operations & Separation",
        "slot": 7,
        "student_count": 172,
        "degree": 8
      },
      {
        "id": "CHM2001",
        "label": "Chemical Process Principles & Calculations",
        "slot": 8,
        "student_count": 166,
        "degree": 8
      },
      {
        "id": "CHM2002",
        "label": "Chemical Engineering Thermodynamics",
        "slot": 9,
        "student_count": 190,
        "degree": 8
      }
    ],
    "edges": [
      {
        "from": "MAT1001",
        "to": "CSE1001",
        "weight": 286
      },
      {
        "from": "MAT1001",
        "to": "CSE2001",
        "weight": 232
      },
      {
        "from": "MAT1001",
        "to": "CSE2002",
        "weight": 222
      },
      {
        "from": "MAT1001",
        "to": "CSE4001",
        "weight": 185
      },
      {
        "from": "MAT1001",
        "to": "CSE4002",
        "weight": 158
      },
      {
        "from": "MAT1001",
        "to": "CSE3001",
        "weight": 158
      },
      {
        "from": "MAT1001",
        "to": "CSE3003",
        "weight": 160
      },
      {
        "from": "MAT1001",
        "to": "CSE4003",
        "weight": 198
      },
      {
        "from": "MAT1001",
        "to": "MAT2001",
        "weight": 1042
      },
      {
        "from": "MAT1001",
        "to": "CSE3002",
        "weight": 186
      },
      {
        "from": "MAT1001",
        "to": "PHY1001",
        "weight": 157
      },
      {
        "from": "MAT1001",
        "to": "ENG1001",
        "weight": 115
      },
      {
        "from": "MAT1001",
        "to": "ITE2001",
        "weight": 154
      },
      {
        "from": "MAT1001",
        "to": "ITE3001",
        "weight": 193
      },
      {
        "from": "MAT1001",
        "to": "ITE3002",
        "weight": 165
      },
      {
        "from": "MAT1001",
        "to": "ITE4001",
        "weight": 172
      },
      {
        "from": "MAT1001",
        "to": "ITE4002",
        "weight": 153
      },
      {
        "from": "MAT1001",
        "to": "CHY1001",
        "weight": 48
      },
      {
        "from": "MAT1001",
        "to": "ENV1001",
        "weight": 156
      },
      {
        "from": "MAT1001",
        "to": "AID2001",
        "weight": 149
      },
      {
        "from": "MAT1001",
        "to": "AID3001",
        "weight": 173
      },
      {
        "from": "MAT1001",
        "to": "AID3002",
        "weight": 147
      },
      {
        "from": "MAT1001",
        "to": "AID4002",
        "weight": 124
      },
      {
        "from": "MAT1001",
        "to": "AID4001",
        "weight": 143
      },
      {
        "from": "MAT1001",
        "to": "EEE1001",
        "weight": 194
      },
      {
        "from": "MAT1001",
        "to": "ECE2001",
        "weight": 187
      },
      {
        "from": "MAT1001",
        "to": "ECE2002",
        "weight": 208
      },
      {
        "from": "MAT1001",
        "to": "ECE4002",
        "weight": 150
      },
      {
        "from": "MAT1001",
        "to": "ECE3001",
        "weight": 178
      },
      {
        "from": "MAT1001",
        "to": "ECE4001",
        "weight": 161
      },
      {
        "from": "MAT1001",
        "to": "ECE3002",
        "weight": 191
      },
      {
        "from": "MAT1001",
        "to": "ECE3003",
        "weight": 139
      },
      {
        "from": "MAT1001",
        "to": "EEE2001",
        "weight": 158
      },
      {
        "from": "MAT1001",
        "to": "EEE3001",
        "weight": 169
      },
      {
        "from": "MAT1001",
        "to": "EEE3002",
        "weight": 157
      },
      {
        "from": "MAT1001",
        "to": "EEE2002",
        "weight": 196
      },
      {
        "from": "MAT1001",
        "to": "EEE4001",
        "weight": 137
      },
      {
        "from": "MAT1001",
        "to": "MEC3001",
        "weight": 203
      },
      {
        "from": "MAT1001",
        "to": "MEC3002",
        "weight": 196
      },
      {
        "from": "MAT1001",
        "to": "MEC4001",
        "weight": 162
      },
      {
        "from": "MAT1001",
        "to": "MEC2001",
        "weight": 179
      },
      {
        "from": "MAT1001",
        "to": "MEC2002",
        "weight": 227
      },
      {
        "from": "MAT1001",
        "to": "CIV2002",
        "weight": 141
      },
      {
        "from": "MAT1001",
        "to": "CIV3002",
        "weight": 127
      },
      {
        "from": "MAT1001",
        "to": "CIV4001",
        "weight": 110
      },
      {
        "from": "MAT1001",
        "to": "CIV2001",
        "weight": 114
      },
      {
        "from": "MAT1001",
        "to": "CIV3001",
        "weight": 123
      },
      {
        "from": "MAT1001",
        "to": "CHM2001",
        "weight": 77
      },
      {
        "from": "MAT1001",
        "to": "CHM3001",
        "weight": 81
      },
      {
        "from": "MAT1001",
        "to": "CHM3002",
        "weight": 81
      },
      {
        "from": "MAT1001",
        "to": "CHM2002",
        "weight": 86
      },
      {
        "from": "CSE1001",
        "to": "CSE2001",
        "weight": 200
      },
      {
        "from": "CSE1001",
        "to": "CSE2002",
        "weight": 189
      },
      {
        "from": "CSE1001",
        "to": "CSE4001",
        "weight": 159
      },
      {
        "from": "CSE1001",
        "to": "CSE4002",
        "weight": 146
      },
      {
        "from": "CSE1001",
        "to": "CSE4003",
        "weight": 166
      },
      {
        "from": "CSE1001",
        "to": "MAT2001",
        "weight": 171
      },
      {
        "from": "CSE1001",
        "to": "CSE3002",
        "weight": 175
      },
      {
        "from": "CSE1001",
        "to": "PHY1001",
        "weight": 257
      },
      {
        "from": "CSE1001",
        "to": "CSE3001",
        "weight": 146
      },
      {
        "from": "CSE1001",
        "to": "CSE3003",
        "weight": 114
      },
      {
        "from": "CSE1001",
        "to": "ENG1001",
        "weight": 95
      },
      {
        "from": "CSE1001",
        "to": "ITE2001",
        "weight": 140
      },
      {
        "from": "CSE1001",
        "to": "ITE3001",
        "weight": 182
      },
      {
        "from": "CSE1001",
        "to": "ITE3002",
        "weight": 159
      },
      {
        "from": "CSE1001",
        "to": "ENV1001",
        "weight": 67
      },
      {
        "from": "CSE1001",
        "to": "ITE4001",
        "weight": 152
      },
      {
        "from": "CSE1001",
        "to": "ITE4002",
        "weight": 129
      },
      {
        "from": "CSE1001",
        "to": "CHY1001",
        "weight": 80
      },
      {
        "from": "CSE1001",
        "to": "AID3001",
        "weight": 183
      },
      {
        "from": "CSE1001",
        "to": "AID3002",
        "weight": 155
      },
      {
        "from": "CSE1001",
        "to": "AID4001",
        "weight": 153
      },
      {
        "from": "CSE1001",
        "to": "AID2001",
        "weight": 149
      },
      {
        "from": "CSE1001",
        "to": "AID4002",
        "weight": 118
      },
      {
        "from": "CSE1001",
        "to": "EEE1001",
        "weight": 150
      },
      {
        "from": "CSE1001",
        "to": "ECE3002",
        "weight": 168
      },
      {
        "from": "CSE1001",
        "to": "ECE3003",
        "weight": 123
      },
      {
        "from": "CSE1001",
        "to": "ECE4001",
        "weight": 155
      },
      {
        "from": "CSE1001",
        "to": "ECE4002",
        "weight": 123
      },
      {
        "from": "CSE1001",
        "to": "ECE2002",
        "weight": 176
      },
      {
        "from": "CSE1001",
        "to": "ECE3001",
        "weight": 144
      },
      {
        "from": "CSE1001",
        "to": "ECE2001",
        "weight": 163
      },
      {
        "from": "CSE2001",
        "to": "CSE2002",
        "weight": 279
      },
      {
        "from": "CSE2001",
        "to": "CSE4001",
        "weight": 165
      },
      {
        "from": "CSE2001",
        "to": "CSE4002",
        "weight": 151
      },
      {
        "from": "CSE2001",
        "to": "CSE3001",
        "weight": 116
      },
      {
        "from": "CSE2001",
        "to": "MAT2001",
        "weight": 216
      },
      {
        "from": "CSE2001",
        "to": "CSE3002",
        "weight": 163
      },
      {
        "from": "CSE2001",
        "to": "CSE4003",
        "weight": 182
      },
      {
        "from": "CSE2001",
        "to": "PHY1001",
        "weight": 151
      },
      {
        "from": "CSE2001",
        "to": "CSE3003",
        "weight": 114
      },
      {
        "from": "CSE2001",
        "to": "ENG1001",
        "weight": 121
      },
      {
        "from": "CSE2002",
        "to": "CSE4001",
        "weight": 133
      },
      {
        "from": "CSE2002",
        "to": "CSE4002",
        "weight": 133
      },
      {
        "from": "CSE2002",
        "to": "CSE3001",
        "weight": 175
      },
      {
        "from": "CSE2002",
        "to": "CSE3003",
        "weight": 93
      },
      {
        "from": "CSE2002",
        "to": "CSE4003",
        "weight": 169
      },
      {
        "from": "CSE2002",
        "to": "MAT2001",
        "weight": 216
      },
      {
        "from": "CSE2002",
        "to": "CSE3002",
        "weight": 157
      },
      {
        "from": "CSE2002",
        "to": "ENG1001",
        "weight": 117
      },
      {
        "from": "CSE2002",
        "to": "PHY1001",
        "weight": 136
      },
      {
        "from": "CSE4001",
        "to": "CSE4002",
        "weight": 127
      },
      {
        "from": "CSE4001",
        "to": "CSE4003",
        "weight": 127
      },
      {
        "from": "CSE4001",
        "to": "MAT2001",
        "weight": 149
      },
      {
        "from": "CSE4001",
        "to": "PHY1001",
        "weight": 119
      },
      {
        "from": "CSE4001",
        "to": "CSE3003",
        "weight": 107
      },
      {
        "from": "CSE4001",
        "to": "CSE3002",
        "weight": 139
      },
      {
        "from": "CSE4001",
        "to": "ENG1001",
        "weight": 94
      },
      {
        "from": "CSE4001",
        "to": "CSE3001",
        "weight": 108
      },
      {
        "from": "CSE4002",
        "to": "CSE4003",
        "weight": 123
      },
      {
        "from": "CSE4002",
        "to": "MAT2001",
        "weight": 157
      },
      {
        "from": "CSE4002",
        "to": "CSE3002",
        "weight": 130
      },
      {
        "from": "CSE4002",
        "to": "PHY1001",
        "weight": 121
      },
      {
        "from": "CSE4002",
        "to": "ENG1001",
        "weight": 86
      },
      {
        "from": "CSE4002",
        "to": "CSE3001",
        "weight": 98
      },
      {
        "from": "CSE4002",
        "to": "CSE3003",
        "weight": 85
      },
      {
        "from": "MAT2001",
        "to": "CSE3001",
        "weight": 154
      },
      {
        "from": "MAT2001",
        "to": "CSE3003",
        "weight": 136
      },
      {
        "from": "MAT2001",
        "to": "CSE4003",
        "weight": 175
      },
      {
        "from": "MAT2001",
        "to": "CSE3002",
        "weight": 175
      },
      {
        "from": "MAT2001",
        "to": "ENG1001",
        "weight": 69
      },
      {
        "from": "MAT2001",
        "to": "PHY1001",
        "weight": 248
      },
      {
        "from": "MAT2001",
        "to": "ITE2001",
        "weight": 152
      },
      {
        "from": "MAT2001",
        "to": "ITE3001",
        "weight": 202
      },
      {
        "from": "MAT2001",
        "to": "ITE4001",
        "weight": 180
      },
      {
        "from": "MAT2001",
        "to": "ITE4002",
        "weight": 152
      },
      {
        "from": "MAT2001",
        "to": "CHY1001",
        "weight": 100
      },
      {
        "from": "MAT2001",
        "to": "ITE3002",
        "weight": 169
      },
      {
        "from": "MAT2001",
        "to": "ENV1001",
        "weight": 69
      },
      {
        "from": "MAT2001",
        "to": "AID2001",
        "weight": 143
      },
      {
        "from": "MAT2001",
        "to": "AID3001",
        "weight": 162
      },
      {
        "from": "MAT2001",
        "to": "AID3002",
        "weight": 138
      },
      {
        "from": "MAT2001",
        "to": "AID4001",
        "weight": 128
      },
      {
        "from": "MAT2001",
        "to": "AID4002",
        "weight": 123
      },
      {
        "from": "MAT2001",
        "to": "EEE1001",
        "weight": 100
      },
      {
        "from": "MAT2001",
        "to": "ECE3002",
        "weight": 150
      },
      {
        "from": "MAT2001",
        "to": "ECE3003",
        "weight": 111
      },
      {
        "from": "MAT2001",
        "to": "ECE4001",
        "weight": 127
      },
      {
        "from": "MAT2001",
        "to": "ECE4002",
        "weight": 128
      },
      {
        "from": "MAT2001",
        "to": "ECE2002",
        "weight": 171
      },
      {
        "from": "MAT2001",
        "to": "ECE3001",
        "weight": 134
      },
      {
        "from": "MAT2001",
        "to": "ECE2001",
        "weight": 155
      },
      {
        "from": "MAT2001",
        "to": "EEE2001",
        "weight": 129
      },
      {
        "from": "MAT2001",
        "to": "EEE3001",
        "weight": 133
      },
      {
        "from": "MAT2001",
        "to": "EEE3002",
        "weight": 128
      },
      {
        "from": "MAT2001",
        "to": "EEE2002",
        "weight": 156
      },
      {
        "from": "MAT2001",
        "to": "EEE4001",
        "weight": 111
      },
      {
        "from": "MAT2001",
        "to": "MEC3001",
        "weight": 179
      },
      {
        "from": "MAT2001",
        "to": "MEC3002",
        "weight": 182
      },
      {
        "from": "MAT2001",
        "to": "MEC4001",
        "weight": 153
      },
      {
        "from": "MAT2001",
        "to": "MEC2001",
        "weight": 164
      },
      {
        "from": "MAT2001",
        "to": "MEC2002",
        "weight": 195
      },
      {
        "from": "MAT2001",
        "to": "CIV2002",
        "weight": 125
      },
      {
        "from": "MAT2001",
        "to": "CIV3002",
        "weight": 114
      },
      {
        "from": "MAT2001",
        "to": "CIV4001",
        "weight": 97
      },
      {
        "from": "MAT2001",
        "to": "CIV2001",
        "weight": 110
      },
      {
        "from": "MAT2001",
        "to": "CIV3001",
        "weight": 109
      },
      {
        "from": "MAT2001",
        "to": "CHM2001",
        "weight": 72
      },
      {
        "from": "MAT2001",
        "to": "CHM2002",
        "weight": 86
      },
      {
        "from": "MAT2001",
        "to": "CHM3001",
        "weight": 70
      },
      {
        "from": "MAT2001",
        "to": "CHM3002",
        "weight": 80
      },
      {
        "from": "CSE3001",
        "to": "CSE3003",
        "weight": 91
      },
      {
        "from": "CSE3001",
        "to": "CSE4003",
        "weight": 120
      },
      {
        "from": "CSE3001",
        "to": "CSE3002",
        "weight": 137
      },
      {
        "from": "CSE3001",
        "to": "PHY1001",
        "weight": 103
      },
      {
        "from": "CSE3001",
        "to": "ENG1001",
        "weight": 87
      },
      {
        "from": "CSE4003",
        "to": "CSE3003",
        "weight": 111
      },
      {
        "from": "CSE4003",
        "to": "CSE3002",
        "weight": 146
      },
      {
        "from": "CSE4003",
        "to": "PHY1001",
        "weight": 123
      },
      {
        "from": "CSE4003",
        "to": "ENG1001",
        "weight": 108
      },
      {
        "from": "CSE3003",
        "to": "CSE3002",
        "weight": 131
      },
      {
        "from": "CSE3003",
        "to": "PHY1001",
        "weight": 94
      },
      {
        "from": "CSE3003",
        "to": "ENG1001",
        "weight": 68
      },
      {
        "from": "PHY1001",
        "to": "CSE3002",
        "weight": 130
      },
      {
        "from": "PHY1001",
        "to": "ENG1001",
        "weight": 50
      },
      {
        "from": "PHY1001",
        "to": "AID3001",
        "weight": 121
      },
      {
        "from": "PHY1001",
        "to": "AID3002",
        "weight": 97
      },
      {
        "from": "PHY1001",
        "to": "AID4001",
        "weight": 103
      },
      {
        "from": "PHY1001",
        "to": "AID2001",
        "weight": 103
      },
      {
        "from": "PHY1001",
        "to": "AID4002",
        "weight": 89
      },
      {
        "from": "PHY1001",
        "to": "EEE1001",
        "weight": 177
      },
      {
        "from": "PHY1001",
        "to": "ECE2001",
        "weight": 107
      },
      {
        "from": "PHY1001",
        "to": "ECE2002",
        "weight": 111
      },
      {
        "from": "PHY1001",
        "to": "ECE4002",
        "weight": 87
      },
      {
        "from": "PHY1001",
        "to": "ECE3001",
        "weight": 89
      },
      {
        "from": "PHY1001",
        "to": "ECE3002",
        "weight": 108
      },
      {
        "from": "PHY1001",
        "to": "ECE3003",
        "weight": 75
      },
      {
        "from": "PHY1001",
        "to": "ECE4001",
        "weight": 94
      },
      {
        "from": "PHY1001",
        "to": "EEE2001",
        "weight": 110
      },
      {
        "from": "PHY1001",
        "to": "EEE2002",
        "weight": 132
      },
      {
        "from": "PHY1001",
        "to": "EEE3001",
        "weight": 121
      },
      {
        "from": "PHY1001",
        "to": "EEE4001",
        "weight": 84
      },
      {
        "from": "PHY1001",
        "to": "EEE3002",
        "weight": 97
      },
      {
        "from": "PHY1001",
        "to": "ENV1001",
        "weight": 52
      },
      {
        "from": "PHY1001",
        "to": "MEC2001",
        "weight": 119
      },
      {
        "from": "PHY1001",
        "to": "MEC3002",
        "weight": 121
      },
      {
        "from": "PHY1001",
        "to": "MEC4001",
        "weight": 116
      },
      {
        "from": "PHY1001",
        "to": "MEC2002",
        "weight": 132
      },
      {
        "from": "PHY1001",
        "to": "MEC3001",
        "weight": 117
      },
      {
        "from": "CSE3002",
        "to": "ENG1001",
        "weight": 110
      },
      {
        "from": "ENG1001",
        "to": "CHY1001",
        "weight": 82
      },
      {
        "from": "ENG1001",
        "to": "CIV2001",
        "weight": 83
      },
      {
        "from": "ENG1001",
        "to": "CIV2002",
        "weight": 121
      },
      {
        "from": "ENG1001",
        "to": "CIV3002",
        "weight": 106
      },
      {
        "from": "ENG1001",
        "to": "CIV3001",
        "weight": 109
      },
      {
        "from": "ENG1001",
        "to": "ENV1001",
        "weight": 57
      },
      {
        "from": "ENG1001",
        "to": "CIV4001",
        "weight": 86
      },
      {
        "from": "ENG1001",
        "to": "CHM2001",
        "weight": 78
      },
      {
        "from": "ENG1001",
        "to": "CHM3001",
        "weight": 81
      },
      {
        "from": "ENG1001",
        "to": "CHM3002",
        "weight": 75
      },
      {
        "from": "ENG1001",
        "to": "CHM2002",
        "weight": 87
      },
      {
        "from": "ITE2001",
        "to": "ITE3001",
        "weight": 271
      },
      {
        "from": "ITE2001",
        "to": "ITE3002",
        "weight": 196
      },
      {
        "from": "ITE2001",
        "to": "ITE4001",
        "weight": 204
      },
      {
        "from": "ITE2001",
        "to": "ITE4002",
        "weight": 167
      },
      {
        "from": "ITE2001",
        "to": "ENV1001",
        "weight": 95
      },
      {
        "from": "ITE2001",
        "to": "CHY1001",
        "weight": 113
      },
      {
        "from": "ITE3001",
        "to": "ITE3002",
        "weight": 289
      },
      {
        "from": "ITE3001",
        "to": "ITE4001",
        "weight": 279
      },
      {
        "from": "ITE3001",
        "to": "ITE4002",
        "weight": 234
      },
      {
        "from": "ITE3001",
        "to": "ENV1001",
        "weight": 113
      },
      {
        "from": "ITE3001",
        "to": "CHY1001",
        "weight": 138
      },
      {
        "from": "ITE3002",
        "to": "CHY1001",
        "weight": 129
      },
      {
        "from": "ITE3002",
        "to": "ITE4001",
        "weight": 240
      },
      {
        "from": "ITE3002",
        "to": "ITE4002",
        "weight": 196
      },
      {
        "from": "ITE3002",
        "to": "ENV1001",
        "weight": 94
      },
      {
        "from": "ITE4001",
        "to": "ITE4002",
        "weight": 198
      },
      {
        "from": "ITE4001",
        "to": "ENV1001",
        "weight": 88
      },
      {
        "from": "ITE4001",
        "to": "CHY1001",
        "weight": 118
      },
      {
        "from": "ITE4002",
        "to": "ENV1001",
        "weight": 74
      },
      {
        "from": "ITE4002",
        "to": "CHY1001",
        "weight": 100
      },
      {
        "from": "ENV1001",
        "to": "CHY1001",
        "weight": 54
      },
      {
        "from": "ENV1001",
        "to": "EEE1001",
        "weight": 124
      },
      {
        "from": "ENV1001",
        "to": "EEE2001",
        "weight": 76
      },
      {
        "from": "ENV1001",
        "to": "EEE2002",
        "weight": 106
      },
      {
        "from": "ENV1001",
        "to": "EEE3001",
        "weight": 85
      },
      {
        "from": "ENV1001",
        "to": "EEE4001",
        "weight": 77
      },
      {
        "from": "ENV1001",
        "to": "EEE3002",
        "weight": 89
      },
      {
        "from": "ENV1001",
        "to": "MEC2002",
        "weight": 132
      },
      {
        "from": "ENV1001",
        "to": "MEC3001",
        "weight": 113
      },
      {
        "from": "ENV1001",
        "to": "MEC4001",
        "weight": 104
      },
      {
        "from": "ENV1001",
        "to": "MEC2001",
        "weight": 118
      },
      {
        "from": "ENV1001",
        "to": "MEC3002",
        "weight": 121
      },
      {
        "from": "ENV1001",
        "to": "CIV2001",
        "weight": 59
      },
      {
        "from": "ENV1001",
        "to": "CIV2002",
        "weight": 78
      },
      {
        "from": "ENV1001",
        "to": "CIV3001",
        "weight": 74
      },
      {
        "from": "ENV1001",
        "to": "CIV3002",
        "weight": 71
      },
      {
        "from": "ENV1001",
        "to": "CIV4001",
        "weight": 58
      },
      {
        "from": "ENV1001",
        "to": "CHM2001",
        "weight": 49
      },
      {
        "from": "ENV1001",
        "to": "CHM2002",
        "weight": 55
      },
      {
        "from": "ENV1001",
        "to": "CHM3001",
        "weight": 51
      },
      {
        "from": "ENV1001",
        "to": "CHM3002",
        "weight": 47
      },
      {
        "from": "CHY1001",
        "to": "CIV2001",
        "weight": 76
      },
      {
        "from": "CHY1001",
        "to": "CIV2002",
        "weight": 97
      },
      {
        "from": "CHY1001",
        "to": "CIV3002",
        "weight": 92
      },
      {
        "from": "CHY1001",
        "to": "CIV3001",
        "weight": 81
      },
      {
        "from": "CHY1001",
        "to": "CIV4001",
        "weight": 79
      },
      {
        "from": "CHY1001",
        "to": "CHM2001",
        "weight": 56
      },
      {
        "from": "CHY1001",
        "to": "CHM2002",
        "weight": 66
      },
      {
        "from": "CHY1001",
        "to": "CHM3001",
        "weight": 55
      },
      {
        "from": "CHY1001",
        "to": "CHM3002",
        "weight": 61
      },
      {
        "from": "AID3002",
        "to": "AID3001",
        "weight": 251
      },
      {
        "from": "AID3002",
        "to": "AID4001",
        "weight": 202
      },
      {
        "from": "AID3002",
        "to": "AID2001",
        "weight": 184
      },
      {
        "from": "AID3002",
        "to": "AID4002",
        "weight": 163
      },
      {
        "from": "AID3002",
        "to": "EEE1001",
        "weight": 87
      },
      {
        "from": "AID3001",
        "to": "AID4001",
        "weight": 235
      },
      {
        "from": "AID3001",
        "to": "AID2001",
        "weight": 268
      },
      {
        "from": "AID3001",
        "to": "AID4002",
        "weight": 199
      },
      {
        "from": "AID3001",
        "to": "EEE1001",
        "weight": 105
      },
      {
        "from": "AID4001",
        "to": "AID4002",
        "weight": 170
      },
      {
        "from": "AID4001",
        "to": "AID2001",
        "weight": 184
      },
      {
        "from": "AID4001",
        "to": "EEE1001",
        "weight": 89
      },
      {
        "from": "AID2001",
        "to": "AID4002",
        "weight": 166
      },
      {
        "from": "AID2001",
        "to": "EEE1001",
        "weight": 82
      },
      {
        "from": "AID4002",
        "to": "EEE1001",
        "weight": 84
      },
      {
        "from": "EEE1001",
        "to": "ECE2002",
        "weight": 104
      },
      {
        "from": "EEE1001",
        "to": "ECE3002",
        "weight": 97
      },
      {
        "from": "EEE1001",
        "to": "ECE4001",
        "weight": 101
      },
      {
        "from": "EEE1001",
        "to": "ECE3001",
        "weight": 97
      },
      {
        "from": "EEE1001",
        "to": "ECE3003",
        "weight": 70
      },
      {
        "from": "EEE1001",
        "to": "ECE2001",
        "weight": 100
      },
      {
        "from": "EEE1001",
        "to": "ECE4002",
        "weight": 76
      },
      {
        "from": "EEE1001",
        "to": "EEE2001",
        "weight": 135
      },
      {
        "from": "EEE1001",
        "to": "EEE2002",
        "weight": 168
      },
      {
        "from": "EEE1001",
        "to": "EEE3001",
        "weight": 146
      },
      {
        "from": "EEE1001",
        "to": "EEE4001",
        "weight": 117
      },
      {
        "from": "EEE1001",
        "to": "EEE3002",
        "weight": 133
      },
      {
        "from": "EEE1001",
        "to": "MEC2001",
        "weight": 156
      },
      {
        "from": "EEE1001",
        "to": "MEC2002",
        "weight": 196
      },
      {
        "from": "EEE1001",
        "to": "MEC4001",
        "weight": 149
      },
      {
        "from": "EEE1001",
        "to": "MEC3002",
        "weight": 164
      },
      {
        "from": "EEE1001",
        "to": "MEC3001",
        "weight": 160
      },
      {
        "from": "ECE3002",
        "to": "ECE3003",
        "weight": 141
      },
      {
        "from": "ECE3002",
        "to": "ECE4001",
        "weight": 146
      },
      {
        "from": "ECE3002",
        "to": "ECE4002",
        "weight": 140
      },
      {
        "from": "ECE3002",
        "to": "ECE2002",
        "weight": 177
      },
      {
        "from": "ECE3002",
        "to": "ECE3001",
        "weight": 182
      },
      {
        "from": "ECE3002",
        "to": "ECE2001",
        "weight": 143
      },
      {
        "from": "ECE4001",
        "to": "ECE3003",
        "weight": 102
      },
      {
        "from": "ECE4001",
        "to": "ECE4002",
        "weight": 127
      },
      {
        "from": "ECE4001",
        "to": "ECE2002",
        "weight": 166
      },
      {
        "from": "ECE4001",
        "to": "ECE3001",
        "weight": 123
      },
      {
        "from": "ECE4001",
        "to": "ECE2001",
        "weight": 161
      },
      {
        "from": "ECE3003",
        "to": "ECE4002",
        "weight": 98
      },
      {
        "from": "ECE3003",
        "to": "ECE3001",
        "weight": 112
      },
      {
        "from": "ECE3003",
        "to": "ECE2002",
        "weight": 99
      },
      {
        "from": "ECE3003",
        "to": "ECE2001",
        "weight": 113
      },
      {
        "from": "ECE4002",
        "to": "ECE2001",
        "weight": 137
      },
      {
        "from": "ECE4002",
        "to": "ECE2002",
        "weight": 128
      },
      {
        "from": "ECE4002",
        "to": "ECE3001",
        "weight": 106
      },
      {
        "from": "ECE2001",
        "to": "ECE2002",
        "weight": 238
      },
      {
        "from": "ECE2001",
        "to": "ECE3001",
        "weight": 116
      },
      {
        "from": "ECE2002",
        "to": "ECE3001",
        "weight": 182
      },
      {
        "from": "EEE3001",
        "to": "EEE2001",
        "weight": 196
      },
      {
        "from": "EEE3001",
        "to": "EEE3002",
        "weight": 211
      },
      {
        "from": "EEE3001",
        "to": "EEE2002",
        "weight": 263
      },
      {
        "from": "EEE3001",
        "to": "EEE4001",
        "weight": 163
      },
      {
        "from": "EEE3002",
        "to": "EEE2001",
        "weight": 168
      },
      {
        "from": "EEE3002",
        "to": "EEE2002",
        "weight": 237
      },
      {
        "from": "EEE3002",
        "to": "EEE4001",
        "weight": 167
      },
      {
        "from": "EEE2001",
        "to": "EEE2002",
        "weight": 269
      },
      {
        "from": "EEE2001",
        "to": "EEE4001",
        "weight": 149
      },
      {
        "from": "EEE2002",
        "to": "EEE4001",
        "weight": 202
      },
      {
        "from": "MEC4001",
        "to": "MEC3001",
        "weight": 215
      },
      {
        "from": "MEC4001",
        "to": "MEC3002",
        "weight": 228
      },
      {
        "from": "MEC4001",
        "to": "MEC2001",
        "weight": 193
      },
      {
        "from": "MEC4001",
        "to": "MEC2002",
        "weight": 247
      },
      {
        "from": "MEC3002",
        "to": "MEC3001",
        "weight": 264
      },
      {
        "from": "MEC3002",
        "to": "MEC2001",
        "weight": 226
      },
      {
        "from": "MEC3002",
        "to": "MEC2002",
        "weight": 295
      },
      {
        "from": "MEC3001",
        "to": "MEC2002",
        "weight": 297
      },
      {
        "from": "MEC3001",
        "to": "MEC2001",
        "weight": 213
      },
      {
        "from": "MEC2001",
        "to": "MEC2002",
        "weight": 309
      },
      {
        "from": "CIV2002",
        "to": "CIV3002",
        "weight": 191
      },
      {
        "from": "CIV2002",
        "to": "CIV4001",
        "weight": 155
      },
      {
        "from": "CIV2002",
        "to": "CIV2001",
        "weight": 181
      },
      {
        "from": "CIV2002",
        "to": "CIV3001",
        "weight": 195
      },
      {
        "from": "CIV4001",
        "to": "CIV3002",
        "weight": 150
      },
      {
        "from": "CIV4001",
        "to": "CIV2001",
        "weight": 104
      },
      {
        "from": "CIV4001",
        "to": "CIV3001",
        "weight": 137
      },
      {
        "from": "CIV3002",
        "to": "CIV2001",
        "weight": 141
      },
      {
        "from": "CIV3002",
        "to": "CIV3001",
        "weight": 172
      },
      {
        "from": "CIV2001",
        "to": "CIV3001",
        "weight": 134
      },
      {
        "from": "CHM3001",
        "to": "CHM2001",
        "weight": 135
      },
      {
        "from": "CHM3001",
        "to": "CHM3002",
        "weight": 141
      },
      {
        "from": "CHM3001",
        "to": "CHM2002",
        "weight": 159
      },
      {
        "from": "CHM3002",
        "to": "CHM2001",
        "weight": 138
      },
      {
        "from": "CHM3002",
        "to": "CHM2002",
        "weight": 162
      },
      {
        "from": "CHM2001",
        "to": "CHM2002",
        "weight": 156
      }
    ]
  },
  "room_summary": {
    "blocks": {
      "CB": {
        "rooms_used": 343,
        "students_seated": 22002
      }
    },
    "floors": {
      "CB-F1": {
        "rooms_used": 126,
        "students_seated": 8435
      },
      "CB-F2": {
        "rooms_used": 102,
        "students_seated": 6549
      },
      "CB-F3": {
        "rooms_used": 75,
        "students_seated": 4765
      },
      "CB-F4": {
        "rooms_used": 38,
        "students_seated": 2151
      },
      "CB-F5": {
        "rooms_used": 2,
        "students_seated": 102
      }
    }
  }
};

export const SLOT_PALETTE = [
  '#3b82f6', '#10b981', '#f59e0b', '#ef4444', '#8b5cf6',
  '#06b6d4', '#ec4899', '#84cc16', '#f97316', '#6366f1',
  '#14b8a6', '#a855f7', '#eab308', '#0ea5e9'
];

export function getSlotColor(slotId) {
  return SLOT_PALETTE[(slotId - 1) % SLOT_PALETTE.length];
}

export const BLOCK_COLORS = {
  CB:  '#3b82f6',
  AB1: '#8b5cf6',
  AB2: '#10b981'
};
