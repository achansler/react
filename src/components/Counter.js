import React, { Component } from 'react';

class Counter extends React.Component{
  constructor(props) {
    super(props);
    this.state = { counter: 0};
    this.countUp = this.countUp.bind(this);
    this.countDown = this.countDown.bind(this);
  }

  countUp() {
    const increase = this.state.counter + 1;
    this.setState({ counter: increase });
  }

  countDown() {
    const decrease = this.state.counter - 1;
    this.setState({ counter: decrease });
  }

  render() {
    return(
      <div>
        <h3>Counter: {this.state.counter}</h3>
        <button onClick={this.countUp}> + </button>
        <button onClick={this.countDown}> - </button>
      </div>
    )
  }
}

export default Counter;
