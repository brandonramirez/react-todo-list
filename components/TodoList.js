import React, { Component } from 'react';

class TodoList extends Component {

  render() {
    return (
      <ol>
      {
        this.props.todos.map((todo) => {
          return <li key={todo.id}>{todo.text}</li>
        })
      }
      </ol>
    )
  }

}

export default TodoList
