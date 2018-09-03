/**
 *  Created by majunhui on 2017/9/23
 */


'use strict';

import {RegistTypes} from "../actiontypes/index";
import {PublicTypes} from "../actiontypes";

const initialState = {
    username: "",
    password: "",
    confirmPsw: "",
    code: "",
    recommand: '',
    checked:false,
}

export default function loginReducer(state = initialState, action) {
    switch (action.type) {
        case RegistTypes.INPUT_USERNAME:
            return {
                ...state,
                username: action.params
            }
        case RegistTypes.INPUT_PASSWORD:
            return {
                ...state,
                password: action.params
            }
        case RegistTypes.INPUT_CONFIRM_PASSWORD:
            return {
                ...state,
                confirmPsw: action.params
            }
        case RegistTypes.INPUT_CODE:
            return {
                ...state,
                code: action.params
            }
        case RegistTypes.INPUT_RECOMMAND:
            return {
                ...state,
                recommand: action.params
            }
        case RegistTypes.ON_CHECK_CHNAGE:
          return {
              ...state,
              checked:action.params,
          }

        case PublicTypes.LOGOUT:
            return initialState

        default:
            return state;
    }
}
