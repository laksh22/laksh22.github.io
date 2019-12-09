import React, { Component } from 'react';
import './Experience.css';
import Card from '../../card/Card';

class Experience extends Component {
  render() {
    const experienceList = [
      <Card>
        <div class="header">
          <div class="title">
            <h3>
              {' '}
              <a
                href="https://qwertythoughts.com"
                target="_blank"
                rel="noopener noreferrer"
              >
                Qwerty Thoughts
              </a>{' '}
            </h3>
            <h3>
              <i>Software Development Intern</i>
            </h3>
            <h4>May 2019 - Aug. 2019</h4>
          </div>
          <div class="image">
            <img
              src={require('../../../assets/qwerty_thoughts_logo.jpg')}
              alt="Qwerty Thoughts"
              height="130px"
            />
          </div>
        </div>

        <div className="description">
          <p>
            ▪ Created WYSIWYG text editor with 20 features in React using
            Draft.js with Express back-end for querying APIs.{' '}
          </p>
          <p>
            ▪ Utilized Bootstrap framework to improve user interface of the
            text-editor.{' '}
          </p>
          <p>
            ▪ Prepared web-scraping scripts using Twitter API and Selenium to
            gain insights on book trends.
          </p>
          <p>
            ▪ Conducted Named Entity Recognition using NLTK, spaCy and
            StanfordNLP to extract topics from books.
          </p>
        </div>
      </Card>,
      <Card>
        <div class="header">
          <div class="title">
            <h3>
              {' '}
              <a
                href="https://mae.ntu.edu.sg/Programmes/CurrentStudents/UG(Full-Time)/PDC/NVCars/Pages/NVX.aspx"
                target="_blank"
                rel="noopener noreferrer"
              >
                Nanyang Venture
              </a>{' '}
            </h3>
            <h3>
              <i>Embedded Software Developer</i>
            </h3>
            <h4>Aug. 2019 - Present</h4>
          </div>
          <div class="image">
            <img
              src={require('../../../assets/ntu_logo.png')}
              alt="NTU"
              height="130px"
            />
          </div>
        </div>

        <div className="description">
          <p>
            ▪ Developed interrupt-based RTOS mechanism to transfer ultrasonic
            data in C++ for Autonomous Vehicle.{' '}
          </p>
          <p>
            ▪ Built custom power-meter with increased accuracy using ADC for
            Hydrogen Fuel Cell Vehicle.{' '}
          </p>
          <p>
            ▪ Made C++ script to log Battery Management System data over CAN bus
            to SD card.
          </p>
        </div>
      </Card>,
      <Card>
        <div class="header">
          <div class="title">
            <h3>
              {' '}
              <a
                href="https://www.ntu.edu.sg/Pages/home.aspx"
                target="_blank"
                rel="noopener noreferrer"
              >
                Nanyang Technological University
              </a>{' '}
            </h3>
            <h3>
              <i>Undergraduate Researcher</i>
            </h3>
            <h4>Aug. 2019 - Present</h4>
          </div>
          <div class="image">
            <img
              src={require('../../../assets/ntu_logo.png')}
              alt="NTU"
              height="130px"
            />
          </div>
        </div>

        <div className="description">
          <p>
            ▪ Developed car-tracking algorithms using YOLO, Haar Cascade, and
            HOG.{' '}
          </p>
          <p>
            ▪ Prepared foreground and background extraction scripts using OpenCV
            in Python.{' '}
          </p>
          <p>▪ Researched on Generative Adversarial Networks using PyTorch.</p>
        </div>
      </Card>
    ];

    return (
      <div>
        <h2>Experience</h2>
        <hr />
        {experienceList}
      </div>
    );
  }
}

export default Experience;
