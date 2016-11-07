/**
 * Created by MeePwn
 * https://github.com/maybewaityou
 */
import React, { Component } from 'react';
import CommonStyles from '../../../main/constant/CommonStyle';
import Constant from '../../../main/constant/Constant';
import AdImagesSlider from '../../../main/components/view/slider/AdImagesSlider';


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

        return (
            <div style={CommonStyles.homeRightContainer}>
                <div style={styles.container}>
                    <div style={styles.homeTopLayout}>
                        <div style={styles.AdImagesSliderLayout}>
                            <AdImagesSlider
                                settings={adImagesSliderSettings}
                                images={this.props.adImages}
                                imageStyle={styles.AdImage}
                                />
                        </div>
                        <div style={styles.noticeLayout}>
                            <div style={styles.testStyle}>

                            </div>
                        </div>
                    </div>
                    <div style={styles.homeBottomLayout}>
                        <div style={styles.productSliderLayout}>

                        </div>
                        <div style={styles.quicklyEnterPanelLayout}>
                            <div style={styles.testStyle}>

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
        backgroundColor: 'white'
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
        backgroundColor: Constant.defaultBackgroundColor,
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
        backgroundColor: Constant.defaultBackgroundColor,
        marginLeft: Constant.homeBlock,
        marginBottom: Constant.homeBlock,
        borderRadius: Constant.homeRadius,
        overflow: 'hidden'
    },
    productSliderLayout: {
        width: Constant.twoThirds,
        height: Constant.matchParent - Constant.homeBlock * 2,
        backgroundColor: Constant.defaultBackgroundColor,
        marginTop: Constant.homeBlock * 2,
        marginRight: Constant.homeBlock,
        borderRadius: Constant.homeRadius,
        overflow: 'hidden',
        border: '1px solid #888888'
    },
    quicklyEnterPanelLayout: {
        width: Constant.oneThird,
        height: Constant.matchParent - Constant.homeBlock * 2,
        backgroundColor: 'white',
        marginTop: Constant.homeBlock * 2,
        marginLeft: Constant.homeBlock,
        borderRadius: Constant.homeRadius,
        overflow: 'hidden'
    },
    testStyle: {
        width: Constant.matchParent,
        height: Constant.matchParent,
        backgroundColor: 'blue'
    }

};

export default HomeView;
