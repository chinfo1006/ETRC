/**
 * Created by Tloy on 2018/3/29.
 */

import {StyleSheet} from 'react-native';
import {width, unitWidth} from '../utils/AdapterUtilNew'
import * as Color from '../configs/Color'

export default OederDetailStyle = StyleSheet.create({
    top: {
        width: width,
        backgroundColor: 'white',
        alignItems: 'center',
        justifyContent: 'center',
        paddingTop: unitWidth * 25,
        paddingBottom: unitWidth * 31
    },
    image: {
        width: unitWidth * 200,
        height: unitWidth * 200,
        marginBottom: unitWidth * 25
    },
    name: {
        fontSize: unitWidth * 30,
        color: "#000000"
    },
    bt: {
        width: unitWidth * 500,
        height: unitWidth * 80,
        borderRadius: unitWidth * 40,
        backgroundColor: Color.themeColor,
        alignItems: 'center',
        justifyContent: 'center',
    },
    btText: {
        fontSize: unitWidth * 36,
        color: "#ffffff"
    },
})