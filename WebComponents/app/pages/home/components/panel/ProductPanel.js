/**
 * Created by MeePwn
 * https://github.com/maybewaityou
 */
import React, { Component, PropTypes } from 'react';
import NoInfoPanel from '../../../../main/components/view/panel/NoInfoPanel';
import ContentSlider from '../slider/ContentSlider';

class ProductPanel extends Component {
    constructor(props) {
        super(props);


    }

    sliderOrNoInfoPanel() {
        return (
            this.props.models.length === 0 ?
            <NoInfoPanel
                image='./static/imgs/defaultAdImage.png'
                title='暂无产品信息' /> :
            <ContentSlider
                settings={this.props.settings}
                models={this.props.models} />
        );
    }

    render() {
        return (
            <div style={{...styles.container, ...this.props.style}}>
                <label style={styles.title}>{this.props.title}</label>
                <img src={this.props.image} style={styles.image} />
                <div style={styles.sliderLayout}>
                    {sliderOrNoInfoPanel()}
                </div>
            </div>
        );
    }
}

const styles = {
    container: {
        display: 'flex',
        flexDirection: 'column',
        paddingLeft: 30,
        paddingRight: 30,
        paddingTop: 20,
    },
    title: {
        fontSize: 18
    },
    image: {
        width: '100%',
        height: 8,
        marginTop: 14
    },
    sliderLayout: {
        marginTop: 25,
        marginBottom: 20,
    }
};

ProductPanel.propTypes = {
    style: PropTypes.object,
    title: PropTypes.string.isRequired,
    image: PropTypes.string.isRequired,
    settings: PropTypes.object.isRequired,
    models: PropTypes.array.isRequired
};

export default ProductPanel;
