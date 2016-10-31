import React, { Component } from 'react';
import commonStyles from '../../../main/styles/commonStyles';
import Constant from '../../../main/constant/Constant';
import Title from '../../../main/components/Title';
import ImagePanel from '../../../main/components/panel/ImagePanel';
import LeftPanel from '../../../main/components/panel/LeftPanel';
import RightPanel from '../../../main/components/panel/RightPanel';
import Panel from '../../../main/components/panel/Panel';
import Input from '../../../main/components/input/Input';
import PrimaryButton from '../../../main/components/input/PrimaryButton';
import Images from '../../../main/images/Images';

class CardActiveView extends Component {
    constructor(props) {
        super(props);


    }

    render() {
        return (
            <div style={{...commonStyles.fullScreenContainer, display: 'flex', flexDirection: 'row'}}>
                <Title title="卡激活>" subTitle="卡激活" />
                <LeftPanel>
                    <ImagePanel image={Images.card02} style={styles.imagePanel} />
                    <Panel style={styles.leftEditPanel}>
                        <Input type={Constant.inputTypes.editView} title="证件号码 :" placeholder="请输入证件号码" style={{marginTop: 10}} onChange={(event) => {
                            console.log(event.target.value);
                        }} />
                        <Input type={Constant.inputTypes.editView} title="证件类型 :" placeholder="请输入证件类型" />
                        <Input type={Constant.inputTypes.editView} title="客户姓名 :" placeholder="请输入客户姓名" />
                        <Input type={Constant.inputTypes.editView} title="发证机关 :" placeholder="请输入发证机关" />
                        <Input type={Constant.inputTypes.editView} title="证件有效期 :" placeholder="请输入证件有效期" />
                        <Input type={Constant.inputTypes.textViewOnly} title="身份核查通过, 请继续办理业务!" titleStyle={styles.inputInfo} />
                        <Input type={Constant.inputTypes.textViewOnly} title={this.props.testParams} titleStyle={styles.inputInfo} />
                    </Panel>
                    <div style={styles.cardActiveButtonLayout}>
                        <PrimaryButton title="卡激活" onClick={this.props.handleBeginToActiveClick} style={styles.cardActiveButton} />
                    </div>
                </LeftPanel>
                <div style={commonStyles.centerLine}></div>
                <RightPanel>

                </RightPanel>
            </div>
        );
    }
}

const styles = {
    container: {

    },
    imagePanel: {
        width: Constant.matchParent,
        height: 250
    },
    leftEditPanel: {
        width: Constant.matchParent,
        marginTop: 10,
    },
    inputInfo: {
        width: 'auto',
        marginTop: 20,
        marginBottom: 10,
        color: Constant.primaryColor,
    },
    cardActiveButtonLayout: {
        display: 'flex',
        justifyContent: 'center',
        width: Constant.matchParent,
    },
    cardActiveButton: {
        marginTop: 20,
        marginBottom: 20
    }
}

export default CardActiveView;
