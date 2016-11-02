import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import TestExample from './example/testExample/TestExample';
import TestMobileFirstExample from './example/testExample/TestMobileFirstExample';
import RouterExample from './example/routerExample/routerExample';
import SlickExample from './example/slickExample/SlickExample';
import AppView from './homePage/AppView';

import { Provider } from 'react-redux';
import configureStore from './framework/store/Store';

var store = configureStore();

class ReduxApp extends Component {

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
