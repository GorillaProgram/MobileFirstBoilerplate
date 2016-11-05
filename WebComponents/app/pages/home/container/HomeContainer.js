/**
 * Created by MeePwn
 * https://github.com/maybewaityou
 */
import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';
import HomeView from '../view/HomeView';
import Title from '../../../main/components/view/Title';

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

HomeContainer.contextTypes = {
    router: React.PropTypes.object
};

function mapStateToProps(state) {
    const {  } = state;
    return {

    };
}

export default connect(mapStateToProps)(HomeContainer);
