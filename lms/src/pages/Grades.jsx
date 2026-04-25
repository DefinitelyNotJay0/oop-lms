import AppLayout from "../components/AppLayout";
import "../styles/grades.css";

const trend = [
  { sem: "1ST SEM 2023–24", gpa: "1.61", delta: "", units: "18 units" },
  { sem: "2ND SEM 2023–24", gpa: "1.45", delta: "↘", units: "19 units" },
  { sem: "1ST SEM 2024–25", gpa: "1.52", delta: "↗", units: "18 units" },
  { sem: "2ND SEM 2024–25", gpa: "1.38", delta: "↘", units: "21 units" },
];

const grades = [
  { code: "CS 311", name: "Data Structures & Algorithms", prelim: 92, midterm: 89, finals: null, standing: "1.50" },
  { code: "CS 322", name: "Database Management Systems", prelim: 95, midterm: 93, finals: null, standing: "1.25" },
  { code: "CS 331", name: "Operating Systems", prelim: 86, midterm: 88, finals: null, standing: "1.75" },
  { code: "MATH 215", name: "Discrete Mathematics", prelim: 90, midterm: 91, finals: null, standing: "1.50" },
  { code: "ENG 210", name: "Technical Writing", prelim: 94, midterm: 92, finals: null, standing: "1.25" },
];

export default function Grades({ currentPage, onNavigate, onLogout }) {
  return (
    <AppLayout currentPage={currentPage} onNavigate={onNavigate} onLogout={onLogout}>
      <h1 className="page-title">Academic record</h1>
      <p className="page-subtitle">1st Semester · A.Y. 2025–2026</p>

      {/* Top: GPA + trend */}
      <div className="grades-top">
        <div className="gpa-card">
          <div className="gpa-label">Cumulative GPA</div>
          <div className="gpa-value">1.42</div>
          <div className="gpa-track">Latin honors track ·<br />Magna Cum Laude</div>
        </div>

        <div className="trend-card">
          <div className="trend-title">GPA trend</div>
          <div className="trend-grid">
            {trend.map((t, i) => (
              <div className="trend-item" key={i}>
                <div className="trend-sem">{t.sem}</div>
                <div className="trend-gpa">
                  {t.gpa}
                  <span className="trend-delta">{t.delta}</span>
                </div>
                <div className="trend-units">{t.units}</div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Grades table */}
      <div className="grades-table-card grades-table">
        <div className="grades-table-header">
          <div className="grades-table-title">This semester</div>
        </div>
        <table>
          <thead>
            <tr>
              <th>Course</th>
              <th>Prelim</th>
              <th>Midterm</th>
              <th>Finals</th>
              <th>Standing</th>
            </tr>
          </thead>
          <tbody>
            {grades.map((g, i) => (
              <tr key={i}>
                <td>
                  <div className="grade-course-code">{g.code}</div>
                  <div className="grade-course-name">{g.name}</div>
                </td>
                <td className="grade-score">{g.prelim}</td>
                <td className="grade-score">{g.midterm}</td>
                <td className="grade-score pending">—</td>
                <td className="grade-standing">
                  <span className="standing-pill">{g.standing}</span>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
        <div className="grades-footnote">
          Grading scale: 1.00 (excellent) → 5.00 (failed). Final grades are tentative until end of term.
        </div>
      </div>
    </AppLayout>
  );
}
