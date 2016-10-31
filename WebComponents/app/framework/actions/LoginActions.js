import NetworkActions from './NetworkActions';
import NetworkUtils from '../../main/utilities/NetworkUtils';

const LoginActions = {
    validateTeller: (params) => {
        return dispatch => {
            dispatch(NetworkActions.requesting());
            return NetworkUtils.fetchDatas(params.adapter, params.procedure, params.parameters)
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
    //         return NetworkUtils.fetchDatas(params.adapter, params.procedure, params.parameters)
    //             .then((validateTellerResponse) => {
    //                 return dispatch(NetworkUtils.fetchDatas(params.adapter, params.procedure, params.parameters)
    //                     .then((loginAfterValidateTellerResponse) => {
    //                         return dispatch(NetworkUtils.fetchDatas(params.adapter, params.procedure, params.parameters)
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
            return NetworkUtils.fetchDatas(params.adapter, params.procedure, params.parameters)
                .then((response) => {
                    return dispatch(LoginActions.login(params, response));
                }, (error) => {
                    return dispatch(NetworkActions.error(params, error));
                });
        };
    },
    login: (params, prevResponse) => {
        return dispatch => {
            return NetworkUtils.fetchDatas(params.adapter, params.procedure, params.parameters)
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
