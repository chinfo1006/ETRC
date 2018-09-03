/**
 *  Created by majunhui on 2017/9/29
 */

'use strict';

import ImagePicker from 'react-native-image-crop-picker'
import {toast} from "./LogUtil";

/**
 *  方法描述: 从手机选择照片
 *  作    者: 马军辉
 *  时    间: 2017-11-24
 *  参    数:
 *          base64  是否转换为base64,
 *          callBack 获取数据的回调方法
 */
export function selectPhoto(base64, callBack) {
    ImagePicker.openPicker({
        cropping: false,   //是否缩放 裁剪
        includeBase64: base64,   //转换为 Base64
    }).then(image => {
        callBack(image)
    }).catch(e => {
        console.log(e)
        toast("选择失败,请重新选择")
    });
}

/**
 *  方法描述: 用相机拍摄照片
 *  作    者: 马军辉
 *  时    间: 2017-11-24
 *  参    数:
 *          base64  是否转换为base64,
 *          callBack 获取数据的回调方法
 */
export function takePhoto(base64, callBack) {
    ImagePicker.openCamera({
        cropping: false,        //是否缩放 裁剪
        includeBase64: base64,   //转换为 Base64
    }).then(image => {
        callBack(image)
    }).catch(e => {
        console.log(e)
        toast("选择失败,请重新选择")
    });
}

/**
 *  方法描述: 从手机选择照片并进行缩放裁剪
 *  作    者: 马军辉
 *  时    间: 2017-11-24
 *  参    数:
 *          width:要裁剪的宽度
 *          height:要裁剪的高度
 *          base64  是否转换为base64,
 *          callBack 获取数据的回调方法
 */
export function selectPhotoCrop(width, height, base64, callBack) {
    ImagePicker.openPicker({
        width: width || 200,
        height: height || 200,
        cropping: true,   //是否缩放 裁剪
        includeBase64: base64,   //转换为 Base64
    }).then(image => {
        callBack(image)
    }).catch(e => {
        toast("选择失败,请重新选择")
    });
}

/**
 *  方法描述: 用相机拍摄照片并进行缩放裁剪
 *  作    者: 马军辉
 *  时    间: 2017-11-24
 *  参    数:
 *          width:要裁剪的宽度
 *          height:要裁剪的高度
 *          base64  是否转换为base64,
 *          callBack 获取数据的回调方法
 */
export function takePhotoCrop(width, height, base64, callBack) {
    ImagePicker.openCamera({
        width: width || 200,
        height: height || 200,
        cropping: true,   //是否缩放 裁剪
        includeBase64: base64,   //转换为 Base64
    }).then(image => {
        callBack(image)
    }).catch(e => {
        toast("选择失败,请重新选择")
    });
}