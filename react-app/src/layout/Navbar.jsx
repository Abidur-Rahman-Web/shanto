import React from "react";
import { NavLink } from "react-router-dom";

const Navbar = () => {
  return (
    <header className="bg-gray-900 text-white p-4 shadow-md">
      <nav className="container mx-auto flex justify-between items-center">
        <h1 className="text-xl font-bold">MyApp</h1>
        <div className="space-x-6">
          <NavLink
            to="/"
            className={({ isActive }) =>
              isActive ? "text-yellow-400" : "hover:text-yellow-300"
            }
          >
            Home
          </NavLink>
          <NavLink
            to="/about"
            className={({ isActive }) =>
              isActive ? "text-yellow-400" : "hover:text-yellow-300"
            }
          >
            About
          </NavLink>
          <NavLink
            to="/contact"
            className={({ isActive }) =>
              isActive ? "text-yellow-400" : "hover:text-yellow-300"
            }
          >
            Contact
          </NavLink>
        </div>
      </nav>
    </header>
  );
};

export default Navbar;
