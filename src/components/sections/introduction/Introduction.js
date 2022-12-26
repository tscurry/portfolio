import React from "react";
import { motion } from "framer-motion/dist/framer-motion";
import "./introduction.css";

const Introduction = () => {
  return (
    <>
      <div className="introduction">
        <div className="occupation">
          <h1>Hi, I'm Timmy</h1>
          <motion.p
            animate={{ opacity: 1}}
            exit={{ opacity: 0 }}
            transition={{ delay: 4, duration: 2 }}
            initial={{ opacity: 0 }}
          >
            Full Stack Developer | Web Developer
          </motion.p>
        </div>
      </div>
      <hr />
    </>
  );
};

export default Introduction;
