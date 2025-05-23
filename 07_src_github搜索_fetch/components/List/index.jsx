import React, { Component } from 'react';
import PubSub from 'pubsub-js';

import './index.css';

export default class List extends Component {
  
  state = {
    isFirst: true,
    isLoading: false,
    users:[],
    err: ''
  }

  componentDidMount() {
    this.token = PubSub.subscribe("queryGitUser", (_, stateObj) => {
      this.setState(stateObj);
    });
  }

  componentWillUnmount(){
    PubSub.unsubscribe(this.token);
  }

  render() {
    const {isFirst, isLoading, users, err} = this.state;
    return (
      <div className="row">
        {
          isFirst ? <h2>欢迎使用，输入关键字，点击搜索</h2> : isLoading ? <h2>Loading......</h2> :
            err ? <h2 style={{color:'red'}}>{err}</h2> :
          users.map((userObj) => {
            return (
              <div key={userObj.id} className="card">
                <a rel="noreferrer" href={userObj.html_url} target="_blank">
                  <img alt="header_image" src={userObj.avatar_url} style={{ width: '100px' }} />
                </a>
                <p className="card-text">{userObj.login}</p>
              </div>  
            );
          })
        }
        
      </div>
    )
  }
}
