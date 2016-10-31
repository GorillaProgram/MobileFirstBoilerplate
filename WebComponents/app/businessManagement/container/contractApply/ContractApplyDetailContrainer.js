import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';
import ContractApplyDetailView from '../../view/contractApply/ContractApplyDetailView';

class ContractApplyDetailContainer extends Component {
    constructor(props) {
        super(props);


    }

    render() {
        return (
            <div>
                <ContractApplyDetailView

                />
                {this.props.children}
            </div>

        );
    }
}

ContractApplyDetailContainer.propTypes = {
    dispatch: PropTypes.func.isRequired,

};

function mapStateToProps(state) {
    const {  } = state;
    return {

    };
}

export default connect(mapStateToProps)(ContractApplyDetailContainer);
