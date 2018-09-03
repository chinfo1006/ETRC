/**
 * Created by Tloy on 2018/1/6.
 */

'use strict';
import {PublicTypes} from "../actiontypes/index";

export function changeCity(city) {
    return  {
        type: PublicTypes.CHANGE_CITY,
        params: city
    }
}

export function initData() {
    return {
        type: PublicTypes.INIT
    }
}

