import React, { Component } from 'react';
import $ from 'jquery';
import { Router, Route, Link, hashHistory } from 'react-router';
import { FormGroup, InputGroup, FormControl } from 'react-bootstrap';
import Images from '../../images/Images';
import Constant from '../../constant/Constant';
import commonStyles from '../../styles/commonStyles';
import Button from '../../components/input/PrimaryButton';

class LoginView extends Component {
    constructor(props) {
        super(props);

    }

    render() {
        var passwordLayout;
        //密码输入框
        if(this.props.shouldShowPasswordLayout){
            passwordLayout = (
                <FormGroup id="login_user_pwd_div" ref="login_user_pwd_div" style={{marginTop: '5%',}}>
                  <InputGroup>
                    <InputGroup.Addon style={{backgroundColor: '#FFFFFF'}}><img src={Images.loginLeftIcon} style={{width: 25,height: 25}} /></InputGroup.Addon>
                    <FormControl id="login_user_pwd" type="password" style={{height: 50}} placeholder="密码" />
                  </InputGroup>
                </FormGroup>
            );
        }

        return (
            <div style={{...commonStyles.container,display: 'flex', alignItems: 'center',justifyContent: 'center'}}>
                <div style={styles.container}>
                    <div style={{padding: '2%',paddingLeft: '6%',borderBottom: '1px solid #999999',fontSize: Constant.defaultFontSize,}}>柜员登录 </div>
                    <div style={{padding: '6%', display: 'flex',alignItems: 'center',flexDirection: 'column' }}>
                        {/* 用户名 */}
                        <FormGroup>
                          <InputGroup>
                            <InputGroup.Addon style={{backgroundColor: '#FFFFFF'}}><img src={Images.loginLeftIcon} style={{width: 25,height: 25}} /></InputGroup.Addon>
                            <FormControl id="login_user_name" type="text" style={{height: 50}} placeholder="用户名" onChange={this.props.handleLoginUNameInputChange} />
                          </InputGroup>
                        </FormGroup>

                        {/* 密码 */}
                        {passwordLayout}

                        <Button id="login_btn" style={{marginTop: '5%'}} title="登录" onClick={this.props.handleLoginClick} />
                    </div>


                </div>
            </div>
        );
    }
}

const styles = {
    container: {
        border: '1px solid #999999',
        borderRadius: 5,
        width: '55%',
        height: '65%',
    },
}

export default LoginView;
