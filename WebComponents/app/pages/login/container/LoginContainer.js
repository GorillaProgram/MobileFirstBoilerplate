/**
 * Created by MeePwn
 * https://github.com/maybewaityou
 */
import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';
import LoginView from '../view/LoginView';

class LoginContainer extends Component {

    constructor(props) {
        super(props);


    }

    render() {
        return (
            <LoginView

            />
        );
    }
}

LoginContainer.propTypes = {
    dispatch: PropTypes.func.isRequired,

};

LoginContainer.contextTypes = {
    router: React.PropTypes.object
};

function mapStateToProps(state) {
    const {  } = state;
    return {

    };
}

export default connect(mapStateToProps)(LoginContainer);
