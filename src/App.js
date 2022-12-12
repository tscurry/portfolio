import "./styles.css";
import { Header } from "./components/Header";
import { Introduction } from "./components/Introduction";
import { About } from "./components/About";
import { Skills } from "./components/Skills";
import React from "react";
import { Projects } from "./components/Projects";

export const App = () => {
  return (
    <div className="app">
      <Header />
      <Introduction />
      <About />
      <Skills />
      {/* <Projects/> */}
    </div>
  );
};
