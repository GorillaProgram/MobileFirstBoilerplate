import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';
import ContractApplyPhotosView from '../../view/contractApply/ContractApplyPhotosView';

class ContractApplyPhotosContainer extends Component {
    constructor(props) {
        super(props);

        this.handleSubmitClick = this.handleSubmitClick.bind(this);
    }

    handleSubmitClick(){
        this.context.router.push('businessManagement/contractApply/takePhotos/contractApplyDetail');
    }

    render() {
        return (
            <div>
                <ContractApplyPhotosView
                    handleSubmitClick={this.handleSubmitClick}
                />
                {this.props.children}
            </div>

        );
    }
}

ContractApplyPhotosContainer.propTypes = {
    dispatch: PropTypes.func.isRequired,

};

ContractApplyPhotosContainer.contextTypes = {
    router: React.PropTypes.object
};

function mapStateToProps(state) {
    const {  } = state;
    return {

    };
}

export default connect(mapStateToProps)(ContractApplyPhotosContainer);
