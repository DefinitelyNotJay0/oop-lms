import AppLayout from "../components/AppLayout";
import "../styles/enrollment.css";

const enrolledCourses = [
  { code: "CS 311", name: "Data Structures & Algorithms", schedule: "MWF 9:00–10:00", room: "Eng 204", professor: "Dr. L. Tanaka", units: 3 },
  { code: "CS 322", name: "Database Management Systems", schedule: "TTh 10:30–12:00", room: "Eng 308", professor: "Prof. R. Cruz", units: 3 },
  { code: "CS 331", name: "Operating Systems", schedule: "MWF 13:00–14:00", room: "Eng 211", professor: "Dr. M. Okafor", units: 3 },
  { code: "MATH 215", name: "Discrete Mathematics", schedule: "TTh 8:00–9:30", room: "Sci 102", professor: "Dr. P. Singh", units: 3 },
  { code: "ENG 210", name: "Technical Writing", schedule: "F 14:00–17:00", room: "Hum 121", professor: "Prof. A. Mendoza", units: 3 },
  { code: "PE 3", name: "Movement Studies", schedule: "W 15:00–17:00", room: "Gym B", professor: "Coach J. Lim", units: 2 },
];

const availableCourses = [
  { code: "CS 401", name: "Software Engineering", units: 3, prereq: "CS 322", slots: 12 },
  { code: "CS 412", name: "Machine Learning Basics", units: 3, prereq: "MATH 215", slots: 8 },
  { code: "CS 423", name: "Web Systems & Tech", units: 3, prereq: "CS 322", slots: 18 },
  { code: "PHIL 102", name: "Ethics in Technology", units: 3, prereq: "—", slots: 25 },
];

const ClockIcon = () => (
  <svg width="12" height="12" viewBox="0 0 16 16" fill="none" stroke="currentColor" strokeWidth="1.5">
    <circle cx="8" cy="8" r="6" />
    <path d="M8 5v3.5l2.5 1.5" strokeLinecap="round" />
  </svg>
);
const RoomIcon = () => (
  <svg width="12" height="12" viewBox="0 0 16 16" fill="none" stroke="currentColor" strokeWidth="1.5">
    <path d="M8 2C5.8 2 4 3.8 4 6c0 3.5 4 8 4 8s4-4.5 4-8c0-2.2-1.8-4-4-4z" />
    <circle cx="8" cy="6" r="1.5" />
  </svg>
);
const PersonIcon = () => (
  <svg width="12" height="12" viewBox="0 0 16 16" fill="none" stroke="currentColor" strokeWidth="1.5">
    <circle cx="8" cy="5.5" r="2.5" />
    <path d="M3 14c0-2.8 2.2-4.5 5-4.5s5 1.7 5 4.5" strokeLinecap="round" />
  </svg>
);

function getSlotsClass(slots) {
  if (slots <= 8) return "slots-warn";
  if (slots <= 3) return "slots-low";
  return "slots-good";
}

export default function Enrollment({ currentPage, onNavigate, onLogout }) {
  return (
    <AppLayout currentPage={currentPage} onNavigate={onNavigate} onLogout={onLogout}>
      <h1 className="page-title">Enrollment</h1>
      <p className="page-subtitle">1st Semester · A.Y. 2025–2026 · 6 courses · 18 units</p>

      {/* Banner */}
      <div className="enrollment-banner">
        <div className="enrollment-banner-left">
          <div className="enrollment-banner-label">Current load</div>
          <div className="enrollment-banner-units">18 of 21 units</div>
          <div className="enrollment-banner-note">You may add up to 3 more units this semester.</div>
        </div>
        <button className="btn-slip">View enrollment slip</button>
      </div>

      {/* Enrolled courses */}
      <h2 style={{ fontFamily: "var(--font-display)", fontSize: 20, fontWeight: 800, marginBottom: 16 }}>Currently enrolled</h2>
      <div className="course-grid">
        {enrolledCourses.map((c, i) => (
          <div className="course-card" key={i}>
            <div className="course-card-header">
              <div>
                <div className="course-code">{c.code}</div>
                <div className="course-name">{c.name}</div>
              </div>
              <span className="enrolled-badge">✓ Enrolled</span>
            </div>
            <div className="course-details">
              <div className="course-detail"><ClockIcon /> {c.schedule}</div>
              <div className="course-detail"><RoomIcon /> {c.room}</div>
              <div className="course-detail"><PersonIcon /> {c.professor}</div>
            </div>
            <div className="course-footer">
              <span className="course-units">{c.units} units</span>
              <button className="btn-details">Details</button>
            </div>
          </div>
        ))}
      </div>

      {/* Available courses */}
      <div className="available-table">
        <div className="available-table-header">
          <div className="available-table-title">Available courses</div>
        </div>
        <table>
          <thead>
            <tr>
              <th>Code</th>
              <th>Title</th>
              <th>Units</th>
              <th>Prereq</th>
              <th>Slots</th>
              <th></th>
            </tr>
          </thead>
          <tbody>
            {availableCourses.map((c, i) => (
              <tr key={i}>
                <td className="td-code">{c.code}</td>
                <td style={{ fontWeight: 500 }}>{c.name}</td>
                <td>{c.units}</td>
                <td className="td-prereq">{c.prereq}</td>
                <td>
                  <span className={`slots-badge ${getSlotsClass(c.slots)}`}>{c.slots} left</span>
                </td>
                <td>
                  <button className="btn-add">+ Add</button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </AppLayout>
  );
}
