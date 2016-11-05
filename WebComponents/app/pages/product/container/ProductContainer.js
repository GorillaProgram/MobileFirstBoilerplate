/**
 * Created by MeePwn
 * https://github.com/maybewaityou
 */
import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';
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
    router: React.PropTypes.object
};

function mapStateToProps(state) {
    const {  } = state;
    return {

    };
}

export default connect(mapStateToProps)(ProductContainer);
