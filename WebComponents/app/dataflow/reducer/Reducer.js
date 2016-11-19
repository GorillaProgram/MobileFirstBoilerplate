/**
 * Created by MeePwn
 * https://github.com/maybewaityou
 */
import { combineReducers } from 'redux';
import Just from '../../main/context/Just';
import {
    REQUESTING,
    RECEIVED,
    ERROR,
} from '../actions/NetworkActions';
import {
    VALIDATE_TELLER,
    LOGIN,
    TEST, ADD, SUBTRACT
} from '../actions/Actions';

function test(state = {
    item: 0
}, action) {
    switch (action.type) {
    case TEST:
        Just.log('======>>>>> TEST');
        return {
            ...state,
            item: action.payload.item
        };
    default:
        return state;
    }
}

function login(state = {
    shouldShowPasswordLayout: false,
    validateResponse: {},
    bsadata: {},
    RSD: -1,
    orgCode: '',
    loginResponse: {}
}, action) {
    switch (action.type) {
    case VALIDATE_TELLER:
        Just.log('===== VALIDATE_TELLER =====');
        return {
            ...state,
            validateResponse: action.payload.response,
            responseJSON: action.payload.response.responseJSON,
            bsadata: action.payload.response.responseJSON.bsadata,
            RSD: action.payload.response.responseJSON.bsadata.RSD,
            orgCode: action.payload.response.responseJSON.bsadata.orgCode,
            shouldShowPasswordLayout: action.payload.response.responseJSON.bsadata.RSD === 1, // 登录方式 1密码 2指纹
        };
    case LOGIN:
        Just.log('===== LOGIN =====');
        return {
            ...state,
            loginResponse: action.payload.response,
        };
    default:
        return state;
    }
}

function network(state = {
    isFetching: false,
    params: {}
}, action) {
    switch (action.type) {
    case REQUESTING:
        Just.log('===== REQUESTING =====');
        return {
            ...state,
            isFetching: true,
        };
    case RECEIVED:
        Just.log('===== RECEIVED =====');
        return {
            ...state,
            isFetching: false,
        };
    case ERROR:
        Just.log('===== ERROR =====');
        return {
            ...state,
            isFetching: false,
            params: action.payload.params
        };
    default:
        return state;
    }
}

function calculate(state = {
    item: 0
}, action) {
    switch (action.type) {
    case ADD:
        Just.log('======>>>>> ADD');
        return {
            ...state,
            item: action.item
        };
    case SUBTRACT:
        Just.log('======>>>>> SUBTRACT');
        return {
            ...state,
            item: action.item
        };
    default:
        return state;
    }
}

const rootReducer = combineReducers({
    calculate,
    test,
    login,
    network
});

export default rootReducer;
