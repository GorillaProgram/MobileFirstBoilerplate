import React, { Component } from 'react';
import commonStyles from '../../../styles/commonStyles';
import Images from '../../../images/Images';

class NextArrow extends Component {
    constructor(props) {
        super(props);


    }

    render() {
        return (
            <div {...this.props} style={commonStyles.arrow}>
                <img src={Images.nextArrow} style={styles.arrow} />
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

export default NextArrow;
