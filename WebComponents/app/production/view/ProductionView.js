import React, { Component } from 'react';
import commonStyles from '../../main/styles/commonStyles';

class ProductionView extends Component {
    constructor(props) {
        super(props);


    }

    render() {
        return (
            <div style={commonStyles.container}>
                <div style={styles.container}>
                    产品
                </div>
            </div>
        );
    }
}

const styles = {
    container: {
        backgroundColor: 'red'
    }
}

export default ProductionView;
