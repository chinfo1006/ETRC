import {PublicTypes, CoinGiveRecordType} from "../actiontypes/index";

const initialState = {
    pageIndex: 1,
    hadMore: true,
    freshing: false,

    "ExchangeCount": 0,  //赠送数量
    "GiveCount": 0,    //获赠数量
    "List": [],
}

/**
 * 响应reducer 接收action操作返回的值
 * @param {*} state
 * @param {*} action
 */
export default function CoinGiveRecordReducer(state = initialState, action) {
    switch (action.type) {
        case CoinGiveRecordType.QUERY_COIN_GIVE_RECORD:
            if (action.params.List.length == 0) {
                return {
                    ...state,
                    hadMore: false,
                }
            }
            if (action.params.pageIndex == 1) {
                return {
                    ...state,
                    ...action.params,
                    pageIndex: 2,
                    hadMore: true
                }
            }
            const oldList = state.List
            return {
                ...state,
                List: oldList.concat(action.params.List),
                pageIndex: action.params.pageIndex + 1,
                hadMore: true
            }
        case PublicTypes.LOGOUT:
            return initialState
        default:
            return state;
    }
}