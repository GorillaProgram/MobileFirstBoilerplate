/**
 * Created by MeePwn
 * https://github.com/maybewaityou
 */
import React, { Component } from 'react';
import { Router, Route, Link, IndexRoute, Redirect, hashHistory, browserHistory, createMemoryHistory } from 'react-router';
import Just from './main/constant/Just';
import Test00 from './test/Test00';
import Test01 from './test/Test01';
import Test02 from './test/Test02';

const history = createMemoryHistory(location);

class AppView extends Component {

    constructor(props) {
        super(props);


    }

    render() {
        return (
            <Router key={Math.random()} history={history}>
                <Route path={Just.AppPath} component={Test00}>
                    <IndexRoute component={Test01} />
                    <Route path={Just.Test02} component={Test02}></Route>
                </Route>
            </Router>
        );
    }

}

export default AppView;
