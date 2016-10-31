import React, { Component } from 'react';
import commonStyles from '../../styles/commonStyles';

class LeftPanel extends Component {
    constructor(props) {
        super(props);


    }

    render() {
        return (
            <div style={{...commonStyles.leftPanel, ...this.props.style}}>
                <div style={{...commonStyles.innerLayout, ...this.props.innerLayout}}>
                    {this.props.children}
                </div>
            </div>
        );
    }
}

export default LeftPanel;
