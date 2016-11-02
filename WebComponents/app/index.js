/**
 * Created by MeePwn
 * https://github.com/maybewaityou
 */
import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import AppView from './AppView';

import { Provider } from 'react-redux';
import configureStore from './framework/store/Store';
import UIManager from './main/manager/UIManager';
import FunctionManager from './main/manager/FunctionManager';

var store = configureStore();

class ReduxApp extends Component {

    constructor(props) {
        super(props);

        FunctionManager.log(UIManager);

        document.addEventListener("deviceready", function() {
            ImageCache.imageCacheInitConfig();
		}, false);
    }

    render() {
        return (
            <Provider store={store}>
                <AppView />
            </Provider>
        );
    }
}

ReactDOM.render((
    <ReduxApp />
), document.getElementById('app'));
