/**
 * Created by MeePwn
 * https://github.com/maybewaityou
 */
import React, { Component } from 'react';
import ContentSlider from '../slider/ContentSlider';

class ProductPanel extends Component {
    constructor(props) {
        super(props);


    }

    render() {
        return (
            <div style={{...styles.container, ...this.props.style}}>
                <label style={styles.title}>{this.props.title}</label>
                <img src={this.props.image} style={styles.image} />
                <div style={styles.sliderLayout}>
                    <ContentSlider
                        settings={this.props.settings}
                        models={this.props.models} />
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
}

export default ProductPanel;
