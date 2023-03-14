import * as React from "react";
import "animate.css";
import "./contact.css";

const Contact = () => {
  return (
    <div className="animate__animated animate__fadeIn animate__delay-1s animate__slower">
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
    </div>
  );
};

export default Contact;
