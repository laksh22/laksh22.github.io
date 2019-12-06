import React, { Component } from 'react';
import './Summary.css';

class Summary extends Component {
  render() {
    return (
      <div id="summary">
        <p>Hello and welcome to my personal website!</p>
        <p>
          I'm a second year undergraduate student at{' '}
          <a
            href="https://www.ntu.edu.sg/Pages/home.aspx"
            target="_blank"
            rel="noopener noreferrer"
          >
            NTU
          </a>{' '}
          majoring in Computer Engineering. I'm passionate about full-stack web
          and app development as well as the field of autonomous vehicles.
        </p>
      </div>
    );
  }
}

export default Summary;
