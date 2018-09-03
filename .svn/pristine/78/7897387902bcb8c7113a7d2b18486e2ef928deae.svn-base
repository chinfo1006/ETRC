/**
 * Created by Tloy on 2017/5/18.
 * 网络请求的实现
 */

"use strict";
import {log, toast} from '../utils/LogUtil'
import Toast from 'antd-mobile-rn/lib/toast'
import fetch from './react-native-fetch-polyfill'

const REQUESTIMEOUT = 20 * 1000   // 网络超时时间
const UPLOADTIMEOUT = 120 * 1000   // 上传超时时间

/**
 *  方法描述: 判断是否有网络
 */
function checkNet() {
    // console.log(NetInfo)
    // console.log(NetInfo.isConnected)
    // if (NetInfo.isConnected) {
    return true
    // }
    // toast("数据已断开连接，请连接网络重新登录")
    // return false
}

function checkType(responseJson) {
    return responseJson.type == 1
}

/**
 * 登录状态判断
 */
function checkLogin(responseJson) {   // "Message": "已拒绝为此请求授权。"
    if (responseJson.Message == '已拒绝为此请求授权。') {  //  token  校验失败
        //  再这里做退出登录处理
        global.reLogin()
        return false
    }
    return true
}

/**
 *  post 请求封装，
 * @param url   请求地址
 * @param data  请求参数
 * @param onSuccess  成功回调
 * @param onFailed   失败回调
 * @param notShowLoading  不显示加载框 （默认显示）
 * @param loadMsg         加载框提示文字 （默认显示 加载中...）
 * @param connottTouch    加载框是否不能手动取消，默认能
 */
export function postJson(url, data, onSuccess, onFailed, notShowLoading, loadMsg, connotTouch) {
    if (!checkNet()) {
        return
    }
    if (!notShowLoading) {
        Toast.loading(loadMsg || "加载中...", null, null, connotTouch)
    }
    var fetchOptions = {
        method: 'POST',
        timeout: REQUESTIMEOUT,
        body: JSON.stringify(data),
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json',
            "Authorization": global.token ? `BasicAuth ${global.token}` : ""
        },
    };
    fetch(url, fetchOptions).then((response) => response.json()).then((responseJson) => {
        log('======================postJson--' + url);
        log('======================param--' + fetchOptions.body)
        log('======================response--' + JSON.stringify(responseJson))
        Toast.hide()
        if (!checkLogin(responseJson)) return
        if (checkType(responseJson)) {   //请求成功回调 onSuccess
            console.log("onSuccess")
            onSuccess(responseJson.resultdata)
        } else {     //请求失败回调 onFailed
            if (onFailed) {
                onFailed(responseJson)
            } else {
                toast(responseJson.message)
            }
        }

    }).catch((error) => {
        console.log('error');
        //toast('网络请求失败,请稍后再试!');
        Toast.hide()
        log('======================' + url + '--' + error);
    });
}

/**
 *  post 请求封装，
 * @param url   请求地址
 * @param data  请求参数
 * @param onSuccess  成功回调
 * @param onFailed   失败回调
 * @param notShowLoading  不显示加载框 （默认显示）
 * @param loadMsg         加载框提示文字 （默认显示 加载中...）
 * @param connottTouch    加载框是否不能手动取消，默认能
 */
export function postShowAllJson(url, data, onSuccess, onFailed, notShowLoading, loadMsg, connotTouch) {
    if (!checkNet()) {
        return
    }
    if (!notShowLoading) {
        Toast.loading(loadMsg || "加载中...", null, null, connotTouch)
    }
    var fetchOptions = {
        method: 'POST',
        timeout: REQUESTIMEOUT,
        body: JSON.stringify(data),
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json',
            "Authorization": global.token ? `BasicAuth ${global.token}` : ""
        },
    };
    fetch(url, fetchOptions).then((response) => response.json()).then((responseJson) => {
        log('======================postJson--' + url);
        log('======================param--' + JSON.stringify(fetchOptions.body))
        log('======================response--' + JSON.stringify(responseJson))
        Toast.hide()
        if (!checkLogin(responseJson)) return
        if (checkType(responseJson)) {   //请求成功回调 onSuccess
            onSuccess(responseJson)
        } else {     //请求失败回调 onFailed
            toast(responseJson.message)
            onFailed && onFailed(responseJson)
        }

    }).catch((error) => {
        Toast.hide()
        log('======================' + url + '--' + error);
    });
}

/**
 * Get请求
 * @param {*} url
 * @param {*} onSuccess
 * @param {*} onFailed
 * @param {*} notShowLoading
 */
export function getJson(url, onSuccess, onFailed, notShowLoading, loadMsg, connotTouch) {
    if (!checkNet()) {
        return;
    }
    if (!notShowLoading) {
        Toast.loading(loadMsg || "加载中...", null, null, connotTouch)
    }
    var fetchOptions = {
        method: 'GET',
        timeout: REQUESTIMEOUT,
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json',
            "Authorization": global.token ? `BasicAuth ${global.token}` : ""
        },
    };
    fetch(url, fetchOptions).then((response) => {
        return response.json()
    }).then((responseJson) => {
        log('======================getJson--' + url);
        log('======================response--' + JSON.stringify(responseJson))
        Toast.hide();
        if (!checkLogin(responseJson)) return
        if (checkType(responseJson)) {   //请求成功回调 onSuccess
            onSuccess(responseJson.resultdata);
        } else {     //请求失败回调 onFailed
            onFailed && onFailed(responseJson)
        }
    }).catch((error) => {
        console.log(error)
        Toast.hide()
    });
}

export function uploadImage(url, image, onSuccess, onFailed) {
    if (!checkNet()) {
        return
    }
    let formData = new FormData()   //data:image/png;base64,iVBORw0KGgoAAAANSUhE
    formData.append('file', `data:${image.mime};base64,${image.data}`)
    var fetchOptions = {
        method: 'POST',
        timeout: UPLOADTIMEOUT,
        headers: {
            'Accept': 'application/json',
            "Authorization": global.token ? `BasicAuth ${global.token}` : ""
        },
        body: formData,
    };
    fetch(url, fetchOptions).then((response) => {
        return response.json()
    }).then((responseJson) => {
        log('======================uploadImage--' + url);
        log('======================response--' + JSON.stringify(responseJson))
        if (!checkLogin(responseJson)) return
        if (checkType(responseJson)) {   //请求成功回调 onSuccess
            onSuccess(responseJson.resultdata)
        } else {     //请求失败回调 onFailed
            onFailed && onFailed(responseJson)
        }
    }).catch((error) => {
        console.log(error);
        log('======================' + url + '--' + error);
        toast("上传失败")
        onFailed(error)
    });

}

/**
 * 在AppStroe中查询应用信息
 * @param url
 * @param onSuccess
 */
export function getAppStoreInfo(url, onSuccess) {
    if (!checkNet()) {
        return;
    }
    var fetchOptions = {
        method: 'GET',
        timeout: REQUESTIMEOUT,
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json',
        },
    };
    fetch(url, fetchOptions).then((response) => {
        return response.json()
    }).then((responseJson) => {
        onSuccess(responseJson.results[0]);
    }).catch((error) => {
        console.log(error)
    });
}
