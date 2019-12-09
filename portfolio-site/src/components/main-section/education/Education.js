import React, { Component } from 'react';
import './Education.css';

class Education extends Component {
  render() {
    const courseList = [
      'CE2001 - Algorithms',
      'CE2002 - Object Oriented Design and Programming',
      'CE2005 - Operating Systems',
      'CE2006 - Software Engineering',
      'CE2007 - Microprocessor Based System Design',
      'CE1007 - Data Structures',
      'MH1812 - Discrete Mathematics',
      'CE1003 - Introduction to Computational Thinking'
    ];

    return (
      <div className="education">
        <h2>Education</h2>
        <hr />
        <div className="education-details">
          <div className="education-info">
            <h3>B. Eng. - Computer Engineering</h3>
            <em>
              <h3 className=".uni">Nanyang Technological University</h3>
            </em>
            <ul>
              <li>4.76/5.00 GPA</li>
              <li>Accelerated Bachelor’s Program</li>
              <li>
                NTU Entrepreneurship Society – Technical Director (AY18/19)
              </li>
              <li>
                NTU Open Source Society – HackOSS Admin for Data Analysis
                (AY18/19), TGIFHacks Chair (AY19/20)
              </li>
            </ul>
            <h3>Relevant Coursework</h3>
            <ul>
              {courseList.map(course => {
                return <li>{course}</li>;
              })}
            </ul>
          </div>
          <img
            src={require('../../../assets/ntu_full_logo.jpg')}
            alt="NTU"
            className="education-img"
            height="220px"
          />
        </div>
      </div>
    );
  }
}

export default Education;
