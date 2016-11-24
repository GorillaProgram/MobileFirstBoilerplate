/**
 * Created by MeePwn
 * https://github.com/maybewaityou
 */
import React, { Component, PropTypes } from 'react';
import NoInfoPanel from '../../../main/components/view/panel/NoInfoPanel';
import Just from '../../../main/context/Just';

class ProductDetailsView extends Component {

    constructor(props) {
        super(props);


    }

    detailsOrNoInfoPanel(detailsURL) {
        return (
            Just.isNull(detailsURL) ?
            <NoInfoPanel
                image='./static/imgs/defaultNoticeImage.png'
                title='查不到详情信息' /> :
            <img src={detailsURL} />
        );
    }

    render() {
        return (
            <div style={{...styles.container, ...this.props.style}}>
                {this.detailsOrNoInfoPanel(this.props.detailsURL)}
            </div>
        );
    }
}

const styles = {
    container: {
        display: 'flex',
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    },

};

ProductDetailsView.propTypes = {
    detailsURL: PropTypes.string.isRequired
};

export default ProductDetailsView;
