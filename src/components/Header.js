import React from "react";
import Navbar from "./Navbar";
import "./Header.css";

function Header() {
  return (
    <div className="hero-container">
      <video src="Clouds.mp4" autoPlay loop muted />
      <div className="nav-container">
        <Navbar />
        <h1>Jennifer Dinh</h1>
      </div>
    </div>
  );
}

export default Header;
