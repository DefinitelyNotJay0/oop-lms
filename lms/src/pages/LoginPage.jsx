import { useState } from "react";
import "../styles/login.css";

export default function LoginPage({ onLogin, onNavigate }) {
  const [email, setEmail] = useState("maya.reyes@school.edu");
  const [password, setPassword] = useState("••••••••••");
  const [error, setError] = useState("");
  const [remember, setRemember] = useState(true);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!email || !password) {
      setError("Please fill in all fields.");
      return;
    }
    onLogin();
  };

  return (
    <div className="login-page">
      {/* Nav */}
      <nav className="login-nav">
        <div style={{ display: "flex", alignItems: "center", gap: 10, cursor: "pointer" }} onClick={() => onNavigate("landing")}>
          <div style={{ width: 32, height: 32, background: "var(--teal-600)", borderRadius: 8, display: "flex", alignItems: "center", justifyContent: "center", color: "white", fontSize: 16 }}>🎓</div>
          <div>
            <div style={{ fontFamily: "var(--font-display)", fontWeight: 700, fontSize: 15 }}>Verdant</div>
            <div style={{ fontSize: 10, color: "var(--neutral-500)" }}>Student Portal</div>
          </div>
        </div>
        <div className="login-nav-links">
          <a>Features</a>
          <a>About</a>
          <a>Help</a>
        </div>
        <button className="btn-preview">Preview</button>
      </nav>

      {/* Body */}
      <div className="login-body">
        {/* Left */}
        <div className="login-left">
          <div className="login-pill">
            <span className="hero-dot" style={{ width: 6, height: 6, background: "var(--teal-500)", borderRadius: "50%", display: "inline-block" }}></span>
            A.Y. 2025–2026 · 1st Semester is open
          </div>
          <h1 className="login-title">Your calm,<br />modern</h1>
          <div className="login-title-bar"></div>
          <p className="login-desc">
            Enrollment, grades, attendance, and learning — quietly organized in one place, so you can focus on what actually matters.
          </p>
          <div className="login-feature-grid">
            <div className="login-feature-item">
              <div className="login-feature-icon">📚</div>
              <div className="login-feature-name">Enrollment</div>
              <div className="login-feature-sub">Pick units in seconds</div>
            </div>
            <div className="login-feature-item">
              <div className="login-feature-icon">📈</div>
              <div className="login-feature-name">Grades</div>
              <div className="login-feature-sub">Live GPA tracking</div>
            </div>
            <div className="login-feature-item">
              <div className="login-feature-icon">📅</div>
              <div className="login-feature-name">Attendance</div>
              <div className="login-feature-sub">Per-course breakdown</div>
            </div>
            <div className="login-feature-item">
              <div className="login-feature-icon">✨</div>
              <div className="login-feature-name">LMS</div>
              <div className="login-feature-sub">Modules & deadlines</div>
            </div>
          </div>
        </div>

        {/* Right: form */}
        <div className="login-card">
          <h2 className="login-card-title">Sign in</h2>
          <p className="login-card-sub">Use your school account to continue.</p>

          {error && <div className="login-error">{error}</div>}

          <form onSubmit={handleSubmit}>
            <div className="form-field">
              <label className="form-label">Student email</label>
              <div className="form-input-wrap">
                <svg width="14" height="14" viewBox="0 0 16 16" fill="none" stroke="currentColor" strokeWidth="1.5">
                  <rect x="2" y="4" width="12" height="9" rx="1.5" />
                  <path d="M2 6l6 4 6-4" />
                </svg>
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="you@school.edu"
                />
              </div>
            </div>

            <div className="form-field">
              <label className="form-label">
                Password
                <a>Forgot?</a>
              </label>
              <div className="form-input-wrap">
                <svg width="14" height="14" viewBox="0 0 16 16" fill="none" stroke="currentColor" strokeWidth="1.5">
                  <rect x="4" y="7" width="8" height="7" rx="1.5" />
                  <path d="M5.5 7V5a2.5 2.5 0 015 0v2" />
                </svg>
                <input
                  type="password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  placeholder="••••••••"
                />
              </div>
            </div>

            <label className="form-checkbox">
              <input type="checkbox" checked={remember} onChange={(e) => setRemember(e.target.checked)} />
              <span>Keep me signed in on this device</span>
            </label>

            <button type="submit" className="btn-signin">
              Sign in to portal →
            </button>
          </form>

          <div className="login-or">OR</div>

          <button className="btn-guest" onClick={onLogin}>Continue as guest</button>

          <div className="login-register">
            New here? <a>Request an account</a>
          </div>
        </div>
      </div>

      {/* Footer */}
      <footer style={{ padding: "16px 48px", borderTop: "1px solid var(--neutral-200)", display: "flex", justifyContent: "space-between" }}>
        <span style={{ fontSize: 12, color: "var(--neutral-400)" }}>© 2026 Verdant Student Portal · Calm by design.</span>
        <span style={{ fontSize: 12, color: "var(--neutral-400)" }}>Built for school project · React · Spring Boot ready</span>
      </footer>
    </div>
  );
}
