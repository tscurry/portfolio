import * as React from "react";
import 'animate.css';
import "./skills.css";

const Skills = () => {
  return (
    <>
      <div className="skills-section animate__animated animate__backInLeft animate__delay-1s animate__slow" id="skills">
        <div className="skillset">
          <h2>Skills</h2>
          <div className="skill-icons">
            <div>
              <img
                alt="React"
                src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg"
              />
              <span>React</span>
            </div>
            <div>
              <img
                alt="JavaScript"
                src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-plain.svg"
              />
              <span>JavaScript</span>
            </div>
            <div>
              <img
                alt="MongoDB"
                src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original.svg"
              />
              <span>MongoDB</span>
            </div>
            <div>
              <img
                alt="HTML"
                src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg"
              />
              <span>HTML</span>
            </div>
            <div>
              <img
                alt="CSS"
                src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg"
              />
              <span>CSS</span>
            </div>
            <div>
              <img
                alt="Node.js"
                src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg"
              />
              <span>Node.js</span>
            </div>
            <div>
              <img
                alt="GitHub"
                style={{ backgroundColor: "#969697" }}
                src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/github/github-original.svg"
              />
              <span>GitHub</span>
            </div>
            <div>
              <img
                alt="Redux"
                src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/redux/redux-original.svg"
              />
              <span>Redux</span>
            </div>
            <div>
              <img
                alt="Express.js"
                style={{ backgroundColor: "#969697" }}
                src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/express/express-original.svg"
              />
              <span>Express.js</span>
            </div>
            <div>
              <img
                alt="PostgreSQL"
                src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/postgresql/postgresql-original.svg"
              />
              <span>PostgreSQL</span>
            </div>
            <div>
              <img
                alt="C"
                src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/c/c-original.svg"
              />
              <span>C</span>
            </div>
            <div>
              <img
                alt="C++"
                src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/cplusplus/cplusplus-original.svg"
              />
              <span>C++</span>
            </div>
            <div>
              <img
                alt="C#"
                src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/csharp/csharp-original.svg"
              />
              <span>C#</span>
            </div>
          </div>
        </div>
      </div>
      <hr />
    </>
  );
};

export default Skills;
