/**
 * Created by MeePwn
 * https://github.com/maybewaityou
 */
import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';
import UIManager from '../main/manager/UIManager';

class Test00 extends Component {

    constructor(props) {
        super(props);


    }

    render() {
        return (
            <div style={styles.container} onClick={() => {
                this.context.router.push('test01');
            }}>
                <button data-role="button">button</button>
                {this.props.children}
            </div>
        );
    }
}

const styles = {
    container: {
        position: 'fixed',
        top: 0, left: 0, bottom: 0, right: 0,
        backgroundColor: 'white'
    }
}

Test00.propTypes = {
    dispatch: PropTypes.func.isRequired,

};

Test00.contextTypes = {
    router: React.PropTypes.object
};

function mapStateToProps(state) {
    const {  } = state;
    return {

    };
}

export default connect(mapStateToProps)(Test00);
