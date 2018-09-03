/**
 * Created by Tloy on 2018/3/1.
 */

"use strict"

import {IosReviewType} from "../actiontypes/index";

const initialState = {
    IsPayment: true
}

export default function iosReviewReducer(state = initialState, action) {
    switch (action.type) {
        case IosReviewType.QUERY_IS_PAYMENT:  //修改城市 信息
            return {
                ...state,
                IsPayment: action.params,
            }
        default:
            return state;
    }
}

 
 