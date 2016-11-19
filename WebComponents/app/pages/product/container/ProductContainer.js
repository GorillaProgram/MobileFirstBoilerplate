/**
 * Created by MeePwn
 * https://github.com/maybewaityou
 */
import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';
import Just from '../../../main/context/Just';
import ProductView from '../view/ProductView';

class ProductContainer extends Component {

    constructor(props) {
        super(props);


    }

    render() {
        return (
            <ProductView

            />
        );
    }
}

ProductContainer.propTypes = {
    dispatch: PropTypes.func.isRequired,

};

ProductContainer.contextTypes = {
    router: PropTypes.object
};

function mapStateToProps(state) {
    const { test } = state;
    Just.log(test);
    return {

    };
}

export default connect(mapStateToProps)(ProductContainer);
