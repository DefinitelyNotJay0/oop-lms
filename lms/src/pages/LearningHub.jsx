import AppLayout from "../components/AppLayout";
import "../styles/learningHub.css";

const dueItems = [
  { course: "CS 331", icon: "📝", type: "quiz", name: "Quiz 4 — Process...", date: "Tomorrow · 13:00", urgent: true },
  { course: "CS 311", icon: "🧪", type: "lab", name: "Lab 6 — AVL Tree...", date: "Apr 24 · 23:59", urgent: true },
  { course: "MATH 215", icon: "📄", type: "assignment", name: "Problem Set 8", date: "Apr 25 · 23:59", urgent: false },
  { course: "CS 322", icon: "👥", type: "project", name: "Group Project Milestone 2", date: "Apr 26 · 18:00", urgent: false },
];

const courses = [
  { code: "CS 311", name: "Data Structures & Algorithms", professor: "Dr. L. Tanaka", modules: "8 of 12 modules", pct: 68, nextName: "Lab 6 — AVL Trees", nextDue: "Due Apr 24" },
  { code: "CS 322", name: "Database Management Systems", professor: "Prof. R. Cruz", modules: "7 of 10 modules", pct: 75, nextName: "Project Milestone 2", nextDue: "Due Apr 26" },
  { code: "CS 331", name: "Operating Systems", professor: "Dr. M. Okafor", modules: "7 of 14 modules", pct: 54, nextName: "Quiz 4 — Scheduling", nextDue: "Due Apr 23" },
  { code: "MATH 215", name: "Discrete Mathematics", professor: "Dr. P. Singh", modules: "7 of 9 modules", pct: 82, nextName: "Problem Set 8", nextDue: "Due Apr 25" },
];

export default function LearningHub({ currentPage, onNavigate, onLogout }) {
  return (
    <AppLayout currentPage={currentPage} onNavigate={onNavigate} onLogout={onLogout}>
      <h1 className="page-title">Learning Hub</h1>
      <p className="page-subtitle">Course materials, modules, and submissions</p>

      {/* Due this week */}
      <div className="due-banner">
        <div className="due-banner-header">
          📅 Due this week
        </div>
        <div className="due-items">
          {dueItems.map((d, i) => (
            <div className="due-item" key={i}>
              <div className="due-item-course">
                <span className="due-item-type-icon">{d.icon}</span>
                <span className="due-item-code">{d.course}</span>
              </div>
              <div className="due-item-name">{d.name}</div>
              <div className={`due-item-date ${d.urgent ? "urgent" : ""}`}>{d.date}</div>
            </div>
          ))}
        </div>
      </div>

      {/* My courses */}
      <h2 style={{ fontFamily: "var(--font-display)", fontSize: 20, fontWeight: 800, marginBottom: 16 }}>My courses</h2>
      <div className="hub-courses-grid">
        {courses.map((c, i) => (
          <div className="hub-course-card" key={i}>
            <div className="hub-course-header">
              <div className="hub-course-code">{c.code}</div>
              <div className="hub-course-name">{c.name}</div>
            </div>
            <div className="hub-course-body">
              <div className="hub-professor">{c.professor}</div>
              <div className="hub-progress-row">
                <span>{c.modules}</span>
                <span className="hub-progress-pct">{c.pct}%</span>
              </div>
              <div className="hub-progress-bar">
                <div className="hub-progress-fill" style={{ width: `${c.pct}%` }}></div>
              </div>
              <div className="hub-next-up">
                <div>
                  <div className="hub-next-label">Next Up</div>
                  <div className="hub-next-name">{c.nextName}</div>
                  <div className="hub-next-due">{c.nextDue}</div>
                </div>
                <button className="btn-open">Open</button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </AppLayout>
  );
}
