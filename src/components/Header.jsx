import { useState } from "react";
import { NavLink } from "react-router-dom";

function Header() {
  const [menuOpen, setMenuOpen] = useState(false);

  const baseClasses = "text-lg font-semibold transition-colors duration-300";
  const activeClasses = "text-yellow-400 border-b-2 border-yellow-400 pb-1";
  const inactiveClasses = "text-white hover:text-yellow-400";

  const links = [
    { to: "/", label: "Home", end: true },
    { to: "/tasks", label: "Tasks" },
    { to: "/completed", label: "Completed" },
    { to: "/incompleted", label: "Incompleted" },
    { to: "/about", label: "About" },
    { to: "/explore", label: "Explore" },
  ];

  return (
    <nav className="bg-green-800 text-white px-4 sm:px-8 py-4 fixed top-0 left-0 w-full z-50 shadow-md">
      {/* Logo and Hamburger */}
      <div className="flex justify-between items-center">
        <div className="text-xl font-bold">To-Do-App</div>

        {/* Hamburger button  */}
        <button
          className="sm:hidden text-white focus:outline-none"
          onClick={() => setMenuOpen(!menuOpen)}
        >
          {/* Simple hamburger / X */}
          <div className="space-y-1">
            <span
              className={`block h-0.5 w-6 bg-white transition-transform ${
                menuOpen ? "rotate-45 translate-y-1.5" : ""
              }`}
            ></span>
            <span
              className={`block h-0.5 w-6 bg-white transition-opacity ${
                menuOpen ? "opacity-0" : ""
              }`}
            ></span>
            <span
              className={`block h-0.5 w-6 bg-white transition-transform ${
                menuOpen ? "-rotate-45 -translate-y-1.5" : ""
              }`}
            ></span>
          </div>
        </button>

        {/* Desktop Menu */}
        <ul className="hidden sm:flex gap-8">
          {links.map((link) => (
            <li key={link.to}>
              <NavLink
                end={link.end}
                to={link.to}
                className={({ isActive }) =>
                  `${baseClasses} ${isActive ? activeClasses : inactiveClasses}`
                }
              >
                {link.label}
              </NavLink>
            </li>
          ))}
        </ul>
      </div>

      {/* Mobile Menu */}
      {menuOpen && (
        <ul className="sm:hidden flex flex-col gap-4 mt-4 text-center">
          {links.map((link) => (
            <li key={link.to}>
              <NavLink
                end={link.end}
                to={link.to}
                onClick={() => setMenuOpen(false)} 
                className={({ isActive }) =>
                  `${baseClasses} ${isActive ? activeClasses : inactiveClasses}`
                }
              >
                {link.label}
              </NavLink>
            </li>
          ))}
        </ul>
      )}
    </nav>
  );
}

export default Header;
