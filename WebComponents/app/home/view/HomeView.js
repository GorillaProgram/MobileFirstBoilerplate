import React, { Component } from 'react';
import commonStyles from '../../main/styles/commonStyles';
import AdImageSlider from '../components/slider/AdImageSlider';
import NextArrow from '../../main/components/slider/components/NextArrow';
import PrevArrow from '../../main/components/slider/components/PrevArrow';
import Images from '../../main/images/Images';
import Constant from '../../main/constant/Constant';
import ContentPanel from '../components/panel/ContentPanel';
import BusinessPanel from '../components/panel/BusinessPanel';
import NoticePanel from '../components/panel/NoticePanel';

class HomeView extends Component {
    constructor(props) {
        super(props);


    }

    render() {
        // 测试数据
        const hotContent = [
            {
                image: Images.card01,
                content: [
                    {
                        des: '名称',
                        text: '白金卡(精致版)'
                    },
                    {
                        des: '额度',
                        text: '10万-100万'
                    },
                    {
                        des: '币种',
                        text: '多币种'
                    },
                    {
                        des: '简介',
                        text: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.'
                    }
                ]
            },
            {
                image: Images.card02,
                content: [
                    {
                        des: '名称',
                        text: '白金卡(精致版)'
                    },
                    {
                        des: '额度',
                        text: '10万-100万'
                    },
                    {
                        des: '币种',
                        text: '多币种'
                    },
                    {
                        des: '简介',
                        text: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.'
                    }
                ]
            },
            {
                image: Images.card03,
                content: [
                    {
                        des: '名称',
                        text: '白金卡(精致版)'
                    },
                    {
                        des: '额度',
                        text: '10万-100万'
                    },
                    {
                        des: '币种',
                        text: '多币种'
                    },
                    {
                        des: '简介',
                        text: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.'
                    }
                ]
            },
            {
                image: Images.card04,
                content: [
                    {
                        des: '名称',
                        text: '白金卡(精致版)'
                    },
                    {
                        des: '额度',
                        text: '10万-100万'
                    },
                    {
                        des: '币种',
                        text: '多币种'
                    },
                    {
                        des: '简介',
                        text: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.'
                    }
                ]
            }
        ];

        const adImageSliderSettings = {
            className: 'slick-slider',
            arrows: false,
            dots: true,
            dotsClass: 'slick-dots',
            infinite: true,
            slidesToShow: 1,
            slidesToScroll: 1,
            autoplay: true,
            lazyLoad: true,
            autoplaySpeed: 5000
        };
        const contentSliderSettings = {
            className: 'slick-slider',
            arrows: true,
            dots: false,
            infinite: true,
            slidesToShow: 1,
            slidesToScroll: 1,
            nextArrow: <NextArrow />,
            prevArrow: <PrevArrow />
        };
        return (
            <div style={commonStyles.container}>
                <div style={styles.container}>
                    <div style={styles.homeTopLayout}>
                        <div style={styles.adSliderLayout}>
                            <AdImageSlider
                                settings={adImageSliderSettings}
                                images={[Images.homeAd, Images.homeAd]}
                                imageStyle={styles.adSliderImage} />
                        </div>
                        <NoticePanel title="公告栏"
                            style={styles.noticePanelLayout} />
                    </div>
                    <div style={styles.homeBottomLayout}>
                        <div style={styles.homeContentLayout}>
                            <ContentPanel
                                title="信用卡产品"
                                image={Images.homeContentPanelProgress}
                                settings={contentSliderSettings}
                                models={hotContent}
                                style={styles.contentPanel} />
                        </div>
                        <div style={styles.homeBusinessLayout}>
                            <div style={styles.businessPanelLayout}>
                                <BusinessPanel image={Images.homeOpenCard} title="我要" subTitle="开卡" />
                                <BusinessPanel image={Images.homeContract} title="电子" subTitle="签约" />
                            </div>
                            <div style={styles.businessPanelLayout}>
                                <BusinessPanel image={Images.homeManageMoney} title="我要" subTitle="理财" />
                                <BusinessPanel image={Images.homeFund} title="精选" subTitle="基金" />
                            </div>
                            <div style={styles.businessPanelLayout}>
                                <BusinessPanel image={Images.homeBenifit} title="优惠" subTitle="活动" />
                                <BusinessPanel image={Images.homeSearch} title="业务" subTitle="查询" />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

const styles = {
    container: {
        display: 'flex',
        flexDirection: 'column',
        width: Constant.defaultHomeWidth,
        height: '100%'
    },
    homeTopLayout: {
        display: 'flex',
        flexDirection: 'row',
        height: Constant.defaultHomeHeight/3-20,
        marginTop: 20,
        // backgroundColor: 'red'
    },
    adSliderLayout: {
        width: Constant.defaultHomeWidth/3*2-30,
        marginLeft: 20,
        marginRight: 10,
        // backgroundColor: 'blue',
        overflow: 'hidden'
    },
    adSliderImage: {

    },
    noticePanelLayout: {
        width: Constant.defaultHomeWidth/3-30,
        marginLeft: 10,
        marginRight: 20,
    },
    homeBottomLayout: {
        display: 'flex',
        flexDirection: 'row',
        height: Constant.defaultHomeHeight/3*2-20,
        marginTop: 20,
        marginBottom: 20,
        // backgroundColor: 'blue',
    },
    homeContentLayout: {
        width: Constant.defaultHomeWidth/3*2-30,
        marginLeft: 20,
        marginRight: 10,
        // backgroundColor: 'red'
    },
    contentPanel: {
        paddingLeft: 50,
        paddingRight: 50
    },
    homeBusinessLayout: {
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'space-between',
        width: Constant.defaultHomeWidth/3-30,
        marginLeft: 10,
        marginRight: 20,
    },
    businessPanelLayout: {
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        height: '25%',
    },
    businessPanel: {

    },
}

export default HomeView;
