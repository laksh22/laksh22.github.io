import React, { Component } from 'react';
import './Card.css';

class Card extends Component {
  render() {
    return (
      <div class="card">
        <div>{this.props.children}</div>
      </div>
    );
  }
}

export default Card;
