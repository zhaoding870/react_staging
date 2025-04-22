import React, { Component } from 'react'

import './index.css'
import PropTypes from 'prop-types';
import { nanoid } from 'nanoid';

export default class header extends Component {

  static propTypes = {
    addTodo: PropTypes.func.isRequired
  }

  handleSave = (event) => {
    const {keyCode, target} = event;
    if(keyCode !== 13 ) return;
    if(target.value.trim() === '') return;
    const todoObj = {
      id: nanoid(),
      name: target.value,
      done: false
    }
    this.props.addTodo(todoObj);
    target.value = '';
  }

  render() {
    return (
        <div className="todo-header">
            <input onKeyUp={this.handleSave} type="text" placeholder="请输入你的任务名称，按回车键确认" />
        </div>
    )
  }
}
