import React, { Component } from 'react';
import SimpleSlider from './SimpleSlider';

class SlickExample extends Component {
    constructor(props) {
        super(props);


    }

    render() {
        return (
            <div style={styles.content}>
                <SimpleSlider />
            </div>
        );
    }
}

const styles = {
    content: {
        padding: 20,
        margin: 'auto',
        width: '90%',
        backgroundColor: 'red'
    }
}

export default SlickExample;
