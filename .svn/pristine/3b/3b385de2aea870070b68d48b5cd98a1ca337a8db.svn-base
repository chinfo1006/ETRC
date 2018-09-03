/**
 *  Created by majunhui on 2017/9/22
 */

'use strict';
import {NativeModules} from 'react-native'

const MainModule = NativeModules.MainModule
const AMapModule = NativeModules.AMapModule


/*********************----AMapModule----*********************/

/**
 *  方法描述: 高德地图获取单次定位
 *  作    者: 马军辉
 *  时    间: 2017-11-25
 *  参    数:
 *      eventName 定位成功后通知事件名
 */
export function getLocationOnce(eventName) {
    console.log("getLocationOnce")
    AMapModule.getLocationOnce(eventName)
}

/**
 *  方法描述: 获取高德地图连续定位
 *  作    者: 马军辉
 *  时    间: 2017-11-25
 *  参    数:
 *       eventName 定位成功后通知事件名
 *       interval  定位间隔 单位毫秒
 */
export function getLocationContinue(eventName, interval) {
    console.log("getLocationContinue")
    AMapModule.getLocationContinue(eventName, interval)
}

/**
 *  方法描述: 关闭高德地图连续定位
 *  作    者: 马军辉
 *  时    间: 2017-11-25
 *  参    数:
 */
export function stopContinueLocation() {
    AMapModule.stopContinueLocation()
}

/**
 *  方法描述: 高德地图poiSearch
 *  作    者: 马军辉
 *  时    间: 2017-11-13
 *  参    数:
 *  @param eventName 发送通知的名字
 *  @param city      城市  表示POI搜索区域，可以是城市编码也可以是城市名称，也可以传空字符串，空字符串代表全国在全国范围内进行搜索
 *  @param keyword   关键字
 *  @param type      POI搜索类型
 */
export function poiSearch(eventName, city, keyword, type) {
    AMapModule.poiSearch(eventName, city, keyword, type)
}

/*********************----MainModule----*********************/

/**
 *  方法描述:  把cookie保存到原生缓存
 *  作者: 马军辉
 *  时间: 2017-11-00
 *  参数:
 */
export function setJsessionid(jsessionid) {
    // MainModule.setJsessionid(jsessionid)
}

/**
 *  方法描述: 语音播报
 *  作    者: 马军辉
 *  时    间: 2017-11-13
 *  参    数:
 */
export function textToSpeech(msg) {
    MainModule.textToSpeech(msg)
}

/**
 * 打开加载框
 * @param message
 */
export function startPorgressDialog(message) {
    MainModule.startPorgressDialog(message || "正在加载中。。。")
}

/**
 * 关闭加载框
 */
export function stopProgressDialog() {
    MainModule.stopProgressDialog()
}

/**
 *  方法描述:  打开activity
 *  作者: 马军辉
 *  时间: 2017-11-30
 *  参数:
 *  @param activityName  Activity文件名,包括完整的包路径
 *  @param eventName     需要事件通知的事件名
 *  @param map          打开Activity需要的参数
 */
export function startActivityFromJS(activityName, eventName, map) {
    MainModule.startActivityFromJS(activityName, eventName, map)
}

/**
 *  方法描述: 进入到行程详情
 *  作    者: 马军辉
 *  时    间: 2017-11-09
 *  参    数:
 */
export function startNavigation(start, end, type) {
    MainModule.startNavigation(start, end, type)
}

/**
 *  方法描述: 打开选择时间对话框
 *  作    者: 马军辉
 *  时    间: 2017-11-15
 *  参    数:
 */
export function showTime(eventName, flag) {
    MainModule.showTime(eventName, flag)
}