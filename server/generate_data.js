/**
 * Member 2: Synthetic Data Generator — 4,000 Students Campus Scale
 * =================================================================
 * Generates realistic university enrollment datasets:
 *   - 4,000 students across 8 engineering branches
 *   - 48 courses (common core + branch-specific disciplines)
 *   - Realistic conflict density for Welsh-Powell graph coloring validation
 *
 * Output files:
 *   - server/data/demo_4000.csv          (4,000 students, 48 courses, ~20,000 enrollments)
 *   - server/data/demo_vit_realistic.csv (identical 4,000 student dataset for 1-click test)
 *   - server/data/demo_small.csv         (30 students, 6 courses for instant verification)
 *
 * Run: node generate_data.js
 */

const fs = require("fs");
const path = require("path");

// ─────────────────────────────────────────────────────────────
// 48 Courses Catalogue across 8 Engineering Disciplines
// ─────────────────────────────────────────────────────────────

const COURSES = {
  // Common Core (high conflict density across all branches)
  COMMON: [
    { code: "MAT1001", name: "Calculus & Linear Algebra" },
    { code: "MAT2001", name: "Differential Equations & Complex Variables" },
    { code: "PHY1001", name: "Engineering Physics" },
    { code: "CHY1001", name: "Engineering Chemistry" },
    { code: "CSE1001", name: "Problem Solving & Python Programming" },
    { code: "ENG1001", name: "Technical English & Communication" },
    { code: "EEE1001", name: "Basic Electrical & Electronics Engineering" },
    { code: "ENV1001", name: "Environmental Science & Sustainability" },
  ],

  // Computer Science & Engineering (CSE)
  CSE: [
    { code: "CSE2001", name: "Data Structures & Algorithms" },
    { code: "CSE2002", name: "Object Oriented Programming in Java" },
    { code: "CSE3001", name: "Database Management Systems" },
    { code: "CSE3002", name: "Operating Systems Principles" },
    { code: "CSE3003", name: "Design & Analysis of Algorithms" },
    { code: "CSE4001", name: "Computer Networks & Protocols" },
    { code: "CSE4002", name: "Theory of Computation" },
    { code: "CSE4003", name: "Compiler Design" },
  ],

  // Information Technology (IT)
  IT: [
    { code: "ITE2001", name: "Web Application Development" },
    { code: "ITE3001", name: "Cloud Computing & Virtualization" },
    { code: "ITE3002", name: "Information Security & Cryptography" },
    { code: "ITE4001", name: "Mobile Application Engineering" },
    { code: "ITE4002", name: "Distributed Systems & Middleware" },
  ],

  // Artificial Intelligence & Data Science (AIDS)
  AIDS: [
    { code: "AID2001", name: "Artificial Intelligence Foundations" },
    { code: "AID3001", name: "Machine Learning & Predictive Modeling" },
    { code: "AID3002", name: "Deep Learning & Neural Networks" },
    { code: "AID4001", name: "Natural Language Processing" },
    { code: "AID4002", name: "Big Data Analytics & Data Lakes" },
  ],

  // Electronics & Communication Engineering (ECE)
  ECE: [
    { code: "ECE2001", name: "Signals & Systems" },
    { code: "ECE2002", name: "Electronic Devices & Semiconductor Circuits" },
    { code: "ECE3001", name: "Digital Signal Processing" },
    { code: "ECE3002", name: "VLSI Design & System-on-Chip" },
    { code: "ECE3003", name: "Microprocessors & Embedded Systems" },
    { code: "ECE4001", name: "Wireless & Cellular Communications" },
    { code: "ECE4002", name: "Electromagnetic Fields & Wave Propagation" },
  ],

  // Electrical & Electronics Engineering (EEE)
  EEE: [
    { code: "EEE2001", name: "Electric Circuit Theory & Analysis" },
    { code: "EEE2002", name: "Electrical Machines & Transformers" },
    { code: "EEE3001", name: "Power Electronics & Converters" },
    { code: "EEE3002", name: "Control Systems Engineering" },
    { code: "EEE4001", name: "Power System Analysis & Grid Protection" },
  ],

  // Mechanical Engineering (MECH)
  MECH: [
    { code: "MEC2001", name: "Engineering Mechanics & Statics" },
    { code: "MEC2002", name: "Engineering Thermodynamics" },
    { code: "MEC3001", name: "Fluid Mechanics & Turbo Machinery" },
    { code: "MEC3002", name: "Manufacturing Processes & CNC Machining" },
    { code: "MEC4001", name: "Heat & Mass Transfer" },
  ],

  // Civil Engineering (CIVIL)
  CIVIL: [
    { code: "CIV2001", name: "Strength of Materials & Solid Mechanics" },
    { code: "CIV2002", name: "Surveying & Geomatics Engineering" },
    { code: "CIV3001", name: "Structural Analysis & Reinforced Concrete" },
    { code: "CIV3002", name: "Concrete Technology & Construction Management" },
    { code: "CIV4001", name: "Geotechnical Engineering & Foundation Design" },
  ],

  // Chemical Engineering (CHEM)
  CHEM: [
    { code: "CHM2001", name: "Chemical Process Principles & Calculations" },
    { code: "CHM2002", name: "Chemical Engineering Thermodynamics" },
    { code: "CHM3001", name: "Fluid Flow & Heat Transfer Operations" },
    { code: "CHM3002", name: "Mass Transfer Operations & Separation" },
  ]
};

