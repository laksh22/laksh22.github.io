import React, { Component } from 'react';
import './styles.css';

class Education extends Component {
  render() {
    const courseList = [
      'CE4034 - Information Retrieval',
      'CE4016 - Advanced Topics in Algorithms',
      'CE3005 - Computer Networks',
      'CZ3002 - Advanced Software Engineering',
      'CE2001 - Algorithms',
      'CE2002 - Object Oriented Design and Programming',
      'CE2005 - Operating Systems',
      'CE2006 - Software Engineering',
      'CE1007 - Data Structures',
    ];

    return (
      <div className="education">
        <h2>Education</h2>
        <div className="education-details">
          <div className="education-info">
            <h3 className="uni">Nanyang Technological University</h3>
            <h4 id="degree">B. Eng. - Computer Engineering (Aug. 2018 - Dec. 2021)</h4>
            <ul>
              <li>4.77/5.00 GPA</li>
              <li>Accelerated Bachelor’s Program</li>
              <li>NTU President Research Scholar - Computer Vision Undergraduate Researcher (AY19/20)</li>
              <li>
                NTU Open Source Society – President(AY20/21), TGIFHacks Chair (AY19/20), HackOSS Admin for Data Analysis
                (AY18/19)
              </li>
              <li>
                NTU Entrepreneurship Society – Technical Director (AY18/19)
              </li>
              <li>SCSE Peer Coach</li>
            </ul>
            <h3 id="coursework">Relevant Coursework</h3>
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
