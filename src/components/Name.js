import React, {Component} from 'react';

class Name extends React.Component{
  render(){
    return (
      <div>
        <h1>Hi</h1>
        <p>My name is {this.props.name} 😎</p>
      </div>
    )
  }
}

export default Name;
