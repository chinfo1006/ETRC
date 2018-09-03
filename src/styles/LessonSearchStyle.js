/**
 * Created by ${USER} on ${DATE}.
 */

import {StyleSheet} from 'react-native';
import * as Color from '../configs/Color'
import {width, unitWidth} from '../utils/AdapterUtilNew'

export default LessonSearchStyle = StyleSheet.create({
    searchBlock: {
        width: width,
        height: unitWidth * 90,
        backgroundColor: Color.themeColor,
        flexDirection: 'row',
        paddingLeft: unitWidth * 35,
        justifyContent: 'center'
    },
    searchBar: {
        flexDirection: 'row',
        width: unitWidth * 580,
        height: unitWidth * 70,
        borderRadius: unitWidth * 35,
        backgroundColor: "rgba(255, 255, 255, 0.6)",
        borderStyle: "solid",
        borderWidth: unitWidth * 1,
        borderColor: "rgba(166, 166, 166, 0.6)",
        alignItems: 'center',
        paddingLeft: unitWidth * 50,
        paddingRight: unitWidth * 50,
        marginRight: unitWidth * 30
    },
    searchBarIcon: {
        width: unitWidth * 50,
        height: unitWidth * 50,
        resizeMode: 'stretch',
        marginRight: unitWidth * 40
    },
    searchBarInput:{
        width: unitWidth * 390,
        fontSize: unitWidth * 30,
        backgroundColor: 'transparent',
        paddingTop: 0,
        paddingBottom: 0,
    },

    searchCancel: {
        fontSize: unitWidth * 40,
        color: "#ffffff"
    }
})