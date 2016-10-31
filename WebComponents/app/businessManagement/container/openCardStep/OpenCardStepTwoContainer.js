import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';
import OpenCardStepTwoView from '../../view/openCardStep/OpenCardStepTwoView';

class OpenCardStepTwoContainer extends Component {
    constructor(props) {
        super(props);
        this.state = {
            showDialog: true,
        }
        this.onHide = this.onHide.bind(this);
        this.handleClick = this.handleClick.bind(this);
    }

    componentDidMount() {
        const { dispatch } = this.props;
        dispatch(Actions);
    }

    onHide(){
        this.setState({
            showDialog: false,
        });
    }

    handleClick(){
        this.context.router.push('businessManagement/openCardStepOne/openCardStepTwo/openCardStepTwoPhotos');
    }

    render() {
        return (
            <div>
                <OpenCardStepTwoView
                    showDialog={this.state.showDialog}
                    onHide = {this.onHide}
                    handleClick={this.handleClick} />
                {this.props.children}
            </div>
        );
    }
}

OpenCardStepTwoContainer.propTypes = {
    dispatch: PropTypes.func.isRequired,

};

OpenCardStepTwoContainer.contextTypes = {
  router: React.PropTypes.object
};

function mapStateToProps(state) {
    const {  } = state;
    return {

    };
}

export default connect(mapStateToProps)(OpenCardStepTwoContainer);
