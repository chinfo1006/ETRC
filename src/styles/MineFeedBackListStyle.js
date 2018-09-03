/**
 * Created by Tloy on 2018/1/5.
 */

import {StyleSheet, Platform} from 'react-native';
import * as Color from '../configs/Color';
import {width, unitWidth} from '../utils/AdapterUtilNew'

export default MineFeedBackListStyle = StyleSheet.create({
    list: {
        flex: 1,
        backgroundColor: Color.baseBackground
    },
    itemContainer: {
        width: width,
        backgroundColor: 'white',
        paddingLeft: unitWidth * 50,
        paddingRight: unitWidth * 35,
        paddingTop: unitWidth * 23,
        paddingBottom: unitWidth * 26
    },

    questionDate: {
        fontSize: unitWidth * 28,
        color: '#646464',
        backgroundColor: Color.transparent
    },
    question: {
        width: unitWidth * 665,
        fontSize: unitWidth * 28,
        color: '#646464',
        backgroundColor: Color.transparent
    },
    answer: {
        width: unitWidth * 665,
        paddingLeft: unitWidth * 17,
        paddingRight: unitWidth * 40,
        backgroundColor: '#eeeeee',
        paddingTop: unitWidth * 14,
        paddingBottom: unitWidth * 26
    },

    answerText: {
        fontSize: unitWidth * 28,
        color: '#646464',
        width: unitWidth * 608,
        backgroundColor: Color.transparent
    },
})