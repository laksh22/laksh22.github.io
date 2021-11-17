import React, { Component } from "react";
import "./styles.css";

class Summary extends Component {
  render() {
    return (
      <div id="summary">
        <p>
          👋 Hello, I'm Laksh! I'm a final-year student at Nanyang Technological
          University, Singapore where I am majoring in Computer Engineering. I
          like to build applications using my knowledge of full-stack
          development and machine learning.
        </p>
        <p>
          My resume can be found
          <a
            href="https://rebrand.ly/laksh-resume"
            target="_blank"
            rel="noopener noreferrer"
          >
            {" "}
            here{" "}
          </a>
          and some of my projects can be found
          <a
            href="https://github.com/laksh22"
            target="_blank"
            rel="noopener noreferrer"
          >
            {" "}
            here
          </a>
          .
        </p>
        <p>
          <a
            href="mailto:lakshyajeet22@gmail.com"
            target="_blank"
            rel="noopener noreferrer"
          >
            Drop me a line{" "}
          </a>
          if you would like to get in touch!
        </p>
      </div>
    );
  }
}

export default Summary;
