import AppLayout from "../components/AppLayout";
import "../styles/dashboard.css";

const todayClasses = [
  { tag: "MWF", tagClass: "mwf", time: "9:00", name: "Data Structures & Algorithms", meta: "CS 311 · Eng 204 · Dr. L. Tanaka", units: "3 units" },
  { tag: "TTH", tagClass: "tth", time: "10:30", name: "Database Management Sys...", meta: "CS 322 · Eng 308 · Prof. R. Cruz", units: "3 units" },
  { tag: "MWF", tagClass: "mwf", time: "13:00", name: "Operating Systems", meta: "CS 331 · Eng 211 · Dr. M. Okafor", units: "3 units" },
  { tag: "TTH", tagClass: "tth", time: "8:00", name: "Discrete Mathematics", meta: "MATH 215 · Sci 102 · Dr. P. Singh", units: "3 units" },
];

const upcoming = [
  { course: "CS 331", type: "quiz", name: "Quiz 4 — Process Scheduling", due: "Due · Tomorrow · 13:00", urgent: true },
  { course: "CS 311", type: "lab", name: "Lab 6 — AVL Tree implementation", due: "Due · Apr 24 · 23:59", urgent: true },
  { course: "MATH 215", type: "assignment", name: "Problem Set 8", due: "Due · Apr 25 · 23:59", urgent: false },
  { course: "CS 322", type: "project", name: "Group Project Milestone 2", due: "Due · Apr 26 · 18:00", urgent: false },
];

const progress = [
  { name: "Data Structures & Algorithms", pct: 68 },
  { name: "Database Management Systems", pct: 75 },
  { name: "Operating Systems", pct: 54 },
  { name: "Discrete Mathematics", pct: 82 },
];

const announcements = [
  { source: "Registrar's Office", title: "Pre-enrollment for next semester opens May 5", time: "2h ago" },
  { source: "Dr. L. Tanaka", title: "CS 311 — Lab session moved to Eng 204", time: "Yesterday" },
  { source: "Library", title: "Extended hours during finals week", time: "2d ago" },
];

export default function Dashboard({ currentPage, onNavigate, onLogout }) {
  return (
    <AppLayout currentPage={currentPage} onNavigate={onNavigate} onLogout={onLogout}>
      <h1 style={{ fontFamily: "var(--font-display)", fontSize: 36, fontWeight: 800, marginBottom: 4 }}>
        Good morning, Maya.
      </h1>
      <p className="page-subtitle">BS Computer Science · 3rd Year · 1st Semester · A.Y. 2025–2026</p>

      {/* Stat cards */}
      <div className="stat-cards">
        <div className="stat-card">
          <div className="stat-card-header">
            <div className="stat-icon">📊</div>
            <span className="stat-delta">↗ +0.10</span>
          </div>
          <span className="stat-value">1.42</span>
          <span className="stat-label">Current GPA</span>
          <span className="stat-sub">Top 12% of cohort</span>
        </div>
        <div className="stat-card">
          <div className="stat-card-header">
            <div className="stat-icon">📚</div>
          </div>
          <span className="stat-value">18</span>
          <span className="stat-label">Enrolled units</span>
          <span className="stat-sub">6 courses</span>
        </div>
        <div className="stat-card">
          <div className="stat-card-header">
            <div className="stat-icon">📅</div>
          </div>
          <span className="stat-value">93%</span>
          <span className="stat-label">Attendance</span>
          <span className="stat-sub">Past 30 days</span>
        </div>
        <div className="stat-card">
          <div className="stat-card-header">
            <div className="stat-icon">⏱️</div>
            <span className="stat-delta warn">this week</span>
          </div>
          <span className="stat-value">4</span>
          <span className="stat-label">Pending tasks</span>
          <span className="stat-sub">This week</span>
        </div>
      </div>

      <div className="dashboard-grid">
        <div>
          {/* Today's classes */}
          <div className="section-card">
            <div className="section-header">
              <div>
                <div className="section-title">Today's classes</div>
                <div className="section-date">Monday, April 21</div>
              </div>
              <button className="section-link" onClick={() => onNavigate("enrollment")}>
                All courses ›
              </button>
            </div>
            {todayClasses.map((c, i) => (
              <div className="class-item" key={i}>
                <span className={`class-tag ${c.tagClass}`}>{c.tag}</span>
                <span className="class-time">{c.time}</span>
                <div className="class-info">
                  <div className="class-name">{c.name}</div>
                  <div className="class-meta">{c.meta}</div>
                </div>
                <span className="class-units">{c.units}</span>
              </div>
            ))}
          </div>

          {/* Course progress */}
          <div className="section-card">
            <div className="section-header">
              <div className="section-title">Course progress</div>
            </div>
            {progress.map((p, i) => (
              <div className="progress-item" key={i}>
                <div className="progress-header">
                  <span>{p.name}</span>
                  <span className="progress-pct">{p.pct}%</span>
                </div>
                <div className="progress-bar">
                  <div className="progress-fill" style={{ width: `${p.pct}%` }}></div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Right sidebar */}
        <div>
          {/* Upcoming */}
          <div className="section-card" style={{ marginBottom: 20 }}>
            <div className="section-header">
              <div className="section-title">Upcoming</div>
              <button className="section-link">View all</button>
            </div>
            {upcoming.map((u, i) => (
              <div className="upcoming-item" key={i}>
                <div className="upcoming-tags">
                  <span className="course-tag">{u.course}</span>
                  <span className="type-tag">{u.type}</span>
                </div>
                <div className="upcoming-name">{u.name}</div>
                <div className={`upcoming-due ${u.urgent ? "urgent" : ""}`}>{u.due}</div>
              </div>
            ))}
          </div>

          {/* Announcements */}
          <div className="section-card">
            <div className="section-header">
              <div className="section-title">
                <span className="ann-dot"></span>Announcements
              </div>
            </div>
            {announcements.map((a, i) => (
              <div className="announcement-item" key={i}>
                <div className="ann-source">{a.source}</div>
                <div className="ann-title">{a.title}</div>
                <div className="ann-time">{a.time}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </AppLayout>
  );
}
