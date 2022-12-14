import * as React from "react";
import "../styles/projects.css";
import countryClub from "../assests/country-club.png";
import reddit from '../assests/reddit.jpg'
import ecommerce from '../assests/e-comerce.svg'

export const Projects = () => {
  return (
    <>
      <div className="projects">
        <div className="projects-2">
          <h2>Projects</h2>
          <div className="projects-holder">
            <div className="item-container">
              <img className="item-img" src={countryClub} />
              <div className="item-col-2">
                <h3>Dadli Country Club</h3>
                <p>
                  Technologies Used:{" "}
                  <span className="tech-used">HTML, CSS, JavaScript</span>
                </p>
                <ul>
                  <li>
                    Simple responsive website with no functionality outside of
                    design and responsiveness.
                  </li>
                </ul>
                <div className="item-buttons">
                  <a
                    href="https://dadlicountryclub.netlify.app/"
                    target="_blank"
                  >
                    Live
                  </a>
                  <a
                    href="https://github.com/tscurry/country-club"
                    target="_blank"
                  >
                    Repository
                  </a>
                </div>
              </div>
            </div>
            <div className="item-container">
              <img className="item-img" src={reddit} />
              <div className="item-col-2">
                <h3>Reddit Client</h3>
                <p className='coming-soon'>Coming Soon</p>
              </div>
            </div>
            <div className="item-container">
              <img className="item-img" src={ecommerce} />
              <div className="item-col-2">
                <h3>E-Commerce App</h3>
                <p className='coming-soon'>Coming Soon</p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <hr />
    </>
  );
};
