import React from 'react';

const TodoForm = props => {
  return (
    <form>
      <input
        onChange={props.handleTodoChanged}
        id='newTodo'
        name='newTodo'
        value={props.newTodo}
      />
      <button onClick={props.addTodo} type='submit'>
        Add Todo
      </button>
      <button>Clear Completed</button>
    </form>
  );
};

export default TodoForm;
