import React from "react";
import HamburgerMenu from "../features/HamburgerMenu";
import "./header.css";

const Header = () => {
  const home = () => window.scrollTo(0, 0);
  return (
    <header id="home">
      <div className="header">
        <a id="logo" href="https://tscurry.dev">
          TS
        </a>
        <HamburgerMenu />
        <nav className="nav-header">
          <a onClick={home} href="#home">
            Home
          </a>
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
