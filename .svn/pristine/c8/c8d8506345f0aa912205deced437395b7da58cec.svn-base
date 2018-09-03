import {PublicTypes, LessonSearchType} from "../actiontypes/index";

const initialState = {
    searchList: [],
    isRefresh: false,
    searchKey: '',
    pageIndex: 1
}

/**
 * 响应reducer 接收action操作返回的值
 * @param {*} state
 * @param {*} action
 */
export default function LessonSearchReducer(state = initialState, action) {
    switch (action.type) {
        case LessonSearchType.INPUT_SEARCH_KEY:
            return {
                ...state,
                searchKey: action.params
            }
        case LessonSearchType.SEARCH_LESSON_BY_KEY:
            if (action.params.pageIndex == 1) {
                return {
                    ...state,
                    searchList: action.params.searchList,
                    isRefresh: false
                }
            } else {
                let oldList = action.searchList
                return {
                    ...state,
                    searchList: oldList.concat(action.params.searchList),
                    isRefresh: false,
                    pageIndex: action.params.pageIndex + 1
                }
            }
        case PublicTypes.LOGOUT:
            return initialState
        default:
            return state;
    }
}