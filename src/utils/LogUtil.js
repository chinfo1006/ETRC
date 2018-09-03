/**
 *  Created by majunhui on 2017/10/01
 */

import {
    Platform,
    ToastAndroid
} from 'react-native'
import {Debug} from '../configs/Config'
import Toast from 'antd-mobile-rn/lib/toast'

/**
 *  方法描述: 调试日志
 *            发布release版本时.在config里面把debbug改为false,关闭日志
 *  作    者: 马军辉
 *  时    间: 2017-11-24
 *  参    数:
 */
export function log(message) {
    if (!Debug) return
    console.log(message)
};

/**
 *  方法描述: Toast提示,
 *              Android平台使用ToastAndroid
 *              IOS平台使用antd-mobile的Toast.info
 *  作    者: 马军辉
 *  时    间: 2017-11-24
 *  参    数:
 */
export function toast(message) {
    if (!message) return
    if (Platform.OS == 'android') {
        ToastAndroid.show(message + "", ToastAndroid.SHORT)
    } else {
        Toast.info(message + "", 1.5, null, false)
    }
}

/**
 * 长吐司
 */
export function toastLong(message) {
    if (!message) return
    if (Platform.OS == 'android') {
        ToastAndroid.show(message + "", ToastAndroid.LONG);
    } else {
        Toast.info(message + "", 5, null, false);
    }
}