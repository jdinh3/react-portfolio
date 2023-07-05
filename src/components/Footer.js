import React from "react";
import "./Footer.css";
import "./Card.css";

function Footer() {
  return (
    <div className="footer">
      <ul>
        <li>
          <a href="tel:224.622.7111">224.622.7111</a>
        </li>
        <li>
          <a href="mailto:jenny.p.dinh@gmail.com" target="_blank">
            jenny.p.dinh@gmail.com
          </a>
        </li>
        <li>
          <a href="https://github.com/jdinh3" target="_blank">
            GitHub
          </a>
        </li>
        <li>
          <a
            href="https://www.linkedin.com/in/jennifer-dinh-154a80116/"
            target="_blank"
          >
            LinkedIn
          </a>
        </li>
      </ul>
    </div>
  );
}

export default Footer;
