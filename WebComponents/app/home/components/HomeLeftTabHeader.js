import React, { Component } from 'react';
import { Link } from 'react-router';
import Constant from '../../main/constant/Constant';
import Images from '../../main/images/Images';

class HomeLeftTabHeader extends Component {
    constructor(props) {
        super(props);


    }

    render() {
        return (
            <div style={styles.container}>
                <img src={Images.userSetting} style={styles.settingButton} />
                <Link to="/login" style={styles.userInfoLayout}>
                    <img src={this.props.userHeaderImage} style={styles.userHeaderImage} />
                    <label style={styles.userName}>{this.props.userName}</label>
                </Link>
                <div style={styles.infoDetialsLayout}>
                    <div>网点号: WD100000</div>
                    <div>柜员号: 300338</div>
                </div>
            </div>
        );
    }
}

const styles = {
    container: {
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        width: Constant.defaultTabWidth,
        height: 181,
        backgroundColor: Constant.tabHeaderColor
    },
    settingButton: {
        alignSelf: 'flex-end',
        width: 20,
        height: 20,
        marginTop: 8,
        marginRight: 10
    },
    userInfoLayout: {
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center',
        marginTop: 5,
        marginLeft: 27,
        marginRight: 9,
    },
    userHeaderImage: {
        width: 59,
        height: 59,
        borderRadius: 25,
    },
    userName: {
        fontSize: Constant.defaultFontSize,
        color: Constant.lightFontColor,
        marginLeft: 11,
    },
    infoDetialsLayout: {
        fontSize: Constant.defaultFontSize,
        color: Constant.lightFontColor,
        marginTop: 19,
        marginLeft: 22,
        marginRight: 16
    },
};

export default HomeLeftTabHeader;
