import { FiSun, FiMoon } from "react-icons/fi";
import { RiMenu2Fill } from "react-icons/ri";

const Navbar = ({ theme, onToggleTheme, onToggleSidebar }) => {
  return (
    <div>
      <header className="flex items-center justify-between px-4 py-3 border-b bg-white dark:bg-slate-800 dark:border-slate-700">
        {/* left side */}
        <div className="flex items-center gap-2">
          <button
            onClick={onToggleSidebar}
            aria-label="Toggle Sidebar"
            className=" md:hidden rounded p-2 hover:bg-gray-100 dark:hover:bg-slate-700 dark:text-white text-2xl"
          >
            <RiMenu2Fill />
          </button>
          <h1 className="text-xl font-semibold text-gray-800 dark:text-gray-100 cursor-pointer">
            Dashboard
          </h1>
        </div>

        {/* right side */}
        <div className="flex items-center gap-3">
          <input
            type="text"
            placeholder="Search..."
            aria-label="Search"
            className="hidden md:block px-3 py-1 border rounded-lg text-sm bg-transparent text-gray-700 dark:text-gray-200"
          />
          <button 
            onClick={onToggleTheme}
            aria-label="Toggle Theme"
            className="p-2 rounded hover:bg-gray-100 dark:hover:bg-slate-700 cursor-pointer"
            >
            {theme === "dark" ? <FiSun size={18} className='dark:text-yellow-400' /> : <FiMoon size={18} />}
          </button>
          <div className="w-9 h-9 rounded-full bg-indigo-700 text-white text-xl font-medium flex justify-center items-center ">
            S
          </div>
        </div>
      </header>
    </div>
  );
};

export default Navbar;
