import { NavLink } from "react-router-dom";

function Header() {
  const baseClasses =
    "text-lg font-semibold transition-colors duration-300";
  const activeClasses =
    "text-yellow-400 border-b-2 border-yellow-400 pb-1";
  const inactiveClasses =
    "text-white hover:text-yellow-400";

  return (
    <nav className="bg-green-800 text-white px-8 py-4 fixed top-0 left-0 w-full z-50 flex justify-between items-center shadow-md">
      {/* Logo */}
      <div className="text-xl font-bold">To-Do-App</div>

      {/* Navigation Links */}
      <ul className="flex gap-8">
        <li>
          <NavLink
            end
            to="/"
            className={({ isActive }) =>
              `${baseClasses} ${isActive ? activeClasses : inactiveClasses}`
            }
          >
            Home
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/tasks"
            className={({ isActive }) =>
              `${baseClasses} ${isActive ? activeClasses : inactiveClasses}`
            }
          >
            Tasks
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/completed"
            className={({ isActive }) =>
              `${baseClasses} ${isActive ? activeClasses : inactiveClasses}`
            }
          >
            Completed
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/incompleted"
            className={({ isActive }) =>
              `${baseClasses} ${isActive ? activeClasses : inactiveClasses}`
            }
          >
            Incompleted
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/explore"
            className={({ isActive }) =>
              `${baseClasses} ${isActive ? activeClasses : inactiveClasses}`
            }
          >
            Explore
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/about"
            className={({ isActive }) =>
              `${baseClasses} ${isActive ? activeClasses : inactiveClasses}`
            }
          >
            About
          </NavLink>
        </li>
      </ul>
    </nav>
  );
}

export default Header;
