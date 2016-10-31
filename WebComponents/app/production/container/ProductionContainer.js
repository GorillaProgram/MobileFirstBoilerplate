import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';
import ProductionView from '../view/ProductionView';

class ProductionContainer extends Component {
    constructor(props) {
        super(props);


    }

    render() {
        return (
            <ProductionView

            />
        );
    }
}

ProductionContainer.propTypes = {
    dispatch: PropTypes.func.isRequired,

};

function mapStateToProps(state) {
    const {  } = state;
    return {

    };
}

export default connect(mapStateToProps)(ProductionContainer);
