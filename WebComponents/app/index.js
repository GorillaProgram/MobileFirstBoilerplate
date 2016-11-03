/**
 * Created by MeePwn
 * https://github.com/maybewaityou
 */
import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import configureStore from './framework/store/Store';
import Just from './main/constant/Just';
import AppView from './AppView';

var store = configureStore();

class ReduxApp extends Component {

    constructor(props) {
        super(props);

        Just.initializePage();
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
