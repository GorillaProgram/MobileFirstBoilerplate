/**
 * Created by MeePwn
 * https://github.com/maybewaityou
 */
import React, { Component } from 'react';
import CommonStyles from '../../../main/constant/CommonStyle';
import Constant from '../../../main/constant/Constant';
import { Tab, TabGroup } from '../../../main/components/view/UIComponents';
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
                        <TabGroup style={styles.tabGroup} >
                            <Tab
                                title="全部"
                                isSelected={true}
                                style={styles.tab} />
                            <Tab
                                title="理财"
                                isSelected={false}
                                style={styles.tab} />
                            <Tab
                                title="基金"
                                isSelected={false}
                                style={styles.tab} />
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
    tabGroup: {
        backgroundColor: 'blue'
    },
    tab: {
        flex: 1,
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
