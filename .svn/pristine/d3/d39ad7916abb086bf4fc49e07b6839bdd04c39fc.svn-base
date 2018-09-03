'use strict';

import {LessonSearchType} from '../actiontypes'
import {GetSearchProductByKey} from "../server/ServerApi";

export function inputSearchKey(key) {
    return {
        type: LessonSearchType.INPUT_SEARCH_KEY,
        params: key
    }
}

/**
 * @param {搜索课程} params
 */
export function searchLessonByKey(params) {
    return dispatch => {
        GetSearchProductByKey(params, res => {
            dispatch({
                type: LessonSearchType.SEARCH_LESSON_BY_KEY,
                params: {
                    searchList: res.datas,
                    pageIndex: params.pageIndex,
                },
            });
        });
    };
}