/**
 * Created by MeePwn
 * https://github.com/maybewaityou
 */
import React, { Component, PropTypes } from 'react';

class UITab extends Component {

    constructor(props) {
        super(props);


    }

    render() {
        return (
            <div style={{...styles.container, ...this.props.style}}>
                
            </div>
        );
    }
}

const styles = {
    container: {

    },

};

UITab.propTypes = {

};

export default UITab;
