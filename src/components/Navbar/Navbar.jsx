import React, { useState } from "react";
import "./Navbar.css";
import {Link} from "react-router-dom";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <nav className="navbar">
      <a href="./vin-web.html" className="logo">
        Inno-Vin
      </a>
      <button
        className="hamburger"
        onClick={() => setIsMenuOpen(!isMenuOpen)}
      >
        {isMenuOpen ? (
          <span className="icon close-icon">✕</span> // Close icon
        ) : (
          <span className="icon menu-icon">☰</span> // Menu icon
        )}
      </button>
      <ul className={`nav-links ${isMenuOpen ? "open" : ""}`}>
        <li><Link to="/">Talking Head Video Editing</Link></li>
        <li><Link to="/color">Color Grading Video Editing</Link></li>
        <li><Link to="/cinema">Cinematic Video Editing</Link></li>
        <li><Link to="/wedding"
        >Wedding Invitations</Link></li>
        <li><Link to="/poster">Posters & Birthday CDPs</Link></li>
      </ul>
    </nav>
  );
};

export default Navbar;