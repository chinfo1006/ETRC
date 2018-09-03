/**
 * Created by Tloy on 2018/1/4.
 */

'use strict';

import {MineType} from "../actiontypes/index";
import {GetUserCenterInfo} from "../server/ServerApi";

//查询数据
export function queryUserInfo() {
    return dispatch => {
        GetUserCenterInfo((res) => {
            dispatch({
                type: MineType.QUERY_DATA,
                params: res
            })
        })
    }
}

export function browseNewMessage() {
    return {
        type: MineType.BROWSE_NEW_MESSAGE,
    }
}

