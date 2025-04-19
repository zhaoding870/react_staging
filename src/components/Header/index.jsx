import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { nanoid } from 'nanoid';

import './index.css';

export default class Header extends Component {

  //对属性类型，必要性进行限制
  static propTypes = {
    addTodos: PropTypes.func.isRequired
  }

  handleKeyUp = (event) => {
    const {target, keyCode} = event;
    if (keyCode !== 13) return;
    if ( target.value.trim() === '' ){
      alert('输入不能为空');
      return;
    }
    const todoObj = {
      id: nanoid(),
      name: target.value,
      done: false
    }
    this.props.addTodos( todoObj );
    target.value = '';
  }

  render() {
    return (
      <div className="todo-header">
        <input onKeyUp={this.handleKeyUp} type="text" placeholder="请输入你的任务名称，按回车键确认"/>
      </div>
    )
  }
}
