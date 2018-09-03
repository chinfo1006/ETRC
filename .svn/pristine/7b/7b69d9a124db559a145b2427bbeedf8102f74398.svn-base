/**
 * Created by Tloy on 2018/3/1.
 */

"use strict"

import {HomeTabType} from "../actiontypes/index";
import { GetVersionsInfo } from "../server/ServerApi";

//执行改变的操作 action触发 给reducer
export function changeTab(itemCode) {
    return {
        type: HomeTabType.CHANGE_TAB,
        params: itemCode
    }
}


//GetVersionsInfo
export function getVersionsInfo(params) {
    return dispatch=>{
        GetVersionsInfo(params, (res) => {
            dispatch({
                type: HomeTabType.GET_VERSION_INFO,
                params:res,
            })
        })
    }
}


 
 