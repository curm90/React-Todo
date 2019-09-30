import React, { Component } from 'react';

class TodoForm extends Component {
  render() {
    return (
      <form>
        <input id='newTodo' namee='newTodo' />
        <button>Add Todo</button>
        <button>Clear Completed</button>
      </form>
    );
  }
}

export default TodoForm;
