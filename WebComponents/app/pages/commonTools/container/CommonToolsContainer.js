/**
 * Created by MeePwn
 * https://github.com/maybewaityou
 */
import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';
import CommonToolsView from '../view/CommonToolsView';

class CommonToolsContainer extends Component {

    constructor(props) {
        super(props);


    }

    render() {
        return (
            <CommonToolsView

            />
        );
    }
}

CommonToolsContainer.propTypes = {
    dispatch: PropTypes.func.isRequired,

};

CommonToolsContainer.contextTypes = {
    router: React.PropTypes.object
};

function mapStateToProps(state) {
    const {  } = state;
    return {

    };
}

export default connect(mapStateToProps)(CommonToolsContainer);
