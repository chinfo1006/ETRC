import {PublicTypes, LessonTabType} from "../actiontypes";

const allType = [
    {
        "Id": "",
        "Img": "",
        "TypeName": "全部"
    }
]

const initialState = {
    typeList: allType
}

/**
 * 响应reducer 接收action操作返回的值
 * @param {*} state
 * @param {*} action
 */
export default function lessonTabReducer(state = initialState, action) {
    switch (action.type) {
        case LessonTabType.QUERY_LESSON_TYPE:
            return {
                typeList: allType.concat(action.params)
            }
        case PublicTypes.LOGOUT:
            return initialState
        default:
            return state;
    }
}