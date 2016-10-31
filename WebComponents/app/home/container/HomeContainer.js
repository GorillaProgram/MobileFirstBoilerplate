import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';
import HomeView from '../view/HomeView';

class HomeContainer extends Component {
    constructor(props) {
        super(props);


    }

    render() {
        return (
            <HomeView

            />
        );
    }
}

HomeContainer.propTypes = {
    dispatch: PropTypes.func.isRequired,

};

function mapStateToProps(state) {
    const {  } = state;
    return {

    };
}

export default connect(mapStateToProps)(HomeContainer);
