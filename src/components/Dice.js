import React, { Component } from 'react';

class Dice extends Component {
  render() {
    return (
      <div className={this.props.isRolling ? 'Dice wobble' : 'Dice'}>
        <i className={`fas fa-dice-${this.props.die} fa-8x`}></i>
      </div>
    );
  }
}

export default Dice;