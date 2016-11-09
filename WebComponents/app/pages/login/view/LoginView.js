/**
 * Created by MeePwn
 * https://github.com/maybewaityou
 */
import React, { Component } from 'react';
import Constant from '../../../main/constant/Constant';
import CommonStyles from '../../../main/constant/CommonStyle';
import { Button, EditView } from '../../../main/components/view/UIComponents';

class LoginView extends Component {

    constructor(props) {
        super(props);

        console.log('=== UIComponents ====>>> ', Button);
    }

    render() {
        return (
            <div style={CommonStyles.homeRightContainer}>
                <div style={styles.container}>
                    <div style={styles.loginLayout}>
                        <div style={styles.loginHeaderLayout}>
                            柜员登录
                        </div>
                        <div style={styles.loginContentLayout}>
                            <EditView
                                style={styles.loginUserName}
                                image="./static/imgs/ad.png" />
                            <EditView
                                style={styles.loginPassowrd}
                                image="./static/imgs/ad.png" />
                            <Button
                                title="登录"
                                onClick={() => {
                                    console.log('=======');
                                }} />
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
        height: Constant.loginDialogHeight,
        border: '1px solid #888888',
        borderRadius: 10,
        overflow: 'hidden'
    },
    loginHeaderLayout: {
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center',
        height: Constant.dialogTitleHeight,
        paddingLeft: 15,
        backgroundColor: 'red'
    },
    loginContentLayout: {
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        height: Constant.loginDialogHeight - Constant.dialogTitleHeight,
        backgroundColor: 'blue'
    },
    loginUserName: {
        marginTop: 40
    },
    loginPassowrd: {
        marginTop: 20
    },
    loginButton: {

    }

};

export default LoginView;
