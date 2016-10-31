import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';
import HomeUserInfoView from '../view/HomeUserInfoView';

class HomeUserInfoContainer extends Component {
    constructor(props) {
        super(props);


    }

    render() {
        return (
            <HomeUserInfoView

            />
        );
    }
}

HomeUserInfoContainer.propTypes = {
    dispatch: PropTypes.func.isRequired,

};

function mapStateToProps(state) {
    const {  } = state;
    return {

    };
}

export default connect(mapStateToProps)(HomeUserInfoContainer);
