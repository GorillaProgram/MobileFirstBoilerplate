import React, { Component } from 'react';
import Panel from '../../../main/components/panel/Panel';

class BusinessPanel extends Component {
    constructor(props) {
        super(props);


    }

    render() {
        return (
            <Panel style={{...styles.container, ...this.props.style}}>
                <img src={this.props.image} style={styles.image} />
                <div style={styles.titleLayout}>
                    <label style={styles.title}>{this.props.title}</label>
                    <label style={styles.title}>{this.props.subTitle}</label>
                </div>
            </Panel>
        );
    }
}

const styles = {
    container: {
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        paddingTop: 15,
        paddingBottom: 15,
        width: '45%',
        // height: '100%',
        backgroundColor: '#F8F8F8',
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
