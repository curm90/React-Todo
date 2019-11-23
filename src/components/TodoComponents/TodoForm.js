import React from 'react';

const TodoForm = ({
  handleAddTodo,
  handleTodoChanged,
  newTodo,
  handleClearCompletedTodos
}) => {
  return (
    <form>
      <input
        onChange={handleTodoChanged}
        id='newTodo'
        name='newTodo'
        value={newTodo}
      />
      <button onClick={handleAddTodo} type='submit'>
        Add Todo
      </button>
      <button onClick={handleClearCompletedTodos}>Clear Completed</button>
    </form>
  );
};

export default TodoForm;
