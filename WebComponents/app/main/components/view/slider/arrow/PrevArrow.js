import React, { Component } from 'react';
import ImagePath from '../../../../constant/ImagePath';

class PrevArrow extends Component {
    constructor(props) {
        super(props);


    }

    render() {
        return (
            <div {...this.props} style={{...styles.container, ...this.props.style}}>
                <img src={ImagePath.prevArrow} style={styles.arrow} />
            </div>
        );
    }
}

const styles = {
    container: {
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center'
    },
    arrow: {
        width: 30,
        height: 43
    }
}

export default PrevArrow;
