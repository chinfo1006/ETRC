/**
 * Created by Tloy on 2018/1/24.
 */

"use strict"

import {ModifyPayPwdType} from '../actiontypes'

/**
 * 处理用户输入密码的操作
 * @param userName
 * @returns {{type, param: *}}
 */
export function inputPsw(psw) {
    return {
        type: ModifyPayPwdType.INPUT_PSW,
        params: psw
    }
}

export function inputConfirmPsw(psw) {
    return {
        type: ModifyPayPwdType.INPUT_COM_PSW,
        params: psw
    }
}

export function inputUserName(user) {
    return {
        type: ModifyPayPwdType.INPUT_USER_NAME,
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
        type: ModifyPayPwdType.INPUT_SMS,
        params: smsCode
    }
}