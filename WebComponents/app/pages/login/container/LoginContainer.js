/**
 * Created by MeePwn
 * https://github.com/maybewaityou
 */
import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';
import LoginView from '../view/LoginView';
import Just from '../../../main/context/Just';
import {  } from '../../../dataflow/actions/Actions';

class LoginContainer extends Component {

    constructor(props) {
        super(props);

        this.handleUserNameChange = this.handleUserNameChange.bind(this);
        this.handlePasswordChange = this.handlePasswordChange.bind(this);
        this.handleLoginClick = this.handleLoginClick.bind(this);
    }

    /**
     * 用户名更改
     */
    handleUserNameChange(event) {
        const { dispatch } = this.props;
        dispatch();
    }

    /**
     * 密码更改
     */
    handlePasswordChange(event) {

    }

    /**
     * 登录
     */
    handleLoginClick() {

    }

    render() {
        return (
            <LoginView
                handleUserNameChange={this.handleUserNameChange}
                handlePasswordChange={this.handlePasswordChange}
                handleLoginClick={this.handleLoginClick}
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
