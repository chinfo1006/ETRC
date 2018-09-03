/**
 *  Created by majunhui on 2017/9/23
 */


'use strict';

import {LoginTypes} from "../actiontypes/index";
import {PublicTypes} from "../actiontypes";

const initialState = {
    //13751366980
    //123123a
    //18749677862
    //  666666a
    username: "18749677862",
    password: "",
    //username:"YGjiayuan",
    //password:"123456 ",

}


export default function loginReducer(state = initialState, action) {
    switch (action.type) {
        case LoginTypes.INPUT_USER_NAME:
            return {
                ...state,
                username: action.params
            }

        case LoginTypes.INPUT_PASSWORD:
            return {
                ...state,
                password: action.params
            }
        case LoginTypes.CLEAR_DATA: //清空数据
            return {
                ...state,
                ...action.params,
            }
        case PublicTypes.LOGOUT:
            return initialState
        default:
            return state;
    }
}
