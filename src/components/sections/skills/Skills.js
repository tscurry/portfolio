import * as React from "react";
import { motion } from "framer-motion/dist/framer-motion";
import "./skills.css";

const Skills = () => {
  const variants = {
    visible: {
      opacity: 1,
      transition: {
        delayChildren: 1,
        when: "beforeChildren",
        staggerChildren: 0.1,
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
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.35,
        type: "tween",
        ease: "linear",
      },
    },
    hidden: { opacity: 0, y: 150 },
  };

  return (
    <>
      <div className="skills-section" id="skills">
        <motion.div className="skillset">
          <motion.h2
            animate={{ opacity: 1 }}
            transition={{ type: "tween", delay: 0.2, duration: 1 }}
            initial={{ opacity: 0}}
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
                alt="React"
                src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg"
              />
              <span>React</span>
            </motion.div>
            <motion.div variants={item}>
              <img
                alt="JavaScript"
                src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-plain.svg"
              />
              <span>JavaScript</span>
            </motion.div>
            <motion.div variants={item}>
              <img
                alt="MongoDB"
                src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original.svg"
              />
              <span>MongoDB</span>
            </motion.div>
            <motion.div variants={item}>
              <img
                alt="HTML"
                src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg"
              />
              <span>HTML</span>
            </motion.div>
            <motion.div variants={item}>
              <img
                alt="CSS"
                src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg"
              />
              <span>CSS</span>
            </motion.div>
            <motion.div variants={item}>
              <img
                alt="Node.js"
                src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg"
              />
              <span>Node.js</span>
            </motion.div>
            <motion.div variants={item}>
              <img
                alt="GitHub"
                style={{ backgroundColor: "#969697" }}
                src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/github/github-original.svg"
              />
              <span>GitHub</span>
            </motion.div>
            <motion.div variants={item}>
              <img
                alt="Redux"
                src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/redux/redux-original.svg"
              />
              <span>Redux</span>
            </motion.div>
            <motion.div variants={item}>
              <img
                alt="Express.js"
                style={{ backgroundColor: "#969697" }}
                src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/express/express-original.svg"
              />
              <span>Express.js</span>
            </motion.div>
            <motion.div variants={item}>
              <img
                alt="PostgreSQL"
                src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/postgresql/postgresql-original.svg"
              />
              <span>PostgreSQL</span>
            </motion.div>
            <motion.div variants={item}>
              <img
                alt="C"
                src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/c/c-original.svg"
              />
              <span>C</span>
            </motion.div>
            <motion.div variants={item}>
              <img
                alt="C++"
                src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/cplusplus/cplusplus-original.svg"
              />
              <span>C++</span>
            </motion.div>
            <motion.div variants={item}>
              <img
                alt="C#"
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

export default Skills;
