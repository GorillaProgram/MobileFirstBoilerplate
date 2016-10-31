import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';
import ContractChangePhotosView from '../../view/contractChange/ContractChangePhotosView';

class ContractChangePhotosContainer extends Component {
    constructor(props) {
        super(props);

        this.handleSubmitClick = this.handleSubmitClick.bind(this);
    }

    handleSubmitClick() {
        
    }

    render() {
        return (
            <div>
                <ContractChangePhotosView
                    handleSubmitClick={this.handleSubmitClick}
                />
                {this.props.children}
            </div>
        );
    }
}

ContractChangePhotosContainer.propTypes = {
    dispatch: PropTypes.func.isRequired,

};

ContractChangePhotosContainer.contextTypes = {
    router: React.PropTypes.object
};

function mapStateToProps(state) {
    const {  } = state;
    return {

    };
}

export default connect(mapStateToProps)(ContractChangePhotosContainer);
