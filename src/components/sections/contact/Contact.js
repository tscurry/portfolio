import * as React from "react";
import { motion } from "framer-motion/dist/framer-motion";
import "./contact.css";

const Contact = () => {
  return (
    <motion.div
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.5, duration: 1.5 }}
      initial={{ opacity: 0, y: 0 }}
    >
      <div id="contact" className="contact">
        <div className="contact-2">
          <h1>Get In Touch</h1>
          <p>Whether you have an idea for a project or just want to chat</p>
          <p>Feel free to reach out!</p>
          <a href="mailto:scurrytimmy@gmail.com">
            <button>Send Message</button>
          </a>
        </div>
      </div>
      <div className="footer">
        <p>Built & Designed By Timmy Scurry</p>
        <p>&#169; 2022</p>
      </div>
    </motion.div>
  );
};

export default Contact;
