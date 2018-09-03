/**
 * Created by Tloy on 2018/1/2.
 */

import {StyleSheet, Platform} from 'react-native';
import * as Color from '../configs/Color';
import {width, height, unitWidth} from '../utils/AdapterUtil'

export default RegistLoginStyle = StyleSheet.create({
    background: {
        flex: 1,
        backgroundColor: Color.baseBackground,
        alignItems: 'center'
    },
    logo: {
        width: unitWidth * 220,
        height: unitWidth * 220,
        borderRadius: unitWidth *110,
    },
    function: {
        width: width - unitWidth * 250,
        flexDirection: 'row',
        justifyContent: 'space-between',
        
    },

    pressViewStyle:{
        // width:width*0.2,   
    },
    //字体样式
    textStyle:{
        color:Color.longBtColor,
        fontSize:18,
        textDecorationLine: 'underline',
        padding:unitWidth*10,
        // backgroundColor:'blue'
    }
})