import {PublicTypes, MyCoinType} from "../actiontypes/index";

const initialState = {
    "PurseAddress": "",
    "Currency": 0,
    "Price": 1,
    "PlatformCount": 0,
    "IsOperable": false,
    "OperableMsg": "",
    "CurveData": []
}

/**
 * 响应reducer 接收action操作返回的值
 * @param {*} state
 * @param {*} action
 */
export default function MyCoinReducer(state = initialState, action) {
    switch (action.type) {
        case MyCoinType.QUERY_COIN_INFO:
            return {
                ...state,
                ...action.params
            }
        case PublicTypes.LOGOUT:
            return initialState
        default:
            return state;
    }
}