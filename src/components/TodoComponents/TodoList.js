import React from 'react';
import Todo from './Todo';

const TodoList = ({ todos, handleCompleted }) => {
  return (
    <div className='todo-list'>
      {todos.map(todo => (
        <Todo key={todo.id} todo={todo} handleCompleted={handleCompleted} />
      ))}
    </div>
  );
};

export default TodoList;
