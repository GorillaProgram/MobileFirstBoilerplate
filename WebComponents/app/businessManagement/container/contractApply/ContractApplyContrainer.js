import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';
import ContractApplyView from '../../view/contractApply/ContractApplyView';

class ContractApplyContainer extends Component {
    constructor(props) {
        super(props);
        this.state = {
            showDialog: true,
        }
        this.onHide = this.onHide.bind(this);
        this.handleSubmitClick = this.handleClick.bind(this);
        this.handleClick = this.handleClick.bind(this);
    }

    onHide() {
        this.setState({
            showDialog: false,
        });
    }

    handleClick() {
        this.context.router.push('businessManagement/contractApply/takePhotos');
    }

    render() {
        return (
            <div>
                <ContractApplyView
                    showDialog={this.state.showDialog}
                    onHide = {this.onHide}
                    handleClick={this.handleClick}
                />
                {this.props.children}
            </div>

        );
    }
}

ContractApplyContainer.propTypes = {
    dispatch: PropTypes.func.isRequired,


};

ContractApplyContainer.contextTypes = {
    router: React.PropTypes.object
};

function mapStateToProps(state) {
    const {  } = state;
    return {

    };
}

export default connect(mapStateToProps)(ContractApplyContainer);
