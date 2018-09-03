'use strict';

import {LessonDetailType} from '../actiontypes/index'
import {GetProductDetail, IsPayment} from "../server/ServerApi";

export function queryLessonDetail(params) {
    return dispatch => {
        GetProductDetail(params, (res) => {
            dispatch({
                type: LessonDetailType.QUERY_LESSON_DETAIL,
                params: res
            })
        })
    }
}