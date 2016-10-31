import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';
import OpenCardStepThreeView from '../../view/openCardStep/OpenCardStepThreeView';

class OpenCardStepThreeContainer extends Component {
    constructor(props) {
        super(props);


    }

    render() {
        return (
            <OpenCardStepThreeView

            />
        );
    }
}

OpenCardStepThreeContainer.propTypes = {
    dispatch: PropTypes.func.isRequired,

};

function mapStateToProps(state) {
    const {  } = state;
    return {

    };
}

export default connect(mapStateToProps)(OpenCardStepThreeContainer);
