import React, { Component } from 'react';

class ColorChange extends React.Component {

  render() {

    return(
      <div>
        <button onClick={this.props.onClick}>Change Color</button>
      </div>
    )
  }
}

export default ColorChange;
