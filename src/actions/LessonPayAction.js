'use strict';

import {LessonPayType} from "../actiontypes/index";
import {GetRechargePrompt} from "../server/ServerApi";

export function getRechargePrompt() {
    return dispatch => {
        GetRechargePrompt((res) => {
            dispatch({
                type: LessonPayType.QUERY_PLATFORM_ACOUNT_INFO,
                params: res
            })
        }, null, true)
    }
}

export function changePayType(type) {
    return {
        type: LessonPayType.CHANGEPAYTYPE,
        params: type
    }
}





