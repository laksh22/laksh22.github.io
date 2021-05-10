import React, { Component } from 'react';
import './styles.css';
import Experience from './Experience';
import Summary from './Summary';
import Projects from './Projects';
import Education from './Education';
import Skills from './Skills';

class MainSection extends Component {
  render() {
    return (
      <div id="main-section">
        <div>
          <h1>
            <strong>Lakshyajeet Dwivedee</strong>
          </h1>
          <Summary></Summary>
          <Skills></Skills>
          <Experience></Experience>
          <Projects></Projects>
          <Education></Education>
        </div>
      </div>
    );
  }
}

export default MainSection;
