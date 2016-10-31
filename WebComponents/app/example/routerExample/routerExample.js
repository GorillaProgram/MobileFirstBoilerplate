/*jshint esversion: 6 */
'use strict';

import React, { Component } from 'react';
import { Router, Route, Link, IndexRoute, Redirect, hashHistory } from 'react-router';
import TV from './TV';

class TitleTab extends Component {
    render() {
        return (
            <div>
                <div className="ui secondary pointing menu">
                    <Link to="/" className="item">首页</Link>
                    <Link to="/tv" className="item">电视</Link>
                </div>
                {this.props.children}
            </div>
        );
    }
}

class Show extends Component {
    render() {
        return (
            <h3>电视节目 {this.props.params.id}</h3>
        );
    }
}

class Home extends Component {
    render() {
        return (
            <div className="ui info message">
                首页内容
            </div>
        );
    }
}

class ShowIndex extends Component {
    render() {
        return (
            <div className="ui info message">
                电视节目列表
            </div>
        );
    }
}

function handleEnter() {
    window.alert('handleEnter ------ ');
    console.log('handleEnter ------ ');
}

function handleLeave() {
    window.alert(' ------ handleLeave');
    console.log(' ------ handleLeave');
}

class RouterExample extends Component {
    render() {
        return (
            <Router history={hashHistory}>
                <Route path="/" component={TitleTab}>
                    <IndexRoute component={Home} />
                    <Route path="tv" component={TV} onEnter={handleEnter} onLeave={handleLeave}>
                        <IndexRoute component={ShowIndex} />
                        <Route path="/shows/:id" component={Show} />
                        <Redirect from="shows/:id" to="/shows/:id" />
                    </Route>
                </Route>
            </Router>
        );
    }
}

export default RouterExample;
