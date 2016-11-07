/**
 * Created by MeePwn
 * https://github.com/maybewaityou
 */
import React, { Component } from 'react';
import CommonStyles from '../../../main/constant/CommonStyle';
import ImagePath from '../../../main/constant/ImagePath';
import Constant from '../../../main/constant/Constant';
import AdImagesSlider from '../../../main/components/view/slider/AdImagesSlider';
import ProductPanel from '../components/panel/ProductPanel';
import NoticePanel from '../components/panel/NoticePanel';
import BusinessPanel from '../components/panel/BusinessPanel';
import PrevArrow from '../../../main/components/view/slider/arrow/PrevArrow';
import NextArrow from '../../../main/components/view/slider/arrow/NextArrow';

class HomeView extends Component {

    constructor(props) {
        super(props);


    }

    render() {
        const adImagesSliderSettings = {
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
            prevArrow: <PrevArrow />,
            nextArrow: <NextArrow />
        };
        return (
            <div style={CommonStyles.homeRightContainer}>
                <div style={styles.container}>
                    <div style={styles.homeTopLayout}>
                        <div style={styles.AdImagesSliderLayout}>
                            <AdImagesSlider
                                settings={adImagesSliderSettings}
                                models={this.props.adModels}
                                imageStyle={styles.AdImage} />
                        </div>
                        <div style={styles.noticeLayout}>
                            <NoticePanel
                                title="公告栏"
                                models={this.props.noticeModels} />
                        </div>
                    </div>
                    <div style={styles.homeBottomLayout}>
                        <div style={styles.productSliderLayout}>
                            <ProductPanel
                                title="信用卡产品"
                                image={ImagePath.progressbar}
                                settings={contentSliderSettings}
                                models={this.props.productModels}
                                style={styles.productPanel} />
                        </div>
                        <div style={styles.quicklyEnterPanelLayout}>
                            <div style={styles.businessPanelLayout}>
                                <BusinessPanel image={ImagePath.homeOpenCard} title="我要" subTitle="开卡" />
                                <BusinessPanel image={ImagePath.homeContract} title="电子" subTitle="签约" />
                            </div>
                            <div style={styles.businessPanelLayout}>
                                <BusinessPanel image={ImagePath.homeManageMoney} title="我要" subTitle="理财" />
                                <BusinessPanel image={ImagePath.homeFund} title="精选" subTitle="基金" />
                            </div>
                            <div style={styles.businessPanelLayout}>
                                <BusinessPanel image={ImagePath.homeBenifit} title="优惠" subTitle="活动" />
                                <BusinessPanel image={ImagePath.homeSearch} title="业务" subTitle="查询" />
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
        width: Constant.matchParent,
        height: Constant.matchParent,
    },
    homeTopLayout: {
        display: 'flex',
        flexDirection: 'row',
        width: Constant.matchParent,
        height: Constant.oneThird,
    },
    homeBottomLayout: {
        display: 'flex',
        flexDirection: 'row',
        width: Constant.matchParent,
        height: Constant.twoThirds
    },
    AdImagesSliderLayout: {
        width: Constant.twoThirds,
        height: Constant.matchParent,
        backgroundColor: Constant.homePanelBackgroundColor,
        marginRight: Constant.homeBlock,
        marginBottom: Constant.homeBlock,
        overflow: 'hidden',
        borderRadius: Constant.homeRadius,
    },
    AdImage: {
        height: 163,
        borderRadius: Constant.homeRadius,
    },
    noticeLayout: {
        width: Constant.oneThird,
        height: Constant.matchParent,
        backgroundColor: Constant.homePanelBackgroundColor,
        marginLeft: Constant.homeBlock,
        marginBottom: Constant.homeBlock,
        borderRadius: Constant.homeRadius,
        overflow: 'hidden',
        border: '1px solid #888888',
    },
    productSliderLayout: {
        width: Constant.twoThirds,
        height: Constant.matchParent - Constant.homeBlock * 2,
        backgroundColor: Constant.homePanelBackgroundColor,
        marginTop: Constant.homeBlock * 2,
        marginRight: Constant.homeBlock,
        borderRadius: Constant.homeRadius,
        overflow: 'hidden',
        border: '1px solid #888888'
    },
    productPanel: {
        paddingLeft: 50,
        paddingRight: 50,
    },
    quicklyEnterPanelLayout: {
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'space-between',
        width: Constant.oneThird,
        height: Constant.matchParent - Constant.homeBlock * 2,
        marginTop: Constant.homeBlock * 2,
        marginLeft: Constant.homeBlock,
        borderRadius: Constant.homeRadius,
        overflow: 'hidden'
    },
    businessPanelLayout: {
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-between',
        height: '30%',
    },
    testStyle: {
        width: Constant.matchParent,
        height: Constant.matchParent,
        backgroundColor: 'blue'
    }

};

export default HomeView;
