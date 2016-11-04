/**
 * Created by MeePwn
 * https://github.com/maybewaityou
 */
import NetworkActions from './NetworkActions';
import Just from '../../main/constant/Just';

const LoginActions = {
    validateTeller: (params) => {
        return dispatch => {
            dispatch(NetworkActions.requesting());
            return Just.silenceTask(params.adapter, params.procedure, params.parameters)
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
    //         return Just.silenceTask(params.adapter, params.procedure, params.parameters)
    //             .then((validateTellerResponse) => {
    //                 return dispatch(Just.silenceTask(params.adapter, params.procedure, params.parameters)
    //                     .then((loginAfterValidateTellerResponse) => {
    //                         return dispatch(Just.silenceTask(params.adapter, params.procedure, params.parameters)
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
            return Just.silenceTask(params.adapter, params.procedure, params.parameters)
                .then((response) => {
                    return dispatch(LoginActions.login(params, response));
                }, (error) => {
                    return dispatch(NetworkActions.error(params, error));
                });
        };
    },
    login: (params, prevResponse) => {
        return dispatch => {
            return Just.silenceTask(params.adapter, params.procedure, params.parameters)
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
