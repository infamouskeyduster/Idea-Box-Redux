import React from 'react';

const ToDo = ({ todo }) => {
  console.log('props in ToDo component', { todo });
  return (
    <div>
      <li>{todo.todo}</li>
    </div>
  )
}

export default ToDo;
