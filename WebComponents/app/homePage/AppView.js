/**
 * Created by MeePwn
 * https://github.com/maybewaityou
 */
import React, { Component } from 'react';

class AppView extends Component {
    constructor(props) {
        super(props);


    }

    render() {
        return (
            <div style={styles.container}>
                <img src="./app/static/imgs/ad.png" />
            </div>
        );
    }
}

const styles = {
    container: {
        display: 'flex',
        flexDirection: 'row',
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: 'red'
    },
    test1: {
        flex: 2,
    },
    test2: {
        flex: 1,
    }

};

export default AppView;
