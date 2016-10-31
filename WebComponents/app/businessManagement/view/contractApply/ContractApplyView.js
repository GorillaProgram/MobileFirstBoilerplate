import React, { Component } from 'react'
import commonStyles from '../../../main/styles/commonStyles';
import Images from '../../../main/images/Images';
import Title from '../../../main/components/Title';
import InfoShowPanel from '../../../main/components/panel/InfoShowPanel';
import Button from '../../../main/components/input/PrimaryButton';
import VerificationDialog from '../../../main/components/dialog/VerificationVDialog';

class ContractApplyView extends Component {
    constructor(props) {
        super(props);


    }

    render() {
        const models = [
            {
                des: '证件号码: ',
                text: '310XXXXXXXXXXXXXXX'
            },
            {
                des: '证件类型',
                text: '二代身份证'
            },
            {
                des: '客户姓名',
                text: '陶玩玩'
            },
            {
                des: '发证机关',
                text: '上海市公安局'
            },
            {
                des: '证件有效期',
                text: '2018-03-01'
            },
            {
                des: '证件号码: ',
                text: '310XXXXXXXXXXXXXXX'
            },
            {
                des: '证件类型',
                text: '二代身份证'
            },
            {
                des: '客户姓名',
                text: '陶玩玩'
            },
            {
                des: '发证机关',
                text: '上海市公安局'
            },
            {
                des: '证件有效期',
                text: '2018-03-01'
            },
        ]
        return (
            <div style={commonStyles.fullScreenContainer}>
                <div style={styles.container}>
                    <Title title="签约变更" subTitle=""    backTo="/businessManagement" />
                    <InfoShowPanel image={Images.card03} models={models} buttonTitle="继续办理" onClick={this.props.handleClick} />
                </div>
                <VerificationDialog
                    showDialog={this.props.showDialog}
                    title="读取身份证"
                    contentHeader="请刷身份证！"
                    imgSource={Images.verificationID}
                    onHide={this.props.onHide}/>
            </div>
        );
    }
}

const styles = {
    container: {
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        height: '100%',
        alignItems: 'center',
    }
}

export default ContractApplyView;
