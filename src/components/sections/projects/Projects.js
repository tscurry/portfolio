import * as React from "react";
import countryClub from "../../../assets/country-club.png";
import readdit from "../../../assets/readd-it.png";
import ecommerce from "../../../assets/e-comerce.svg";
import "./projects.css";

const Projects = () => {
  return (
    <>
      <div className="projects">
        <div className="projects-2">
          <h2 id="projects">Projects</h2>
          <div className="projects-holder">
            <div className="item-container">
              <img className="item-img" src={countryClub} alt="Dadli Country Club" />
              <div className="item-col-2">
                <h3>Dadli Country Club</h3>
                <p>
                  Technologies Used: <span className="tech-used">HTML, CSS, JavaScript</span>
                </p>
                <ul>
                  <li>Simple responsive website with no functionality outside of design and responsiveness.</li>
                </ul>
                <div className="item-buttons">
                  <a href="https://dadlicountryclub.netlify.app/" target="_blank" rel="noopener noreferrer">
                    Live
                  </a>
                  <a href="https://github.com/tscurry/country-club.git" target="_blank" rel="noopener noreferrer">
                    Repository
                  </a>
                </div>
              </div>
            </div>
            <div className="item-container">
              <img className="item-img" src={readdit} alt="readd-it"/>
              <div className="item-col-2">
                <h3>readd-it</h3>
                <p>
                  Technologies Used: <span className="tech-used">HTML, CSS, JavaScript, React, Redux</span>
                </p>
                <ul>
                  <li>
                    A reddit clone with basic functionality that utilizes the Reddit JSON API to mimic the reddit website but created with minimal
                    functionality. Viewing and interacting with posts from the API, searching, viewing comments and voting are just some of the basic
                    functionalities.
                  </li>
                </ul>
                <div className="item-buttons">
                  <a href="https://readd-it.com" target="_blank" rel="noopener noreferrer">
                    Live
                  </a>
                  <a href="https://github.com/tscurry/readd-it.git" target="_blank" rel="noopener noreferrer">
                    Repository  
                  </a>
                </div>
              </div>
            </div>
            <div className="item-container">
              <img className="item-img" src={ecommerce} alt="Online Shopping" />
              <div className="item-col-2">
                <h3>E-Commerce Website</h3>
                <p className="coming-soon">Coming Soon</p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <hr />
    </>
  );
};

export default Projects;
