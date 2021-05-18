import React from "react";
import "./Footer.css";

function Footer() {
  return (
    <div className="footer">
      <h3>
        <span>Contact Me:</span>
      </h3>
      <ul>
        <li>
          <a href="tel:224.622.7111">224.622.7111</a>
        </li>
        <li>
          <a href="mailto:jenny.p.dinh@gmail.com">jenny.p.dinh@gmail.com</a>
        </li>
        <li>
          <a href="https://github.com/jdinh3">GitHub</a>
        </li>
        <li>
          <a href="https://www.linkedin.com/in/jennifer-dinh-154a80116/">
            LinkedIn
          </a>
        </li>
      </ul>
    </div>
  );
}

export default Footer;
