import React, { Component } from 'react';

class List extends React.Component {
  render() {
    const likes = ['🐶', '🍕', 'Libby', 'Scott']
    const listItems = likes.map((likes) => <li>I like {likes}</li>);

    return (
      <div>
        <ul>
          {listItems}
        </ul>
      </div>
    )
  }
}

export default List;
