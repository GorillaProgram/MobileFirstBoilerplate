import React, { Component } from 'react';
import Slider from 'react-slick';

import  '../../../main/css/slider.css';

class AdImageSlider extends Component {

    render() {
        const imagesView = this.props.images.map((image, index) => {
            return (
                <img src={image} key={`${index}`} style={this.props.imageStyle} />
            );
        });

        return (
            <Slider {...this.props.settings}>
                {imagesView}
            </Slider>
        );
    }
}

const styles = {

}

export default AdImageSlider;
