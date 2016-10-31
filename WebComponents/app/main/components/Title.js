import React, { Component } from 'react';
import { Link } from 'react-router';
import Constant from '../constant/Constant';
import Images from '../images/Images';

class Title extends Component {
    constructor(props) {
        super(props);


    }

    render() {
        var backTo = '/';
        if (this.props.backTo) {
            backTo = this.props.backTo
        }
        return (
            <div style={styles.container}>
                <img src={Images.titleLogo} style={{...styles.logo, ...this.props.logoStyle}} />
                <div style={styles.titleContentLayout}>
                    <div style={styles.titleLayout}>
                        <div style={{...styles.title, ...this.props.titleStyle}}>{this.props.title}</div>
                        <div style={{...styles.subTitle, ...this.props.titleStyle}}>{this.props.subTitle}</div>
                    </div>
                    <Link to={backTo} style={{...styles.backLayout, ...this.props.backStyle}}>
                        <img src={Images.backImage} style={styles.backImage} />
                        <label style={styles.backTitle}>返回首页</label>
                    </Link>
                </div>
            </div>
        );
    }
}

const styles = {
    container: {
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center',
        width: Constant.matchParent,
        height: Constant.titleHeight,
        position: 'fixed',
        top: 0, left: 0, right: 0,
        zIndex: '1000',
        backgroundImage: 'linear-gradient(-180deg, #0073C3 0%, #004891 100%)',
    },
    logo: {
        marginLeft: 10,
        width: 150
    },
    titleContentLayout: {
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        width: Constant.matchParent,
        marginLeft: 50,
        marginRight: 20,
    },
    titleLayout: {
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
    },
    title: {
        fontSize: 18,
        color: 'white',
    },
    subTitle: {
        fontSize: 18,
        color: '#fab831',
    },
    backLayout: {
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        width: 119,
        height: 35,
        color: 'white',
        fontSize: Constant.defaultFontSize,
        background: '#206baa',
        border: '1px solid #E2ECF1',
        borderRadius: 5,
    },
    backImage: {
        width: 20,
        height: 20,
    },
    backTitle: {
        fontSize: 18,
        marginLeft: 5,
    }
}

export default Title;
