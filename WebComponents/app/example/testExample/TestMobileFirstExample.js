import React, { Component } from 'react';
import $ from 'jquery';
import { Router, Route, Link, IndexRoute, Redirect, hashHistory } from 'react-router';
import { Button, Form, FormGroup, ControlLabel, FormControl } from 'react-bootstrap';

import NetworkUtils from '../../main/utilities/NetworkUtils';
import Dimensions from '../../main/utilities/Dimensions';

class TestMobileFirstExample extends Component {
    constructor(props) {
        super(props);

    }

    render() {
        return (
            <div style={styles.container}>
                <Button bsStyle="primary" style={styles.button} onClick={() => {
                    WL.NativePage.show('com.ReactHybrid.activity.HelloNative', (params) => {
                        alert(params.name);
                    }, {name: 'hello native'});
                }}>页面跳转</Button>
                <Button bsStyle="primary" style={styles.button} onClick={() => {
                    cordova.exec((data) => {
                        alert(data);
                    }, (error) => {
                        alert(error);
                    }, 'HelloNativePlugin', "actionName", ["mu haha~"]);
                }}>调用Cordova插件</Button>
                <Button bsStyle="primary" style={styles.button} onClick={() => {
                    navigator.camera.getPicture(() => {
                        alert('成功');
                    }, () => {
                        alert('失败');
                    }, {
                        quality: 50
                    });
                }}>调用外设</Button>
                <Button bsStyle="primary" style={styles.button} onClick={() => {
                    NetworkUtils.sendRequest('TestAdapter', 'loginvalidate', ['SS', 'DD'], (result) => {
                        alert(result);
                    }, (error) => {
                        alert(error);
                    })
                }}>发送网络请求</Button>
                <Button bsStyle="primary" style={styles.button} onClick={() => {
                    console.log(Dimensions);
                    alert('宽度' + Dimensions.width + '\n高度: ' + Dimensions.height);
                }}>获取屏幕宽高</Button>
                <input id="testInput" ref="input" type="text" name="name" />
                <Button bsStyle="primary" style={styles.button} onClick={() => {
                    debugger;
                    console.log(this.refs.input.value);
                    alert(this.refs.input.value);
                }}>获取输入的值</Button>
            </div>
        );
    }
}

const styles = {
    container: {
        position: 'fixed', top: 0, left: 0, right: 0, bottom: 0,
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'space-around',
        backgroundColor: 'blue'
    }
};

export default TestMobileFirstExample;
