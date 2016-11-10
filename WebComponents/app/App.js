/**
 * Created by MeePwn
 * https://github.com/maybewaityou
 */
import React, { Component } from 'react';
import { Router, Route, Link, IndexRoute, Redirect, hashHistory, browserHistory, createMemoryHistory } from 'react-router';
import Just from './main/context/Just';

class App extends Component {

    constructor(props) {
        super(props);


    }

    render() {
        return (
            <Router key={Math.random()} history={createMemoryHistory(location)}>
                <Route path={Just.RootRoute.path} component={Just.RootRoute.component}>
                    <IndexRoute component={Just.IndexRoute} />
                    <Route path={Just.ProductRoute.path} component={Just.ProductRoute.component}></Route>
                    <Route path={Just.BusinessManagementRoute.path} component={Just.BusinessManagementRoute.component}>

                    </Route>
                    <Route path={Just.CommonToolsRoute.path} component={Just.CommonToolsRoute.component}></Route>
                    <Route path={Just.LoginRoute.path} component={Just.LoginRoute.component}></Route>
                    <Route path={Just.WebViewRoute.path} component={Just.WebViewRoute.component}></Route>
                </Route>
            </Router>
        );
    }

}

export default App;
