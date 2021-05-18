import React, { useState } from "react";
import "./Navbar.css";
import { Link } from "react-router-dom";

function Navbar() {
  return (
    <nav>
      <ul>
        <li>
          <Link to="/" className="nav-item" href="#about">
            About Me
          </Link>
        </li>
        <li>
          <Link to="/work" className="nav-item" href="#work">
            Work
          </Link>
        </li>
        <li>
          <Link to="/contact" className="nav-item" href="#contact">
            Contact Me
          </Link>
        </li>
        <li>
          <Link to="/resume" className="nav-item" href="#resume">
            Resume
          </Link>
        </li>
      </ul>
    </nav>
  );
}

export default Navbar;
