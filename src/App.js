import React from "react";
import {
  Header,
  Introduction,
  About,
  Projects,
  Skills,
  Contact,
} from "./components/index";
import "./styles.css";

export const App = () => {
  return (
    <div className="app">
      <Header />
      <Introduction />
      <About />
      <Skills />
      <Projects />
      <Contact />
    </div>
  );
};
