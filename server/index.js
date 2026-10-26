/**
 * Member 2: API Gateway, File Processing & Export Utility
 * =========================================================
 * Smart Exam Slot Management — Node.js Express Server
 *
 * Responsibilities:
 *  - POST /api/upload    — CSV file validation + forward to Python solver
 *  - POST /api/export/excel — Download schedule as an Excel workbook
 *  - POST /api/export/html  — Printable HTML view
 *  - GET  /api/demo/:size   — Serve pre-generated demo datasets
 */

const express = require("express");
const multer = require("multer");
const cors = require("cors");
const csv = require("csv-parser");
const axios = require("axios");
const FormData = require("form-data");
const ExcelJS = require("exceljs");
const path = require("path");
const fs = require("fs");
const { Readable } = require("stream");

const app = express();
const PORT = 3001;
const PYTHON_API = process.env.PYTHON_API_URL || "http://localhost:8000";

// ─────────────────────────────────────────────
// Middleware
// ─────────────────────────────────────────────
app.use(cors());
app.use(express.json({ limit: "50mb" }));

const upload = multer({
  storage: multer.memoryStorage(),
  limits: { fileSize: 10 * 1024 * 1024 }, // 10MB
  fileFilter: (req, file, cb) => {
    const allowed = [".csv", ".json"];
    const ext = path.extname(file.originalname).toLowerCase();
    if (allowed.includes(ext)) {
      cb(null, true);
    } else {
      cb(new Error("Only CSV and JSON files are allowed"));
    }
  },
});

// ─────────────────────────────────────────────
// Validation Helpers
// ─────────────────────────────────────────────

function validateRows(rows) {
  const errors = [];
  const seen = new Set();
  const required = ["student_id", "course_code"];

  rows.forEach((row, idx) => {
    const lineNum = idx + 2; // +2 for header + 1-indexed

    // Check required fields
    for (const field of required) {
      const key = Object.keys(row).find(
        (k) => k.trim().toLowerCase().replace(/ /g, "_") === field
      );
      if (!key || !row[key] || String(row[key]).trim() === "") {
        errors.push(`Row ${lineNum}: Missing or empty field '${field}'`);
      }
    }

    // Check for duplicate enrollments
    const sid = String(row.student_id || "").trim();
    const code = String(row.course_code || "").trim().toUpperCase();
    const dupKey = `${sid}::${code}`;

    if (seen.has(dupKey)) {
      errors.push(
        `Row ${lineNum}: Duplicate enrollment — student ${sid} in ${code}`
      );
    } else {
      seen.add(dupKey);
    }

    // Validate student_id format (alphanumeric)
    if (sid && !/^[A-Za-z0-9_-]+$/.test(sid)) {
      errors.push(`Row ${lineNum}: Invalid student_id '${sid}' (alphanumeric only)`);
    }

    // Validate course_code format
    if (code && !/^[A-Z0-9_-]{3,12}$/.test(code)) {
      errors.push(
        `Row ${lineNum}: Invalid course_code '${code}' (3-12 alphanumeric chars)`
      );
    }
  });

  return errors;
}

function parseCSVBuffer(buffer) {
  return new Promise((resolve, reject) => {
    const rows = [];
    const stream = Readable.from(buffer.toString("utf-8"));
    stream
      .pipe(csv())
      .on("data", (row) => rows.push(row))
      .on("end", () => resolve(rows))
      .on("error", reject);
  });
}

function escapeHtml(value) {
  return String(value ?? "").replace(/[&<>\"']/g, (char) => ({
    "&": "&amp;",
    "<": "&lt;",
    ">": "&gt;",
    "\"": "&quot;",
    "'": "&#39;",
  })[char]);
}

// ─────────────────────────────────────────────
// Routes
// ─────────────────────────────────────────────

app.get("/", (req, res) => {
  res.json({
    service: "Smart Exam Slot Management — API Gateway",
    version: "1.0.0",
    endpoints: [
      "POST /api/upload",
      "POST /api/solve-json",
      "POST /api/export/excel",
      "POST /api/export/html",
      "GET  /api/demo/small",
      "GET  /api/demo/realistic",
    ],
  });
});

app.get("/health", (req, res) => {
  res.json({ status: "healthy", gateway: "Node.js Express" });
});

/**
 * POST /api/upload
 * Validates CSV, forwards to Python solver, returns schedule JSON
 */
