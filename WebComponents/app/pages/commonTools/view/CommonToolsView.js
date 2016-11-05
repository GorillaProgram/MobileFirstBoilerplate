/**
 * Created by MeePwn
 * https://github.com/maybewaityou
 */
import React, { Component } from 'react';
import CommonStyles from '../../../main/constant/CommonStyle';

class CommonToolsView extends Component {

    constructor(props) {
        super(props);


    }

    render() {
        return (
            <div style={CommonStyles.homeRightContainer}>
                <div style={styles.container}>
                    commonTools
                </div>
            </div>
        );
    }
}

const styles = {
    container: {

    },

};

export default CommonToolsView;
