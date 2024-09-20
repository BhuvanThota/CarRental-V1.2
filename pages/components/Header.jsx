import React from 'react'
import { NavLink, Link } from 'react-router-dom'
import logoimg from "../assets/3d-car.png"

function Header() {
  // Base and active styles for NavLinks
  const baseStyle = { };

  const hostActiveStyle = {
    color: "#da5700",
    textDecoration: "underline",
  };

  const aboutActiveStyle = {
    color: "#049fff",
    textDecoration: "underline",
  };

  const carsActiveStyle = {
    color: "#049fff",
    textDecoration: "underline",
  };

  return (
    <div className='navbar'>
      <Link to="/">
        <h2 className='logo gap-2'>
          <img src={logoimg} alt="car-logo" width="50px" />
          CarRental
        </h2>
      </Link>
      <nav className='right-navbar'>
        <ul>
          <li className='page-navbar-host'>
            <NavLink
              to="host"
              style={({ isActive }) => (isActive ? hostActiveStyle : baseStyle)}
            >
              Host
            </NavLink>
          </li>
          <li>
            <NavLink
              to="about"
              style={({ isActive }) => (isActive ? aboutActiveStyle : baseStyle)}
            >
              About
            </NavLink>
          </li>
          <li>
            <NavLink
              to="cars"
              style={({ isActive }) => (isActive ? carsActiveStyle : baseStyle)}
            >
              Our Cars
            </NavLink>
          </li>
        </ul>
      </nav>
    </div>
  );
}

export default Header;
