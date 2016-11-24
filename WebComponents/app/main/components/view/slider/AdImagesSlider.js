/**
 * Created by MeePwn
 * https://github.com/maybewaityou
 *
 * description:
 *      广告Slider
 */
import React, { Component, PropTypes } from 'react';
import NoInfoPanel from '../panel/NoInfoPanel';
import Slider from 'react-slick';

class AdImagesSlider extends Component {

    constructor(props) {
        super(props);


    }

    adImagesSliderOrNoInfoPanel(models, noInfoImage, noInfoTitle) {
        const imagesView = this.props.models.map((model, index) => {
            return (
                <img src={model.image} key={`${index}`} style={this.props.imageStyle} onClick={model.onClick}/>
            );
        });
        return (
            models.length === 0 ?
            <NoInfoPanel
                image={noInfoImage}
                title={noInfoTitle} /> :
            <Slider {...this.props.settings}>
                {imagesView}
            </Slider>
        );
    }

    render() {

        return (
            <div style={{...styles.container, ...this.props.style}}>
                {this.adImagesSliderOrNoInfoPanel(this.props.models, this.props.noInfoImage, this.props.noInfoTitle)}
            </div>
        );
    }
}

const styles = {
    container: {
        display: 'flex',
        height: '100%',
        justifyContent: 'center',
        alignItems: 'center'
    }
};

AdImagesSlider.propTypes = {
    style: PropTypes.object,
    imageStyle: PropTypes.object,
    settings: PropTypes.object.isRequired,
    models: PropTypes.array.isRequired
};

export default AdImagesSlider;
