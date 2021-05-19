import React, { useState } from "react";
import "./Navbar.css";
import { Link } from "react-router-dom";

function Navbar() {
  return (
    <nav>
      <ul>
        <li>
          <Link to="/about" className="nav-item" href="#about">
            About Me
          </Link>
        </li>
        <li>
          <Link to="/work" className="nav-item" href="#work">
            Work
          </Link>
        </li>
        <li>
          <a className="nav-item" href="/Jennifer Dinh Resume 2021.pdf">
            Resume
          </a>
        </li>
      </ul>
    </nav>
  );
}

export default Navbar;
