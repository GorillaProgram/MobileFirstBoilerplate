import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';
import OpenCardStepOneView from '../../view/openCardStep/OpenCardStepOneView';

class OpenCardStepOneContainer extends Component {
    constructor(props) {
        super(props);

        this.handleOpenCardClick = this.handleOpenCardClick.bind(this);
    }

    handleOpenCardClick() {
        this.context.router.push('businessManagement/openCardStepOne/openCardStepTwo');
    }

    render() {
        return (
            <div>
                <OpenCardStepOneView
                    handleOpenCardClick={this.handleOpenCardClick}
                    />
                {this.props.children}
            </div>
        );
    }
}

OpenCardStepOneContainer.propTypes = {
    dispatch: PropTypes.func.isRequired,

};

OpenCardStepOneContainer.contextTypes = {
  router: React.PropTypes.object
};

function mapStateToProps(state) {
    const {  } = state;
    return {

    };
}

export default connect(mapStateToProps)(OpenCardStepOneContainer);
