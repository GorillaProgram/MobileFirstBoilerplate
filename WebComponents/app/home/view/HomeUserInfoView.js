import React, { Component } from 'react';
import commonStyles from '../../main/styles/commonStyles';

class HomeUserInfoView extends Component {
    constructor(props) {
        super(props);


    }

    render() {
        return (
            <div style={commonStyles.container}>
                <div style={styles.container}>
                    UserInfo
                </div>
            </div>
        );
    }
}

const styles = {
    container: {
        backgroundColor: 'red'
    }
}

export default HomeUserInfoView;
