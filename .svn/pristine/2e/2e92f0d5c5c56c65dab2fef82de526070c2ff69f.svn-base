/**
 *  Created by majunhui on 2017/9/23
 */


'use strict';

import {PublicTypes, UserCenterType} from "../actiontypes";

const initialState = {

    userSetInfo: {
        "RealName": "",
        "CardNo": "",
        "PhoneNumber": "",
        "IsReal": "",
        "BankNumber": "",
        "AccountName": "",
        "UserBankId": "",
        'merchantLogo': '',
        queryData: false
    }
}

export default function userCenterReducer(state = initialState, action) {
    switch (action.type) {
        case UserCenterType.GET_USER_SET_INFO:
            return {
                ...state,
                userSetInfo: action.params,
                queryData: true
            }
        case UserCenterType.ON_UPLOAD_SUCCESS://上传成功

            console.log(action.params);
            return {
                ...state,
                merchantLogo: action.params,
            }
            break;
        case PublicTypes.LOGOUT:
            return initialState
        default:
            return state;
    }
}
