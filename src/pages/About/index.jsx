import React, { Component } from 'react'

export default class About extends Component {
  render() {
    console.log('About 组件接收到的属性 ', this.props);
    return (
      <h3>我是About的内容</h3>
    )
  }
}