app.post("/api/upload", upload.single("file"), async (req, res) => {
  try {
    if (!req.file) {
      return res.status(400).json({ error: "No file uploaded" });
    }

    // Parse & validate
    let rows = [];
    if (req.file.originalname.endsWith(".json")) {
      const parsed = JSON.parse(req.file.buffer.toString("utf-8"));
      rows = Array.isArray(parsed) ? parsed : parsed.enrollments || [];
    } else {
      rows = await parseCSVBuffer(req.file.buffer);
    }

    if (rows.length === 0) {
      return res.status(400).json({ error: "File is empty or has no data rows" });
    }

    const validationErrors = validateRows(rows);
    if (validationErrors.length > 0) {
      return res.status(422).json({
        error: "Validation failed",
        details: validationErrors,
        row_count: rows.length,
      });
    }

    // Forward to Python solver
    const formData = new FormData();
    formData.append("file", req.file.buffer, {
      filename: req.file.originalname,
      contentType: req.file.mimetype,
    });

    const response = await axios.post(`${PYTHON_API}/api/schedule`, formData, {
      headers: formData.getHeaders(),
      timeout: 30000,
    });

    return res.json({
      ...response.data,
      meta: {
        original_file: req.file.originalname,
        rows_processed: rows.length,
        validation_passed: true,
      },
    });
  } catch (err) {
    if (err.code === "ECONNREFUSED") {
      return res.status(503).json({
        error: "Python solver is not running. Start it with: uvicorn main:app --port 8000",
      });
    }
    console.error("Upload error:", err.message);
    return res.status(500).json({ error: err.message });
  }
});

/**
 * POST /api/solve-json
 * Accepts JSON enrollment data directly, forwards to Python solver
 */
app.post("/api/solve-json", async (req, res) => {
  try {
    const { enrollments, rooms } = req.body;
    if (!enrollments || enrollments.length === 0) {
      return res.status(400).json({ error: "No enrollment data provided" });
    }

    const response = await axios.post(`${PYTHON_API}/api/solve`, { enrollments, rooms });
    return res.json(response.data);
  } catch (err) {
    if (err.code === "ECONNREFUSED") {
      return res.status(503).json({
        error: "Python solver is not running",
      });
    }
    return res.status(500).json({ error: err.message });
  }
});

/**
 * POST /api/export/excel
 * Generates a downloadable Excel workbook from schedule JSON
 */
