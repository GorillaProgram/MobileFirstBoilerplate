import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';
import OpenCardStepTwoPhotosView from '../../view/openCardStep/OpenCardStepTwoPhotosView';

class OpenCardStepTwoPhotosContainer extends Component {
    constructor(props) {
        super(props);
        this.handleSubmitClick = this.handleSubmitClick.bind(this);

    }

    handleSubmitClick(){
        this.context.router.push('businessManagement/openCardStepOne/openCardStepTwo/openCardStepTwoPhotos/openCardStepThree');
    }

    render() {
        return (

            <div>
                <OpenCardStepTwoPhotosView
                    handleSubmitClick={this.handleSubmitClick}
                />
                {this.props.children}
            </div>
        );
    }
}

OpenCardStepTwoPhotosContainer.propTypes = {
    dispatch: PropTypes.func.isRequired,

};

OpenCardStepTwoPhotosContainer.contextTypes = {
  router: React.PropTypes.object
};

function mapStateToProps(state) {
    const {  } = state;
    return {

    };
}

export default connect(mapStateToProps)(OpenCardStepTwoPhotosContainer);
