import React, { Component } from 'react';
import './MainSection.css';
import Experience from './experience/Experience';

class MainSection extends Component {
  render() {
    return (
      <div id="main-section">
        <div>
          <h1>
            <strong>Lakshyajeet Dwivedee</strong>
          </h1>
          <Experience></Experience>
        </div>
      </div>
    );
  }
}

export default MainSection;
