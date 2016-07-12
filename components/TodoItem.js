import React, { Component } from 'react';
import { connect } from 'react-redux';

class TodoItem extends Component {

  handleComplete() {
    console.log('complete');
    this.props.dispatch(actions.completeTodo(this.props.todo.id));
  }

  handleDelete() {
    console.log('delete');
    this.props.dispatch(actions.deleteTodo(this.props.todo.id));
  }

  render() {
    return (
      <li>
        <div>{this.props.todo.text}</div>
        <button onClick={this.handleComplete.bind(this)}>Mark as completed</button>
        <button onClick={this.handleDelete.bind(this)}>Delete</button>
      </li>
    )
  };

}

export default TodoItem;

function mapStateToProps(state) {
  return state
}

export default connect(mapStateToProps)(TodoItem)