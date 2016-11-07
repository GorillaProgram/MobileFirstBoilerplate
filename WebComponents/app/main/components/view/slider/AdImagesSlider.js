/**
 * Created by MeePwn
 * https://github.com/maybewaityou
 */
import React, { Component } from 'react';
import Slider from 'react-slick';

class AdImagesSlider extends Component {

    render() {
        const imagesView = this.props.models.map((model, index) => {
            return (
                <img src={model.image} key={`${index}`} style={this.props.imageStyle} onClick={() => {
                    console.log(model.url);
                }}/>
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

export default AdImagesSlider;
