import React, { Component } from 'react';
import { FaGithub, FaLinkedin, FaEnvelope, FaLink } from "react-icons/fa";
import './styles.css';

class SideBar extends Component {
  render() {
    return (
      <div id="sidebar">
        <img src={require('../../assets/profile-pic.jpg')} alt="Profile" />
        <br />
        <h1>Lakshyajeet Dwivedee</h1>
        <h2>
          Full-Stack Software Engineer
        </h2>
        <ul>
          <li>
            <a
              href="https://github.com/laksh22"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaGithub size={28} /> github.com/laksh22
            </a>
          </li>
          <li>
            <a
              href="https://linkedin.com/in/lakshyajeet-d"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaLinkedin size={28} /> linkedin.com/lakshyajeet-d
            </a>
          </li>
          <li>
            <a
              href="http://bit.ly/laksh22-resume"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaLink size={28} /> Resume
            </a>
          </li>
          <li>
            <a
              href="mailto:lakshyajeet22@gmail.com"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaEnvelope size={28} /> Contact
            </a>
          </li>
        </ul>
      </div>
    );
  }
}

export default SideBar;
