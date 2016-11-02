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
            <div onClick={() => {
                // this.context.router.push('test01');
                UIManager.cacheFile(['http://10.240.90.212:7001/padServer/padimages/1.png']);
            }}>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
                {this.props.children}
            </div>
        );
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
