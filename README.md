# Smart Exam Slot Management
### Math Club Hackathon — Infinite Innovators

> **Theme 1: Academic Related Issues / Cross-over with Math & CS**

A full-stack system that uses **Welsh-Powell graph coloring** to generate clash-free exam schedules from raw student enrollment data. Welsh-Powell is a greedy heuristic and does not guarantee the minimum number of slots.

---

## 🧮 The Math

**Conflict Graph G = (V, E)**
- **V** = distinct course codes
- **E** = edge between A ↔ B if any student is enrolled in both
- **W** = number of shared students (conflict intensity)

**Welsh-Powell** assigns courses to valid exam slots using a greedy graph-coloring heuristic:

```
1. Sort courses by degree (descending)
2. Assign smallest available slot to highest-degree course
3. Repeat until all courses are colored
4. Number of colors used = slots in this valid schedule (may not be the minimum)
```

**Room Allocation** assigns each course's students to distinct rooms within a slot. If the configured room inventory is insufficient, the output flags the affected courses as overflow.

---

## 🏗️ Architecture

```
┌─────────────────────────────────────────────────────┐
│                   React Frontend                     │
│  vis-network graph + Timetable + Upload + Export     │
│              http://localhost:5173                   │
└────────────────────┬────────────────────────────────┘
                     │ axios
┌────────────────────▼────────────────────────────────┐
│              Node.js API Gateway                     │
│  CSV validation, export (Excel/HTML), demo data      │
│              http://localhost:3001                   │
└────────────────────┬────────────────────────────────┘
                     │ HTTP
┌────────────────────▼────────────────────────────────┐
│            Python FastAPI Solver                     │
│  Graph construction, Welsh-Powell, room allocation   │
│              http://localhost:8000                   │
└─────────────────────────────────────────────────────┘
```

---

## 👥 Member Responsibilities

| Member | Stack | Responsibility |
|--------|-------|---------------|
| **Member 1** | Python + FastAPI | Algorithmic core: graph coloring + room allocation |
| **Member 2** | Node.js + Express | API gateway, CSV validation, Excel/HTML export, data gen |
| **Member 3** | React + Vite | Dashboard, vis-network graph, timetable view |

---

## 🚀 Quick Start

### Prerequisites
- Python 3.10+
- Node.js 18+

### Step 1: Python Backend (Member 1)
```bash
cd backend
pip install -r requirements.txt
python main.py
# → Running at http://localhost:8000
```

### Step 2: Node.js Gateway (Member 2)
```bash
cd server
npm install
node generate_data.js   # Generate demo CSVs
npm start
# → Running at http://localhost:3001
```

### Step 3: React Frontend (Member 3)
```bash
cd frontend
npm install
npm run dev
# → Open http://localhost:5173
```

### 🔌 No Backend? Use Mock Mode
Open the app and click **"Offline Mock"** — the full dashboard works with hardcoded sample data.

---

## 📂 Project Structure

```
├── backend/
│   ├── main.py           # FastAPI — Welsh-Powell solver
│   └── requirements.txt
│
├── server/
│   ├── index.js          # Express — API gateway + export
│   ├── generate_data.js  # Synthetic data generator
│   ├── data/
│   │   ├── demo_small.csv          (30 students, 6 courses)
│   │   └── demo_vit_realistic.csv  (250 students, 15 courses)
│   └── package.json
│
└── frontend/
    ├── src/
    │   ├── App.jsx            # Main dashboard
    │   ├── mockData.js        # Offline demo data
    │   ├── components/
    │   │   ├── ConflictGraph.jsx   # vis-network visualization
    │   │   ├── ScheduleView.jsx    # Tabbed timetable
    │   │   ├── UploadZone.jsx      # Drag-and-drop upload
    │   │   └── StatCards.jsx       # Metric cards
    │   └── index.css          # Global styles
    └── package.json
```

---

## 📊 API Reference

### Python Solver (port 8000)

| Method | Endpoint | Description |
|--------|----------|-------------|
| `POST` | `/api/schedule` | Upload CSV → returns schedule JSON |
| `POST` | `/api/solve` | JSON body → returns schedule JSON |
| `GET`  | `/health` | Health check |

### Node.js Gateway (port 3001)

| Method | Endpoint | Description |
|--------|----------|-------------|
| `POST` | `/api/upload` | CSV upload with validation |
| `POST` | `/api/export/excel` | Download Excel workbook |
| `POST` | `/api/export/html` | Download printable HTML |
| `GET`  | `/api/demo/small` | Small demo CSV |
| `GET`  | `/api/demo/realistic` | VIT-scale demo CSV |

---

## 📋 Input Format

```csv
student_id,course_code,course_name
S101,CSE2001,Data Structures
S101,MAT2001,Differential Equations
S102,CSE2001,Data Structures
S102,PHY1001,Engineering Physics
```

---

## 🎯 Key Features

- ✅ **Clash-free slots** — no adjacent courses share a slot; slot count is a heuristic result
- ✅ **Visual proof** — the conflict graph shows no two adjacent nodes share a color
- ✅ **Room allocation** — distinct rooms for concurrent courses, with overflow reporting
- ✅ **Export** — Excel workbook (3 sheets) + printable HTML report
- ✅ **Scalable demo** — includes a 4,000-student dataset
- ✅ **Offline mode** — full dashboard works without any backend
