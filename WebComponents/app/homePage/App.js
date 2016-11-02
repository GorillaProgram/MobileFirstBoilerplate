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
            <div style={{...styles.container, ...styles.background}}>

            </div>
        );
    }
}

const styles = {
    container: {
        fontSize: 20,
    },
    
};

export default AppView;
