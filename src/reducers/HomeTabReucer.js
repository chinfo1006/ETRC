/**
 * Created by Tloy on 2018/3/1.
 */

"use strict"

import {HomeTabType} from "../actiontypes/index";

const initialState = {
    selectTab:'home'
}

export default function homeTabReducer(state = initialState, action) {
    switch (action.type) {
        case HomeTabType.CHANGE_TAB:  //修改城市 信息
            return {
                ...state,
                selectTab: action.params,
            }
            case HomeTabType.GET_VERSION_INFO://reducer接收版本号 更新数据
            return {
                ...state,
                ...action.params,
            }
        default:
            return state;
    }

    
}

 
 