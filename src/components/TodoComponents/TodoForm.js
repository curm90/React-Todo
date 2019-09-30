import React, { Component } from 'react';

class TodoForm extends Component {
  render() {
    return (
      <form onSubmit={this.props.formSubmitted}>
        <input
          onChange={this.props.handleTodoChanged}
          id='newTodo'
          namee='newTodo'
        />
        <button>Add Todo</button>
        <button>Clear Completed</button>
      </form>
    );
  }
}

export default TodoForm;
