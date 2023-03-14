import React from "react";
import "animate.css";
import "./introduction.css";

const Introduction = () => {
  return (
    <>
      <div className="introduction">
        <div className="occupation">
          <h1>Hi, I'm Timmy</h1>
          <p className="animate__animated animate__fadeInUp animate__delay-4s animate__slower">Aspiring Front-End Engineer</p>
        </div>
      </div>
      <hr />
    </>
  );
};

export default Introduction;
