import React, { Component } from 'react';
import {Modal,  Button} from 'react-bootstrap';
import Constant from '../../constant/Constant';

class DialogView extends Component {
    constructor(props) {
        super(props);


    }

    render() {
        return (
            <Modal show={this.props.showDialog} bsSize={this.props.bsSize} aria-labelledby="contained-modal-title-sm">
                <Modal.Header style={{display: 'flex', fontSize: Constant.defaultFontSize, fontWeight: 'bold',justifyContent: 'center'}}>
                    {this.props.title}
                </Modal.Header>
                <Modal.Body>
                  {this.props.body}
                </Modal.Body>
                <Modal.Footer style={{display: 'flex', flexDirection: 'row'}}>
                  <Button onClick={this.props.onHide}>{this.props.leftBtnName}</Button>
                  <Button onClick={this.props.onRightBtnEvent}>{this.props.rightBtnName}</Button>
                </Modal.Footer>
             </Modal>
        );
    }
}

export default DialogView;
