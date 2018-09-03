/**
 * Created by Tloy on 2018/2/1.
 */

'use strict';
import {GetMyRecommendUserList, GetMyIndirectRecommendUserList,GetMyThirdRecommendUserList} from "../server/ServerApi";
import {ShareRecordType} from "../actiontypes/index"

export function setTab(tab) {
    return {
        type: ShareRecordType.CHANGE_TAB,
        params: tab,
    }
}

export function queryRecommendList(pageIndex) {
    return dispatch => {
        GetMyRecommendUserList(pageIndex, (res) => {
            dispatch({
                type: ShareRecordType.QUERY_RECOMMEND_LIST,
                params: {
                    ...res,
                    page: pageIndex
                },
            })
        })
    }
}

export function queryIndirectRecommendList(pageIndex) {
    return dispatch => {
        GetMyIndirectRecommendUserList(pageIndex, (res) => {
            dispatch({
                type: ShareRecordType.QUERY_INDIRECT_RECOMMEND_LIST,
                params: {
                    ...res,
                    page: pageIndex
                },
            })
        })
    }
}


export function queryThirdRecommendList(pageIndex) {
    return dispatch => {
        GetMyThirdRecommendUserList(pageIndex, (res) => {
            dispatch({
                type: ShareRecordType.QUERY_THIRD_RECOMMEND_LIST,
                params: {
                    ...res,
                    page: pageIndex
                },
            })
        })
    }
}