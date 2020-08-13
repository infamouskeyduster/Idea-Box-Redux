import React from 'react';
import Todo from '../components/ToDo';
import { connect } from 'react-redux';

const ToDoList = ({ todos }) => {
  console.log('todos', todos);

  if (todos.length === 0) {
    return (
      <h4>You currently have no todos…</h4>
    )
  }

  const displayTodos = todos.map(todo => {
    return (
      <Todo
        todo={todo}
        key={todo.id}
      />
    )
  })

  return (
    <ul>
      {displayTodos}
    </ul>
  )
}

const mapStateToProps = state => ({
  todos: state.todos
});

export default connect(mapStateToProps)(ToDoList);
