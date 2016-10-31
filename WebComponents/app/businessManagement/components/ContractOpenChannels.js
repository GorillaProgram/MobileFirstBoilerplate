import React, { Component } from 'react';
import { Tabs, Tab } from 'react-bootstrap';

class ContractOpenChannels extends Component {
    constructor(props) {
        super(props);


    }

    render() {
        return (
            <div>
                <Tabs defaultActiveKey={1} id="uncontrolled-tab-example">
                    <Tab eventKey={1} title="客户基本信息">{this.initCustomerInfoView()}</Tab>
                    <Tab eventKey={2} title="联系方式">Tab 2 content</Tab>
                    <Tab eventKey={3} title="开通电子渠道" disabled>Tab 3 content</Tab>
                </Tabs>
            </div>
        );
    }

    initCustomerInfoView(){
        return (
            <div>
                <div style={{display: 'flex',flexDirection: 'row'}}>
                    <Input type={Constant.inputTypes.editView} title="电子银行客户号 :"  />
                    <Input type={Constant.inputTypes.editView} title="客户姓名 :"  />
                </div>
                <div style={{display: 'flex',flexDirection: 'row'}}>
                    <Input type={Constant.inputTypes.editView} title="核心客户号 :"  />
                    <Input type={Constant.inputTypes.editView} title="出生日期 :"  />
                </div>
                <div style={{display: 'flex',flexDirection: 'row'}}>
                    <Input type={Constant.inputTypes.editView} title="证件类型 :"  />
                    <Input type={Constant.inputTypes.editView} title="证件号码 :"  />
                </div>
                <div style={{display: 'flex',flexDirection: 'row'}}>
                    <Input type={Constant.inputTypes.editView} title="性别 :"  />
                    <Input type={Constant.inputTypes.editView} title="国籍 :"  />
                </div>
                <div style={{display: 'flex',flexDirection: 'row'}}>
                    <Input type={Constant.inputTypes.editView} title="客户等级 :"  />
                    <Input type={Constant.inputTypes.editView} title="客户类型 :"  />
                </div>
                <div style={{display: 'flex',flexDirection: 'row'}}>
                    <Input type={Constant.inputTypes.editView} title="客户价值细层级分 :"  />
                    <Input type={Constant.inputTypes.editView} title="行员标志 :"  />
                </div>
            </div>
        );
    }
}

export default ContractOpenChannels;
