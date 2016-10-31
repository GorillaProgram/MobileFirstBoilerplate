import React, { Component } from 'react';
import commonStyles from '../../../styles/commonStyles';

class Square extends Component {
    constructor(props) {
        super(props);


    }

    render() {
        return (
            <div style={commonStyles.square} onClick={this.props.onClick}>
                <img src={this.props.image} style={styles.image} />
                <label style={styles.title}>{this.props.title}</label>
            </div>
        );
    }
}

const styles = {
    image: {
        width: 55,
        height: 55
    },
    title: {
        fontSize: 16,
        marginTop: 5
    },
}

export default Square;
