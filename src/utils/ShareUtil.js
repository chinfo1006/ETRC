/**
 * Created by Tloy on 2017/8/04.
 */

import * as WeChat from 'react-native-wechat';
import * as QQAPI from 'react-native-qq';
import {WxAppId} from '../configs/Config'
import {logoUrl} from "../server/ApiUrl";
import {toast} from "./LogUtil";

export const shareType = {
    shareWx: 'wx',
    shareQQ: 'qq',
    shareQzone: 'qzone',
    shareTimeLine: 'timeLine',
    shareTimeLine: 'timeLine'
}

const shareTitle = 'ETRC'
const shareDescription = '知识创造财富（Knowledge makes wealth）'
var isWXAppInstalled = false;

export async function registWx() {
    try {
        await WeChat.registerApp(WxAppId);
        isWXAppInstalled = await WeChat.isWXAppInstalled()
    } catch (e) {
        console.log('error=');
        console.error(e);
    }
}

/**
 * 微信分享
 * @param {*} url
 */
export function shareToTimeline(url) {
    if (isWXAppInstalled) {
        WeChat.shareToTimeline({
            type: 'news',
            title: shareTitle,
            description: shareDescription,
            // mediaTagName: 'email signature',
            // messageAction: undefined,
            // messageExt: undefined,
            thumbImage: logoUrl,
            webpageUrl: url
        }).then((success) => {
            console.log('success=============')
            console.log(success)
        }).then((error) => {
            console.log('error=============')
            console.log(error)
        });
    } else {
        toast('请先安装微信')
    }
}

export function shareToWx(url) {
    if (isWXAppInstalled) {
        WeChat.shareToSession({
            type: 'news',
            title: shareTitle,
            description: shareDescription,
            // mediaTagName: 'email signature',
            // messageAction: undefined,
            // messageExt: undefined,
            thumbImage: logoUrl,
            webpageUrl: url
        }).then((success) => {
            console.log('success=============')
            console.log(success)
        }).then((error) => {
            console.log('error=============')
            console.log(error)
        });
    } else {
        toast('请先安装微信')
    }
}

export function shareToQQ(url) {
    QQAPI.shareToQQ({
        type: 'news',
        title: shareTitle,
        description: shareDescription,
        webpageUrl: url,
        imageUrl: logoUrl
    });
}

export function shareToQzone(url) {
    QQAPI.shareToQzone({
        type: 'news',
        title: shareTitle,
        description: shareDescription,
        webpageUrl: url,
        imageUrl: logoUrl
    });
}




