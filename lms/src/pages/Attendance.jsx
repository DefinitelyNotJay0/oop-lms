import AppLayout from "../components/AppLayout";
import "../styles/attendance.css";

const recentActivity = [
  { course: "CS 311", date: "Apr 21", status: "present" },
  { course: "MATH ...", date: "Apr 21", status: "present" },
  { course: "ENG 210", date: "Apr 18", status: "late" },
  { course: "CS 322", date: "Apr 17", status: "present" },
  { course: "CS 331", date: "Apr 16", status: "absent" },
  { course: "CS 311", date: "Apr 15", status: "present" },
];

const courses = [
  { code: "CS 311", name: "Data Structures & Algorithms", pct: 90, present: 28, late: 2, absent: 1 },
  { code: "CS 322", name: "Database Management Systems", pct: 96, present: 22, late: 1, absent: 0 },
  { code: "CS 331", name: "Operating Systems", pct: 87, present: 26, late: 1, absent: 3 },
  { code: "MATH 215", name: "Discrete Mathematics", pct: 100, present: 24, late: 0, absent: 0 },
  { code: "ENG 210", name: "Technical Writing", pct: 90, present: 9, late: 0, absent: 1 },
];

const statusIcon = {
  present: { cls: "status-present", icon: "✓", labelCls: "label-present", label: "Present" },
  late: { cls: "status-late", icon: "⏱", labelCls: "label-late", label: "Late" },
  absent: { cls: "status-absent", icon: "✕", labelCls: "label-absent", label: "Absent" },
};

export default function Attendance({ currentPage, onNavigate, onLogout }) {
  return (
    <AppLayout currentPage={currentPage} onNavigate={onNavigate} onLogout={onLogout}>
      <h1 className="page-title">Attendance</h1>
      <p className="page-subtitle">Tracking your presence across all courses</p>

      <div className="attendance-top">
        {/* Overall ring */}
        <div className="attendance-overall">
          <div className="ring-wrapper">
            <svg className="ring-svg" width="100" height="100" viewBox="0 0 100 100">
              <circle className="ring-bg" cx="50" cy="50" r="40" />
              <circle className="ring-fill" cx="50" cy="50" r="40" />
            </svg>
            <div className="ring-text">
              <span className="ring-pct">93%</span>
            </div>
          </div>
          <div className="overall-status">Excellent</div>
          <div className="overall-note">Above the 85% requirement to take finals.</div>
        </div>

        {/* Recent activity */}
        <div className="recent-card">
          <div style={{ fontFamily: "var(--font-display)", fontSize: 17, fontWeight: 800, marginBottom: 16 }}>Recent activity</div>
          <div className="recent-grid">
            {recentActivity.map((r, i) => {
              const s = statusIcon[r.status];
              return (
                <div className="recent-item" key={i}>
                  <div className={`recent-status-icon ${s.cls}`}>{s.icon}</div>
                  <div>
                    <div className="recent-course">{r.course}</div>
                    <div className="recent-date">{r.date}</div>
                    <div className={`recent-status-label ${s.labelCls}`}>{s.label}</div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>

      {/* By course */}
      <h2 style={{ fontFamily: "var(--font-display)", fontSize: 20, fontWeight: 800, marginBottom: 16 }}>By course</h2>

      {courses.map((c, i) => (
        <div className="att-course-card" key={i}>
          <div className="att-course-header">
            <div className="att-course-name-block">
              <div className="att-course-code">{c.code}</div>
              <div className="att-course-name">{c.name}</div>
            </div>
            <div className={`att-pct ${c.pct >= 90 ? "good" : "warn"}`}>{c.pct}% <span style={{ fontSize: 13, fontFamily: "var(--font-body)", fontWeight: 400, color: "var(--neutral-400)" }}>attendance</span></div>
          </div>
          <div className="att-stats">
            <div className="att-stat">
              <span className="att-stat-value present">{c.present}</span>
              <span className="att-stat-label">Present</span>
            </div>
            <div className="att-stat">
              <span className="att-stat-value late">{c.late}</span>
              <span className="att-stat-label">Late</span>
            </div>
            <div className="att-stat">
              <span className="att-stat-value absent">{c.absent}</span>
              <span className="att-stat-label">Absent</span>
            </div>
          </div>
          <div className="att-bar">
            <div className="att-bar-fill" style={{ width: `${c.pct}%` }}></div>
          </div>
        </div>
      ))}
    </AppLayout>
  );
}
