'use strict';

import {FeedBackType} from '../actiontypes/index'
import {FeedbackGetList} from "../server/ServerApi";

export function inputMobile(mobile) {
    return {
        type: FeedBackType.INPUT_MOBILE_FEEDBACK,
        params: mobile
    }
}

export function inputFeedback(feedback) {
    return {
        type: FeedBackType.INPUT_FEEDBACK,
        params: feedback
    }
}

export function init() {
    return {
        type: FeedBackType.INIT,
    }
}


export function queryFeedbackList(pageIndex) {
    return dispatch => {
        FeedbackGetList(pageIndex, (res) => {
            dispatch({
                type: FeedBackType.QUERY_FEEDBACK_LIST,
                params: {
                    list: res,
                    pageIndex: pageIndex
                }
            })
        })
    }
}