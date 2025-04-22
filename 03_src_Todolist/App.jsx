import React, { Component } from 'react';

import Header from './components/Header';
import List from './components/List';
import Footer from './components/Footer';

import './App.css'

export default class App extends Component {

    state = {
        todos: [
            {id:'001', name: '吃饭', done: true},
            {id:'002', name: '睡觉', done: false},
            {id:'003', name: '写作业', done: false}
        ]
    };

    addTodo = (todoObj) => {
        const {todos} = this.state;
        const newTodos = [todoObj, ...todos];
        this.setState({todos: newTodos});
    }

    deleteTodo = (id) => {
        const {todos} = this.state;
        const newTodos = todos.filter((todo) => {
            return todo.id !== id;
        });
        this.setState({todos: newTodos});
    }

    doneTodo = (id, done) => {
        const {todos} = this.state;
        const newTodos = todos.map((todo) => {
            if(todo.id === id) {
                return {...todo, done};
            } else {
                return todo;
            }
        });
        this.setState({todos:newTodos});
    }

    updateAll = (done) => {
        const {todos} = this.state;
        const newTodos = todos.map((todo) => {
            return {...todo, done};
        })
        this.setState({todos: newTodos});
    }

    clearAllDone = () => {
        const {todos} = this.state;
        const newTodos = todos.filter((todo) => {
            return !todo.done;
        });
        this.setState({todos: newTodos});
    }

    render() {
        const {todos} = this.state;
        return (
            <div className="todo-container">
                <div className="todo-wrap">
                    <Header addTodo={this.addTodo}/>
                    <List todos={todos} deleteTodo={this.deleteTodo} doneTodo={this.doneTodo}/>
                    <Footer todos={todos} updateAll={this.updateAll} clearAllDone={this.clearAllDone}/>
                </div>
            </div>
        );
    }
}
