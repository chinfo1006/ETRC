/**
 *  Created by majunhui on 2017/9/23
 */

'use strict';

import {MineType, PublicTypes} from "../actiontypes";

const initialState = {
    fresh: false,
    userInfo: {
        HadNewMessage: false,
        HadShop: false,
        HeadImg: "",
        IsReal: false,
        //和兴元
        QianQiuBi: "0",
        //ETRC
        QianQiuDou: "0",
        QianQiuQuan: "0",
        RecommandTel: "",
        RecommandUrl: "",
        ShopCurrentSaleMoney: "0",
        ShopId: "",
        ShopName: "",
        ShopStatus: "",
        UserId: "",
        UserIdentity: "",
        UserName: "",
        UserPhone: " ",
        //昨日奖励
        RewardCurremcy: '0',
        CreateDate: '',
        //推荐人数
        RecommenderCount: '0',

        PurseAddress: "",
        Currency: 0,          //可用ETRC
        FrozenCount: 0,      // 冻结ETRC
        Identification: '', //等级
        ConchQuantity:"",  //贝壳数量
    }
}

/**
 * @param {*} state
 * @param {*} action
 */
export default function mineReducer(state = initialState, action) {
    switch (action.type) {
        case MineType.QUERY_DATA:
            return {
                ...state,
                userInfo: action.params,
            }
        case MineType.BROWSE_NEW_MESSAGE:
            return {
                ...state,
                userInfo: {
                    ...state.userInfo,
                    HadNewMessage: false
                },
            }
        case PublicTypes.LOGOUT:
            return initialState
        default:
            return state;
    }
}
