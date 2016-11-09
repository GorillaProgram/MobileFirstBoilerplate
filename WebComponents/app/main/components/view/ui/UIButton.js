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
        
    }
};

export default UIButton;
