import React from 'react';
import { Router, Route, Link, hashHistory } from 'react-router';
import $ from 'jquery';
import Constant from '../../../main/constant/Constant';
import commonStyles from '../../../main/styles/commonStyles';
import Images from '../../../main/images/Images';
import OpenCardStepTwoContainer from '../../container/openCardStep/OpenCardStepTwoContainer';
import Title from '../../../main/components/Title';
import Button from '../../../main/components/input/PrimaryButton';
import SearchInput from '../../../main/components/input/SearchInput';
import '../../../main/css/opencard.css';

const cardData = [{
    "id": "28",
    "title": "上海银行-《申》报-宠耀女士白金卡",
    "icon": Images.card01,
    "context": "主卡100元人民币/卡/年，年费将于卡片激活后收取/n当年免年费，当年刷卡3笔次年年费"
}, {
    "id": "71",
    "title": "上海银行-《申》报-宠耀女士白金卡",
    "icon": Images.card02,
    "context": "主卡100元人民币/卡/年，年费将于卡片激活后收取/n当年免年费，当年刷卡3笔次年年费"
}, {
    "id": "70",
    "title": "上海银行-《申》报-宠耀女士白金卡",
    "icon": Images.card03,
    "context": "主卡100元人民币/卡/年，年费将于卡片激活后收取/n当年免年费，当年刷卡3笔次年年费"
}, {
    "id": "71",
    "title": "上海银行-《申》报-宠耀女士白金卡",
    "icon": Images.card04,
    "context": "主卡100元人民币/卡/年，年费将于卡片激活后收取/n当年免年费，当年刷卡3笔次年年费"
},{
    "id": "28",
    "title": "上海银行-《申》报-宠耀女士白金卡",
    "icon": Images.card01,
    "context": "主卡100元人民币/卡/年，年费将于卡片激活后收取/n当年免年费，当年刷卡3笔次年年费"
}, {
    "id": "71",
    "title": "上海银行-《申》报-宠耀女士白金卡",
    "icon": Images.card02,
    "context": "主卡100元人民币/卡/年，年费将于卡片激活后收取/n当年免年费，当年刷卡3笔次年年费"
}, {
    "id": "70",
    "title": "上海银行-《申》报-宠耀女士白金卡",
    "icon": Images.card03,
    "context": "主卡100元人民币/卡/年，年费将于卡片激活后收取/n当年免年费，当年刷卡3笔次年年费"
}, {
    "id": "71",
    "title": "上海银行-《申》报-宠耀女士白金卡",
    "icon": Images.card04,
    "context": "主卡100元人民币/卡/年，年费将于卡片激活后收取/n当年免年费，当年刷卡3笔次年年费"
},{
    "id": "28",
    "title": "上海银行-《申》报-宠耀女士白金卡",
    "icon": Images.card01,
    "context": "主卡100元人民币/卡/年，年费将于卡片激活后收取/n当年免年费，当年刷卡3笔次年年费"
}, {
    "id": "71",
    "title": "上海银行-《申》报-宠耀女士白金卡",
    "icon": Images.card02,
    "context": "主卡100元人民币/卡/年，年费将于卡片激活后收取/n当年免年费，当年刷卡3笔次年年费"
}, {
    "id": "70",
    "title": "上海银行-《申》报-宠耀女士白金卡",
    "icon": Images.card03,
    "context": "主卡100元人民币/卡/年，年费将于卡片激活后收取/n当年免年费，当年刷卡3笔次年年费"
}, {
    "id": "71",
    "title": "上海银行-《申》报-宠耀女士白金卡",
    "icon": Images.card04,
    "context": "主卡100元人民币/卡/年，年费将于卡片激活后收取/n当年免年费，当年刷卡3笔次年年费"
},{
    "id": "28",
    "title": "上海银行-《申》报-宠耀女士白金卡",
    "icon": Images.card01,
    "context": "主卡100元人民币/卡/年，年费将于卡片激活后收取/n当年免年费，当年刷卡3笔次年年费"
}, {
    "id": "71",
    "title": "上海银行-《申》报-宠耀女士白金卡",
    "icon": Images.card02,
    "context": "主卡100元人民币/卡/年，年费将于卡片激活后收取/n当年免年费，当年刷卡3笔次年年费"
}, {
    "id": "70",
    "title": "上海银行-《申》报-宠耀女士白金卡",
    "icon": Images.card03,
    "context": "主卡100元人民币/卡/年，年费将于卡片激活后收取/n当年免年费，当年刷卡3笔次年年费"
}, {
    "id": "71",
    "title": "上海银行-《申》报-宠耀女士白金卡",
    "icon": Images.card04,
    "context": "主卡100元人民币/卡/年，年费将于卡片激活后收取/n当年免年费，当年刷卡3笔次年年费"
}];

 class OpenCardOneStepView extends React.Component {
     constructor(props) {
         super(props);
         this.state = {
            title: '',
            content: '',
            index: -1
         }
     }

    render() {
        return (
            <div style={commonStyles.fullScreenContainer}>
                <Title title="借记卡 >" subTitle="开卡" />
                <div style={styles.container}>
                    <div>
                        <div style={{width: Constant.screenWidth * .45,height: 45}}>
                            <SearchInput />
                        </div>
                        <div style={styles.leftContainer}>
                            {this.initCardList()}
                        </div>
                    </div>
                    {this.cardDetail()}
                </div>
            </div>
        );
    }

    initCardList() {
        var cardList= [];
        var dataArr = cardData;
        var length = dataArr.length === 0 ? 20 : dataArr.length;
        for(var i = 0 ; i< length ; i++){
            var card = dataArr[i];
            if(i == this.state.index){
                cardList.push(
                    <div style={styles.leftItemContainerOnClick} id={i} key={i} onClick={this.handleItemClick.bind(this, i)}>
                        <div style={{width: '12.5rem',height: '7rem'}}>
                            <img src={card.icon} style={{width: '100%',height: '100%'}} />
                        </div>
                        <div style={{display: 'flex', flexDirection: 'column',marginLeft: 3}}>
                            <span style={styles.title}>上海银行-《申》报-宠耀女士白金卡</span>
                            <span style={styles.content}>主卡100元人民币/卡/年，年费将于卡片激活后收取</span>
                            <span style={styles.content}>当年免年费，当年刷卡3笔次年年费</span>
                        </div>
                    </div>
                );
            }else{
                cardList.push(
                    <div style={styles.leftItemContainer} id={i} key={i} onClick={this.handleItemClick.bind(this, i)}>
                        <div style={{width: '12.5rem',height: '7rem'}}>
                            <img src={card.icon} style={{width: '100%',height: '100%'}} />
                        </div>
                        <div style={{display: 'flex', flexDirection: 'column',marginLeft: 3}}>
                            <span style={styles.title}>上海银行-《申》报-宠耀女士白金卡</span>
                            <span style={styles.content}>主卡100元人民币/卡/年，年费将于卡片激活后收取</span>
                            <span style={styles.content}>当年免年费，当年刷卡3笔次年年费</span>
                        </div>
                    </div>
                );
            }

        }
        return cardList;
    }

    handleItemClick(i){
        this.setState({
            title: i,
            context: cardData[i].context,
            index: i,
        });

    }

    cardDetail(){
        return(
            <div style={styles.rightContainer}>
                <div style={styles.rightContent}>
                    <h4>上海银行红星美凯龙Mstyle联名信用卡{this.state.index}</h4>
                </div>
                <Button title="开卡" onClick={this.props.handleOpenCardClick} style={styles.button} />
            </div>
        );
    }

 }


