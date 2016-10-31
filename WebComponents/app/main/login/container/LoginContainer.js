import React, { Component, PropTypes } from 'react';
import $ from 'jquery';
import { connect } from 'react-redux';
import { VALIDATE_TELLER, LOGIN } from '../../../framework/actions/Actions';
import { validateTeller, login } from '../../../framework/actions/Actions';
import LoginView from '../view/LoginView';

class LoginContainer extends Component {
    constructor(props) {
        super(props);

        this.handleLoginUNameInputChange = this.handleLoginUNameInputChange.bind(this);
        this.handleLoginClick = this.handleLoginClick.bind(this);
    }

    /*
    *  监听用户名input输入事件
    */
    handleLoginUNameInputChange(event){
        const { dispatch } = this.props;

        if(event.target.value.length > 5) {
            // 显示密码框
            dispatch(validateTeller({
                actionType: VALIDATE_TELLER,
                adapter: 'padAdapter',
                procedure: 'validateTeller',
                parameters: [event.target.value]
            }));
        }
    }

    /*
    *  监听登录button点击事件
    */
    handleLoginClick(e) {
        //获取用户输入密码 $('#login_user_pwd').val()
        console.log($('#login_user_pwd').val());

        const { isFetching, validateResponse, dispatch } = this.props;

        dispatch(login({
            actionType: LOGIN,
            adapter: 'padAdapter',
            procedure: 'validateTeller',
            parameters: [event.target.value]
        }));
    }

    render() {
        const { params, isFetching, shouldShowPasswordLayout, validateResponse, loginResponse, dispatch } = this.props;

        return (
            <LoginView
                shouldShowPasswordLayout={shouldShowPasswordLayout}
                handleLoginUNameInputChange={this.handleLoginUNameInputChange}
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
    const { login, network } = state;
    return {
        isFetching: network.isFetching,
        validateResponse: login.validateResponse,
        shouldShowPasswordLayout: login.RSD == 1,
        orgcode: login.orgCode,
        loginResponse: login.loginResponse,
    };
}

export default connect(mapStateToProps)(LoginContainer);
