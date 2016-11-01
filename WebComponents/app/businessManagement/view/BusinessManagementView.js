import React, { Component } from 'react';
import { Link } from 'react-router';
import commonStyles from '../../main/styles/commonStyles';
import Images from '../../main/images/Images';
import SliderGroup from '../../main/components/slider/SliderGroup';
import Square from '../../main/components/slider/components/Square';
import DebugUtility from '../../main/utilities/DebugUtility';

/*
    1.集成性.
    2.应用控件分类:系统级的, 公共应用, 第三方的, 交易的面板.
    3.控制框架. 应用跳转Api.
*/

import '../../main/css/slider.css';

class BusinessManagementView extends Component {
    constructor(props) {
        super(props);


    }

    render() {
        const settings = {
            arrows: true,
            dots: false,
            infinite: false,
            slidesToShow: 1,
            slidesToScroll: 1,
        };

        return (
            <div style={{...commonStyles.container, ...styles.container}}>
                <SliderGroup title="借记卡业务" settings={settings}>
                    <div style={styles.slide}>
                        <button onClick={() => {
                            DebugUtility.log('=====', '----', 'aassd');
                        }}><Square title="开卡" image={Images.kk} onClick={this.props.handleOpenCardClick} /></button>
                        <Link to="businessManagement/cardActive">
                            <Square title="卡激活" image={Images.jh} onClick={this.props.handleCardActiveClick} />
                        </Link>
                        <Square title="发卡" image={Images.fk} onClick={this.props.handleSendCardClick} />
                    </div>
                </SliderGroup>
                <SliderGroup title="电子银行签约" settings={settings}>
                    <div style={styles.slide}>
                        <Link to="businessManagement/contractApply">
                            <Square title="签约申请" image={Images.qysq} onClick={this.props.handleSignmentApplyClick} />
                        </Link>
                        <Link to="businessManagement/contractChange">
                            <Square title="签约变更" image={Images.qybg} onClick={this.props.handleSignmentChangedClick} />
                        </Link>
                    </div>
                </SliderGroup>
                <SliderGroup title="存管管理" settings={settings}>
                    <div style={styles.slide}>
                        <Square title="存管签约" image={Images.kk} onClick={this.props.handleCustodyContractClick} />
                        <Square title="存管变更" image={Images.kk} onClick={this.props.handleCustodyChangedClick} />
                        <Square title="存管查询" image={Images.kk} onClick={this.props.handleCustodyQueryClick} />
                    </div>
                </SliderGroup>
                <SliderGroup title="业务办理" settings={settings}>
                    <div style={styles.slide}>
                        <Square title="业务办理箱" image={Images.yw} onClick={this.props.handleBusinessTodoClick} />
                        <Square title="出库" image={Images.ck} onClick={this.props.handleOutsideClick} />
                        <Square title="入库" image={Images.rk} onClick={this.props.handleInsideClick} />
                    </div>
                </SliderGroup>
            </div>
        );
    }
}

const styles = {
    container: {
        marginLeft: 10,
        marginRight: 10,
    },
    slide: {
        display: 'flex',
        flexDirection: 'row',
    },
}

export default BusinessManagementView;
