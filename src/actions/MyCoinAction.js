'use strict';

import {GetCoinInfo} from "../server/ServerApi";
import {MyCoinType} from "../actiontypes";

export function queryCoinInfo() {
    return dispatch => {
        GetCoinInfo((res) => {
            console.log(res)
            dispatch({
                type: MyCoinType.QUERY_COIN_INFO,
                params: res
            })
        })
    }
}