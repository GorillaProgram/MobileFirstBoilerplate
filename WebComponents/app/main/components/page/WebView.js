/**
 * Created by MeePwn
 * https://github.com/maybewaityou
 */
import React, { Component } from 'react';
import Title from '../view/Title';

class WebView extends Component {

    constructor(props) {
        super(props);


    }

    render() {
        return (
            <div style={styles.container}>
                <Title
                    title="广告 > "
                    subTitle="haha"
                />
            </div>
        );
    }
}

const styles = {
    container: {

    },

};

export default WebView;
