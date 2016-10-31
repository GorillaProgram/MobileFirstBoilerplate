import React, { Component } from 'react';
import $ from 'jquery';
import { Link } from 'react-router';
import Images from '../../main/images/Images';
import HomeLeftTab from './HomeLeftTab';
import HomeLeftTabHeader from './HomeLeftTabHeader';
import Constant from '../../main/constant/Constant';
import { Button, Form, FormGroup, ControlLabel, FormControl } from 'react-bootstrap';

import '../../main/css/home.css';

class HomeLeftTabs extends Component {
    constructor(props) {
        super(props);

        this.state = {
            selectedTab: 'home'
        };

        this.handleHomeClick = this.handleHomeClick.bind(this);
        this.handleProductionClick = this.handleProductionClick.bind(this);
        this.handleBusinessManagementClick = this.handleBusinessManagementClick.bind(this);
        this.handleCommonToolsClick = this.handleCommonToolsClick.bind(this);
        this.handleLogoClick = this.handleLogoClick.bind(this);
        this.handleOnClick = this.handleOnClick.bind(this);
    }

    handleHomeClick() {
        this.setState({
            selectedTab: 'home'
        });
        this.context.router.push('/');
    }

    handleProductionClick() {
        this.setState({
            selectedTab: 'production'
        });
        this.context.router.push('/production');
    }

    handleBusinessManagementClick() {
        this.setState({
            selectedTab: 'businessManagement'
        });
        this.context.router.push('/businessManagement');
    }

    handleCommonToolsClick() {
        this.setState({
            selectedTab: 'commonTools'
        });
        this.context.router.push('/commonTools');
    }

    handleLogoClick() {
        this.context.router.push('/logo');
    }

    handleOnClick() {

    }

    render() {
        var homeImage;
        var homeTitleStyle;
        var productionImage;
        var productionTitleStyle;
        var businessManagementImage;
        var businessManagementTitleStyle;
        var commonToolsImage;
        var commonToolsTitleStyle;
        if (this.state.selectedTab === 'home') {
            homeImage = Images.homeTabSelected;
            productionImage = Images.productionTab;
            businessManagementImage = Images.businessManagementTab;
            commonToolsImage = Images.commonToolsTab;
            homeTitleStyle = styles.tabSelectedStyle;
        } else if (this.state.selectedTab === 'production') {
            homeImage = Images.homeTab;
            productionImage = Images.productionTabSelected;
            businessManagementImage = Images.businessManagementTab;
            commonToolsImage = Images.commonToolsTab;
            productionTitleStyle = styles.tabSelectedStyle;
        } else if (this.state.selectedTab === 'businessManagement') {
            homeImage = Images.homeTab;
            productionImage = Images.productionTab;
            businessManagementImage = Images.businessManagementTabSelected;
            commonToolsImage = Images.commonToolsTab;
            businessManagementTitleStyle = styles.tabSelectedStyle;
        } else if (this.state.selectedTab === 'commonTools') {
            homeImage = Images.homeTab;
            productionImage = Images.productionTab;
            businessManagementImage = Images.businessManagementTab;
            commonToolsImage = Images.commonToolsTabSelected;
            commonToolsTitleStyle = styles.tabSelectedStyle;
        }
        return (
            <div style={styles.container}>
                <HomeLeftTabHeader
                    userHeaderImage={Images.tabUserIcon}
                    userName="点击登录" />
                <HomeLeftTab title='首页' titleStyle={homeTitleStyle} image={homeImage} onClick={this.handleHomeClick} />
                <HomeLeftTab title='产品' titleStyle={productionTitleStyle} image={productionImage} onClick={this.handleProductionClick} />
                <HomeLeftTab title='业务办理' titleStyle={businessManagementTitleStyle} image={businessManagementImage} onClick={this.handleBusinessManagementClick} />
                <HomeLeftTab title='常用工具' titleStyle={commonToolsTitleStyle} image={commonToolsImage} onClick={this.handleCommonToolsClick} />
                <div style={styles.tabLogoLayout} onClick={this.handleLogoClick}>
                    <img src={Images.homeLogo} style={styles.logo} />
                </div>
                {this.props.children}
            </div>
        );
    }
}

const styles = {
    container: {
        display: 'flex',
        flexDirection: 'column',
        width: Constant.defaultTabWidth,
        position: 'fixed',
        top: 0, bottom: 0,
        borderRight: '1px solid #ddd',
        boxShadow: '5px 10px 5px #888888',
    },
    home: {
        marginTop: 41,
    },
    tabSelectedStyle: {
        color: Constant.tabSelectedColor,
    },
    tabLogoLayout: {
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        width: Constant.tabLogoWH,
        height: Constant.tabLogoWH,
        position: 'fixed',
        left: 32, right: 34, bottom: 17,
        overflow: 'hidden',
    },
    logo: {
        width: 100
    }
};

HomeLeftTabs.contextTypes = {
  router: React.PropTypes.object
};

export default HomeLeftTabs;
