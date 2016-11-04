/**
 * Created by MeePwn
 * https://github.com/maybewaityou
 */
import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';
import Just from '../main/constant/Just';

class Test01 extends Component {

    constructor(props) {
        super(props);


    }

    render() {
        console.log('========Test01========');
        return (
            <div style={{backgroundColor: 'red', width: 100, height: 200}}>
                <img src="./static/imgs/ad.png" onClick={() => {
                    this.context.router.push(Just.Test02);
                }} />
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
