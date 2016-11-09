/**
 * Created by MeePwn
 * https://github.com/maybewaityou
 */
import React, { Component } from 'react';

class UIEditView extends Component {

    constructor(props) {
        super(props);


    }

    render() {
        const hasImage = this.props.image ? true : false;
        return (
            <div style={{...styles.container, ...this.props.style}}>
                {hasImage ? <img style={styles.leftImage} src={this.props.image} /> : <div />}
                <input style={{...styles.editView, paddingLeft: hasImage ? 40 : 15}} type="text" />
            </div>
        );
    }
}

const styles = {
    container: {
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center',
        width: '70%',
        height: 40,
        backgroundColor: 'red'
    },
    editView: {
        height: 33,
        width: '100%',
        fontSize: 18,
        color: '#666',
        border: '1px solid #979797',
        boxShadow: 'inset 0 1px 3px 0 rgba(0, 0, 0, 0.50)',
        borderRadius: 5,
        letterSpacing: '-0.12px'
    },
    leftImage: {
        width: 20,
        height: 20,
        marginLeft: 10,
        position: 'absolute',
    }

};

export default UIEditView;
