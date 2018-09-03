'use strict';

import {CoinGiveRecordType} from '../actiontypes'
import {GetGiveWaterList,GetMyIETRCRecordUserList} from "../server/ServerApi";

export function queryCoinGiveRecord(pageIndex) {
    return dispatch => {
        GetGiveWaterList(pageIndex, (res) => {
            dispatch({
                type: CoinGiveRecordType.QUERY_COIN_GIVE_RECORD,
                params: {
                    ...res,
                    pageIndex: pageIndex
                }
            })
        })
    }
}


export function queryETRCRecord(pageIndex) {
    return dispatch => {
        GetMyIETRCRecordUserList(pageIndex, (res) => {
            dispatch({
                type: CoinGiveRecordType.QUERY_COIN_GIVE_RECORD,
                params: {
                    ...res,
                    pageIndex: pageIndex
                }
            })
        })
    }
}