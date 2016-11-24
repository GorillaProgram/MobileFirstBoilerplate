/**
 * Created by MeePwn
 * https://github.com/maybewaityou
 */
import React, { Component } from 'react';
import CommonStyles from '../../../main/constant/CommonStyle';
import Constant from '../../../main/constant/Constant';
import { TabGroup } from '../../../main/components/view/UIComponents';
import ProductDetailsView from '../components/ProductDetailsView';

class ProductView extends Component {

    constructor(props) {
        super(props);


    }

    render() {
        return (
            <div style={CommonStyles.homeRightContainer}>
                <div style={styles.container}>
                    <div style={styles.productListLayout}>
                        <TabGroup >
                            
                        </TabGroup>
                    </div>
                    <div style={styles.productDetailsLayout}>
                        <ProductDetailsView
                            style={styles.productDetails}
                            detailsURL="" />
                    </div>
                </div>
            </div>
        );
    }
}

const styles = {
    container: {
        display: 'flex',
        flexDirection: 'row',
        height: Constant.matchParent,
    },
    productListLayout: {
        flex: 1,
        marginRight: Constant.homeBlock,
        overflow: 'hidden',
    },
    productDetailsLayout: {
        flex: 1,
        backgroundColor: Constant.homePanelBackgroundColor,
        marginLeft: Constant.homeBlock,
        borderRadius: Constant.homeRadius,
        overflow: 'hidden',
        border: '1px solid #888888'
    },
    productDetails: {
        height: Constant.matchParent
    }

};

export default ProductView;
