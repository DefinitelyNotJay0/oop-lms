import { useState } from "react";
import LandingPage from "./pages/LandingPage";
import LoginPage from "./pages/LoginPage";
import Dashboard from "./pages/Dashboard";
import Enrollment from "./pages/Enrollment";
import Grades from "./pages/Grades";
import Attendance from "./pages/Attendance";
import LearningHub from "./pages/LearningHub";
import "./styles/global.css";

export default function App() {
  const [page, setPage] = useState("landing");
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const navigate = (p) => setPage(p);

  const handleLogin = () => {
    setIsLoggedIn(true);
    setPage("dashboard");
  };

  const handleLogout = () => {
    setIsLoggedIn(false);
    setPage("landing");
  };

  if (!isLoggedIn) {
    if (page === "login") return <LoginPage onLogin={handleLogin} onNavigate={navigate} />;
    return <LandingPage onNavigate={navigate} />;
  }

  const portalPages = { Dashboard, Enrollment, Grades, Attendance, LearningHub };
  const currentPageKey = page.charAt(0).toUpperCase() + page.slice(1);
  const PageComponent = portalPages[currentPageKey] || Dashboard;

  return (
    <PageComponent
      currentPage={page}
      onNavigate={navigate}
      onLogout={handleLogout}
    />
  );
}
