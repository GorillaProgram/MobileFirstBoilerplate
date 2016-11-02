import NetworkActions from './NetworkActions';
import NetworkUtility from '../../main/utilities/data/NetworkUtility';

const LoginActions = {
    validateTeller: (params) => {
        return dispatch => {
            dispatch(NetworkActions.requesting());
            return NetworkUtility.fetchDatas(params.adapter, params.procedure, params.parameters)
                .then((response) => {
                    dispatch(NetworkActions.received());
                    return dispatch(NetworkActions.receivedData(params, response));
                }, (error) => {
                    return dispatch(NetworkActions.error(params, error));
                });
        };
    },
    // validateTeller: (params) => {
    //     return dispatch => {
    //         dispatch(NetworkActions.requesting());
    //         return NetworkUtility.fetchDatas(params.adapter, params.procedure, params.parameters)
    //             .then((validateTellerResponse) => {
    //                 return dispatch(NetworkUtility.fetchDatas(params.adapter, params.procedure, params.parameters)
    //                     .then((loginAfterValidateTellerResponse) => {
    //                         return dispatch(NetworkUtility.fetchDatas(params.adapter, params.procedure, params.parameters)
    //                             .then((loginResponse) => {
    //                                 dispatch(NetworkActions.received());
    //                                 return dispatch(NetworkActions.receivedData(params, loginResponse));
    //                             }));
    //                     }));
    //             });
    //     };
    // },
    prevLogin: (params) => {
        return dispatch => {
            dispatch(NetworkActions.requesting());
            return NetworkUtility.fetchDatas(params.adapter, params.procedure, params.parameters)
                .then((response) => {
                    return dispatch(LoginActions.login(params, response));
                }, (error) => {
                    return dispatch(NetworkActions.error(params, error));
                });
        };
    },
    login: (params, prevResponse) => {
        return dispatch => {
            return NetworkUtility.fetchDatas(params.adapter, params.procedure, params.parameters)
                .then((response) => {
                    dispatch(NetworkActions.received());
                    return dispatch(NetworkActions.receivedData(params, response));
                }, (error) => {
                    return dispatch(NetworkActions.error(params, error));
                });
        }
    }
}

export default LoginActions;
