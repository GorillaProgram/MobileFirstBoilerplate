import React, { Component } from 'react';
import Images from '../../images/Images';
import Constant from '../../constant/Constant';
import ImagePanel from './ImagePanel';
import Input from '../input/Input';
import Button from '../input/PrimaryButton';

class InfoShowPanel extends Component {
    constructor(props) {
        super(props);


    }

    render() {
        var inputs = this.props.models.map((item, index) => {
            return (
                <Input key={`${index}`} type={Constant.inputTypes.textView} title={item.des} value={item.text} />
            );
        });
        return (
            <div style={styles.container}>
                <div style={styles.infoLayout}>
                    <ImagePanel image={this.props.image} />
                    <div style={styles.inputLayout}>
                        {inputs}
                    </div>
                </div>
                <Button title={this.props.buttonTitle} onClick={this.props.onClick} style={styles.button} />
            </div>
        );
    }
}

const styles = {
    container: {
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
    },
    infoLayout: {
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
    },
    inputLayout: {
        marginLeft: 50,
        height: 200,
        overflow: 'auto'
    },
    button: {
        marginTop: 80
    }
}

export default InfoShowPanel;
