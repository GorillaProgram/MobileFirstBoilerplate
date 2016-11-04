/**
 * Created by MeePwn
 * https://github.com/maybewaityou
 */
import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';
import Just from '../main/constant/Just';

class Test02 extends Component {

    constructor(props) {
        super(props);


    }

    render() {
        return (
            <div style={styles.container}>
                <input type="text" />
                <button className="ui-btn ui-shadow ui-corner-all" data-role="button" onClick={() => {
                    this.context.router.goBack();
                }}>button</button>
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

Test02.propTypes = {
    dispatch: PropTypes.func.isRequired,

};

Test02.contextTypes = {
    router: React.PropTypes.object
};

function mapStateToProps(state) {
    const {  } = state;
    return {

    };
}

export default connect(mapStateToProps)(Test02);
