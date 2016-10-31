import React, { Component } from 'react';

class ImagePanel extends Component {
    constructor(props) {
        super(props);


    }

    render() {
        var targetTag;
        if (this.props.title) {
            targetTag = (<div style={{...styles.title, ...this.props.titleStyle}}>{this.props.title}</div>);
        }
        return (
            <div style={{...styles.container, ...this.props.style}}>
                {targetTag}
                <img src={this.props.image} style={this.props.imageStyle} />
            </div>
        );
    }
}

const styles = {
    container: {
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center'
    },
    title: {
        fontSize: 16,
        marginBottom: 10
    }
}

export default ImagePanel;
