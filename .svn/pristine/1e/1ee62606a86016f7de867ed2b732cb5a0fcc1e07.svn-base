/**
 * Created by Tloy on 2018/1/4.
 */


'use strict';

import {NavigationActions} from 'react-navigation';
import {passwordLoginApi} from "../server/ServerApi";
import {setToken} from "../utils/CacheUtil";
import RouteConfig from "../configs/RouteConfig";
import {queryUserInfo} from './MineAction'
import {HomeTabType, LoginTypes, PublicTypes, MallTypes} from "../actiontypes";
import {changeUrl} from "./MallAction";
import {mallUrl} from "../configs/Config";

/**
 *  方法描述: 处理用户输入用户名的操作
 *  作    者: 马军辉
 *  时    间: 2017-11-28
 *  参    数: 用户名
 */

export function inputUserName(userName) {
    return {
        type: LoginTypes.INPUT_USER_NAME,
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
        type: LoginTypes.INPUT_PASSWORD,
        params: psw,
    }
}

/**
 * 退出
 */
export function logout() {
    return dispatch => {
        setToken(null)
        dispatch({
            type: PublicTypes.LOGOUT,
        })
        dispatch({
            type: HomeTabType.CHANGE_TAB,
            params: 'home'
        })
        dispatch({
            type: MallTypes.CHANGE_URL,
            params: mallUrl
        })
    }
}

export function reLogin(navigation) {
    return dispatch => {
        dispatch(logout())
        navigation.dispatch(
            NavigationActions.reset({
                index: 1,
                actions: [
                    NavigationActions.navigate({routeName: RouteConfig.HomeTab.name}),
                    NavigationActions.navigate({routeName: RouteConfig.RegistAndLogin.name}),
                ]
            }))
    }
}


/**
 *  方法描述: 登录成功重置路由栈,根据角色跳转页面
 *  作    者: 马军辉
 *  时    间: 2017-11-28
 *  参    数:
 */
function loginSucess(res) {
    return getResetAction(RouteConfig.HomeTab.name)
}

function getResetAction(routeName) {
    return NavigationActions.reset({
        index: 0,
        actions: [
            NavigationActions.navigate({routeName: routeName})
        ]
    })

}