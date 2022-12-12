import React from "react";
import '../styles/headerStyles.css';

export const Header = () => {
  return (
    <header>
      <div className="header">
        <a id="logo" href="">
          TS
        </a>
        <nav class="nav-header">
          <a href="">Home</a>
          <a href="#about-sec">About</a>
          <a href="#skills">Skills</a>
          <a href="#project-sec">Projects</a>
          <a href="#contact-sec">Contact</a>
        </nav>
      </div>
    </header>
  );
};
