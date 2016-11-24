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

        this.state = {
            allTabSelectedStatus: true,
            financingTabSelectedStatus: false, // 理财
            foundationTabSelectedStatus: false // 基金
        };

        this.handleAllTabSelected = this.handleAllTabSelected.bind(this);
        this.handleFinancingTabSelected = this.handleFinancingTabSelected.bind(this);
        this.handleFoundationTabSelected = this.handleFoundationTabSelected.bind(this);
    }

    /**
     * 全部
     */
    handleAllTabSelected() {

    }

    /**
     * 理财
     */
    handleFinancingTabSelected() {

    }

    /**
     * 基金
     */
    handleFoundationTabSelected() {

    }

    render() {
        return (
            <ProductView
                allTabSelectedStatus={this.state.allTabSelectedStatus}
                financingTabSelectedStatus={this.state.financingTabSelectedStatus}
                foundationTabSelectedStatus={this.state.foundationTabSelectedStatus}
                handleAllTabSelected={this.handleAllTabSelected}
                handleFinancingTabSelected={this.handleFinancingTabSelected}
                handleFoundationTabSelected={this.handleFoundationTabSelected}
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
