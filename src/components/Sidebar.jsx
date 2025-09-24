import { RiDashboardFill, RiFile2Fill, RiSettings3Fill } from "react-icons/ri";

const Sidebar = ({ isOpen, onSelect, activePage }) => {
  const liClass = (page) =>
    `flex items-center gap-3 p-2 rounded cursor-pointer dark:text-white 
    ${
      activePage === page
        ? "bg-gray-200 dark:bg-slate-700"
        : "hover:bg-gray-100 dark:hover:bg-slate-700"
    }`;

  return (
    <aside
      className={`bg-white dark:bg-slate-900 border-r dark:border-slate-700
  w-64 p-4 transition-transform transform
  ${isOpen ? "translate-x-0" : "-translate-x-full md:translate-x-0"}
  fixed h-full top-0 left-0 z-50
  md:relative md:h-[150vh]`}
    >
      <ul className="space-y-4">
        <li
          className={liClass("dashboard")}
          onClick={() => onSelect("dashboard")}
        >
          <RiDashboardFill size={20} />
          <span>Dashboard</span>
        </li>
        <li 
          className={liClass("reports")} 
          onClick={() => onSelect("reports")}
        >
          <RiFile2Fill size={20} />
          <span>Reports</span>
        </li>
        <li
          className={liClass("settings")}
          onClick={() => onSelect("settings")}
        >
          <RiSettings3Fill size={20} />
          <span>Settings</span>
        </li>
      </ul>
    </aside>
  );
};

export default Sidebar;
