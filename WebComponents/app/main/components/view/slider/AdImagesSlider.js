/**
 * Created by MeePwn
 * https://github.com/maybewaityou
 *
 * description:
 *      广告Slider
 */
import React, { Component, PropTypes } from 'react';
import Slider from 'react-slick';

class AdImagesSlider extends Component {

    render() {
        const imagesView = this.props.models.map((model, index) => {
            return (
                <img src={model.image} key={`${index}`} style={this.props.imageStyle} onClick={model.onClick}/>
            );
        });

        return (
            <Slider {...this.props.settings}>
                {imagesView}
            </Slider>
        );
    }
}

AdImagesSlider.propTypes = {
    imageStyle: PropTypes.object,
    settings: PropTypes.object.isRequired,
    models: PropTypes.array.isRequired
};

export default AdImagesSlider;
