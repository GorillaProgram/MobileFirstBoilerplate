import React, { Component, PropTypes } from 'react';
import $ from 'jquery';
import { Button, Form, FormGroup, ControlLabel, FormControl } from 'react-bootstrap';

class TestExample extends Component {
    constructor(props) {
        super(props);


    }

    componentDidMount() {
        console.log($);
    }

    render() {
        return (
            <div style={styles.container}>
                <div className="col-sm-8" style={{backgroundColor: 'yellow'}}>

                </div>
                <label style={styles.commonText}>Hello react!!</label>
                <div style={styles.testDiv}/>
                <Form inline>
                    <FormGroup controlId="formInlineName">
                        <ControlLabel>Name</ControlLabel>
                        {' '}
                        <FormControl type="text"/>
                    </FormGroup>
                </Form>
                <Button bsStyle="primary" style={styles.button} onClick={() => {
                    WL.Logger.debug('============');
                    WL.Logger.debug(WL);
                    WL.Logger.debug('============');
                }}>button</Button>
            </div>
        );
    }
}

const divWidth = 40;
const divHeight = 40;
const defaultFontSize = 20;
const largeFontSize = 50;
const defaultBorderRadius = 5;

const styles = {
    container: {
        position: 'fixed', top: 0, left: 0, right: 0, bottom: 0,
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: 'blue'
    },
    commonText: {
        fontSize: largeFontSize,
        color: 'red'
    },
    button: {
        fontSize: defaultFontSize,
    },
    testDiv: {
        backgroundColor: 'red',
        width: divWidth,
        height: divHeight
    }
};

export default TestExample;
