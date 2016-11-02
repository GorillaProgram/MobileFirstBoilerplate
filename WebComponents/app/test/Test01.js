/**
 * Created by MeePwn
 * https://github.com/maybewaityou
 */
import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';

class Test01 extends Component {
    constructor(props) {
        super(props);


    }

    render() {
        return (
            <div style={{backgroundColor: 'red', width: 100, height: 200}}>
                <img src="./static/imgs/ad.png" />
            </div>
        );
    }
}

Test01.propTypes = {
    dispatch: PropTypes.func.isRequired,

};

Test01.contextTypes = {
    router: React.PropTypes.object
};

function mapStateToProps(state) {
    const {  } = state;
    return {

    };
}

export default connect(mapStateToProps)(Test01);
