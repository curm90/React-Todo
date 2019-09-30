import React from 'react';
import Todo from './Todo';

const TodoList = props => {
  return (
    <div className='todo-list'>
      {props.todos.map(todo => (
        <Todo
          key={todo.id}
          todo={todo}
          handleCompleted={props.handleCompleted}
        />
      ))}
    </div>
  );
};

export default TodoList;
