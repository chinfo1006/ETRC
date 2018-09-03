/**
 *  Created by majunhui on 2017/9/25
 */

"use strict";

import {hex_md5, b64_md5, str_md5, hex_hmac_md5, b64_hmac_md5, str_hmac_md5} from './MD5Util'

/**
 *  方法描述: get请求的参数拼接
 *  作    者: 马军辉
 *  时    间: 2017-11-24
 *  参    数: map对象
 */
export function getParam(params) {
    let param = "";
    for (var x in params) {
        param = param + x + "=" + params[x] + "&";
    }
    return param
}

/**
 *  方法描述: 获取接口加密参数
 *  作    者: 马军辉
 *  时    间: 2017-11-24
 *  参    数:
 */
export function getStringMd5(map) {
    const sMap = sortMap(map)
    let string = "";
    for (var x in sMap) {
        string = string + x.toLowerCase() + "=" + sMap[x] + "&";
    }
    string = string + "md5key=DAc33KJ3c89e4335fG9b8Da5Rb1f9a"
    return hex_md5(string).toUpperCase()
}

/**
 *  方法描述: 对map对象按照键的值进行排序
 *  作    者: 马军辉
 *  时    间: 2017-11-24
 *  参    数:
 */
function sortMap(map) {
    var keys = Object.keys(map).sort();
    var newMap = {};//创建一个新的对象，用于存放排好序的键值对
    for (var i = 0; i < keys.length; i++) {//遍历newkey数组
        newMap[keys[i]] = map[keys[i]];//向新创建的对象中按照排好的顺序依次增加键值对
    }
    return newMap;//返回排好序的新对象
}

