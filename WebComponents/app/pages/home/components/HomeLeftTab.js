/**
 * Created by MeePwn
 * https://github.com/maybewaityou
 */
import React, { Component } from 'react';

class HomeLeftTab extends Component {

    constructor(props) {
        super(props);


    }

    render() {
        return (
            <div style={{...styles.container, ...this.props.style}} onClick={this.props.onClick}>
                <img src={this.props.image} style={{...styles.image, ...this.props.imageStyle}} />
                <label style={{...styles.title, ...this.props.titleStyle}}>{this.props.title}</label>
            </div>
        );
    }
}

const styles = {
    container: {
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center',
        marginTop: 15,
        marginLeft: 20,
        marginRight: 0
    },
    image: {
        width: 30,
        height: 30
    },
    title: {
        fontSize: 18,
        marginTop: 8,
        marginLeft: 21
    }
};

export default HomeLeftTab;
