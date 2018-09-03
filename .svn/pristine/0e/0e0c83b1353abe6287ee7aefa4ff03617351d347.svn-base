/**
 *  Created by majunhui on 2017/9/24
 */


'use strict';

import {ModifyPayPwdType, PublicTypes} from '../actiontypes'

const initialState = {
    Mobile: "",
    Password: "",
    conPwd: "",
    VCode: ""
}

export default function modifyPayPwdReducer(state = initialState, action) {
    switch (action.type) {
        case ModifyPayPwdType.INPUT_PSW:
            return {
                ...state,
                Password: action.params
            }
        case ModifyPayPwdType.INPUT_SMS:
            return {
                ...state,
                VCode: action.params
            }
        case ModifyPayPwdType.INPUT_USER_NAME:
            return {
                ...state,
                Mobile: action.params
            }
        case ModifyPayPwdType.INPUT_COM_PSW:
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
