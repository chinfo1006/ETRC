/**
 * Created by Tloy on 2018/1/4.
 */


'use strict';

import { RegistTypes } from "../actiontypes/index";
import { Register } from "../server/ServerApi";
import RouteConfig from "../configs/RouteConfig";
import {toast} from "../utils/LogUtil";

/**
 *  方法描述: 处理用户输入用户名的操作
 *  作    者: 马军辉
 *  时    间: 2017-11-28
 *  参    数: 用户名
 */
export function inputUserName(userName) {

    
    return {
        type: RegistTypes.INPUT_USERNAME,
        params: userName
    }
}

/**
 *  方法描述: 处理用户输入密码的操作
 *  作    者: 马军辉
 *  时    间: 2017-11-28
 *  参    数: 密码
 */
export function inputPsw(psw) {
    return {
        type: RegistTypes.INPUT_PASSWORD,
        params: psw,
    }
}

export function inputConfirmPsw(psw) {
    return {
        type: RegistTypes.INPUT_CONFIRM_PASSWORD,
        params: psw,
    }
}

export function inputCode(code) {
    return {
        type: RegistTypes.INPUT_CODE,
        params: code,
    }
}

export function inputRecommand(phone) {
    return {
        type: RegistTypes.INPUT_RECOMMAND,
        params: phone,
    }
}

export function userRegist(params, navigation) {
    return dispatch => {
        Register(params, () => {
            toast("注册成功")
            navigation.goBack()
            // navigation.navigate(RouteConfig.RegistAndLogin.name)
        })
    }
}


/**
 * checkBox选中事件
 */
export function onCheckChange(checked) {
    
    return {
        type: RegistTypes.ON_CHECK_CHNAGE,
        params:checked,
    }
      
}