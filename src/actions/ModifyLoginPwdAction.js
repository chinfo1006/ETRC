/**
 * Created by Tloy on 2018/1/24.
 */

"use strict"

import {ModifyLoginPwdType} from '../actiontypes'

/**
 * 处理用户输入密码的操作
 * @param userName
 * @returns {{type, param: *}}
 */
export function inputPsw(psw) {
    return {
        type: ModifyLoginPwdType.INPUT_PSW,
        params: psw
    }
}

export function inputConfirmPsw(psw) {
    return {
        type: ModifyLoginPwdType.INPUT_COM_PSW,
        params: psw
    }
}

export function inputUserName(user) {
    return {
        type: ModifyLoginPwdType.INPUT_USER_NAME,
        params: user
    }
}

/**
 * 验证码
 * @param userName
 * @returns {{type, param: *}}
 */
export function inputCode(smsCode) {
    return {
        type: ModifyLoginPwdType.INPUT_SMS,
        params: smsCode
    }
}