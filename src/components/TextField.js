import React, { Component } from 'react';
import { render } from 'react-dom';

class TextField extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      value: 'Write about your day'
    };
    
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }
  
  handleChange(event) {
    this.setState({value: event.target.value});
  }
  
  handleSubmit(event) {
    alert('Your day: ' + this.state.value);
    event.preventDefault();
  }
  
  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <label>
          <textarea value={this.state.value} onChange={this.handleChange} />
        </label>
      </form>
    );
  }
}

export default TextField;
