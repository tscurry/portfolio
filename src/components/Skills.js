import * as React from "react";
import { motion, useInView, Variants } from "framer-motion/dist/framer-motion";
import "../styles/skills.css";

export const Skills = () => {
  const ref = React.useRef(null);
  const isInView = useInView(ref);

  const variants = {
    visible: {
      opacity: isInView && 1,
      transition: {
        delayChildren: 1,
        when: "beforeChildren",
        staggerChildren: 0.3,
      },
    },
    hidden: {
      opacity: 0,
      transition: {
        when: "afterChildren",
      },
    },
  };

  const item = {
    visible: {
      opacity: isInView && 1,
      y: isInView && 0,
      transition: {
        duration: 0.35,
        type: "tween",
        ease: "linear",
      },
    },
    hidden: { opacity: 0, y: 150 },
  };

  const iconStyles = {
    width: "100px",
  };

  return (
    <>
      <div ref={ref} className="skills-section" id="skills">
        <motion.div className="skillset">
          <motion.h2
            animate={{ opacity: isInView && 1, y: isInView && 0 }}
            transition={{ type: "tween", delay: 0.2, duration: 1 }}
            initial={{ opacity: 0, y: -100 }}
          >
            Skills
          </motion.h2>
          <motion.div
            initial="hidden"
            animate="visible"
            variants={variants}
            className="skill-icons"
          >
            <motion.div variants={item}>
              <img
                style={iconStyles}
                src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg"
              />
              <span>React</span>
            </motion.div>
            <motion.div variants={item}>
              <img
                style={iconStyles}
                src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-plain.svg"
              />
              <span>JavaScript</span>
            </motion.div>
            <motion.div variants={item}>
              <img
                style={iconStyles}
                src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg"
              />
              <span>HTML</span>
            </motion.div>
            <motion.div variants={item}>
              <img
                style={iconStyles}
                src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg"
              />
              <span>CSS</span>
            </motion.div>
            <motion.div variants={item}>
              <img
                style={iconStyles}
                src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg"
              />
              <span>Node.js</span>
            </motion.div>
            <motion.div variants={item}>
              <img
                style={iconStyles}
                src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original.svg"
              />
              <span>MongoDB</span>
            </motion.div>
            <motion.div variants={item}>
              <img
                style={{ width: "100", backgroundColor: "#969697" }}
                src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/github/github-original.svg"
              />
              <span>GitHub</span>
            </motion.div>
            <motion.div variants={item}>
              <img
                style={iconStyles}
                src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/redux/redux-original.svg"
              />
              <span>Redux</span>
            </motion.div>
            <motion.div variants={item}>
              <img
                style={{ width: "100", backgroundColor: "#969697" }}
                src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/express/express-original.svg"
              />
              <span>Express.js</span>
            </motion.div>
            <motion.div variants={item}>
              <img
                style={iconStyles}
                src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/postgresql/postgresql-original.svg"
              />
              <span>PostgreSQL</span>
            </motion.div>
            <motion.div variants={item}>
              <img
                style={iconStyles}
                src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/c/c-original.svg"
              />
              <span>C</span>
            </motion.div>
            <motion.div variants={item}>
              <img
                style={iconStyles}
                src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/cplusplus/cplusplus-original.svg"
              />
              <span>C++</span>
            </motion.div>
            <motion.div variants={item}>
              <img
                style={iconStyles}
                src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/csharp/csharp-original.svg"
              />
              <span>C#</span>
            </motion.div>
          </motion.div>
        </motion.div>
      </div>
      <hr />
    </>
  );
};
