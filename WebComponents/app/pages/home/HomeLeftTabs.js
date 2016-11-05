/**
 * Created by MeePwn
 * https://github.com/maybewaityou
 */
import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';

class HomeLeftTabs extends Component {

    constructor(props) {
        super(props);


    }

    render() {
        return (
            <HomeLeftTabs

            />
        );
    }
}

HomeLeftTabs.propTypes = {
    dispatch: PropTypes.func.isRequired,

};

HomeLeftTabs.contextTypes = {
    router: React.PropTypes.object
};

function mapStateToProps(state) {
    const {  } = state;
    return {

    };
}

export default connect(mapStateToProps)(HomeLeftTabs);
