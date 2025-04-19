import React, { Component } from 'react'

import './index.css'

export default class Footer extends Component {

  changeAllTodo = (event) => {
    this.props.changeAllTodo(event.target.checked);
  }

  clearAllDone = () => {
    this.props.clearAllDone();
  }

  render() {
    const {todos} = this.props;
    const doneCount = todos.reduce((prev, todo) => prev + (todo.done ? 1 : 0), 0);
    const total = todos.length;
    return (
      <div className="todo-footer">
        <label>
          <input type="checkbox" onChange={this.changeAllTodo} checked={doneCount === total && total !== 0}/>
        </label>
        <span>
          <span>已完{doneCount}</span> / 全部{total}
        </span>
        <button onClick={this.clearAllDone} className="btn btn-danger">清除已完成任务</button>
      </div>
    )
  }
}
