import React, { Component } from 'react'

import './index.css'
import PropTypes from 'prop-types'

export default class Footer extends Component {

  static propTypes = {
    todos: PropTypes.array.isRequired,
    updateAll: PropTypes.func.isRequired,
    clearAllDone: PropTypes.func.isRequired
  }

  handleCheck = (event) => {
    this.props.updateAll(event.target.checked);
  }

  handleClearAllDone = () => {
    this.props.clearAllDone();
  }

  render() {
    const {todos} = this.props;
    const doneCount = todos.reduce((prev, todo) => prev + (todo.done ? 1 : 0), 0);
    const totalCount = todos.length;

    return (
        <div className="todo-footer">
            <label>
                <input type="checkbox" checked={doneCount === totalCount && totalCount !== 0} onChange={(event) => this.handleCheck(event)} />
            </label>
            <span>
                <span>已完成{doneCount}</span> / 全部{totalCount}
            </span>
            <button className="btn btn-danger" onClick={this.handleClearAllDone}>清除已完成任务</button>
        </div>
    )
  }
}
