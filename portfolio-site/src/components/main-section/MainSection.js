import React, { Component } from 'react';
import './MainSection.css';
import Experience from './experience/Experience';
import Summary from './summary/Summary';
import Projects from './projects/Projects';
import Education from './education/Education';
import Skills from './skills/Skills';

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
