/**
 *  Created by majunhui on 2017/10/16
 */

'use strict';

/**
 *  方法描述: 格式化时间戳 ,date为0时默认获取当前时间
 *  作    者: 马军辉
 *  时    间: 2017-11-24
 *  参    数:
 *  paramDate:  时间戳, 为0或null时默认取当前时间
 *  type:       [string] 格式化结果类型
 *                  "1"  2017-11-24
 *                  "2"  2017-11-24 08:30
 *                  "3"  2017-11-24 08:30:55
 */
export function getDate(paramDate, type) {
    var date;
    if (paramDate == 0 || !paramDate) {
        date = new Date()
    } else {
        date = new Date(paramDate)
    }

    var seperator1 = "-";
    var seperator2 = ":";
    var month = date.getMonth() + 1;
    var strDate = date.getDate();
    if (month >= 1 && month <= 9) {
        month = "0" + month;
    }
    if (strDate >= 0 && strDate <= 9) {
        strDate = "0" + strDate;
    }
    let currentdate
    switch (type) {
        case '1':   // 年月日
            currentdate = date.getFullYear() + seperator1 + month + seperator1 + strDate
            break
        case "2":  //年月日时分
            currentdate = date.getFullYear() + seperator1 + month + seperator1 + strDate
                + " " + date.getHours() + seperator2 + date.getMinutes()
            break
        case "3":  //年月日时分秒
            currentdate = date.getFullYear() + seperator1 + month + seperator1 + strDate
                + " " + date.getHours() + seperator2 + date.getMinutes() + seperator2 + date.getSeconds();
            break
        default :
            currentdate = date.getFullYear() + seperator1 + month + seperator1 + strDate
    }
    return currentdate;
}

/**
 *  方法描述: 计算两个日期之间的天数差
 *  作    者: 马军辉
 *  时    间: 2017-11-24
 *  参    数:
 */
export function dateDiff(date1, date2) {    //sDate1和sDate2是2017-08-12 18:25:46格式
    var dateL1 = Date.parse(new Date(date1.replace(/-/g, '/')));
    var dateL2 = Date.parse(new Date(date2.replace(/-/g, '/')));
    var days = parseInt(Math.abs(dateL1 - dateL2) / 1000 / 60 / 60 / 24)
    return '' + days
}

/**
 *  方法描述: 获取指定时间的时间戳
 *  作    者: 马军辉
 *  时    间: 2017-11-08
 *  参    数: 格式为 2017-11-08/2017-11-15 09:57/2017年11月15日/2017年11月15日 09:57
 *  如果为2017-11-08默认2017-11-08 08:00:00
 */
export function getTimestamp(stringTime) {
    stringTime = stringTime.replace("年", "/").replace("月", "/").replace("日", "")
    stringTime.replace(/-/g, '/')
    return Date.parse(stringTime)
}

/**
 *  方法描述: 获取时间
 *  作    者: 马军辉
 *  时    间: 2017-11-29
 *  参    数: 2017-05-09 08:00
 */
export function getTimefromDate(formatDate) {
    if (!formatDate) return ""
    const arr = formatDate.split(" ")
    if (arr.length > 1) {
        return arr[1].substring(0, 5)
    }
    return ""
}

/**
 *  方法描述: 获取月日
 *  作    者: 马军辉
 *  时    间: 2017-11-29
 *  参    数: 2017-05-09 08:00
 */
export function getYearAndMonthfromDate(formatDate) {
    if (!formatDate) return ""
    return formatDate.substring(5, 10).replace("-", "月") + "日"
}

export function getYearMonthDayfromDXDate(DXDate) {
    //  2018-03-20T17:57:00.987
    if (!DXDate) return ""
    const list = DXDate.split("T")[0].split('-')
    if (list.length < 3) {
        return ""
    }
    return list[0] + "年" + list[1] + "月" + list[2] + "日"
}