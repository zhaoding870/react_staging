import React, { Component } from 'react';

import Item from '../Item'
import './index.css'
import PropTypes from 'prop-types';

export default class List extends Component {
  static propTypes = {
    todos: PropTypes.array.isRequired,
    deleteTodo: PropTypes.func.isRequired,
    doneTodo: PropTypes.func.isRequired
  }

  render() {
    const {todos, deleteTodo, doneTodo} = this.props;
    return (
        <ul className="todo-main">
            {
              todos.map((todo) => {
                return (
                  <Item key={todo.id} {...todo} deleteTodo={deleteTodo} doneTodo={doneTodo}/>
                )
              })
            }
        </ul>
    )
  }
}
