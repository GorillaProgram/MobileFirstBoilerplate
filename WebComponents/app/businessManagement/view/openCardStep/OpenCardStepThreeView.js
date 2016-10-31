import React, { Component } from 'react';
import { Router, Route, Link, hashHistory } from 'react-router';
import Constant from '../../../main/constant/Constant';
import commonStyles from '../../../main/styles/commonStyles';
import Images from '../../../main/images/Images';
import InputComponent from './InputComponent';
import Title from '../../../main/components/Title';
import '../../../main/css/opencard.css';

const items = ['身份证','户口本','护照','驾照'];

class OpenCardStepThreeView extends Component {
    constructor(props) {
        super(props);


    }

    render() {
        return (
            <div style={commonStyles.fullScreenContainer}>
                <div style={styles.container}>
                    <Title title="借记卡>" subTitle="开卡 > 填写客户资料" />
                    <div style={styles.secondLevelContainer}>
                        {this.initLeftView()}
                        {this.initRightView()}
                    </div>
                    <Link to="/businessManagement">
                        <button style={styles.button}>完成</button>
                    </Link>
                </div>
            </div>
        );
    }

    // handleOnClick(){
    //     <Router history={hashHistory}>
    //         <Route path="/openCardTwoStep" component={Constant} />
    //     </Router>
    // }

    initLeftView(){
        return(
            <div style={styles.leftContainer} className="border OCScroll">
                <InputComponent viewType="input" leftTitle="客户名称" placeholder="请输入客户名称" inputRef="customerName"/>
                <InputComponent viewType="dropdownButton" dataArr={items} leftTitle="证件类型" placeholder="请选择证件类型" inputRef="credentialsType"/>
                <InputComponent viewType="input" leftTitle="证件号码" placeholder="请输入证件号码" inputRef="credentialsNumber"/>
                <InputComponent viewType="input" leftTitle="出生日期" placeholder="请输入出生日期" inputRef="birthDate"/>
                <InputComponent viewType="input" leftTitle="客户号" placeholder="请输入证件号码" inputRef="customerNumber"/>
                <InputComponent viewType="dropdownButton" dataArr={['男','女']} leftTitle="性别" placeholder="请选择" inputRef="sex"/>
                <InputComponent viewType="input" leftTitle="证件有效起始日期" placeholder="请输入证件号码" inputRef="startDate"/>
                <InputComponent viewType="input" leftTitle="证件有效终止日期" placeholder="请输入证件号码" inputRef="endDate"/>
                <InputComponent viewType="input" leftTitle="手机号码" placeholder="请输入证件号码" inputRef="phoneNo"/>
                <InputComponent viewType="input" leftTitle="短信验证码" placeholder="请输入证件号码" inputRef="sms"/>
                <InputComponent viewType="input" leftTitle="推荐人姓名" pXXXXXXlaceholder="请输入证件号码" inputRef="recommendationName"/>
                <InputComponent viewType="input" leftTitle="XXXXXX" placeholder="请输入" inputRef="ref001"/>
                <InputComponent viewType="input" leftTitle="XXXXXX" placeholder="请输入" inputRef="ref002"/>
                <InputComponent viewType="input" leftTitle="XXXXXX" placeholder="请输入" inputRef="ref003"/>
            </div>
        );
    }

    initRightView(){
        return(
            <div style={styles.rightContainer} className="border OCScroll">
                <div style={styles.rightItemDiv}>
                    <InputComponent viewType="dropdownButton" dataArr={items} leftTitle="洲别" placeholder="请选择" inputRef="customerName"/>
                    <InputComponent viewType="dropdownButton" dataArr={items}  leftTitle="省_州" placeholder="请选择" inputRef="customerName"/>
                    <InputComponent viewType="dropdownButton" dataArr={items} leftTitle="县_市_区" placeholder="请选择" inputRef="customerName"/>
                    <InputComponent viewType="input" leftTitle="街道地址" placeholder="请输入街道地址" inputRef="customerName"/>
                    <InputComponent viewType="input" leftTitle="电话号码" placeholder="请输入电话号码" inputRef="customerName"/>
                    <img src={Images.card02} style={styles.rightImage}/>
                </div>
                <div style={styles.rightItemDiv}>
                    <InputComponent viewType="dropdownButton" dataArr={items} leftTitle="国家和地区代码" placeholder="请选择" inputRef="credentialsType"/>
                    <InputComponent viewType="dropdownButton" dataArr={items} leftTitle="城市" placeholder="请选择" inputRef="credentialsType"/>
                    <InputComponent viewType="input" leftTitle="镇_乡_街道" placeholder="请输入" inputRef="credentialsType"/>
                    <InputComponent viewType="input" leftTitle="邮政编码" placeholder="请输入邮政编码" inputRef="credentialsType"/>
                    <InputComponent viewType="dropdownButton" dataArr={items} leftTitle="传真" placeholder="请选择" inputRef="credentialsType"/>
                    <InputComponent viewType="dropdownButton" dataArr={items} leftTitle="借记卡类型" placeholder="请选择" inputRef="customerName"/>
                    <InputComponent viewType="input" leftTitle="借记卡号" placeholder="请输入借记卡号" inputRef="customerName"/>
                </div>
            </div>

        );
    }
}

const styles = {
    container: {
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        width: Constant.screenWidth,
        padding: 5,
        paddingTop: Constant.titleHeight,
        
    },

     secondLevelContainer: {
        display: 'flex',
        flexDirection: 'row',
        padding: 3
    },

    leftContainer: {
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        width: Constant.screenWidth * .35,
        height: Constant.defaultHomeHeight * .65,
        borderRadius: 5,
        padding: 10
    },

    rightContainer: {
        display: 'flex',
        flexDirection: 'row',
        width: Constant.screenWidth * .6,
        height: Constant.defaultHomeHeight * .65,
        justifyContent: 'space-around',
        borderRadius: 5,
        marginLeft: 5,
    },

    // rightItemDiv: {
    //     display: 'flex',
    //     flexDirection: 'row',
    //     justifyContent: 'space-around',
    //     alignItems: 'center'
    // },
    rightItemDiv: {
        flexDirection: 'column',
        padding: 10,
    },

    rightImage: {
        width: '70%',
        height: '70%',
        justifyContent: 'center',
        padding: 10,
    },

    button: {
        alignItems: 'center',
        justifyContent: 'center',
        padding: 5,
        width: Constant.screenWidth * .3,
        height: 40,
        borderRadius: 5,
        backgroundColor: '#06A4D1',
        color: '#ffffff',
        marginTop: 10,
    }

}

export default OpenCardStepThreeView;
