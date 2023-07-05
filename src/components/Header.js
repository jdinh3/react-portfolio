import React from "react";
import { Image } from "react-bootstrap";
import Navbar from "./Navbar";

function Header() {
  return (
    <div className="hero-container">
      <div className="logo-container">
        <a href="/"><Image
          className="logo"
          src={process.env.PUBLIC_URL + "/signature-logo.png"}
        /></a>
      </div>
      <div className="nav-container">
        <Navbar />
      </div>
    </div>
  );
}

export default Header;
