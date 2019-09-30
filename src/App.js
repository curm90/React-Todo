import React from 'react';
import TodoForm from './components/TodoComponents/TodoForm';
import TodoList from './components/TodoComponents/TodoList';

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      todos: [],
      newTodo: ''
    };
  }

  handleTodoChanged = e => {
    this.setState({
      newTodo: e.target.value
    });
  };

  formSubmitted = e => {
    e.preventDefault();
    this.setState({
      todos: [
        ...this.state.todos,
        {
          id: Date.now(),
          task: this.state.newTodo,
          completed: false
        }
      ]
    });
  };

  render() {
    return (
      <div>
        <h2>Welcome to your Todo App!</h2>
        <TodoForm
          formSubmitted={this.formSubmitted}
          handleTodoChanged={this.handleTodoChanged}
        />
        <TodoList todos={this.state.todos} />
      </div>
    );
  }
}

export default App;
