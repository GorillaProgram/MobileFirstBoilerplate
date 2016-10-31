import React, { Component } from 'react';
import Panel from '../../../main/components/panel/Panel';

class NoticePanel extends Component {
    constructor(props) {
        super(props);


    }

    render() {
        return (
            <Panel style={{...styles.container, ...this.props.style}}>
                <label style={styles.noticeDes}>{this.props.title}</label>
            </Panel>
        );
    }
}

const styles = {
    container: {
        backgroundColor: '#F8F8F8',
        borderRadius: 5,
        border: '1px solid #ddd'
    },
    noticeDes: {
        fontSize: 18,
        marginTop: 13,
        marginLeft: 20
    }
}

export default NoticePanel;
