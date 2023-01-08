import React from "react";
import { NavLink } from "react-router-dom";

function Navbar() {
  const navstyle = ({ isActive }) => {
    return {
      fontWeight: isActive ? "bold" : "normal",
      textDecoration: "none",
    };
  };

  return (
    <nav className="navlist">
      <NavLink to="/" style={navstyle}>
        Home
      </NavLink>
      <NavLink to="/about" style={navstyle}>
        About
      </NavLink>
      <NavLink to="/header" style={navstyle}>
        Heading
      </NavLink>
      <NavLink to="/content" style={navstyle}>
        Content
      </NavLink>
      <NavLink to="/Product" style={navstyle}>
        Product
      </NavLink>
    </nav>
  );
}

export default Navbar;
