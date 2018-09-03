/**
 *  Created by majunhui on 2017/10/19
 *
 *  对敏感信息进行脱敏显示
 */

'use strict';

/**
 *  方法描述: 处理银行卡号,显示前4位和后四位,中间用*代替
 *  作    者: 马军辉
 *  时    间: 2017-11-24
 *  参    数:
 */
export function showBankNo(bankNo) {
    if (bankNo)
        return bankNo.substring(0, 4).concat('**** ****').concat(bankNo.substring(bankNo.length - 4))
    return ""
}

export function showPurseAddress(address) {
    if (address) {
        return address.substr(0, 10) + "****" + address.substring(address.length - 10)
    }
    return ""
}

/**
 *  方法描述: 处理手机号,显示前4位和后四位,中间用*代替
 *  作    者: 马军辉
 *  时    间: 2017-11-24
 *  参    数:
 */
export function showMobile(mobile) {
    if (mobile)
        return mobile.substring(0, 3).concat('****').concat(mobile.substring(mobile.length - 4))
    return ""
}

/**
 *  方法描述: 处理身份证,显示前3位和后四位,中间用*代替
 *  作    者: 马军辉
 *  时    间: 2017-11-24
 *  参    数:
 */
export function showPid(pid) {
    if (pid)
        return pid.substring(0, 3).concat('***********').concat(pid.substring(pid.length - 4))
    return ""
}