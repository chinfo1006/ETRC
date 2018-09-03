import {PublicTypes, LessonPayType} from "../actiontypes/index";

const initialState = {
    promptList: [],
    payType: 'alipay'
}

/**
 * 响应reducer 接收action操作返回的值
 * @param {*} state
 * @param {*} action
 */
export default function LessonPayReducer(state = initialState, action) {
    switch (action.type) {
        case LessonPayType.QUERY_PLATFORM_ACOUNT_INFO:
            return {
                ...state,
                promptList: action.params
            }
        case LessonPayType.CHANGEPAYTYPE:
            return {
                ...state,
                payType: action.params
            }
        case PublicTypes.LOGOUT:
            return initialState
        default:
            return state;
    }
}