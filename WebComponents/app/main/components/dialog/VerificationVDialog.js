import React, { Component } from 'react';
import Dialog from './Dialog';
import {Modal,  Button} from 'react-bootstrap';
import Constant from '../../../main/constant/Constant';

class VerificationDialog extends Component {
    constructor(props) {
        super(props);


    }


    render() {
        return (
            <div style={styles.container}>
                <Modal show={this.props.showDialog} className="static-modal" >
                    <Modal.Header style={styles.header}>
                        <div style={styles.title}>
                            {this.props.title}
                        </div>
                    </Modal.Header>

                    <Modal.Body style={styles.body}>
                      <span>{this.props.contentHeader}</span>
                      <img src={this.props.imgSource} style={styles.img}/>
                      <button style={styles.button} onClick={this.props.onHide}>取 消</button>
                    </Modal.Body>

                 </Modal>
            </div>

        );
    }
}

const styles = {
    container: {
        width: '45%',
    },
    header: {
        backgroundColor: '#EDEDED',
        borderTopLeftRadius: 5,
        borderTopRightRadius: 5,
    },

    img: {
        width: '45%',
        height: '33%'
    },
    body: {
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        fontSize: Constant.defaultFontSize,
        marginTop: 20,
    },
    button: {
        display: 'block',
        marginTop: 50,
        padding: 5,
        width: 150,
        borderRadius: 5,
        backgroundColor: '#CCCCCC',
        color: '#FFFFFF',
    },
}

export default VerificationDialog;
