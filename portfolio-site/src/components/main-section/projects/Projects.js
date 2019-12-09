import React, { Component } from 'react';
import './Projects.css';
import Card from '../../card/Card';

class Projects extends Component {
  render() {
    const projectList = [
      <Card>
        <div class="header">
          <div class="title">
            <h3>
              {' '}
              <a
                href="https://www.hacklyst.com"
                target="_blank"
                rel="noopener noreferrer"
              >
                HackLyst
              </a>{' '}
            </h3>
            <h4>Dec. 2018 - Present</h4>
          </div>
          <div class="image">
            <img
              src={require('../../../assets/hacklyst_logo.png')}
              alt="HackLyst"
              height="110px"
            />
          </div>
        </div>

        <div className="description">
          <p>
            ▪ Designed responsive front-end using React and custom CSS theme.{' '}
          </p>
          <p>
            ▪ Built REST API using Express to serve data stored in MongoDB
            database.{' '}
          </p>
          <p>
            ▪ Implemented Redux architecture for easier state management across
            dynamic multi-page website.
          </p>
          <p>▪ Deployed website on Linux VM using nginx server.</p>
        </div>
      </Card>,
      <Card>
        <div class="header">
          <div class="title">
            <h3>
              {' '}
              <a
                href="https://github.com/laksh22/ParkEasy"
                target="_blank"
                rel="noopener noreferrer"
              >
                ParkEasy
              </a>{' '}
            </h3>
            <h4>Aug. 2019 - Nov. 2019</h4>
          </div>
          <div class="image">
            <img
              src={require('../../../assets/park_easy_logo.png')}
              alt="ParkEasy"
              height="110px"
            />
          </div>
        </div>

        <div className="description">
          <p>▪ Translated design mock-ups to cross-platform UI in Flutter. </p>
          <p>
            ▪ Queried government API and represented data in list and map view
            while following Material Design principles.{' '}
          </p>
          <p>
            ▪ Used MVC architecture and observer pattern to enable parallel
            development and extensibility.
          </p>
          <p>
            ▪ Collaborated with 6-member team in creation of functional
            requirements and class diagrams as part of SDLC.
          </p>
        </div>
      </Card>
    ];

    return (
      <div>
        <h2>Projects</h2>
        <hr />
        {projectList}
      </div>
    );
  }
}

export default Projects;
