/**
 * Created by Tloy on 2018/1/16.
 */

'use strict'
import {GetUserSetInfo, UpdateLogo, UpdateHeadImg} from "../server/ServerApi";
import {UserCenterType} from "../actiontypes/index";

import {toast} from '../utils/LogUtil';

export function getUserSetInfo(callback) {
    return dispatch => {
        GetUserSetInfo((res) => {
            console.log('res=' + JSON.stringify(res));
            callback && callback(res)
            dispatch({
                type: UserCenterType.GET_USER_SET_INFO,
                params: res
            })
        })
    }
}