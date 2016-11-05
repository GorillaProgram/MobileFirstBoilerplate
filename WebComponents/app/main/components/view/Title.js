import React, { Component } from 'react';

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
            <div style={{...styles.titleLayout, ...this.props.titleLayout}}>
        		<div style={{...styles.titleLayoutContent, ...this.props.titleLayoutContent}}>
        			<img style={{...styles.titleImage, ...this.props.titleImage}} src="./static/imgs/logo.png" />
        			<div style={{...styles.title, ...this.props.titleStyle}}>{this.props.title}</div>
        			<div style={{...styles.subTitle, ...this.props.subTitleStyle}}>{this.props.subTitle}</div>
        			<div style={{...styles.backLayout, ...this.props.backLayout}}>
        				<img style={{...styles.backImage, ...this.props.backImage}} src="./static/imgs/homeIcon.png" />
        				<div style={{...styles.backTitle, ...this.props.backTitleStyle}}>退出业务</div>
        			</div>
        		</div>
        		<div style={styles.titleLayoutBorderBottom}></div>
        	</div>
        );
    }
}

const styles = {
    titleLayout: {
        display: 'flex',
        flexDirection: 'column',
        height: 80,
        backgroundColor: 'white',
        position: 'fixed',
        top: 0,
        left: 0,
        right: 0,
        zIndex: 1
    },
    titleLayoutContent: {
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center',
        height: 74
    },
    titleImage: {
        width: 192,
        height: 43,
        marginLeft: 21
    },
    title: {
        marginLeft: 42,
        fontSize: 24,
        color: '#333'
    },
    subTitle: {
        fontSize: 24,
        color: '#FF8800'
    },
    backLayout: {
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        width: 120,
        height: 36,
        position: 'absolute',
        top: 21,
        right: 21,
        background: 'rgba(255, 255, 255, 0.1)',
        border: '2px solid #1D50A3',
        borderRadius: 5
    },
    backImage: {
        width: 25,
        height: 20
    },
    backTitle: {
        marginTop: 3,
        marginLeft: 6,
        fontSize: 18,
        color: '#1D50A3'
    },
    titleLayoutBorderBottom: {
        height: 6,
        backgroundImage: 'linear-gradient(-180deg, #183F80 0%, #1A4A96 100%)'
    }
}

export default Title;
