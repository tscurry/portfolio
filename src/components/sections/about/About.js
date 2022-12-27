import * as React from "react";
import 'animate.css';
import aboutVideo from "../../../assests/coding3.mp4";
import resume from "../../../assests/resume.pdf";
import "./about.css";

const About = () => {
  return (
    <>
      <div
        className="about animate__animated animate__fadeIn animate__delay-1s animate__slower"
        id="about"
      >
        <div className="personal-info">
          <h2>About Me</h2>
          <div className="reverse-about-video">
            <video autoPlay loop width="600" height="500" muted>
              <source type="video/mp4" src={aboutVideo} />
              Your browser does not support video tag.
            </video>
          </div>
          <p>
            Hello, I'm Tim and I'm a Full Stack Developer. Born and raised in St
            John's, Antigua I migrated to Canada to study, and graduated with a
            diploma in Electronics Engineering. As an avid learner I was
            intrigued with coding, learning and building apps and websites. I'm
            currently enrolled in the Full Stack Engineer course at Codecademy
            which I'm expecting to complete in the next 5 months.
          </p>
          <div className="resume-button">
            <button>
              <a rel="noopener noreferrer" href={resume} target="_blank">
                Resume
              </a>
            </button>
          </div>
        </div>
        <div className="about-video">
          <video autoPlay loop width="600" height="500" muted>
            <source type="video/mp4" src={aboutVideo} />
            Your browser does not support video tag.
          </video>
        </div>
      </div>
      <hr />
    </>
  );
};

export default About;
