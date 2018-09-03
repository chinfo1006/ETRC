/**
 * Created by Tloy on 2018/1/4.
 */

'use strict';
import {MallTypes} from "../actiontypes";

export function changeUrl(url) {
    console.log('changeUrl = ' + url)
    return {
        type: MallTypes.CHANGE_URL,
        params: url
    }
}

export function changeDocument(document) {
    return {
        type: MallTypes.CHANGE_DOCUMENT,
        params: document
    }
}

