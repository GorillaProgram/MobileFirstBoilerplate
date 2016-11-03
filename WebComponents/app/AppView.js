/**
 * Created by MeePwn
 * https://github.com/maybewaityou
 */
import React, { Component } from 'react';
import { Router, Route, Link, IndexRoute, Redirect, hashHistory, browserHistory } from 'react-router';
import UIManager from './main/manager/UIManager';
import Test00 from './test/Test00';
import Test01 from './test/Test01';

class AppView extends Component {

    constructor(props) {
        super(props);


    }

    render() {
        return (
            <Router key={Math.random()} history={browserHistory}>
                <Route path={UIManager.AppPath} component={Test00}>
                    <Route path={UIManager.Test01} component={Test01}></Route>
                </Route>
            </Router>
        );
    }

}

export default AppView;
