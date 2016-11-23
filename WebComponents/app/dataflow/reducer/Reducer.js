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
    SHOW_INDEX_INFO,
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

function showIndex(state = {
    adModels: [],
    noticeModels: [],
    productModels: []
}, action) {
    switch (action.type) {
    case SHOW_INDEX_INFO:
        Just.log('===== SHOW_INDEX_INFO =====');
        return {
            ...state,
            adModels: [
                {
                    image: 'http://10.240.90.214:7001/padServer/padimages/home/20161117144525120.png',
                    url: 'http://www.baidu.com'
                },
                {
                    image: 'http://10.240.90.214:7001/padServer/padimages/home/20161122100055000.png',
                    url: 'http://www.taobao.com'
                }
            ],
            noticeModels: [
                {
                    title: '中大奖'
                },
                {
                    title: 'ssr'
                },
                {
                    title: 'hahaha'
                },
                {
                    title: '新消息'
                }
            ],
            productModels: [
                {
                    image: 'http://10.240.90.214:7001/padServer/padimages/home/20161122100055000.png',
                    content: [
                        {
                            des: '名称',
                            text: '白金卡'
                        },
                        {
                            des: '简介',
                            text: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.'
                        }
                    ]
                },
                {
                    image: 'http://10.240.90.214:7001/padServer/padimages/home/20161117144525120.png',
                    content: [
                        {
                            des: '名称',
                            text: '白金卡'
                        },
                        {
                            des: '简介',
                            text: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.'
                        }
                    ]
                }
            ]
            // adModels: action.payload.response.list1.filter((item) => {
            //     return item.TYPE === 'carousel';
            // })
            // .map((item) => {
            //     return {
            //         image: item.IMG_URL,
            //         url: item.TO_URL
            //     };
            // }),
            // noticeModels: action.payload.response.list2.map((item) => {
            //     return {
            //         type: item.MESSAGE_TYPE,
            //         title: item.MESSAGE_TITLE,
            //         content: item.MESSAGE_CONTENT
            //     };
            // }),
            // productModels: action.payload.response.list1.filter((item) => {
            //     return item.TYPE === 'hot';
            // })
            // .map((item) => {
            //     return {
            //         image: item.IMG_URL,
            //         content: [
            //             {
            //                 des: '名称',
            //                 text: item.CONTENT_NAME
            //             },
            //             {
            //                 des: '简介',
            //                 text: item.CONTENT_DESC
            //             }
            //         ]
            //     };
            // })
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
    showIndex,
    login,
    network
});

export default rootReducer;
