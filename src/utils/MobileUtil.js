"use strict";
import {
    Linking,
} from 'react-native';

const dismissKeyboard = require('dismissKeyboard')

/**
 *  方法描述: 调用拨号盘打电话
 *  作    者: 马军辉
 *  时    间: 2017-11-22
 *  参    数:
 */
export function call(tel) {
    Linking.openURL('tel:' + tel);
}

/**
 *  方法描述: 隐藏键盘
 *  作    者: 马军辉
 *  时    间: 2017-11-22
 *  参    数:
 */
export function hideKeyboard() {
    dismissKeyboard();
}