// ─────────────────────────────────────────────────────────────
// Branch Student Distribution (Total: 4,000 Students)
// ─────────────────────────────────────────────────────────────
const BRANCH_STUDENT_COUNTS = [
  { prefix: "CSE",  count: 850, deptCourses: COURSES.CSE,   commonSlice: [0, 1, 2, 4, 5] },
  { prefix: "IT",   count: 500, deptCourses: COURSES.IT,    commonSlice: [0, 1, 3, 4, 7] },
  { prefix: "AIDS", count: 450, deptCourses: COURSES.AIDS,  commonSlice: [0, 1, 2, 4, 6] },
  { prefix: "ECE",  count: 650, deptCourses: COURSES.ECE,   commonSlice: [0, 1, 2, 4, 6] },
  { prefix: "EEE",  count: 450, deptCourses: COURSES.EEE,   commonSlice: [0, 1, 2, 6, 7] },
  { prefix: "MECH", count: 550, deptCourses: COURSES.MECH,  commonSlice: [0, 1, 2, 6, 7] },
  { prefix: "CIV",  count: 350, deptCourses: COURSES.CIVIL, commonSlice: [0, 1, 3, 5, 7] },
  { prefix: "CHM",  count: 200, deptCourses: COURSES.CHEM,  commonSlice: [0, 1, 3, 5, 7] }
];

function rowsToCSV(rows) {
  const header = "student_id,course_code,course_name";
  const lines = rows.map(r => `${r.student_id},${r.course_code},"${r.course_name}"`);
  return [header, ...lines].join("\n");
}

function ensureDir(dir) {
  if (!fs.existsSync(dir)) fs.mkdirSync(dir, { recursive: true });
}

// ─────────────────────────────────────────────────────────────
// Generator for 4,000 Students
// ─────────────────────────────────────────────────────────────
function generate4000Students() {
  const allRows = [];
  let totalStudentCheck = 0;

  BRANCH_STUDENT_COUNTS.forEach(b => {
    totalStudentCheck += b.count;
    const branchCommonCourses = b.commonSlice.map(idx => COURSES.COMMON[idx]);

    for (let i = 1; i <= b.count; i++) {
      const studentId = `${b.prefix}${String(i).padStart(4, "0")}`;

      // Pick 2 common core courses for this student
      const shuffledCommon = [...branchCommonCourses].sort(() => Math.random() - 0.5);
      const studentCommon = shuffledCommon.slice(0, 2);

      // Pick 3 to 4 core department courses
      const numDeptCourses = Math.floor(Math.random() * 2) + 3; // 3 or 4 courses
      const shuffledDept = [...b.deptCourses].sort(() => Math.random() - 0.5);
      const studentDept = shuffledDept.slice(0, Math.min(numDeptCourses, b.deptCourses.length));

      // Total enrolled courses = 5 to 6 courses per student
      const enrolledCourses = [...studentCommon, ...studentDept];

      enrolledCourses.forEach(c => {
        allRows.push({
          student_id: studentId,
          course_code: c.code,
          course_name: c.name
        });
      });
    }
  });

  console.log(`Generated enrollment records for ${totalStudentCheck} students.`);
  return allRows;
}

// ─────────────────────────────────────────────────────────────
// Small Demo Dataset (30 Students)
// ─────────────────────────────────────────────────────────────
function generateSmall() {
  const smallCourses = [
    { code: "CSE2001", name: "Data Structures & Algorithms" },
    { code: "MAT2001", name: "Differential Equations & Complex Variables" },
    { code: "PHY1001", name: "Engineering Physics" },
    { code: "CHY1001", name: "Engineering Chemistry" },
    { code: "CSE2002", name: "Object Oriented Programming in Java" },
    { code: "MAT1001", name: "Calculus & Linear Algebra" },
  ];

  const rows = [];
  for (let i = 1; i <= 30; i++) {
    const sid = `S${String(i).padStart(4, "0")}`;
    const numCourses = Math.floor(Math.random() * 3) + 3; // 3-5 courses
    const shuffled = [...smallCourses].sort(() => Math.random() - 0.5);
    shuffled.slice(0, numCourses).forEach(c => {
      rows.push({ student_id: sid, course_code: c.code, course_name: c.name });
    });
  }
  return rows;
}

// ─────────────────────────────────────────────────────────────
// Main Execution
// ─────────────────────────────────────────────────────────────
const dataDir = path.join(__dirname, "data");
ensureDir(dataDir);

// 1. Small dataset
const smallRows = generateSmall();
fs.writeFileSync(path.join(dataDir, "demo_small.csv"), rowsToCSV(smallRows), "utf-8");
console.log(`✅ [1/3] demo_small.csv written (${smallRows.length} rows, 30 students)`);

// 2. 4,000 students dataset
const largeRows = generate4000Students();
const largeCSV = rowsToCSV(largeRows);

fs.writeFileSync(path.join(dataDir, "demo_4000.csv"), largeCSV, "utf-8");
console.log(`✅ [2/3] demo_4000.csv written (${largeRows.length} rows, 4,000 students, 48 courses)`);

// 3. Keep demo_vit_realistic.csv matching the 4,000 dataset for seamless 1-click test
fs.writeFileSync(path.join(dataDir, "demo_vit_realistic.csv"), largeCSV, "utf-8");
console.log(`✅ [3/3] demo_vit_realistic.csv updated with 4,000 students dataset`);
