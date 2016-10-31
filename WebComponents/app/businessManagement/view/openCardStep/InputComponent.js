import React, { Component } from 'react';
import {DropdownButton , MenuItem} from 'react-bootstrap';
import '../../../main/css/opencard.css';

class InputComponent extends Component {
    constructor(props) {
        super(props);
        console.log("=====",this.props);
        this.state = {
            dropdownButtonTitle: '请选择',
        }
    }

    render() {
        return (
            <div>
                {this.initView()}
            </div>
        );
    }

    initView(){
        var type = this.props.viewType;
        switch (type) {
            case 'input':
                return(
                    <div style={styles.leftInputDiv}>
                        <label style={{width: 75}}>{this.props.leftTitle}:</label>
                        <input style={styles.inputStyle} id="icardNumber" type="text" ref={this.props.inputRef} placeholder className="form-control" placeholder={this.props.placeholder} />
                    </div>
                );
            break;
            case 'dropdownButton':
                return(
                    <div style={styles.leftInputDiv}>
                        <label style={{width: 75}}>{this.props.leftTitle}:</label>
                        <DropdownButton onSelect={this.dropdownButtonItemSelect.bind(this)} style={styles.btnStyles} noCaret id="dropdown-no-caret" ref={this.props.inputRef} bsStyle="primary" title={this.state.dropdownButtonTitle} key="1" >
                           {this.initMenuItem()}
                        </DropdownButton>
                    </div>
                );
            break;
            default:

            break;

        }
    }

    initMenuItem(){
        var viewArr = [];
        var data = this.props.dataArr;
        for(var i = 0; i< data.length; i++){
            viewArr.push(
                <MenuItem key={i} eventKey={i}>{data[i]}</MenuItem>
            );
        }
        return viewArr;
    }

    dropdownButtonItemSelect(eventKey, event) {
        this.setState({
            dropdownButtonTitle: this.props.dataArr[eventKey],
        });
    }
}

const styles = {

    leftInputDiv: {
        display: 'flex', flexDirection: 'row',alignItems: 'center',marginLeft: 5,marginRight: 5, marginTop: 10,marginBottom: 10,
    },
    btnStyles: {
        minWidth: 180,
    },
    inputStyle: {
        width: '70%',
    }
}

export default InputComponent;
