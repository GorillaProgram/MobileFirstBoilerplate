import React, { Component } from 'react';
import { Table, thead, tr, th, td, Tabs, Tab } from 'react-bootstrap';
import Constant from '../../../main/constant/Constant';
import commonStyles from '../../../main/styles/commonStyles';
import Images from '../../../main/images/Images';
import Title from '../../../main/components/Title';
import Input from '../../../main/components/input/Input';
import Button from '../../../main/components/input/PrimaryButton';

class ContractApplyDetailview extends Component {
    constructor(props) {
        super(props);


    }

    render() {
        return (
            <div style={commonStyles.fullScreenContainer}>
                <Title title="电子银行 >" subTitle="开通电子渠道" />
                <div style={styles.container}>
                    {this.initLeftView()}
                    {this.initRightView()}
                </div>
            </div>
        );
    }

    initLeftView(){
        return (
            <div>
                {this.initLeftTopView()}
                {this.initLeftBottomView()}
            </div>
        );
    }

    initLeftTopView(){
        return (
            <div style={styles.leftTopContainer}>
                <img src={Images.card02} style={styles.leftTopImg} />
                <div style={{marginLeft: 5,}}>
                    <Input type={Constant.inputTypes.textView} title="客户姓名 :" value="张三" style={{marginTop: 10}}/>
                    <Input type={Constant.inputTypes.textView} title="性别 :" value="男" />
                    <Input type={Constant.inputTypes.textView} title="客户等别 :" value="VIP" />
                    <Input type={Constant.inputTypes.textView} title="客户类型 :" value="XXXXXX" />
                    <Input type={Constant.inputTypes.textView} title="出生日期 :" value="12月20日" />
                    <Input type={Constant.inputTypes.textView} title="证件号码 :" value="123456789012345678" />
                </div>
            </div>
        );
    }

    initLeftBottomView(){
        return (
            <div style={styles.leftBottomLayout}>
                <div style={styles.leftBottomBtnLayout}>
                    <Button style={styles.leftBottomBtn}
                        title="开通渠道" />
                    <Button style={styles.leftBottomBtn}
                        title="上银信使" />
                </div>
                <div style={{marginTop: 8}}>
                    <Table striped bordered condensed hover>
                        <thead>
                          <tr>
                            <th>签约日期</th>
                            <th colSpan="2">上挂账户</th>
                          </tr>
                        </thead>
                        <tbody>
                          <tr>
                            <td>Otto</td>
                            <td colSpan="2">Markhhhhhhhhhhhhhhhhh</td>
                          </tr>
                          <tr>
                            <td>Jacob</td>
                            <td colSpan="2">Thornton</td>
                          </tr>
                          <tr>
                            <td>Larry the Bird</td>
                            <td colSpan="2">@twitter</td>
                          </tr>
                          <tr>
                            <td>Larry the Bird</td>
                            <td colSpan="2">@twitter</td>
                          </tr>
                          <tr>
                            <td>Larry the Bird</td>
                            <td colSpan="2">@twitter</td>
                          </tr>
                          <tr>
                            <td>Larry the Bird</td>
                            <td colSpan="2">@twitter</td>
                          </tr>
                        </tbody>
                     </Table>
                </div>
                <div style={styles.leftBottomBtnLayout}>
                    <Button style={styles.leftBottomBtn}
                        title="上挂账户" />
                    <Button style={styles.leftBottomBtn}
                        title="删除" />
                </div>
            </div>

        );
    }

    initRightView(){
        return (
            <div style={styles.rightlayout}>
                {this.initRightAccountInforView()}
            </div>
        );
    }

