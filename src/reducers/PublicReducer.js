/**
 *  Created by majunhui on 2017/9/23
 */

'use strict';

import {PublicTypes} from "../actiontypes/index";

const initialState = {
    city: '深圳市',
    cityName:'深圳市',
}

export default function publicReducer(state = initialState, action) {
    switch (action.type) {
        case PublicTypes.CHANGE_CITY:
            return {
                ...state,
                city: action.params
            }
        case PublicTypes.LOGOUT:
            return initialState
        default:
            return state;
    }
}
