import { useEffect, useState } from "react";
import Navbar from "./components/Navbar";
import Sidebar from "./components/Sidebar";
import StatsCards from "./components/StatsCards";
import EventChart from "./components/EventChart";
import RecentActivity from "./components/RecentActivity";

function App() {
  const [theme, setTheme] = useState(localStorage.getItem("theme") || "light");

  const [openSideBar, setOpenSideBar] = useState(false);
  const [activePage, setActivePage] = useState("dashboard");

  useEffect(() => {
    if (theme === "dark") {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  }, [theme]);

  const handleToggleTheme = () => {
    setTheme((prev) => {
      const newTheme = prev === "light" ? "dark" : "light";
      localStorage.setItem("theme", newTheme);
      return newTheme;
    });
  };

  const handleToggleSidebar = () => {
    setOpenSideBar((prev) => !prev);
  };

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar
        theme={theme}
        onToggleTheme={handleToggleTheme}
        onToggleSidebar={handleToggleSidebar}
      />

      <div className="flex min-h-screen">
        <Sidebar
          isOpen={openSideBar}
          activePage={activePage}
          onSelect={(page) => setActivePage(page)}
        />

        {openSideBar && (
          <div
            className="fixed inset-0 bg-black/30 backdrop-blur-sm z-30 md:hidden"
            onClick={handleToggleSidebar}
          ></div>
        )}

        <main className="flex-1 p-4 bg-gray-50 dark:bg-slate-800">
          {activePage === "dashboard" && (
            <>
              <StatsCards />
              <EventChart />
              <RecentActivity />
            </>
          )}
          {activePage === "reports" && <div className="text-center text-4xl dark:text-white">Coming Soon!</div>}
          {activePage === "settings" && <div className="text-center text-4xl dark:text-white">Coming Soon!</div>}
        </main>
      </div>
    </div>
  );
}

export default App;
