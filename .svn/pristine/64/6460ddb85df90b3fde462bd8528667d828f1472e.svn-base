import {PublicTypes, LessonDetailType} from "../actiontypes/index";

const initialState = {
    detailInfo: {
        IsDelete: ''
    },
}

/**
 * 响应reducer 接收action操作返回的值
 * @param {*} state
 * @param {*} action
 */
export default function LessonDetailReducer(state = initialState, action) {
    switch (action.type) {
        case LessonDetailType.QUERY_LESSON_DETAIL:
            return {
                ...state,
                detailInfo: action.params
            }
        case PublicTypes.LOGOUT:
            return initialState
        default:
            return state;
    }
}