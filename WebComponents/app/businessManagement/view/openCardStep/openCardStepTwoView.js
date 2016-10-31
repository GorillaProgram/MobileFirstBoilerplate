import React, {Component} from 'react';
import commonStyles from '../../../main/styles/commonStyles';
import Images from '../../../main/images/Images';
import Title from '../../../main/components/Title';
import InfoShowPanel from '../../../main/components/panel/InfoShowPanel';
import '../../../main/css/opencard.css';
import VerificationDialog from '../../../main/components/dialog/VerificationVDialog';


class openCardStepTwoView extends Component{
    constructor(props){
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
                    <Title title="借记卡 > 开卡 >" subTitle="身份验证" backTo="/businessManagement" />
                    <InfoShowPanel image={Images.card03} models={models} buttonTitle="继续办理" onClick={this.props.handleClick} />
                </div>
                <VerificationDialog
                    showDialog={this.props.showDialog}
                    title="读取借记卡"
                    contentHeader="请刷借记卡！"
                    imgSource={Images.verificationCard}
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


export default openCardStepTwoView;
