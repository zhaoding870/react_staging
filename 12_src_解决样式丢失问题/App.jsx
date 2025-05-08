import React, { Component } from 'react';

import {Route,Switch} from 'react-router-dom';

import About from './pages/About';
import Home from './pages/Home';
import Test from './pages/Test'
import Header from './components/Header';
import MyNavLink from './components/MyNavLink';

export default class App extends Component {

    render() {
        return (
            <div>
                <div className="row">
                    <div className="col-xs-offset-2 col-xs-8">
                        <Header />
                    </div>
                </div>
                <div className="row">
                    <div className="col-xs-2 col-xs-offset-2">
                        <div className="list-group">
                            {/* <a className="list-group-item active" href="./about.html">About</a>
                            <a className="list-group-item" href="./home.html">Home</a> */}
                            <MyNavLink to="/ding/about">About</MyNavLink>
                            <MyNavLink to="/ding/home">Home</MyNavLink>
                        </div>
                    </div>
                    <div className="col-xs-6">
                        <div className="panel">
                            <div className="panel-body">
                                <Switch>
                                    <Route path="/ding/about" component={About}/>
                                    <Route path="/ding/home" component={Home}/>
                                    <Route path="/ding/home" component={Test}/>
                                </Switch>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}
