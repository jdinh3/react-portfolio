import React from "react";
import Navbar from "./Navbar";
import "./Hero.css";

function Hero() {
  return (
    <div className="hero-container">
      <video src="Clouds.mp4" autoPlay loop muted />
      <Navbar />
    </div>
  );
}

export default Hero;
