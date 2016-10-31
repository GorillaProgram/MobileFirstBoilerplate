import React, { Component } from 'react';
import { Button } from 'react-bootstrap';
import Constant from '../../constant/Constant';

class PrimaryButton extends Component {
    constructor(props) {
        super(props);


    }

    render() {
        return (
            <div style={{...styles.buttonLayout, ...this.props.style}}>
                <Button bsStyle="primary" style={styles.button} onClick={this.props.onClick}>
                    {this.props.title}
                </Button>
            </div>
        );
    }
}

const styles = {
    buttonLayout: {
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        width: Constant.defaultButtonWidth,
    },
    button: {
        fontSize: Constant.defaultFontSize,
    }
}

export default PrimaryButton;
