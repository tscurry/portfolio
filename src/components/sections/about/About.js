import * as React from "react";
import { motion } from "framer-motion/dist/framer-motion";
import aboutVideo from "../../../assests/coding3.mp4";
import "./about.css";

const About = () => {
  return (
    <>
      <div className="about" id="about">
        <div className="personal-info">
          <motion.h2
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 1, duration: 2 }}
            initial={{ opacity: 0, x: -100 }}
          >
            About Me
          </motion.h2>
          <div className="reverse-about-video">
          <motion.video
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 1, duration: 2 }}
            initial={{ opacity: 0, x: 100 }}
            autoPlay
            loop
            width='600'
            height='500'
            muted
          >
            <source type="video/mp4" src={aboutVideo} />
            Your browser does not support video tag.
          </motion.video>
        </div>
          <motion.p
            initial={{ opacity: 0, y: 200 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ type: "tween", delay: 1.2, duration: 2 }}
          >
            Hello, I'm Tim and I'm a Full Stack Developer. Born and raised in St
            John's, Antigua I migrated to Canada to study, and graduated with a
            diploma in Electronics Engineering. As an avid learner I was
            intrigued with coding, learning and building apps and websites. I'm
            currently enrolled in the Full Stack Engineer course at Codecademy
            which I'm expecting to complete in the next 5 months.
          </motion.p>
          <motion.div
            initial={{ opacity: 0, y: 200 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ type: "tween", delay: 1.4, duration: 2 }}
            className="resume-button"
          >
            <button>Resume</button>
          </motion.div>
        </div>
        <div className="about-video">
          <motion.video
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 1, duration: 2 }}
            initial={{ opacity: 0, x: 100 }}
            autoPlay
            loop
            width='600'
            height='500'
            muted
          >
            <source type="video/mp4" src={aboutVideo} />
            Your browser does not support video tag.
          </motion.video>
        </div>
      </div>
      <hr />
    </>
  );
};

export default About;
