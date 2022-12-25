import * as React from "react";
import "./hamburger.css";

const HamburgerMenu = () => {
  const [menuOpen, setMenuOpen] = React.useState(false);
  const home = () => {
    setMenuOpen(!menuOpen);
    window.scrollTo(0, 0);
  };
  return (
    <div className="menu">
      <button
        className="js-open"
        id="hamburg"
        onClick={() => setMenuOpen(!menuOpen)}
      >
        <span className="bar">menu</span>
      </button>
      {menuOpen && (
        <div className="menu-open">
          <nav className="menu-tabs">
            <a onClick={home} href="#home">
              Home
            </a>
            <a onClick={() => setMenuOpen(!menuOpen)} href="#about">
              About
            </a>
            <a onClick={() => setMenuOpen(!menuOpen)} href="#skills">
              Skills
            </a>
            <a onClick={() => setMenuOpen(!menuOpen)} href="#projects">
              Projects
            </a>
            <a onClick={() => setMenuOpen(!menuOpen)} href="#contact">
              Contact
            </a>
          </nav>
        </div>
      )}
    </div>
  );
};

export default HamburgerMenu;
