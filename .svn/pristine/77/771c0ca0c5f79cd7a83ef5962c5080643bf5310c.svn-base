/**
 * Created by Tloy on 2018/2/1.
 */

'use strict';

import {PublicTypes, ShareRecordType} from "../actiontypes";

const initialState = {
    tab: 1,
    pageIndex: 1,
    pageIndexII: 1,
    pageIndexIII: 1,
    TotalCount: 0,
    TotalCountII: 0,
    TotalCountIII: 0,
    recordList: [],
    recordListII: [],
    recordListIII: [],
    freshing: false,
    hadMore: false,
    hadMoreII: false,
    hadMoreIII: false,
    firstLoad: true
}

export default function shareRecordReducer(state = initialState, action) {
    switch (action.type) {
        case ShareRecordType.QUERY_RECOMMEND_LIST:
            if (action.params.List.length == 0) {
                return {
                    ...state,
                    hadMore: false
                }
            }
            if (action.params.page == 1) {
                return {
                    ...state,
                    TotalCount: action.params.TotalCount,
                    recordList: action.params.List,
                    pageIndex: action.params.page,
                    hadMore: true,
                    firstLoad: false
                }
            } else {
                const list = state.recordList.concat(action.params.List)
                return {
                    ...state,
                    TotalCount: action.params.TotalCount,
                    recordList: list,
                    pageIndex: action.params.page,
                    hadMore: true
                }
            }
        case ShareRecordType.QUERY_INDIRECT_RECOMMEND_LIST:
            if (action.params.List.length == 0) {
                return {
                    ...state,
                    hadMoreII: false
                }
            }
            if (action.params.page == 1) {
                return {
                    ...state,
                    TotalCountII: action.params.TotalCount,
                    recordListII: action.params.List,
                    pageIndexII: action.params.page,
                    hadMoreII: true
                }
            } else {
                const list = state.recordListII.concat(action.params.List)
                return {
                    ...state,
                    TotalCountII: action.params.TotalCount,
                    recordListII: list,
                    pageIndexII: action.params.page,
                    hadMoreII: true
                }
            }

        case ShareRecordType.QUERY_THIRD_RECOMMEND_LIST:
            if (action.params.List.length == 0) {
                return {
                    ...state,
                    hadMoreIII: false
                }
            }
            if (action.params.page == 1) {
                return {
                    ...state,
                    TotalCountIII: action.params.TotalCount,
                    recordListIII: action.params.List,
                    pageIndexIII: action.params.page,
                    hadMoreIII: true
                }
            } else {
                const list = state.recordListIII.concat(action.params.List)
                return {
                    ...state,
                    TotalCountIII: action.params.TotalCount,
                    recordListIII: list,
                    pageIndexIII: action.params.page,
                    hadMoreIII: true
                }
            }
        case ShareRecordType.CHANGE_TAB:
            return {
                ...state,
                tab: action.params
            }
        case PublicTypes.LOGOUT:
            return initialState
        default:
            return state;
    }
}