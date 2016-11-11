/**
 * Created by MeePwn
 * https://github.com/maybewaityou
 */
import React, { Component } from 'react';
import Constant from '../../../../main/constant/Constant';

class BusinessPanel extends Component {
    constructor(props) {
        super(props);


    }

    render() {
        return (
            <div style={{...styles.container, ...this.props.style}} onClick={this.props.handleClick}>
                <img src={this.props.image} style={styles.image} />
                <div style={styles.titleLayout}>
                    <label style={styles.title}>{this.props.title}</label>
                    <label style={styles.title}>{this.props.subTitle}</label>
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
        height: 90,
        width: '45%',
        backgroundColor: Constant.homePanelBackgroundColor,
        borderRadius: Constant.homeRadius,
        border: '1px solid #888888',
    },
    image: {
        width: '35%',
        marginLeft: 10,
        marginRight: 10
    },
    titleLayout: {
        display: 'flex',
        flexDirection: 'column',
        marginRight: 10,
    },
    title: {
        fontSize: 16,
    }
}

export default BusinessPanel;
