import React, { Component } from 'react';

import Search from './components/Search'
import List from './components/List'
import './App.css';

export default class App extends Component {

    state = {users:[]}

    updateUsers = (users) => {
        this.setState({users});
    }

    render() {
        return (
            <div className="container">
                <Search updateUsers={this.updateUsers}/>
                <List users={this.state.users}/>
            </div>
        )
    }
}
