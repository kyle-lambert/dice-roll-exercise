import React, { Component } from 'react';
import Dice from './Dice';

class RollDice extends Component {
  constructor(props) {
    super(props);
    this.state = {
      d1: this.props[0],
      d2: this.props[5],
      isRolling: false
    }
    this.roll = this.roll.bind(this);
  }

  static defaultProps = ['one', 'two', 'three', 'four', 'five', 'six'];
  roll() {
    const ranNum1 = Math.floor(Math.random() * 6);
    const ranNum2 = Math.floor(Math.random() * 6);

    this.setState({
      d1: this.props[ranNum1],
      d2: this.props[ranNum2],
      isRolling: true
    })

    setTimeout(() => {
      this.setState({ isRolling: false })
    }, 1000)
  }

  render() {
    return (
      <div>
        <div className="dice__container">
          <Dice die={this.state.d1} isRolling={this.state.isRolling} />
          <Dice die={this.state.d2} isRolling={this.state.isRolling} />
        </div>
        <button
          disabled={this.state.isRolling}
          className={this.state.isRolling
            ? 'Button Button-off'
            : 'Button'} onClick={this.roll}
        >
          {this.state.isRolling
            ? 'Rolling...'
            : 'Roll Dice'}
        </button>
      </div>
    );
  }
}

export default RollDice;