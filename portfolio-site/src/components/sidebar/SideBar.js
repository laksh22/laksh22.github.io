import React, { Component } from 'react';
import './SideBar.css';

class SideBar extends Component {
  render() {
    return (
      <div id="sidebar">
        <img
          src={require('../../assets/profile-pic.jpg')}
          alt="Profile Picture"
        />
        <h2>Web Development</h2>
        <h2>App Development</h2>
        <h2>Embedded Development</h2>
      </div>
    );
  }
}

export default SideBar;