    initRightAccountInforView(){
        return (
            <div>
                <div style={{display: 'flex',flexDirection: 'row'}}>
                    <Input type={Constant.inputTypes.editView} title="借记卡号 :"  />
                    <Input type={Constant.inputTypes.editView} title="密码 :"  />
                </div>
                <div style={{display: 'flex',flexDirection: 'row'}}>
                    <Input type={Constant.inputTypes.editView} title="账户类型 :"  />
                    <Input type={Constant.inputTypes.editView} title="账户认证标识 :"  />
                </div>
                <Input style={{width: '50%',paddingRight: 10}} type={Constant.inputTypes.editView} title="配折卡关联账号 :"  />
                <div>
                    <Tabs defaultActiveKey={5} id="uncontrolled-tab-example">
                        <Tab eventKey={1} title="网上银行">{this.initOnlineOrMobileBank(1)}</Tab>
                        <Tab eventKey={2} title="手机银行">{this.initOnlineOrMobileBank(2)}</Tab>
                        <Tab eventKey={3} title="电话银行">
                            {this.initCheckBoxView("是否开通电话银行","phoneBank")}
                            <Input style={{width: '50%'}} type={Constant.inputTypes.editView} title="电话银行快捷账号 :"  />
                        </Tab>
                        <Tab eventKey={4} title="电视银行">
                            {this.initCheckBoxView("是否开通电视银行","tvBank")}
                        </Tab>
                        <Tab eventKey={5} title="上银信使">{this.initSYXS()}</Tab>
                    </Tabs>
                </div>
            </div>
        );
    }

    initOnlineOrMobileBank(type){
        if(type == 1) {
            return (
                <div>
                    {this.initCheckBoxView("是否开通网上银行","openOnlineBank")}
                    {this.initCheckBoxView("是否开通行内第三方转账","onlineThirdTransfer")}
                    {this.initCheckBoxView("是否开通行内跨行转账","onlineInterBankTransfer")}
                    <div style={{display: 'flex',flexDirection: 'row'}}>
                        <Input type={Constant.inputTypes.editView} title="转账单笔限额 :"  />
                        <Input type={Constant.inputTypes.editView} title="转账日累计限额 :"  />
                    </div>
                    {this.initCheckBoxView("是否开通缴费功能","onlinePayment")}
                </div>
            );
        }else{
            return (
                <div>
                    {this.initCheckBoxView("是否开通网上银行","openMobileBank")}
                    {this.initCheckBoxView("是否开通行内第三方转账","mobileThirdTransfer")}
                    {this.initCheckBoxView("是否开通行内跨行转账","mobileInterBankTransfer")}
                    <div style={{display: 'flex',flexDirection: 'row'}}>
                        <Input type={Constant.inputTypes.editView} title="转账单笔限额 :"  />
                        <Input type={Constant.inputTypes.editView} title="转账日累计限额 :"  />
                    </div>
                    {this.initCheckBoxView("是否开通缴费功能","mobilePayment")}
                </div>
            );
        }

    }

    initSYXS(){
        return (
            <div>
                {this.initCheckBoxView("是否开通上银信使功能","syxsBank")}
                <div>
                    <span>产品包：</span>
                    <Table striped bordered condensed hover>
                        <thead>
                          <tr>
                            <th>选择</th>
                            <th>功能id</th>
                            <th>缴费金额</th>
                            <th>功能名称</th>
                            <th>功能类型</th>
                            <th>协议类型</th>
                          </tr>
                        </thead>
                        <tbody>
                          <tr>
                            <td><input type="checkbox" /></td>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td></td>
                          </tr>
                          <tr>
                            <td><input type="checkbox" /></td>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td></td>
                          </tr>
                          <tr>
                            <td><input type="checkbox" /></td>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td></td>
                          </tr>
                        </tbody>
                    </Table>
                </div>
            </div>
        );
    }

    initCheckBoxView(label,id){
        return (
            <div>
                <span>{label}</span>
                <input id={id} type="checkbox" style={{marginLeft: 5}}/>
            </div>
        );
    }

}

const styles = {
    container:{
        paddingTop: Constant.titleHeight,
        display: 'flex',
        flexDirection: 'row'
    },
    rightlayout: {
        width: Constant.screenWidth * .5,
        borderLeft: '1px solid #EEEEEE',
        paddingLeft: 10,
    },
    leftTopContainer: {
        display: 'flex',
        flexDirection: 'row',
        width: Constant.screenWidth * .45,
        justifyContent: 'center',
        marginBottom: 8,
    },
    leftTopImg:{
        width: Constant.screenWidth * .1,
        borderRadius: 5,
    },
    leftBottomLayout: {
        width: Constant.screenWidth * .45,
        padding: 10
    },
    leftBottomBtnLayout: {
        width: Constant.screenWidth * .4,
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-between'
    },
    leftBottomBtn: {
        width: '25%',
        fontSize: Constant.smallFontSize,

    },
}

export default ContractApplyDetailview;
