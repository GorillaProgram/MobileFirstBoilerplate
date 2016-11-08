/**
 * Created by MeePwn
 * https://github.com/maybewaityou
 */
import React, { Component } from 'react';
import Constant from '../../../main/constant/Constant';
import CommonStyles from '../../../main/constant/CommonStyle';

class LoginView extends Component {

    constructor(props) {
        super(props);


    }

    render() {
        return (
            <div style={CommonStyles.homeRightContainer}>
                <div style={styles.container}>
                    <div style={styles.loginLayout}>
                        <div style={styles.loginHeaderLayout}>

                        </div>
                        <div style={styles.loginContentLayout}>

                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

const styles = {
    container: {
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        height: Constant.screenHeight - 40,
    },
    loginLayout: {
        width: '60%',
        height: 300,
        border: '1px solid #888888',
        borderRadius: 10,
    },
    loginHeaderLayout: {

    },
    loginContentLayout: {

    },
    loginButton: {

    }

};

export default LoginView;
