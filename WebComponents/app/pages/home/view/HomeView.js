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
                            <div style={styles.testStyle}>

                            </div>
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
        marginRight: 5,
        marginBottom: 5,
        overflow: 'hidden',
        borderRadius: '5px'
    },
    AdImage: {
        height: 170,
    },
    noticeLayout: {
        width: Constant.oneThird,
        height: Constant.matchParent,
        marginLeft: 5,
        marginBottom: 5,
        borderRadius: '5px',
        overflow: 'hidden'
    },
    productSliderLayout: {
        width: Constant.twoThirds,
        marginTop: 10,
        marginRight: 5,
        borderRadius: '5px',
        overflow: 'hidden'
    },
    quicklyEnterPanelLayout: {
        width: Constant.oneThird,
        marginTop: 10,
        marginLeft: 5,
        borderRadius: '5px',
        overflow: 'hidden'
    },
    testStyle: {
        width: Constant.matchParent,
        height: Constant.matchParent,
        backgroundColor: 'blue'
    }

};

export default HomeView;
