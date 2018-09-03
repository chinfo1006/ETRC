'use strict';

import {IosReviewType} from '../actiontypes/index'
import {IsPayment} from "../server/ServerApi";

export function queryIsPayment() {
    return dispatch => {
        IsPayment((res) => {
            dispatch({
                type: IosReviewType.QUERY_IS_PAYMENT,
                params: res
            })
        })
    }
}