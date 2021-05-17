import React from "react";
import "./style.css";
// import { Link } from "react-router-dom";

function Navbar() {
  return (
    <nav>
      <ul>
        <li>
          <a className="nav-item" href="#about">
            About Me
          </a>
        </li>
        <li>
          <a className="nav-item" href="#work">
            Work
          </a>
        </li>
        <li>
          <a className="nav-item" href="#contact">
            Contact Me
          </a>
        </li>
        <li>
          <a
            className="nav-item"
            href="assets/css/images/Jennifer Dinh Resume 2021.pdf"
          >
            Resume
          </a>
        </li>
      </ul>
    </nav>
  );
}

export default Navbar;
