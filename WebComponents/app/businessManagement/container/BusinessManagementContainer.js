import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';
import { browserHistory } from 'react-router';
import BusinessManagementView from '../view/BusinessManagementView';

class BusinessManagementContainer extends Component {
    constructor(props) {
        super(props);

        this.handleOpenCardClick = this.handleOpenCardClick.bind(this);
        this.handleCardActiveClick = this.handleCardActiveClick.bind(this);
        this.handleSendCardClick = this.handleSendCardClick.bind(this);
        this.handleSignmentApplyClick = this.handleSignmentApplyClick.bind(this);
        this.handleSignmentChangedClick = this.handleSignmentChangedClick.bind(this);
        this.handleCustodyContractClick = this.handleCustodyContractClick.bind(this);
        this.handleCustodyChangedClick = this.handleCustodyChangedClick.bind(this);
        this.handleCustodyQueryClick = this.handleCustodyQueryClick.bind(this);
        this.handleBusinessTodoClick = this.handleBusinessTodoClick.bind(this);
        this.handleOutsideClick = this.handleOutsideClick.bind(this);
        this.handleInsideClick = this.handleInsideClick.bind(this);
    }

    /**
     * 开卡
     */
    handleOpenCardClick() {
        console.log('开卡');
    }

    /**
     * 卡激活
     */
    handleCardActiveClick() {
        console.log('卡激活');
    }

    /**
     * 发卡
     */
    handleSendCardClick() {
        console.log('发卡');
    }

    /**
     * 签约申请
     */
    handleSignmentApplyClick() {
        console.log('签约申请');
    }

    /**
     * 签约变更
     */
    handleSignmentChangedClick() {
        console.log('签约变更');
    }

    /**
     * 存管签约
     */
    handleCustodyContractClick() {
        console.log('存管签约');
    }

    /**
     * 存管变更
     */
    handleCustodyChangedClick() {
        console.log('存管变更');
    }

    /**
     * 存管查询
     */
    handleCustodyQueryClick() {
        console.log('存管查询');
    }

    /**
     * 业务待办箱
     */
    handleBusinessTodoClick() {
        console.log('业务待办箱');
    }

    /**
     * 出库
     */
    handleOutsideClick() {
        console.log('出库');
    }

    /**
     * 入库
     */
    handleInsideClick() {
        console.log('入库')
    }

    render() {
        return (
            <div>
                <BusinessManagementView
                    handleOpenCardClick={this.handleOpenCardClick}
                    handleCardActiveClick={this.handleCardActiveClick}
                    handleSendCardClick={this.handleSendCardClick}
                    handleSignmentApplyClick={this.handleSignmentApplyClick}
                    handleSignmentChangedClick={this.handleSignmentChangedClick}
                    handleCustodyContractClick={this.handleCustodyContractClick}
                    handleCustodyChangedClick={this.handleCustodyChangedClick}
                    handleCustodyQueryClick={this.handleCustodyQueryClick}
                    handleBusinessTodoClick={this.handleBusinessTodoClick}
                    handleOutsideClick={this.handleOutsideClick}
                    handleInsideClick={this.handleInsideClick}
                />
                {this.props.children}
            </div>
        );
    }
}

BusinessManagementContainer.propTypes = {
    dispatch: PropTypes.func.isRequired,
};

BusinessManagementContainer.contextTypes = {
  router: React.PropTypes.object
};

function mapStateToProps(state) {
    const {  } = state;
    return {

    };
}

export default connect(mapStateToProps)(BusinessManagementContainer);
