import React from "react";
import './header.css';

const Header = () => {
  return (
    <header id='home'>
      <div className="header">
        <a id="logo" href="#home">
          TS
        </a>
        <nav class="nav-header">
          <a href="#home">Home</a>
          <a href="#about">About</a>
          <a href="#skills">Skills</a>
          <a href="#projects">Projects</a>
          <a href="#contact">Contact</a>
        </nav>
      </div>
    </header>
  );
};

export default Header;