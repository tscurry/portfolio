import * as React from "react";
import "./hamburger.css";

const HamburgerMenu = () => {
  const [menuOpen, setMenuOpen] = React.useState(false);
  const [checked, setChecked] = React.useState(false)

  const home = () => {
    setMenuOpen(!menuOpen);
    window.scrollTo(0, 0);
    document.getElementById("menu_checkbox").checked = setChecked(!checked);
  };

  const toggleOpen = () => {
    setMenuOpen(!menuOpen);

    document.getElementById("menu_checkbox").checked = setChecked(!checked);
  };
  return (
    <div className="menu">
      <div id="webapp_cover">
        <div id="menu_button">
          <input type="checkbox" id="menu_checkbox" />
          <label for="menu_checkbox" id="menu_label" onClick={toggleOpen}>
            <div id="menu_text_bar"></div>
          </label>
        </div>
      </div>
      {menuOpen && (
        <div className="menu-open">
          <nav className="menu-tabs">
            <a onClick={home} href="#home">
              Home
            </a>
            <a onClick={toggleOpen} href="#about">
              About
            </a>
            <a onClick={toggleOpen} href="#skills">
              Skills
            </a>
            <a onClick={toggleOpen} href="#projects">
              Projects
            </a>
            <a onClick={toggleOpen} href="#contact">
              Contact
            </a>
          </nav>
        </div>
      )}
    </div>
  );
};

export default HamburgerMenu;
