/**
 * Created by Tloy on 2018/1/4.
 */


'use strict';

import { RealNameVerifyType } from '../actiontypes'
import { GetAreaList, GetBankList, VerifyDataStep1 } from "../server/ServerApi";

export function setFromKey(key) {
    return {
        type: RealNameVerifyType.SET_FROMKEY,
        params: key
    }
}

export function inputPwd(pwd) {
    return {
        type: RealNameVerifyType.INPUT_PWD,
        params: pwd
    }
}

export function setIdCardPic(url) {
    return ({
        type: RealNameVerifyType.SET_ID_CARD_PIC,
        params: url
    })
}

export function setIdCardReversePic(url) {
    return ({
        type: RealNameVerifyType.SET_ID_CARD_REVERSE_PIC,
        params: url
    })
}

export function setBankCardPic(url) {
    return ({
        type: RealNameVerifyType.SET_BANK_CARD_PIC,
        params: url
    })
}

export function realNameVerifyA(params) {
    VerifyDataStep1(params, () => {
    }, () => {
    })
}

export function realNameVerifyB(params) {
    VerifyDataStep1(params, () => {
    }, () => {
    })
}

export function realNameVerifyC(params) {
    VerifyDataStep1(params, () => {
    }, () => {
    })
}

export function getBankCardList() {
    return dispatch => {
        GetBankList((res) => {
            dispatch({
                type: RealNameVerifyType.QUERY_BANK_LIST,
                params: res
            })
        })
    }
}

export function getProviceList() {
    return dispatch => {
        GetAreaList("", (res) => {
            dispatch({
                type: RealNameVerifyType.QUERY_PROVICE,
                params: res
            })
        })
    }
}

export function getCityList(parentId) {
    return dispatch => {
        GetAreaList(parentId, (res) => {
            dispatch({
                type: RealNameVerifyType.QUERY_CITY,
                params: res
            })
        })
    }
}

export function getAreaList(parentId) {
    return dispatch => {
        GetAreaList(parentId, (res) => {
            dispatch({
                type: RealNameVerifyType.QUERY_AREA,
                params: res
            })
        })
    }
}

export function selectProvice(provice) {
    return {
        type: RealNameVerifyType.SELECT_PROVICE,
        params: provice
    }
}

export function selectCity(city) {
    return {
        type: RealNameVerifyType.SELECT_CITY,
        params: city
    }
}

export function selectArea(area) {
    return {
        type: RealNameVerifyType.SELECT_AREA,
        params: area
    }
}

export function selectBank(bank) {
    return {
        type: RealNameVerifyType.SELECT_BANK,
        params: bank
    }
}

export function inputName(name) {
    return {
        type: RealNameVerifyType.INPUT_NAME,
        params: name
    }
}

export function inputId(id) {
    return {
        type: RealNameVerifyType.INPUT_ID,
        params: id
    }
}

export function inputBankNo(bankNo) {
    return {
        type: RealNameVerifyType.INPUT_BANK_NO,
        params: bankNo
    }
}


export function clearData() {
    return {
        type: RealNameVerifyType.CLEAR_DATA,
        params: {
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
                "AreaName": "请选择"
            },
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

            fromKey: ''

        }
    }

}
