import React, { Component } from 'react'
import { Link, Route } from 'react-router-dom'
import Detail from './Detail';

export default class Message extends Component {
    state = {
        messageArr: [
            {id:'01', title: '消息1'},
            {id:'02', title: '消息2'},
            {id:'03', title: '消息3'}
        ]
    }
    render() {
        const {messageArr} = this.state;
        return (
            <div>
                <ul>
                    {
                        messageArr.map( messageObj => {
                            return (
                                <li key={messageObj.id}>
                                    <Link to={`/home/message/detail/${messageObj.id}/${messageObj.title}`}>{messageObj.title}</Link>
                                </li>
                            )
                        } )
                    }
                </ul>
                
                <Route path="/home/message/detail/:id/:title" component={Detail}/>
            </div>
        )
    }
}
