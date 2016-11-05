/**
 * Created by MeePwn
 * https://github.com/maybewaityou
 */
import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';
import BusinessManagementView from '../view/BusinessManagementView';

class BusinessManagementContainer extends Component {

    constructor(props) {
        super(props);


    }

    render() {
        return (
            <BusinessManagementView

            />
        );
    }
}

BusinessManagementContainer.propTypes = {
    dispatch: PropTypes.func.isRequired,

};

BusinessManagementContainer.contextTypes = {
    router: React.PropTypes.object
};

function mapStateToProps(state) {
    const {  } = state;
    return {

    };
}

export default connect(mapStateToProps)(BusinessManagementContainer);