app.post("/api/export/excel", async (req, res) => {
  try {
    const scheduleData = req.body;

    const workbook = new ExcelJS.Workbook();
    workbook.creator = "Smart Exam Slot Management";
    workbook.created = new Date();

    // ── Sheet 1: Summary ──
    const summarySheet = workbook.addWorksheet("Summary");
    summarySheet.columns = [
      { header: "Metric", key: "metric", width: 35 },
      { header: "Value", key: "value", width: 25 },
    ];

    const summary = scheduleData.summary || {};
    const summaryRows = [
      ["Total Students", summary.total_students],
      ["Total Courses", summary.total_courses],
      ["Exam Slots Used (Welsh-Powell heuristic)", summary.slots_required],
      ["Conflicting Course Pairs", summary.conflict_pairs],
      ["Graph Density", summary.graph_density],
      ["Algorithm", summary.algorithm],
      ["Campus Blocks", "CB (5 Floors), AB1 (4 Floors), AB2 (4 Floors)"],
      ["Classrooms Count (70 cap)", summary.room_breakdown?.classrooms || 130],
      ["Labs Count (35 cap)", summary.room_breakdown?.labs || 78],
      ["Total Campus Exam Rooms", summary.total_rooms || 208],
      ["Max Slot Seating Capacity", summary.max_slot_capacity || 11830],
    ];

    summaryRows.forEach(([metric, value]) => {
      summarySheet.addRow({ metric, value });
    });

    summarySheet.getRow(1).font = { bold: true, color: { argb: "FFFFFFFF" } };
    summarySheet.getRow(1).fill = {
      type: "pattern",
      pattern: "solid",
      fgColor: { argb: "FF1E293B" },
    };

    // ── Sheet 2: Master Schedule ──
    const scheduleSheet = workbook.addWorksheet("Master Schedule");
    scheduleSheet.columns = [
      { header: "Slot ID", key: "slot_id", width: 10 },
      { header: "Slot Label", key: "slot_label", width: 36 },
      { header: "Course Code", key: "course_code", width: 15 },
      { header: "Course Name", key: "course_name", width: 38 },
      { header: "Students", key: "student_count", width: 12 },
      { header: "Rooms Assigned", key: "rooms", width: 50 },
      { header: "Invigilators", key: "invigilators", width: 15 },
    ];

    const slotColors = [
      "FFE0F2FE", "FFDCFCE7", "FFFEF3C7", "FFFCE7F3",
      "FFF3E8FF", "FFCCFBF1", "FFFFEDD5", "FFE0E7FF",
    ];

    (scheduleData.schedule || []).forEach((slot) => {
      (slot.courses || []).forEach((course) => {
        const roomStr = (course.rooms || [])
          .map((r) => `${r.room_id} (${r.assigned_count}/${r.capacity || 70})`)
          .join(", ");
        const invCount = course.invigilators || Math.ceil(course.student_count / 35);
        const row = scheduleSheet.addRow({
          slot_id: slot.slot_id,
          slot_label: slot.slot_label,
          course_code: course.course_code,
          course_name: course.course_name,
          student_count: course.student_count,
          rooms: roomStr,
          invigilators: invCount,
        });

        const colorIdx = (slot.slot_id - 1) % slotColors.length;
        row.fill = {
          type: "pattern",
          pattern: "solid",
          fgColor: { argb: slotColors[colorIdx] },
        };
      });
    });

    scheduleSheet.getRow(1).font = { bold: true, color: { argb: "FFFFFFFF" } };
    scheduleSheet.getRow(1).fill = {
      type: "pattern",
      pattern: "solid",
      fgColor: { argb: "FF1E293B" },
    };

    // ── Sheet 3: Room Allocation Details ──
    const roomSheet = workbook.addWorksheet("Room Allocation Details");
    roomSheet.columns = [
      { header: "Slot ID", key: "slot_id", width: 10 },
      { header: "Slot Label", key: "slot", width: 32 },
      { header: "Course Code", key: "course_code", width: 15 },
      { header: "Course Name", key: "course_name", width: 35 },
      { header: "Block", key: "block", width: 10 },
      { header: "Floor", key: "floor", width: 10 },
      { header: "Room Number", key: "room", width: 15 },
      { header: "Type", key: "type", width: 15 },
      { header: "Capacity", key: "capacity", width: 12 },
      { header: "Assigned Students", key: "assigned", width: 18 },
    ];

    (scheduleData.schedule || []).forEach((slot) => {
      (slot.courses || []).forEach((course) => {
        (course.rooms || []).forEach((room) => {
          roomSheet.addRow({
            slot_id: slot.slot_id,
            slot: slot.slot_label,
            course_code: course.course_code,
            course_name: course.course_name,
            block: room.block || (room.room_id ? room.room_id.split("-")[0] : ""),
            floor: room.floor || "",
            room: room.room_id,
            type: room.type || "classroom",
            capacity: room.capacity || 70,
            assigned: room.assigned_count,
          });
        });
      });
    });

    roomSheet.getRow(1).font = { bold: true, color: { argb: "FFFFFFFF" } };
    roomSheet.getRow(1).fill = {
      type: "pattern",
      pattern: "solid",
      fgColor: { argb: "FF1E293B" },
    };

    res.setHeader(
      "Content-Type",
      "application/vnd.openxmlformats-officedocument.spreadsheetml.sheet"
    );
    res.setHeader(
      "Content-Disposition",
      "attachment; filename=exam_schedule_4000_students.xlsx"
    );

    await workbook.xlsx.write(res);
    res.end();
  } catch (err) {
    console.error("Excel export error:", err);
    res.status(500).json({ error: err.message });
  }
});

/**
 * POST /api/export/html
 * Generates a printable HTML schedule view
 */
