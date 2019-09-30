import React from 'react';

const Todo = ({ handleCompleted, todo }) => {
  return (
    <div
      style={todo.completed ? { textDecoration: 'line-through' } : null}
      className='todo-item'
      onClick={() => handleCompleted(todo.id)}
    >
      {todo.task}
    </div>
  );
};

export default Todo;
