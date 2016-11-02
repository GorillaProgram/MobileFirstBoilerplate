/**
 * Created by MeePwn
 * https://github.com/maybewaityou
 */
import Just from '../../main/constant/Just';

export const REQUESTING = 'REQUESTING';
export const RECEIVED = 'RECEIVED';
export const ERROR = 'ERROR';

const NetworkActions = {
    requesting: () => {
        return {
            type: REQUESTING,
            payload: {}
        };
    },
    received: () => {
        return {
            type: RECEIVED,
            payload: {}
        };
    },
    error: (params, error) => {
        return {
            type: ERROR,
            payload: {
                params
            }
        };
    },
    receivedData: (params, response) => {
        return {
            type: params.actionType,
            payload: {
                response: response
            }
        };
    },
}

export default NetworkActions;
