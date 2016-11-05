/**
 * Created by MeePwn
 * https://github.com/maybewaityou
 */
import React, { Component, PropTypes } from 'react';
import HomeLeftTab from './components/HomeLeftTab';
import HomeLeftLoginBox from './components/HomeLeftLoginBox';

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
            homeImage = './static/imgs/homeTabActiveIcon.png';
            productionImage = './static/imgs/productionTabIcon.png';
            businessManagementImage = './static/imgs/businessManagementTabIcon.png';
            commonToolsImage = './static/imgs/commonToolsTabIcon.png';
            homeTitleStyle = styles.tabSelectedStyle;
        } else if (this.state.selectedTab === 'production') {
            homeImage = './static/imgs/homeTabIcon.png';
            productionImage = './static/imgs/productionTabActiveIcon.png';
            businessManagementImage = './static/imgs/businessManagementTabIcon.png';
            commonToolsImage = './static/imgs/commonToolsTabIcon.png';
            productionTitleStyle = styles.tabSelectedStyle;
        } else if (this.state.selectedTab === 'businessManagement') {
            homeImage = './static/imgs/homeTabIcon.png';
            productionImage = './static/imgs/productionTabIcon.png';
            businessManagementImage = './static/imgs/businessManagementTabActiveIcon.png';
            commonToolsImage = './static/imgs/commonToolsTabIcon.png';
            businessManagementTitleStyle = styles.tabSelectedStyle;
        } else if (this.state.selectedTab === 'commonTools') {
            homeImage = './static/imgs/homeTabIcon.png';
            productionImage = './static/imgs/productionTabIcon.png';
            businessManagementImage = './static/imgs/businessManagementTabIcon.png';
            commonToolsImage = './static/imgs/commonToolsTabActiveIcon.png';
            commonToolsTitleStyle = styles.tabSelectedStyle;
        }
        return (
            <div style={styles.container}>
                <HomeLeftLoginBox
                    isLogin={true}
                    />
                <HomeLeftTab title='首页' titleStyle={homeTitleStyle} image={homeImage} style={styles.firstTab} onClick={this.handleHomeClick} />
                <HomeLeftTab title='产品' titleStyle={productionTitleStyle} image={productionImage} onClick={this.handleProductionClick} />
                <HomeLeftTab title='业务办理' titleStyle={businessManagementTitleStyle} image={businessManagementImage} onClick={this.handleBusinessManagementClick} />
                <HomeLeftTab title='常用工具' titleStyle={commonToolsTitleStyle} image={commonToolsImage} onClick={this.handleCommonToolsClick} />
                <div style={styles.tabLogoLayout} onClick={this.handleLogoClick}>
                    <img src='./static/imgs/logo.png' style={styles.logo} />
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
        width: 188,
        height: '100%',
        position: 'fixed',
        top: 0, bottom: 0,
        borderRight: '1px solid #ddd',
        boxShadow: '5px 10px 5px #888888'
    },
    firstTab: {
        marginTop: 30
    },
    tabSelectedStyle: {
        color: '#1177db',
    },
    tabLogoLayout: {
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        width: 122,
        height: 122,
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