const styles = {
    container: {
        display: 'flex',
        padding: 15,
        paddingTop: Constant.titleHeight,
        justifyContent: 'center',
        alignItems: 'center',
    },
    leftContainer: {
        flexDirection: 'column',
        width: Constant.screenWidth * .45,
        height: Constant.defaultHomeHeight * .68,
        overflow: 'auto',
        justifyContent: 'center',
    },
    leftItemContainer: {
        display: 'flex',
        justifyContent: 'space-around',
        padding: 8,
        width: '100%',
        border: '1px solid #979797',
        borderRadius: 10,
        marginBottom: 15,
    },
    leftItemContainerOnClick: {
        display: 'flex',
        justifyContent: 'space-around',
        padding: 8,
        width: '100%',
        border: '1px solid #FF8800',
        borderRadius: 10,
        marginBottom: 15,
        backgroundColor: '#FDFBF6',
    },
    rightContainer: {
        display: 'flex',
        flexDirection: 'column',
        width: Constant.screenWidth * .45,
        alignItems: 'center',
        padding: 8,
        marginLeft: '3%',
    },
    rightContent: {
        width: '100%',
        flexDirection: 'column',
        border: '1px solid #979797',
        borderRadius: 10,
        height: Constant.defaultHomeHeight * .65,
    },
    rightImage: {
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-around',
        marginTop: 10
    },
    title: {
        fontSize: Constant.defaultFontSize,
        fontWeight: 'bold',
        marginBottom: '5%'
    },
    content: {
        fontSize: Constant.fontSize12,
    },
    button: {
        marginTop: 25,
        width: Constant.screenWidth * .4,
    },

};


export default OpenCardOneStepView;
