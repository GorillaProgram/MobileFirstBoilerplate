import React, { Component } from 'react';

class HomeLeftLoginBox extends Component {

    constructor(props) {
        super(props);


    }

    render() {
        const loginedBox = (
            <div style={styles.loginBox}>
                <div style={styles.userInfoLayout}>
                    <div style={styles.headImageLayout}>
                        <img style={styles.userHeadImage} src="./static/imgs/defaultHeadImage.png" />
                    </div>
                    <div style={styles.userInfoDesLayout}>
                        <label style={styles.userInfo}>欢迎您, </label>
                        <label style={styles.userInfo}>{this.props.userName}</label>
                    </div>
                </div>
                <div style={styles.counterInfoLayout}>
                    <label style={styles.counterInfo}>
                        网点号: {this.props.orgCode}
                    </label>
                    <label style={styles.counterInfo}>
                        柜员号: {this.props.userID}
                    </label>
                </div>
                <div style={styles.userSetting} onClick={this.props.handleSettingClick}>
                    <img style={styles.userSettingImage} src="./static/imgs/userSetting.png"/>
                </div>
            </div>
        );
        const notLoginBox = (
            <div style={styles.loginBox}>
                <div style={styles.userInfoLayout} onClick={this.props.handleLoginClick}>
                    <div style={styles.headImageLayout}>
                        <img style={styles.headImage} src="./static/imgs/loginIcon.png" />
                    </div>
                    <div style={styles.userInfoDesLayout}>
                        <label style={styles.userInfo}>点击登录</label>
                    </div>
                </div>
                <div style={styles.userSetting}>
                    <img style={styles.userSettingImage} src="./static/imgs/userSetting.png"/>
                </div>
            </div>
        );
        return (
            this.props.isLogin === true ? loginedBox : notLoginBox
        );
    }
}

const styles = {
    loginBox: {
        display: 'flex',
        flexDirection: 'column',
        height: '30%',
        width: 188,
        backgroundColor: '#004892',
        color: '#FFFFFF'
    },
    userInfoLayout: {
        display: 'flex',
        flexDirection: 'row',
        marginLeft: 20,
        marginTop: 45
    },
    headImageLayout: {
        display: 'flex',
        flexDirection: 'column',
        width: 60,
        height: 60,
        justifyContent: 'center',
        alignItems: 'center',
        background: '#CCC',
        borderRadius: '50%',
    },
    headImage: {
        width: 30,
        height: 30
    },
    userInfoDesLayout: {
        display: 'flex',
        flexDirection: 'column',
        height: 65,
        justifyContent: 'center',
        marginLeft: 10
    },
    userInfo: {
        fontSize: 14
    },
    userHeadImage: {
        width: '100%',
        height: '100%'
    },
    counterInfoLayout: {
        display: 'flex',
        flexDirection: 'column',
        marginTop: 10,
        marginLeft: 20
    },
    counterInfo: {
        fontSize: 14
    },
    userSetting: {
        width: 25,
        height: 25,
        position: 'absolute',
        top: 10, right: 10
    },
    userSettingImage: {
        width: '100%',
        height: '100%'
    }
};

export default HomeLeftLoginBox;