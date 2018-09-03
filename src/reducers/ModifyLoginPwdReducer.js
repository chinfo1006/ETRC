/**
 *  Created by majunhui on 2017/9/24
 */


'use strict';

import {ModifyLoginPwdType, PublicTypes} from '../actiontypes'

const initialState = {
    Mobile: "",
    Password: "",
    conPwd: "",
    VCode: ""
}

export default function modifyLoginPwdReducer(state = initialState, action) {
    switch (action.type) {
        case ModifyLoginPwdType.INPUT_PSW:
            return {
                ...state,
                Password: action.params
            }
        case ModifyLoginPwdType.INPUT_SMS:
            return {
                ...state,
                VCode: action.params
            }
        case ModifyLoginPwdType.INPUT_USER_NAME:
            return {
                ...state,
                Mobile: action.params
            }
        case ModifyLoginPwdType.INPUT_COM_PSW:
            return {
                ...state,
                conPwd: action.params
            }
        case PublicTypes.LOGOUT:
            return initialState
        default:
            return state;
    }
}
