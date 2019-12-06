import React, { Component } from 'react';
import './MainSection.css';
import Experience from './experience/Experience';
import Summary from './summary/Summary';

class MainSection extends Component {
  render() {
    return (
      <div id="main-section">
        <div>
          <h1>
            <strong>Lakshyajeet Dwivedee</strong>
          </h1>
          <Summary></Summary>
          <Experience></Experience>
        </div>
      </div>
    );
  }
}

export default MainSection;
