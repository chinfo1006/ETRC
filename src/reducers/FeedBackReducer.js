import {PublicTypes, FeedBackType} from "../actiontypes/index";

const initialState = {
    list: [],
    feedbackMessage: '',
    MobilePhone: '',
    pageIndex: 1,
}

/**
 * 响应reducer 接收action操作返回的值
 * @param {*} state
 * @param {*} action
 */
export default function FeedBackReducer(state = initialState, action) {
    switch (action.type) {
        case FeedBackType.QUERY_FEEDBACK_LIST:
            if (action.params.pageIndex == 1) {
                return {
                    ...state,
                    list: action.params.list,
                    page: 1
                }
            } else {
                let oldList = state.list
                return {
                    ...state,
                    list: oldList.concat(action.params.list),
                    page: action.params.pageIndex + 1
                }
            }
        case FeedBackType.INPUT_MOBILE_FEEDBACK:
            return {
                ...state,
                MobilePhone: action.params
            }
        case FeedBackType.INPUT_FEEDBACK:
            return {
                ...state,
                feedbackMessage: action.params
            }
        case  FeedBackType.INIT:
            return initialState
        case PublicTypes.LOGOUT:
            return initialState
        default:
            return state;
    }
}