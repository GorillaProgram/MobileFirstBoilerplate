import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';
import HomeLogoView from '../view/HomeLogoView';

class HomeLogoContainer extends Component {
    constructor(props) {
        super(props);


    }

    render() {
        return (
            <HomeLogoView

            />
        );
    }
}

HomeLogoContainer.propTypes = {
    dispatch: PropTypes.func.isRequired,

};

function mapStateToProps(state) {
    const {  } = state;
    return {

    };
}

export default connect(mapStateToProps)(HomeLogoContainer);
