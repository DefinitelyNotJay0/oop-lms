import "../styles/layout.css";

const navItems = [
  {
    key: "dashboard",
    label: "Dashboard",
    icon: (
      <svg viewBox="0 0 16 16" fill="currentColor">
        <rect x="1" y="1" width="6" height="6" rx="1.5" />
        <rect x="9" y="1" width="6" height="6" rx="1.5" />
        <rect x="1" y="9" width="6" height="6" rx="1.5" />
        <rect x="9" y="9" width="6" height="6" rx="1.5" />
      </svg>
    ),
  },
  {
    key: "enrollment",
    label: "Enrollment",
    icon: (
      <svg viewBox="0 0 16 16" fill="none" stroke="currentColor" strokeWidth="1.5">
        <rect x="2" y="2" width="12" height="12" rx="2" />
        <path d="M5 8h6M5 5h3M5 11h4" strokeLinecap="round" />
      </svg>
    ),
  },
  {
    key: "grades",
    label: "Grades",
    icon: (
      <svg viewBox="0 0 16 16" fill="none" stroke="currentColor" strokeWidth="1.5">
        <path d="M2 12 L6 7 L9 10 L13 4" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    ),
  },
  {
    key: "attendance",
    label: "Attendance",
    icon: (
      <svg viewBox="0 0 16 16" fill="none" stroke="currentColor" strokeWidth="1.5">
        <rect x="2" y="3" width="12" height="11" rx="2" />
        <path d="M5 1v4M11 1v4M2 7h12" strokeLinecap="round" />
      </svg>
    ),
  },
  {
    key: "learningHub",
    label: "Learning Hub",
    icon: (
      <svg viewBox="0 0 16 16" fill="none" stroke="currentColor" strokeWidth="1.5">
        <path d="M2 4 L8 2 L14 4 L8 6 Z" strokeLinejoin="round" />
        <path d="M4 6v5c0 1.5 4 2.5 4 2.5s4-1 4-2.5V6" strokeLinecap="round" />
        <path d="M14 4v5" strokeLinecap="round" />
      </svg>
    ),
  },
];

export default function AppLayout({ children, currentPage, onNavigate, onLogout }) {
  return (
    <div className="app-layout">
      <aside className="sidebar">
        <div className="sidebar-logo">
          <div className="logo-icon">🎓</div>
          <div>
            <div className="logo-text">Verdant</div>
            <div className="logo-sub">Student Portal</div>
          </div>
        </div>

        <div className="sidebar-section-label">Main</div>

        <nav className="sidebar-nav">
          {navItems.map((item) => (
            <button
              key={item.key}
              className={`sidebar-link ${currentPage === item.key ? "active" : ""}`}
              onClick={() => onNavigate(item.key)}
            >
              {item.icon}
              {item.label}
            </button>
          ))}
        </nav>

        <div className="sidebar-user">
          <div className="user-avatar">MR</div>
          <div className="user-info">
            <div className="user-name">Maya Reyes</div>
            <div className="user-id">STU-2024-0481</div>
          </div>
          <button className="user-settings" title="Settings" onClick={onLogout}>
            <svg width="14" height="14" viewBox="0 0 16 16" fill="none" stroke="currentColor" strokeWidth="1.5">
              <circle cx="8" cy="8" r="2.5" />
              <path d="M8 1v2M8 13v2M1 8h2M13 8h2M3.05 3.05l1.41 1.41M11.54 11.54l1.41 1.41M3.05 12.95l1.41-1.41M11.54 4.46l1.41-1.41" strokeLinecap="round" />
            </svg>
          </button>
        </div>
      </aside>

      <div className="main-content">
        <header className="topbar">
          <button className="topbar-toggle">
            <svg width="16" height="16" viewBox="0 0 16 16" fill="none" stroke="currentColor" strokeWidth="1.5">
              <rect x="2" y="3" width="12" height="10" rx="1.5" />
              <path d="M6 3v10" />
            </svg>
          </button>
          <div className="topbar-search">
            <svg width="13" height="13" viewBox="0 0 16 16" fill="none" stroke="currentColor" strokeWidth="1.5">
              <circle cx="7" cy="7" r="4.5" />
              <path d="M10.5 10.5 L14 14" strokeLinecap="round" />
            </svg>
            <input placeholder="Search courses, modules, classmates..." />
          </div>
          <div className="topbar-actions">
            <button className="notif-btn">
              <svg width="18" height="18" viewBox="0 0 16 16" fill="none" stroke="currentColor" strokeWidth="1.5">
                <path d="M8 1.5 C5.5 1.5 4 3.5 4 5.5 L4 9.5 L2.5 11 L13.5 11 L12 9.5 L12 5.5 C12 3.5 10.5 1.5 8 1.5Z" />
                <path d="M6.5 11.5 C6.5 12.3 7.2 13 8 13 C8.8 13 9.5 12.3 9.5 11.5" />
              </svg>
              <span className="notif-dot"></span>
            </button>
          </div>
        </header>

        <div className="page-body">{children}</div>
      </div>
    </div>
  );
}
