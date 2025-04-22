import React, { Component } from 'react'

import './index.css'
import PropTypes from 'prop-types';

export default class index extends Component {
  static propTypes = {
    id: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    done: PropTypes.bool.isRequired,
    deleteTodo: PropTypes.func.isRequired,
    doneTodo: PropTypes.func.isRequired
  }

  state = {mouse: false}

  handleMouse = (flag) => {
    this.setState({mouse: flag});
  }

  handleDelete = (id) => {
    return () => {
      if(window.confirm('确定要删除吗？')){
        this.props.deleteTodo(id);
      }
    }
  }

  hanndleCheck = (id) => {
    return (event) => {
      this.props.doneTodo(id, event.target.checked);
    }
  }

  render() {
    const {id, name, done} = this.props;
    const {mouse} = this.state;
    return (
        <li onMouseEnter={() => this.handleMouse(true)} onMouseLeave={ () => this.handleMouse(false)} 
        style={{backgroundColor: mouse ? "#ddd" : "white"}}>
            <label>
                <input type="checkbox" checked={done} onChange={ this.hanndleCheck(id)}/>
                <span>{name}</span>
            </label>
            <button onClick={this.handleDelete(id)} className="btn btn-danger" style={{display: mouse? 'block' : 'none'}}>删除</button>
        </li>
    )
  }
}
