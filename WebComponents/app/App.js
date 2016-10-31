import React, { Component } from 'react';
import { Router, Route, Link, IndexRoute, Redirect, hashHistory } from 'react-router';
import { Button, Form, FormGroup, ControlLabel, FormControl } from 'react-bootstrap';
import HomeLeftTabs from './home/components/HomeLeftTabs';
import HomeLogoContainer from './home/container/HomeLogoContainer';
import HomeContainer from './home/container/HomeContainer';
import ProductionContainer from './production/container/ProductionContainer';
import BusinessManagementContainer from './businessManagement/container/BusinessManagementContainer';
import CommonToolsContainer from './commonTools/container/CommonToolsContainer';
import HomeUserInfoContainer from './home/container/HomeUserInfoContainer';
import OpenCardStepOneContainer from './businessManagement/container/openCardStep/OpenCardStepOneContainer';
import OpenCardStepTwoContainer from './businessManagement/container/openCardStep/OpenCardStepTwoContainer';
import OpenCardStepTwoPhotosContainer from './businessManagement/container/openCardStep/OpenCardStepTwoPhotosContainer';
import OpenCardStepThreeContainer from './businessManagement/container/openCardStep/OpenCardStepThreeContainer';
import CardActiveContainer from './businessManagement/container/cardActive/CardActiveContainer';
import ContractChangeContainer from './businessManagement/container/contractChange/ContractChangeContainer';
import LoginContainer from './main/login/container/LoginContainer';
import ContractChangePhotosContainer from './businessManagement/container/contractChange/ContractChangePhotosContainer';
import ContractApplyContainer from './businessManagement/container/contractApply/ContractApplyContrainer';
import ContractApplyPhotosContainer from './businessManagement/container/contractApply/ContractApplyPhotosContrainer';
import ContractApplyDetailContainer from './businessManagement/container/contractApply/ContractApplyDetailContrainer';

import NetworkUtils from './main/utilities/NetworkUtils';
import Dimensions from './main/utilities/Dimensions';

class App extends Component {
    constructor(props) {
        super(props);


    }

    render() {
        return (
            <Router history={hashHistory}>
                <Route path="/" component={HomeLeftTabs}>
                    <IndexRoute component={HomeContainer} />
                    <Route path="logo" component={HomeLogoContainer}></Route>
                    <Route path="login" component={LoginContainer}></Route>
                    <Route path="production" component={ProductionContainer}></Route>
                    <Route path="businessManagement" component={BusinessManagementContainer}>
                        <Route path="openCardStepOne" component={OpenCardStepOneContainer}>
                            <Route path="openCardStepTwo" component={OpenCardStepTwoContainer}>
                                <Route path="openCardStepTwoPhotos" component={OpenCardStepTwoPhotosContainer}>
                                    <Route path="openCardStepThree" component={OpenCardStepThreeContainer}>
                                    </Route>
                                </Route>
                            </Route>
                        </Route>
                        <Route path="cardActive" component={CardActiveContainer}></Route>
                        <Route path="contractApply" component={ContractApplyContainer}>
                            <Route path="takePhotos" component={ContractApplyPhotosContainer}>
                                <Route path="contractApplyDetail" component={ContractApplyDetailContainer}></Route>
                            </Route>
                        </Route>
                        <Route path="contractChange" component={ContractChangeContainer}>
                            <Route path="takePhotos" component={ContractChangePhotosContainer}></Route>
                        </Route>
                    </Route>
                    <Route path="commonTools" component={CommonToolsContainer}></Route>
                    <Route path="userInfo" component={HomeUserInfoContainer}></Route>
                </Route>
            </Router>
        );
    }
}

const styles = {
    container: {
        position: 'fixed', top: 0, left: 0, right: 0, bottom: 0,
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'space-around',
        backgroundColor: 'blue'
    }
};

export default App;
