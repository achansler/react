import React, { Component } from 'react';
import Name from './Name';
import List from './List';
import Clock from './Clock';
import Counter from './Counter';
import ColorChange from './ColorChange';

const purple = '#8789C0';
const mint = '#BDEFEA';
const pink = '#F6C0D0';
const white = '#ffffff';

class App extends React.Component {

constructor(props) {
  super(props);
  this.state = { color: white };
  this.handleClick = this.handleClick.bind(this);
}
handleClick() {
  console.log('hi');
}

changeColor() {
  const newColor = this.state.color == white ? mint : white;
  this.setState({ color: newColor });
}

  render() {

    return (
      <div style={{background: this.props.color}}>
        <Name name='Abigail' />
        <Clock />
        <List />
        <Counter />
        <Name name='Libby' />
        <Name name='Scott' />
        <ColorChange onCLick={this.props.handleClick} />
      </div>
    )
  }
}

export default App;
