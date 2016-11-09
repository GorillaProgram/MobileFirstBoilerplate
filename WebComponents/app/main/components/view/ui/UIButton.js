/**
 * Created by MeePwn
 * https://github.com/maybewaityou
 */
import React, { Component } from 'react';

class UIButton extends Component {

    constructor(props) {
        super(props);


    }

    render() {
        return (
            <div>
                <button
                    style={{...styles.button, ...this.props.style}}
                    onClick={this.props.onClick}>
                    {this.props.title}
                </button>
            </div>
        );
    }
}

const styles = {
    button: {
        width: 400,
        height: 44,
        minHeight: 44,
        fontSize: 18,
        color: 'white',
        letterSpacing: '-0.15px',
        background: '#1177DB',
        border: 'none',
        outline: 'none',
        borderRadius: 10,
        'button:active': {
            background: '#0B4D8D'
        }
    }
};

export default UIButton;
