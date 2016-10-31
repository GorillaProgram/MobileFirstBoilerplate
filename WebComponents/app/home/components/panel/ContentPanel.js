import React, { Component } from 'react';
import Panel from '../../../main/components/panel/Panel';
import ContentSlider from '../../components/slider/homeContentSlider/ContentSlider';

class ContentPanel extends Component {
    constructor(props) {
        super(props);


    }

    render() {
        return (
            <Panel style={{...styles.container, ...this.props.style}}>
                <label style={styles.title}>{this.props.title}</label>
                <img src={this.props.image} style={styles.image} />
                <div style={styles.sliderLayout}>
                    <ContentSlider
                        settings={this.props.settings}
                        models={this.props.models} />
                </div>
            </Panel>
        );
    }
}

const styles = {
    container: {
        display: 'flex',
        flexDirection: 'column',
        width: '100%',
        height: '100%',
        paddingLeft: 30,
        paddingRight: 30,
        paddingTop: 10,
        backgroundColor: '#F8F8F8'
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

export default ContentPanel;
