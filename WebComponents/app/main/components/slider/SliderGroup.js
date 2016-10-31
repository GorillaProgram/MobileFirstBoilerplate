import React, { Component } from 'react';
import commonStyles from '../../styles/commonStyles';
import Panel from '../panel/Panel';
import Slider from './MultiSquaresSlider';

class SliderGroup extends Component {
    constructor(props) {
        super(props);


    }

    render() {
        return (
            <div style={styles.container}>
                <label style={styles.title}>{this.props.title}</label>
                <Panel style={styles.panel}>
                    <Slider settings={this.props.settings}>
                        {this.props.children}
                    </Slider>
                </Panel>
            </div>
        );
    }
}

const styles = {
    container: {
        marginLeft: 10,
        marginRight: 10
    },
    panel: {
        height: 100,
        marginTop: 10,
        marginLeft: 40,
        marginRight: 40,
        marginBottom: 10,
        backgroundColor: '#F8F8F8'
    },
    title: {
        fontSize: 18,
        marginTop: 10,
        marginLeft: 40,
    },
}

export default SliderGroup;
