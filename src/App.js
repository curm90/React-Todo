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

  handleCompleted = id => {
    let todos = [...this.state.todos];
    let todo = todos.find(todo => todo.id === id);
    todo.completed = !todo.completed;

    this.setState({ todo });
  };

  handleTodoChanged = e => {
    this.setState({
      newTodo: e.target.value
    });
  };

  handleAddTodo = e => {
    e.preventDefault();
    this.setState({
      newTodo: '',
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

  handleClearCompletedTodos = e => {
    e.preventDefault();
    let todos = this.state.todos.filter(todo => !todo.completed);
    this.setState({ todos });
  };

  render() {
    return (
      <div>
        <h2>Welcome to your Todo App!</h2>
        <TodoForm
          handleAddTodo={this.handleAddTodo}
          handleTodoChanged={this.handleTodoChanged}
          newTodo={this.state.newTodo}
          handleClearCompletedTodos={this.handleClearCompletedTodos}
        />
        <TodoList
          todos={this.state.todos}
          handleCompleted={this.handleCompleted}
        />
      </div>
    );
  }
}

export default App;
