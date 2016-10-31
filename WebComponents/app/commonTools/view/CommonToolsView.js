import React, { Component } from 'react';
import commonStyles from '../../main/styles/commonStyles';
import Images from '../../main/images/Images';
import SliderGroup from '../../main/components/slider/SliderGroup';
import NextArrow from '../../main/components/slider/components/NextArrow';
import PrevArrow from '../../main/components/slider/components/PrevArrow';
import Square from '../../main/components/slider/components/Square';

import '../../main/css/slider.css';

class CommonToolsView extends Component {
    constructor(props) {
        super(props);


    }

    render() {
        const settings = {
            arrows: false,
            dots: false,
            infinite: false,
            slidesToShow: 1,
            slidesToScroll: 1,
            nextArrow: <NextArrow />,
            prevArrow: <PrevArrow />
        };
        return (
            <div style={{...commonStyles.container, ...styles.container}}>
                <SliderGroup title="借记卡业务" settings={settings}>
                    <div style={styles.slide}>
                        <Square title="开卡" image={Images.kk} />
                        <Square title="卡激活" image={Images.jh} />
                        <Square title="发卡" image={Images.fk} />
                        <Square title="产品" image={Images.kk} />
                        <Square title="卡激活" image={Images.jh} />
                        <Square title="发卡" image={Images.fk} />
                    </div>
                </SliderGroup>
            </div>
        );
    }
}

const styles = {
    container: {
        marginLeft: 10,
        marginRight: 10
    },
    slide: {
        display: 'flex',
        flexDirection: 'row',
    },
}

export default CommonToolsView;
