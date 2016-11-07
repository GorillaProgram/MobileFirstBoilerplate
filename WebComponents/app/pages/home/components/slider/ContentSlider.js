import React, { Component } from 'react';
import Slider from 'react-slick';
import Content from './components/Content';

class ContentSlider extends Component {
    constructor(props) {
        super(props);


    }

    render() {
        const contents = this.props.models.map((item, index) => {
            return (
                <div key={`${index}`}>
                    <Content model={item} />
                </div>
            );
        });

        return (
            <Slider {...this.props.settings}>
                {contents}
            </Slider>
        );
    }
}

export default ContentSlider;
