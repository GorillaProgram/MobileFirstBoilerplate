import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import AppView from './AppView';

import { Provider } from 'react-redux';
import configureStore from './framework/store/Store';
import ImageCache from './main/utilities/UI/ImageCache';

var store = configureStore();

class ReduxApp extends Component {

    constructor(props) {
        super(props);

        ImageCache.imageCacheInitConfig();
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
