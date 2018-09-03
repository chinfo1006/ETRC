/**
 * Created by Tloy on 2017/9/20.
 */
'use strict';

import {
    AsyncStorage,
} from 'react-native';
import Storage from 'react-native-storage';
import {toast} from './LogUtil';

//初始化缓存对象
const storage = new Storage({
    // 最大容量，默认值1000条数据循环存储
    size: 1000,
    // 存储引擎：对于RN使用AsyncStorage，对于web使用window.localStorage
    // 如果不指定则数据只会保存在内存中，重启后即丢失
    storageBackend: AsyncStorage,
    // 数据过期时间，默认一整天（1000 * 3600 * 24 毫秒），设为null则永不过期
    defaultExpires: null,
    // 读写时在内存中缓存数据。默认启用。
    enableCache: true,
    // 如果storage中没有相应数据，或数据已过期，
    // 则会调用相应的sync同步方法，无缝返回最新数据。
    sync: {}
});

/**
 *  方法描述: 清除缓存数据
 *  作    者: 马军辉
 *  时    间: 2017-11-24
 *  参    数:
 */
export function cleanCache() {
    storage.clearMap();
}

/**
 * 保存tooken
 */
export function setToken(token) {
    global.token = token
    storage.save({
        key: "token",
        data: token,
        expires: null
    })

}

/**
 *  方法描述: 读取cookie
 *  作    者: 马军辉
 *  时    间: 2017-11-24
 *  参    数:
 */
export function getToken(callBack) {
    storage.load({
        key: 'token',
        autoSync: false,
    }).then(res => {
        global.token = res
        callBack && callBack(res)
    }).catch(err => {
        callBack && callBack()
    })
}


/**
 *  方法描述: 退出登录  清除cookie和登录信息
 *  作    者: 马军辉
 *  时    间: 2017-11-24
 *  参    数:
 */
export function logout() {
    global.token = null
    setToken(null)
}

/**
 * 保存详情页面用户的userId
 */
export function setBankId(bankId) {
    global.bankId = bankId;
    // //保存数据
    storage.save({
        key: 'bankId',
        data: {
            'bankId': bankId,
        },
        expires: null,
    })
}