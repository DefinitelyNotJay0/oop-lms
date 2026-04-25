import "../styles/landing.css";

export default function LandingPage({ onNavigate }) {
  return (
    <div className="landing">
      {/* Nav */}
      <nav className="landing-nav">
        <div className="landing-nav-logo">
          <div className="logo-icon" style={{ width: 34, height: 34, background: "var(--teal-600)", borderRadius: 8, display: "flex", alignItems: "center", justifyContent: "center", color: "white", fontSize: 17 }}>🎓</div>
          <div>
            <div style={{ fontFamily: "var(--font-display)", fontWeight: 700, fontSize: 16 }}>Verdant</div>
            <div style={{ fontSize: 10, color: "var(--neutral-500)" }}>Student Portal</div>
          </div>
        </div>
        <div className="landing-nav-links">
          <a>Features</a>
          <a>About</a>
          <a>Contact</a>
        </div>
        <button className="btn-primary" onClick={() => onNavigate("login")}>
          Login →
        </button>
      </nav>

      {/* Hero */}
      <section className="landing-hero">
        <div className="hero-pill">
          <span className="hero-dot"></span>
          A.Y. 2025–2026 · 1st Semester is open
        </div>
        <h1 className="hero-title">A calmer way to handle</h1>
        <div className="hero-title-highlight"></div>
        <p className="hero-desc">
          Verdant brings enrollment, grades, attendance, and learning into one quiet, modern portal — built for students, easy on the eyes.
        </p>
        <div className="hero-actions">
          <button className="btn-primary" onClick={() => onNavigate("login")}>
            Login to portal →
          </button>
          <button className="btn-ghost">Explore features</button>
        </div>
        <div className="hero-stats">
          <div className="hero-stat">
            <span className="stat-number">4</span>
            <span className="stat-label">Core modules</span>
          </div>
          <div className="hero-stat">
            <span className="stat-number">1.42</span>
            <span className="stat-label">Avg. GPA tracked</span>
          </div>
          <div className="hero-stat">
            <span className="stat-number">24/7</span>
            <span className="stat-label">Always available</span>
          </div>
        </div>
      </section>

      {/* Features */}
      <section className="landing-features">
        <p className="features-eyebrow">Everything in one portal</p>
        <h2 className="features-title">Built around your week.</h2>
        <div className="features-grid">
          <div className="feature-card">
            <div className="feature-icon">📚</div>
            <div className="feature-name">Enrollment</div>
            <p className="feature-desc">Browse open courses, check prerequisites, and lock in your units in seconds.</p>
          </div>
          <div className="feature-card">
            <div className="feature-icon">📈</div>
            <div className="feature-name">Grades</div>
            <p className="feature-desc">Live GPA tracking with prelim, midterm, and finals — all in one calm view.</p>
          </div>
          <div className="feature-card">
            <div className="feature-icon">📅</div>
            <div className="feature-name">Attendance</div>
            <p className="feature-desc">Per-course present, absent, and late breakdown with visual progress rings.</p>
          </div>
          <div className="feature-card">
            <div className="feature-icon">✨</div>
            <div className="feature-name">Learning Hub</div>
            <p className="feature-desc">Course modules, materials, and deadlines neatly organized by week.</p>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="landing-cta">
        <div className="cta-box">
          <div>
            <h2 className="cta-title">Designed for focus, not friction.</h2>
            <p className="cta-desc">
              A school project portal that students actually enjoy opening — soft palette, clear hierarchy, and zero noise.
            </p>
            <button className="btn-primary" onClick={() => onNavigate("login")}>
              Sign in to continue →
            </button>
          </div>
          <div className="cta-badges">
            <div className="cta-badge">
              <div className="cta-badge-icon">🔐</div>
              <span className="cta-badge-label">Secure school login</span>
            </div>
            <div className="cta-badge">
              <div className="cta-badge-icon">⏱️</div>
              <span className="cta-badge-label">Saves you time daily</span>
            </div>
            <div className="cta-badge">
              <div className="cta-badge-icon">👥</div>
              <span className="cta-badge-label">Built with students</span>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="landing-footer">
        <span className="footer-copy">© 2026 Verdant Student Portal · Calm by design.</span>
        <span className="footer-right">Built for school project · React · Spring Boot ready</span>
      </footer>
    </div>
  );
}
