'use strict';

import {LessonTabType} from '../actiontypes'
import {GetProductTypeList} from "../server/ServerApi";


export function queryLessonType() {
    return dispatch => {
        GetProductTypeList({size: 0}, (res) => {
            dispatch({
                type: LessonTabType.QUERY_LESSON_TYPE,
                params: res.datas
            })
        })
    }
}