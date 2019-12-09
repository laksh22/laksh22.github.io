import React, { Component } from 'react';
import './SideBar.css';

class SideBar extends Component {
  render() {
    return (
      <div id="sidebar">
        <h1>Lakshyajeet Dwivedee</h1>
        <br />
        <img src={require('../../assets/profile-pic.jpg')} alt="Profile" />
        <br />
        <h2>Web Development</h2>
        <h2>App Development</h2>
        <h2>Embedded Development</h2>
        <br />
        <ul>
          <li>
            <a
              href="https://github.com/laksh22"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img
                src={require('../../assets/github_logo.jpg')}
                alt="Github"
                height="70px"
              />
            </a>
          </li>
          <li>
            <a
              href="https://linkedin.com/in/lakshyajeet-d"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img
                src={require('../../assets/linkedin_logo.png')}
                alt="Linkedin"
                height="70px"
              />
            </a>
          </li>
          <li>
            <a
              href="mailto:lakshyajeet22@gmail.com"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img
                src={require('../../assets/email_logo.png')}
                alt="Email"
                height="70px"
              />
            </a>
          </li>
        </ul>
        <h2>
          <strong>
            <a
              href="https://drive.google.com/open?id=1REB9Nht_--8D_1KLaViU-E-dU_fL2FbK"
              target="_blank"
              rel="noopener noreferrer"
            >
              Resume
            </a>
          </strong>
        </h2>
      </div>
    );
  }
}

export default SideBar;
