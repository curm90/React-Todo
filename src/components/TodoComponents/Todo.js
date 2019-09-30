import React, { Component } from 'react';

class Todo extends Component {
  render() {
    return (
      <ul>
        <li key={this.props.todo.id}>{this.props.todo.task}</li>
      </ul>
    );
  }
}

export default Todo;
