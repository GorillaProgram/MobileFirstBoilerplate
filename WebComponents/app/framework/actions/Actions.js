import NetworkActions from './NetworkActions';
import LoginActions from './LoginActions';

/* ============================= Action Type Start =============================== */
export const TEST = 'TEST';
export const DEFAULT = 'DEFAULT';
export const ADD = 'ADD';
export const SUBTRACT = 'SUBTRACT';
export const DELAY_ADD = 'DELAY_ADD';
export const DELAY_SUBTRACT = 'DELAY_SUBTRACT';
export const LOGIN = 'LOGIN';
export const VALIDATE_TELLER = 'VALIDATE_TELLER';
/* ============================= Action Type End =============================== */

/* ============================= Action Private Start =============================== */
function delayAddAction(item) {
    return {
        type: DELAY_ADD,
        item: item + 1
    };
}

function delaySubtractAction(item) {
    return {
        type: DELAY_SUBTRACT,
        item: item - 1
    };
}

function delay(func, second) {
    return dispatch => {
        new Promise((res, rej) => {
            res(setTimeout(func, second));
        });
    };
}
/* ============================= Action Private End =============================== */

/* ============================= Action Creator Start =============================== */
// login 相关Action
export function validateTeller(params) {
    return (dispatch) => {
        return dispatch(LoginActions.validateTeller(params));
    };
};

export function login(params) {
    return (dispatch) => {
        return dispatch(LoginActions.prevLogin(params));
    };
};

// login 相关Action

export function test(item) {
    return {
        type: TEST,
        payload: {
            item: item + 1
        }
    };
}

export function add(item) {
    return {
        type: ADD,
        item: item + 1
    };
}

export function subtract(item) {
    return {
        type: SUBTRACT,
        item: item - 1
    };
}

export function delayAdd(item, second) {
    return dispatch => {
        console.log('delayAdd');
        return dispatch(delay(delayAddAction(item), second));
    };
}

export function delaySubtract(item, second) {
    return dispatch => {
        console.log('delaySubtract');
        return dispatch(delay(delaySubtractAction(item), second));
    };
}
/* ============================= Action Creator End =============================== */
