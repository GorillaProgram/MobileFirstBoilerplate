/**
 * Created by MeePwn
 * https://github.com/maybewaityou
 */
import React, { Component } from 'react';
import { Router, Route, Link, IndexRoute, Redirect, hashHistory, browserHistory, createMemoryHistory } from 'react-router';
import Just from './main/constant/Just';
import HomeContainer from './pages/home/container/HomeContainer';
import HomeLeftTabs from './pages/home/HomeLeftTabs';

class App extends Component {

    constructor(props) {
        super(props);


    }

    render() {
        return (
            <Router key={Math.random()} history={createMemoryHistory(location)}>
                <Route path={Just.AppPath} component={HomeLeftTabs}>
                    <IndexRoute component={HomeContainer} />
                    <Route path={Just.Test02} component={HomeContainer}></Route>
                </Route>
            </Router>
        );
    }

}

export default App;
