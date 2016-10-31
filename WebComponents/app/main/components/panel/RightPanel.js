import React, { Component } from 'react';
import commonStyles from '../../styles/commonStyles';

class RightPanel extends Component {
    constructor(props) {
        super(props);


    }

    render() {
        return (
            <div style={{...commonStyles.rightPanel, ...this.props.style}}>
                <div style={{...commonStyles.innerLayout, ...this.props.innerLayout}}>
                    {this.props.children}
                </div>
            </div>
        );
    }
}

export default RightPanel;
