import React, { Component } from 'react';
import Constant from '../../constant/Constant';

class Input extends Component {
    constructor(props) {
        super(props);

        this.generateView = this.generateView.bind(this);
    }

    generateView() {
        var view;
        switch (this.props.type) {
            case Constant.inputTypes.editView:
                const style = this.props.readOnly ? styles.readOnly : styles.canEdit;
                view = (
                    <div style={{...styles.input, ...this.props.inputStyle}}>
                        <input id={this.props.id} type="text"
                            readOnly={this.props.readOnly}
                            placeholder={this.props.placeholder}
                            onChange={this.props.onChange}
                            value={this.props.value}
                            style={{...styles.commonEditView, ...style}} />
                    </div>
                );
                break;
            case Constant.inputTypes.textView:
                view = (
                    <div style={{...styles.input, ...this.props.inputStyle}}>
                        <label id={this.props.id} style={styles.commonTextView}>{this.props.value}</label>
                    </div>
                );
                break;
            case Constant.inputTypes.textViewOnly:

                break;
            default:

        }
        return view;
    }

    render() {

        return (
            <div style={{...styles.container, ...this.props.style}}>
                <div style={{...styles.title, ...this.props.titleStyle}}>
                    {this.props.title}
                </div>
                {this.generateView()}
            </div>
        );
    }
}

const styles = {
    container: {
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        margin: 5,
    },
    title: {
        fontSize: Constant.defaultFontSize,
        width: 90
    },
    input: {
        display: 'flex',
        width: '70%',
        marginLeft: 10,
    },
    commonEditView: {
        display: 'block',
        width: '100%',
        height: 34,
        padding: '6px 12px',
        fontSize: Constant.defaultFontSize,
        lineHeight: 1.42857143,
        backgroundColor: '#fff',
        backgroundImage: 'none',
        border: '1px solid #ccc',
        borderRadius: 5,
        boxShadow: 'inset 0 1px 1px rgba(0, 0, 0, .075)',
        transition: 'border-color ease-in-out .15s, box-shadow ease-in-out .15s',
    },
    canEdit: {
        color: '#555',
    },
    readOnly: {
        color: '#ddd',
    },
    commonTextView: {
        display: 'block',
        width: '100%',
        height: 34,
        padding: 6,
        fontSize: Constant.defaultFontSize,
        lineHeight: 1.42857143,
    },
}

export default Input;
