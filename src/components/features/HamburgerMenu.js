import * as React from "react";
import "./hamburger.css";

const HamburgerMenu = () => {
  const [checked, setChecked] = React.useState(false);

  const home = () => {
    window.scrollTo(0, 0);
    setChecked(!checked);
  };

  const toggleOpen = () => {
    setChecked(!checked);
  };

  return (
    <div className="menu">
      <div id="webapp_cover">
        <div id="menu_button">
          <input
            type="checkbox"
            checked={checked}
            onChange={e => {
              setChecked(e.target.checked);
            }}
            id="menu_checkbox"
          />
          <label htmlFor="menu_checkbox" id="menu_label">
            <div id="menu_text_bar"></div>
          </label>
        </div>
      </div>
      {checked && (
        <div className="menu-open animate__animated animate__zoomInLeft animate__faster">
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
