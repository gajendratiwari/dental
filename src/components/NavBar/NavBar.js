import { useState } from "react";
import { NavLink } from "react-router-dom";

const NavBar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
    console.log(isOpen);
  };
  return (
    <nav className="navbar">
      <button className="navbar__toggle" onClick={toggleMenu}>
        ☰
      </button>
      <ul className={`navbar__links ${isOpen ? "navbar__links--open" : ""}`}>
        <li>
          <NavLink
            to="/"
            className={({ isActive }) => (isActive ? "active" : "")}
            onClick={toggleMenu}
          >
            Home
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/about"
            className={({ isActive }) => (isActive ? "active" : "")}
            onClick={toggleMenu}
          >
            About Us
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/services"
            className={({ isActive }) => (isActive ? "active" : "")}
            onClick={toggleMenu}
          >
            Services
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/appointments"
            className={({ isActive }) => (isActive ? "active" : "")}
            onClick={toggleMenu}
          >
            Appointments
          </NavLink>
        </li>

        <li>
          <NavLink
            to="/contact"
            className={({ isActive }) => (isActive ? "active" : "")}
            onClick={toggleMenu}
          >
            Contact Us
          </NavLink>
        </li>
      </ul>
    </nav>
  );
};
export default NavBar;