app.post("/api/export/html", (req, res) => {
  try {
    const scheduleData = req.body;
    const summary = scheduleData.summary || {};

    const slotColors = [
      "#3B82F6", "#10B981", "#F59E0B", "#EF4444",
      "#8B5CF6", "#06B6D4", "#84CC16", "#F97316"
    ];

    let slotsHTML = "";
    (scheduleData.schedule || []).forEach((slot, idx) => {
      const color = slotColors[idx % slotColors.length];
      let coursesHTML = "";
      (slot.courses || []).forEach((course) => {
        const roomStr = (course.rooms || [])
          .map((r) => `<span class="room-tag">${r.block ? `[${escapeHtml(r.block)} F${escapeHtml(r.floor)}] ` : ''}${escapeHtml(r.room_id)}: <strong>${escapeHtml(r.assigned_count)}/${escapeHtml(r.capacity || 70)}</strong></span>`)
          .join(" ");
        coursesHTML += `
          <div class="course-card">
            <div class="course-header">
              <strong style="color: ${color}; font-size: 1.1rem;">${escapeHtml(course.course_code)}</strong>
              <span class="badge">${escapeHtml(course.student_count)} students</span>
            </div>
            <div class="course-name">${escapeHtml(course.course_name)}</div>
            <div class="rooms-title">Assigned Classrooms (70 seats) & Labs:</div>
            <div class="rooms">${roomStr}</div>
            <div class="invigilators">Invigilators required: ${escapeHtml(course.invigilators || Math.ceil(course.student_count / 35))}</div>
          </div>`;
      });

      slotsHTML += `
        <div class="slot-section" style="border-left: 5px solid ${color}">
          <div class="slot-header" style="background: ${color}15; border-bottom: 2px solid ${color}40">
            <h2 style="color: ${color}">${escapeHtml(slot.slot_label || `Slot ${slot.slot_id}`)}</h2>
            <p>Courses scheduled: ${slot.courses ? slot.courses.length : 0} | Total students in slot: ${escapeHtml(slot.total_slot_students || 0)}</p>
          </div>
          <div class="courses-grid">${coursesHTML}</div>
        </div>`;
    });

    const html = `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <title>Campus Exam Schedule — 4,000 Students (CB, AB1, AB2)</title>
  <style>
    * { margin: 0; padding: 0; box-sizing: border-box; }
    body { font-family: 'Segoe UI', sans-serif; background: #f8fafc; color: #1e293b; }
    .header { background: linear-gradient(135deg, #0f172a 0%, #1e293b 100%); color: white; padding: 36px 20px; text-align: center; }
    .header h1 { font-size: 2.2rem; margin-bottom: 8px; }
    .header p { opacity: 0.75; font-size: 1rem; }
    .campus-banner { background: #3b82f6; color: white; text-align: center; padding: 8px; font-weight: 600; font-size: 0.9rem; }
    .summary { display: grid; grid-template-columns: repeat(auto-fit, minmax(200px, 1fr)); gap: 16px; padding: 24px; background: white; border-bottom: 1px solid #e2e8f0; }
    .stat-card { text-align: center; padding: 18px; background: #f1f5f9; border-radius: 12px; }
    .stat-card .value { font-size: 1.8rem; font-weight: 800; color: #3B82F6; }
    .stat-card .label { font-size: 0.75rem; color: #64748b; margin-top: 4px; text-transform: uppercase; letter-spacing: 0.05em; }
    .content { padding: 30px; max-width: 1300px; margin: 0 auto; }
    .slot-section { background: white; border-radius: 12px; margin-bottom: 24px; overflow: hidden; box-shadow: 0 2px 6px rgba(0,0,0,0.06); }
    .slot-header { padding: 18px 24px; }
    .slot-header h2 { font-size: 1.25rem; font-weight: 700; }
    .slot-header p { font-size: 0.85rem; opacity: 0.75; margin-top: 3px; }
    .courses-grid { display: grid; grid-template-columns: repeat(auto-fill, minmax(360px, 1fr)); gap: 16px; padding: 20px; }
    .course-card { border: 1px solid #e2e8f0; border-radius: 10px; padding: 16px; background: #fafafa; }
    .course-header { display: flex; justify-content: space-between; align-items: center; margin-bottom: 6px; }
    .badge { background: #1e293b; color: white; padding: 3px 10px; border-radius: 20px; font-size: 0.75rem; font-weight: 600; }
    .course-name { color: #475569; font-size: 0.9rem; margin-bottom: 10px; font-weight: 500; }
    .rooms-title { font-size: 0.75rem; text-transform: uppercase; letter-spacing: 0.05em; color: #94a3b8; font-weight: 700; margin-bottom: 6px; }
    .rooms { display: flex; flex-wrap: wrap; gap: 6px; margin-bottom: 10px; }
    .room-tag { background: #e0f2fe; color: #0369a1; padding: 3px 8px; border-radius: 6px; font-size: 0.75rem; border: 1px solid #bae6fd; }
    .invigilators { font-size: 0.8rem; color: #64748b; border-top: 1px dashed #e2e8f0; padding-top: 8px; margin-top: 8px; }
    .footer { text-align: center; padding: 24px; color: #94a3b8; font-size: 0.85rem; border-top: 1px solid #e2e8f0; margin-top: 20px; }
    @media print { body { background: white; } .header { background: #0f172a !important; -webkit-print-color-adjust: exact; } }
  </style>
</head>
<body>
  <div class="header">
    <h1>Smart Exam Slot Management</h1>
    <p>4,000 Students Campus Schedule — Welsh-Powell Graph Coloring</p>
  </div>
  <div class="campus-banner">
    🏢 Three Building Blocks: CB (Floors 1-5), AB1 (Floors 1-4), AB2 (Floors 1-4) | Classrooms: 70 Seats Each
  </div>
  <div class="summary">
    <div class="stat-card"><div class="value">${summary.total_students || 4000}</div><div class="label">Total Students</div></div>
    <div class="stat-card"><div class="value">${summary.total_courses || 0}</div><div class="label">Total Courses</div></div>
    <div class="stat-card"><div class="value">${summary.slots_required || 0}</div><div class="label">Exam Slots Used (heuristic)</div></div>
    <div class="stat-card"><div class="value">${summary.conflict_pairs || 0}</div><div class="label">Conflicting Course Pairs</div></div>
    <div class="stat-card"><div class="value">${summary.total_rooms || 208}</div><div class="label">Total Campus Rooms</div></div>
  </div>
  <div class="content">${slotsHTML}</div>
  <div class="footer">
    Algorithm: ${escapeHtml(summary.algorithm || "Welsh-Powell Graph Coloring")} &nbsp;|&nbsp;
    Graph Density: ${escapeHtml(summary.graph_density ?? "N/A")} &nbsp;|&nbsp;
    Slots used by Welsh-Powell = ${escapeHtml(summary.slots_required || 0)}
  </div>
</body>
</html>`;

    res.setHeader("Content-Type", "text/html; charset=utf-8");
    res.setHeader("Content-Disposition", "attachment; filename=exam_schedule_4000_students.html");
    res.send(html);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

/**
 * GET /api/demo/small
 * Returns the small demo dataset as CSV
 */
app.get("/api/demo/small", (req, res) => {
  const demoPath = path.join(__dirname, "data", "demo_small.csv");
  if (fs.existsSync(demoPath)) {
    res.setHeader("Content-Type", "text/csv");
    res.sendFile(demoPath);
  } else {
    res.status(404).json({ error: "Demo file not found. Run: node generate_data.js" });
  }
});

/**
 * GET /api/demo/realistic or /api/demo/4000
 * Returns the 4,000-student campus dataset
 */
app.get(["/api/demo/realistic", "/api/demo/4000", "/api/demo/large"], (req, res) => {
  const demoPath = path.join(__dirname, "data", "demo_4000.csv");
  const fallbackPath = path.join(__dirname, "data", "demo_vit_realistic.csv");
  const target = fs.existsSync(demoPath) ? demoPath : fallbackPath;
  if (fs.existsSync(target)) {
    res.setHeader("Content-Type", "text/csv");
    res.sendFile(target);
  } else {
    res.status(404).json({ error: "Demo file not found. Run: node generate_data.js" });
  }
});

/**
 * Sample file download endpoints
 */
app.get("/api/sample/csv", (req, res) => {
  const filePath = path.join(__dirname, "..", "sample_enrollments.csv");
  res.download(filePath, "sample_enrollments.csv");
});

app.get("/api/sample/json", (req, res) => {
  const filePath = path.join(__dirname, "..", "sample_enrollments.json");
  res.download(filePath, "sample_enrollments.json");
});

app.get("/api/sample/4000/csv", (req, res) => {
  const filePath = path.join(__dirname, "..", "sample_enrollments_4000.csv");
  res.download(filePath, "sample_enrollments_4000.csv");
});

app.get("/api/sample/4000/json", (req, res) => {
  const filePath = path.join(__dirname, "..", "sample_enrollments_4000.json");
  res.download(filePath, "sample_enrollments_4000.json");
});

// ─────────────────────────────────────────────
// Error handler
// ─────────────────────────────────────────────
app.use((err, req, res, next) => {
  if (err.code === "LIMIT_FILE_SIZE") {
    return res.status(413).json({ error: "File too large (max 10MB)" });
  }
  console.error("Unhandled error:", err);
  res.status(500).json({ error: err.message || "Internal server error" });
});

app.listen(PORT, () => {
  console.log(`\n🚀 API Gateway running at http://localhost:${PORT}`);
  console.log(`📊 Python solver expected at ${PYTHON_API}`);
  console.log(`\nEndpoints ready:`);
  console.log(`  POST http://localhost:${PORT}/api/upload`);
  console.log(`  POST http://localhost:${PORT}/api/export/excel`);
  console.log(`  POST http://localhost:${PORT}/api/export/html`);
  console.log(`  GET  http://localhost:${PORT}/api/demo/small`);
  console.log(`  GET  http://localhost:${PORT}/api/demo/realistic\n`);
});
