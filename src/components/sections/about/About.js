import * as React from "react";
import "animate.css";
import about from "../../../assets/coding.jpg";
import resume from "../../../assets/resume.pdf";
import "./about.css";

const About = () => {
  return (
    <>
      <div className="about animate__animated animate__fadeIn animate__delay-1s animate__slower" id="about">
        <div className="personal-info">
          <h2>About Me</h2>
          <div className="reverse-about-image">
            <img src={about} width="600" height="500" alt='coding'/>
          </div>
          <p>
            Hello I'm Timmy, an aspiring Web Developer with a diploma in Electronics Engineering. As an avid learner I was intrigued with
            coding, learning and building apps and websites. I'm learning web development as a self taught Developer.
          </p>
          <div className="resume-button">
            <button>
              <a rel="noopener noreferrer" href={resume} target="_blank">
                Resume
              </a>
            </button>
          </div>
        </div>
        <div className="about-image">
          <img src={about} width="600" height="500" alt='coding'/>
        </div>
      </div>
      <hr />
    </>
  );
};

export default About;
