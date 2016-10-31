import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';
import ContractChangeView from '../../view/contractChange/ContractChangeView';

class ContractChangeContainer extends Component {
    constructor(props) {
        super(props);

        this.handleClick = this.handleClick.bind(this);
    }

    handleClick() {
        this.context.router.push('businessManagement/contractChange/takePhotos');
    }

    render() {
        return (
            <div>
                <ContractChangeView
                    handleClick={this.handleClick}
                />
                {this.props.children}
            </div>
        );
    }
}

ContractChangeContainer.propTypes = {
    dispatch: PropTypes.func.isRequired,
    router: React.PropTypes.object,
};

ContractChangeContainer.contextTypes = {
  router: React.PropTypes.object
};

function mapStateToProps(state) {
    const {  } = state;
    return {

    };
}

export default connect(mapStateToProps)(ContractChangeContainer);
