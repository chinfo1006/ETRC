/**
 *  Created by majunhui on 2017/9/23
 */


'use strict';

import { RealNameVerifyType } from "../actiontypes/index";
import {PublicTypes} from "../actiontypes";

const initialState = {

    "UserName": "",  //真实姓名
    "IdNumber": "",
    "CardNumber": "",
    "BanKName": "",
    "BankId": "",
    "Provice": "",
    "City": "",
    "AreaCity": "",
    "ProviceName": "",
    "CityName": "",
    "AreaCityName": "",

    Password: '',

    idCardUrl: null,
    idCardReverseUrl: null,
    bankCardUrl: null,


    provicesList: [],
    citysList: [],
    areasList: [],
    bankList: [],

    currentBank: {
        "bankCode": "",
        "bankName": "请选择银行卡"
    },
    currentProvices: {
        "AreaId": "",
        "ParentId": "",
        "AreaCode": "",
        "AreaName": "选择省"
    },
    currentCity: {
        "AreaId": "",
        "ParentId": "",
        "AreaCode": "",
        "AreaName": "选择市"
    },
    currentArea: {
        "AreaId": "",
        "ParentId": "",
        "AreaCode": "",
        "AreaName": "选择区"
    },

    fromKey: ''
}

export default function realNameVerifyReducer(state = initialState, action) {
    switch (action.type) {
        case RealNameVerifyType.SET_ID_CARD_PIC:
            return {
                ...state,
                idCardUrl: action.params
            }
        case RealNameVerifyType.SET_ID_CARD_REVERSE_PIC:
            return {
                ...state,
                idCardReverseUrl: action.params
            }
        case RealNameVerifyType.SET_BANK_CARD_PIC:
            return {
                ...state,
                bankCardUrl: action.params
            }
        case RealNameVerifyType.SET_FROMKEY:
            return {
                ...state,
                fromKey: action.params
            }

        case RealNameVerifyType.INPUT_PWD:
            return {
                ...state,
                Password: action.params
            }
        case RealNameVerifyType.QUERY_BANK_LIST:
            return {
                ...state,
                bankList: action.params
            }
        case RealNameVerifyType.QUERY_PROVICE:
            return {
                ...state,
                provicesList: action.params
            }
        case RealNameVerifyType.QUERY_CITY:
            return {
                ...state,
                citysList: action.params
            }
        case RealNameVerifyType.QUERY_AREA:
            return {
                ...state,
                areasList: action.params
            }
        case RealNameVerifyType.SELECT_ID_CARD_PIC:
            return {
                ...state,
                idCardImage: action.params
            }
        case RealNameVerifyType.SELECT_PROVICE:
            return {
                ...state,
                currentProvices: action.params,
                currentCity: {
                    "AreaId": "",
                    "ParentId": "",
                    "AreaCode": "",
                    "AreaName": "请选择"
                },
                currentArea: {
                    "AreaId": "",
                    "ParentId": "",
                    "AreaCode": "",
                    "AreaName": "请选择"
                },
                citysList: [],
                areasList: []
            }
        case RealNameVerifyType.SELECT_CITY:
            return {
                ...state,
                currentCity: action.params,
                currentArea: {
                    "AreaId": "",
                    "ParentId": "",
                    "AreaCode": "",
                    "AreaName": "请选择"
                },
                areasList: []
            }
        case RealNameVerifyType.SELECT_AREA:
            return {
                ...state,
                currentArea: action.params
            }
        case RealNameVerifyType.SELECT_BANK:
            return {
                ...state,
                currentBank: action.params
            }
        case RealNameVerifyType.INPUT_NAME:
            return {
                ...state,
                UserName: action.params
            }
        case RealNameVerifyType.INPUT_ID:
            return {
                ...state,
                IdNumber: action.params
            }
        case RealNameVerifyType.INPUT_BANK_NO:
            return {
                ...state,
                CardNumber: action.params
            }

        case RealNameVerifyType.CLEAR_DATA:  //清空数据

             console.log('reducer实名认证第一步清空数据响应了');
            return {
                ...state,
                ...action.params,
            }
        case PublicTypes.LOGOUT:
            return initialState
        default:
            return state;
    }
}
