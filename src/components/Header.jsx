import { Link } from "react-router-dom";

function Header() {
  return (
    <nav className="navbar">
      <div className="logo">To-Do-App</div>
      <ul className="nav-links">
        <li><Link to="/">Home</Link></li>
        <li><Link to="/tasks">Tasks</Link></li>
        <li><Link to="/explore">Explore</Link></li>
        <li><Link to="/about">About</Link></li>
      </ul>
    </nav>
  );
}

export default Header;
