/**
 * Created by MeePwn
 * https://github.com/maybewaityou
 *
 * description:
 *      Slider包装类
 */
import React, { Component } from 'react';
import Slider from 'react-slick';

class SquaresSlider extends Component {

    render() {
        return (
            <Slider {...this.props.settings}>
                {this.props.children}
            </Slider>
        );
    }
}

export default SquaresSlider;
