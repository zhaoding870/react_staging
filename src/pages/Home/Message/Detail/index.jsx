import React, { Component } from 'react'

const messageData = [
    {id:'01', content:'你好，中国'},
    {id:'02', content:'你好，陕西'},
    {id:'03', content:'你好，西安'},
]

export default class Detail extends Component {
  render() {
    // console.log(this.props);
    const {id, title} = this.props.match.params;
    const resultMessage = messageData.find( messageObj => {
        return messageObj.id === id;
    } );
    return (
        <div>
            <hr />  
            <ul>
                <li>ID:{id}</li>
                <li>TITLE:{title}</li>
                <li>CONTENT:{resultMessage.content}</li>
            </ul>
      </div>
    )
  }
}
