import {PublicTypes, CoinGiveType} from "../actiontypes/index";

const initialState = {
    giveCount: "",
    giveAdress: '',

    "UserGXBNum": 0,
    "MaxNum": 0,
    "MinNum": 0,
    "SellerPhone": "",

    giveAddressInfo: '',
    giveAddressTrue: false,
    transactionFee: 0.03
}

/**
 * 响应reducer 接收action操作返回的值
 * @param {*} state
 * @param {*} action
 */
export default function CoinGiveReducer(state = initialState, action) {
    switch (action.type) {
        case CoinGiveType.QUERY_TRANSACTION_FEE:
            return {
                ...state,
                transactionFee: action.params
            }
        case CoinGiveType.INPUT_GIVE_ADDRESS:
            if (action.params.length == 32) {
                return {
                    ...state,
                    giveAdress: action.params,
                }
            } else {
                return {
                    ...state,
                    giveAdress: action.params,
                    giveAddressTrue: false,
                    giveAddressInfo: ""
                }
            }
        case CoinGiveType.INPUT_GIVE_COUNT:
            return {
                ...state,
                giveCount: action.params
            }
        case CoinGiveType.QUERY_COIN_GIVE_INFO:
            return {
                ...state,
                ...action.params
            }
        case CoinGiveType.SCANQRCODE:
            console.log(action.params)
            return {
                ...state,
                ...action.params
            }
        case CoinGiveType.QUERY_GIVE_ADDRESS_INFO:
            return {
                ...state,
                ...action.params
            }
        case CoinGiveType.INIT:
        case PublicTypes.LOGOUT:
            return initialState
        default:
            return state;
    }
}