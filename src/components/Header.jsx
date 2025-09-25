import { Link } from "react-router-dom";

function Header() {
  return (
    <nav className="bg-green-800 text-white px-8 py-4 fixed top-0 left-0 w-full z-50 flex justify-between items-center shadow-md">
      {/* Logo */}
      <div className="text-xl font-bold">To-Do-App</div>

      {/* Navigation Links */}
      <ul className="flex gap-8">
        <li>
          <Link
            to="/"
            className="text-lg font-semibold hover:text-yellow-400 transition-colors duration-300"
          >
            Home
          </Link>
        </li>
        <li>
          <Link
            to="/tasks"
            className="text-lg font-semibold hover:text-yellow-400 transition-colors duration-300"
          >
            Tasks
          </Link>
        </li>
        <li>
          <Link
            to="/explore"
            className="text-lg font-semibold hover:text-yellow-400 transition-colors duration-300"
          >
            Explore
          </Link>
        </li>
        <li>
          <Link
            to="/about"
            className="text-lg font-semibold hover:text-yellow-400 transition-colors duration-300"
          >
            About
          </Link>
        </li>
      </ul>
    </nav>
  );
}

export default Header;
