/**
 * Created by Tloy on 2018/3/27.
 */

import {StyleSheet, Dimensions, Platform} from 'react-native';
import * as Color from '../configs/Color'
import {width, height, unitWidth, titleHeight, unitHeight} from '../utils/AdapterUtilNew'

export default PublicListStyle = StyleSheet.create({
    item: {
        width: unitWidth * 726,
        height: unitWidth * 115,
        marginLeft: unitWidth * 24,
        borderBottomWidth: unitWidth * StyleSheet.hairlineWidth * 2,
        borderStyle: 'solid',
        borderBottomColor: Color.gray,
        paddingLeft: unitWidth * 5,
        paddingRight: unitWidth * 25,
    },
    row: {
        flex: 1,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between'
    },
    type: {
        fontSize: unitWidth * 30,
        color: "#000000",
        backgroundColor: Color.transparent
    },
    date: {
        fontSize: unitWidth * 30,
        color: "#959393",
        backgroundColor: Color.transparent
    },
    red: {
        fontSize: unitWidth * 30,
        color: "#fd0214",
        backgroundColor: Color.transparent
    },
})