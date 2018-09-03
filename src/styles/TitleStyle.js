/**
 * Created by Tloy on 2017/5/18.
 */

import {StyleSheet, Dimensions, Platform} from 'react-native';
import * as Color from '../configs/Color'
import {width, height, unitWidth, titleHeight, unitHeight} from '../utils/AdapterUtil'

export default HomeStyle = StyleSheet.create({
    titleBar: {
        flexDirection: 'row',   // 水平排布
        height: titleHeight,
        backgroundColor: Color.titleBarBackground,
        alignItems: 'center',  // 使元素垂直居中排布, 当flexDirection为column时, 为水平居中
        width: width,
        justifyContent: 'space-between'
    },

    searchBlock: {
        flexDirection: 'row',
        width: unitWidth * 900,
        height: unitWidth * 100,
        backgroundColor: 'white',
        borderRadius: unitWidth * 50,
        alignItems: 'center',
        paddingLeft: unitWidth * 10,
        backgroundColor: Color.home_hLine_background,
    },

    searchIcon: {
        width: unitWidth * 60,
        height: unitWidth * 60,
        marginLeft: unitWidth * 20,
        marginRight: unitWidth * 20
    },
})