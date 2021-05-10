import React, { Component } from 'react';
import Card from '../../Card';
import './styles.css';

class Skills extends Component {
  render() {
    const languages = [
      {
        name: 'Javascript',
        src: 'es6.svg'
      },
      {
        name: 'Python',
        src: 'python.png'
      },
      {
        name: 'Java',
        src: 'java.png'
      },
      {
        name: 'Dart',
        src: 'dart.png'
      },
      {
        name: 'C++',
        src: 'c++.png'
      },
      {
        name: 'C',
        src: 'c.png'
      }
    ];

    const dev = [
      {
        name: 'HTML',
        src: 'html.png'
      },
      {
        name: 'CSS',
        src: 'css.png'
      },
      {
        name: 'React',
        src: 'react.png'
      },
      {
        name: 'Node',
        src: 'node.png'
      },
      {
        name: 'Express',
        src: 'express.png'
      },
      {
        name: 'MongoDB',
        src: 'mongodb.png'
      },
      {
        name: 'Flutter',
        src: 'flutter.png'
      },
      {
        name: 'React Native',
        src: 'react_native.png'
      },
      {
        name: 'Git',
        src: 'git.png'
      },
      {
        name: 'Redux',
        src: 'redux.png'
      }
    ];

    return (
      <div>
        <h2>Skills</h2>
        <hr />
        <Card>
          <div className="skill-section">
            <h3>Languages</h3>
            <div className="skills">
              {languages.map(language => {
                return (
                  <div className="skill">
                    <img
                      src={require(`../../../assets/${language.src}`)}
                      alt={language.name}
                      height="50px"
                    />
                    <p>{language.name}</p>
                  </div>
                );
              })}
            </div>
          </div>
          <div className="skill-section">
            <h3>Development</h3>
            <div className="skills">
              {dev.map(framework => {
                return (
                  <div className="skill">
                    <img
                      src={require(`../../../assets/${framework.src}`)}
                      alt={framework.name}
                      height="50px"
                    />
                    <p>{framework.name}</p>
                  </div>
                );
              })}
            </div>
          </div>
        </Card>
      </div>
    );
  }
}

export default Skills;
