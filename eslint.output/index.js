/**
 * Created by MeePwn
 * https://github.com/maybewaityou
 */
import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import configureStore from './dataflow/store/Store';
import Just from './main/context/Just';
import App from './App';

var store = configureStore();

class ReduxApp extends Component {

    constructor(props) {
        super(props);

        Just.initializePage();
    }

    render() {
        return (
            <Provider store={store}>
                <App />
            </Provider>
        );
    }
}

ReactDOM.render((
    <ReduxApp />
), document.getElementById('app'));
