import React from "react";
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
          <a
            className="nav-item"
            href={process.env.PUBLIC_URL + "/JenniferResume2021.pdf"}
            target="_blank"
          >
            Resume
          </a>
        </li>
      </ul>
    </nav>
  );
}

export default Navbar;
