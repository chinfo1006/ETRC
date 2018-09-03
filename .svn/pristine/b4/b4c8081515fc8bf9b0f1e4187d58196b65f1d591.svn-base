'use strict';

import {MallTypes} from "../actiontypes/index";
import {mallUrl} from "../configs/Config";

const initialState = {
    url: mallUrl,
    mallDocument: 0,
}

export default function MallReducer(state = initialState, action) {
    switch (action.type) {
        case MallTypes.CHANGE_URL:
            let url = ''
            if (action.params) {
                url = action.params + "?sj=" + Math.random()
            } else {
                url = mallUrl + "?sj=" + Math.random()
            }
            return {
                ...state,
                url: url
            }
        case MallTypes.CHANGE_DOCUMENT:
            return {
                ...state,
                mallDocument: action.params,
                // url: action.params.url,
            }
        default:
            return state
    }
}