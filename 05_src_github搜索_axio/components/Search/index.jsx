import React, { Component } from 'react'
import axios from 'axios';

export default class Search extends Component {

    search = () => {
        //获取用户输入(连续结构+重命名)
        const {keyWordElement:{value:keyWord}} = this;
        // console.log(keyWord);
        this.props.updateState({
            isFirst: false,
            isLoading: true
        });
        //发送网络请求
        axios.get(`/api1/search/users1222?q=${keyWord}`).then(
            response => {
                this.props.updateState({
                    isLoading: false,
                    users: response.data.items
                });
            },
            error => {
                this.props.updateState({
                    isLoading: false,
                    err: error.message
                });
            }
        )
    }

    render() {
        return (
            <section className="jumbotron">
                <h3 className="jumbotron-heading">搜索Github用户</h3>
                <div>
                    <input ref={c => this.keyWordElement = c } type="text" placeholder="输入用户名搜索" />&nbsp;
                    <button onClick={this.search}>搜索</button>
                </div>
            </section>
        )
    }
}
