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
