import React, { Component } from 'react';
import PubSub from 'pubsub-js';

export default class Search extends Component {

    search = async () => {
        //获取用户输入(连续结构+重命名)
        const {keyWordElement:{value:keyWord}} = this;
        // console.log(keyWord);
        PubSub.publish("queryGitUser", {
            isFirst: false,
            isLoading: true
        });
        //发送网络请求

/*         fetch(`/api1/search/users2?q=${keyWord}`).then(
            response => {
                console.log('链接服务器成功'        );
                return response.json();
            },
            error => {
                console.log('链接服务器失败',error);
                return new Promise(() => {});
            }
        ).then(
            response => {
                console.log('获取数据成功', response);
            },
            error => {
                console.log('获取数据失败',error);
            }
        ); */

        /* fetch(`/api1/search/users2?q=${keyWord}`).then(
            response => {
                console.log('链接服务器成功');
                return response.json();
            }
        ).then(
            response => {
                console.log('获取数据成功', response);
            }
        ).catch(
            error => {
                console.log('获取数据失败',error);
            }
        ); */

        try {
            const response = await fetch(`/api1/search/users2?q=${keyWord}`);
            const data = await response.json();
            PubSub.publish("queryGitUser", {
                isLoading: false,
                users: data.items
            });
        } catch (error) {
            console.log('获取数据失败',error);
            PubSub.publish("queryGitUser", {
                isLoading: false,
                err: error.message
            });
        }

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
