import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';
import { test } from '../../../framework/actions/Actions';
import CardActiveView from '../../view/cardActive/CardActiveView';

class CardActiveContainer extends Component {
    constructor(props) {
        super(props);


    }

    render() {
        const { dispatch, testResult } = this.props;
        return (
            <CardActiveView
                testParams={testResult}
                handleBeginToActiveClick={(e) => {
                    dispatch(test(testResult));
                }}
            />
        );
    }
}

CardActiveContainer.propTypes = {
    dispatch: PropTypes.func.isRequired,

};

function mapStateToProps(state) {
    const { test } = state;
    return {
        testResult: test.item
    };
}

export default connect(mapStateToProps)(CardActiveContainer);
