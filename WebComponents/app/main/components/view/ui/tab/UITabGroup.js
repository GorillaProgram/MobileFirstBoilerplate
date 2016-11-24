/**
 * Created by MeePwn
 * https://github.com/maybewaityou
 */
import React, { Component, PropTypes } from 'react';
import UITab from './UITab';


class UITabGroup extends Component {

    constructor(props) {
        super(props);


    }

    render() {
        return (
            <div style={{...styles.container, ...this.props.style}}>
                <div style={{...styles.tabLayout, ...this.props.tabLayout}}>

                </div>
                <div style={{...styles.tabContentLayout, ...this.props.tabContentLayout}}>

                </div>
            </div>
        );
    }
}

const styles = {
    container: {

    },
    tabLayout: {

    },
    tabContentLayout: {

    }
};

UITabGroup.propTypes = {

};

export default UITabGroup;
