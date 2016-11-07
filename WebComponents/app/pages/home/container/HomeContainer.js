/**
 * Created by MeePwn
 * https://github.com/maybewaityou
 */
import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';
import ImagePath from '../../../main/constant/ImagePath';
import HomeView from '../view/HomeView';
import Title from '../../../main/components/view/Title';

class HomeContainer extends Component {

    constructor(props) {
        super(props);


    }

    render() {
        return (
            <HomeView
                adImages={['http://10.240.90.212:7001/padServer/padimages/1.png', 'http://10.240.90.212:7001/padServer/padimages/1.png']}
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
