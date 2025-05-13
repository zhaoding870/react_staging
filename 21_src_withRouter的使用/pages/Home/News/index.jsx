import React, { Component } from 'react'

export default class News extends Component {

  // componentDidMount(){
  //   let timer = setInterval(()=> {
  //     this.props.history.push('/home/message');
  //     clearInterval(timer);
  //   }, 2000);
  // }

  render() {
    return (
        <ul>
            <li>news001</li>
            <li>news002</li>
            <li>news003</li>
        </ul>
    )
  }
}
