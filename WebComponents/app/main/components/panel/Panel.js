import React, { Component } from 'react';

class Panel extends Component {
    constructor(props) {
        super(props);


    }

    render() {
        return (
            <div style={{...styles.container, ...this.props.style}}>
                {this.props.children}
            </div>
        );
    }
}

const styles = {
    container: {
        backgroundColor: 'white',
        borderRadius: 5,
        border: '1px solid #ddd'
    }
}

export default Panel;
