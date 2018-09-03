/**
 * Created by Tloy on 2018/3/20.
 */

import {StyleSheet, Dimensions, Platform} from 'react-native';
import * as Color from '../configs/Color'
import {width, height, unitWidth, titleHeight, unitHeight} from '../utils/AdapterUtilNew'

export default RegistAndLoginStyle = StyleSheet.create({
    background: {
        flex: 1,
        alignItems: 'center',
    },
    logo: {
        width: unitWidth * 202,
        height: unitWidth * 270,
        resizeMode: 'contain'
    },
    loginBt: {
        width: unitWidth * 530,
        height: unitWidth * 114,
        borderRadius: unitWidth * 25,
        borderStyle: "solid",
        borderWidth: unitWidth * 3,
        borderColor: "#ffffff",
        alignItems: 'center',
        justifyContent: 'center'
    },

    loginText: {
        fontSize: unitWidth * 30,
        color: "#ffffff",
        backgroundColor: 'transparent'
    },
    registBt: {
        width: unitWidth * 530,
        height: unitWidth * 114,
        borderRadius: unitWidth * 25,
        backgroundColor: "#ffffff",
        alignItems: 'center',
        justifyContent: 'center'
    },

    registText: {
        fontSize: unitWidth * 30,
        color: "#ff4d00",
        backgroundColor: 'transparent'
    },

    regist: {
        fontSize: unitWidth * 23,
        color: "#ffffff",
        backgroundColor: 'transparent'
    },
})