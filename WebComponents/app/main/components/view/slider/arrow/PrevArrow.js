import React, { Component } from 'react';
import CommonStyle from '../../../../constant/CommonStyle';
import ImagePath from '../../../../constant/ImagePath';

class PrevArrow extends Component {
    constructor(props) {
        super(props);


    }

    render() {
        return (
            <div {...this.props} style={CommonStyle.arrow}>
                <img src={ImagePath.prevArrow} style={styles.arrow} />
            </div>
        );
    }
}

const styles = {
    arrow: {
        width: 30,
        height: 43
    }
}

export default PrevArrow;
