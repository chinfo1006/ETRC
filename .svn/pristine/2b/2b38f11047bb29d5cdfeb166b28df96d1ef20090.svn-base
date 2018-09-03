/**
 *
 */

"use strict";

export function insertMax(number, length, char) {   // 长度大于规定长度用指定符号分割

    //console.log("原始参数==" + number)

    if (!length) length = 3
    if (!char) char = ","
    if (isNaN(number)) {
        //console.log("isNaN")
        return number
    }
    let numStr = number + ""

    //console.log("原始参数转字符串==" + numStr)

    let res = ''    //返回的结果
    let prefix = ''   // 负数时的 - 号  正数时的 + 号

    // 去掉 + - 号
    if (numStr.indexOf("-") == 0) {    //num为负数的情况
        prefix = '-'
        numStr = numStr.substring(1, numStr.length)

        //console.log("负数")
    } else if (numStr.indexOf("+") == 0) {  //num为正数且自带 + 号的情况
        prefix = '+'
        numStr = numStr.substring(1, numStr.length)

        //console.log("正数有符号")

    }

    //console.log("去掉符号" + numStr)

    const temp = numStr.split('.')   //分割整数和小数部分
    const integer = temp[0]   //整数部分
    const decimal = temp[1]   //小数部分

    //console.log("整数部分==" + integer)
    //console.log("小数部分==" + decimal)

    const integers = integer.split('') //  整数部分拆成数组

    //console.log("整数数组")
    //console.log(integers)

    //console.log("start")
    for (var i = 1; i <= integers.length; i++) {
        res = integers[integers.length - i] + res

        //console.log(res)

        //按位数添加分隔符
        if (i % length == 0) {
            res = char + res
        }

        //console.log(res)

    }

    //console.log("end")

    // 去掉首位的分隔符
    if (res.indexOf(char) == 0) {
        //console.log("去掉首位的分隔符")
        res = res.substring(1)
        //console.log(res)
    }
    //拼接小数部分
    if (decimal) {
        res = res + '.' + decimal
    }
    //console.log("拼接小数部分")
    //console.log(res)

    //console.log("拼接符号")
    //console.log(prefix + res)
    //拼接符号
    return prefix + res
}