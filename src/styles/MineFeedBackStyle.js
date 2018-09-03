/**
 * Created by Tloy on 2018/1/5.
 */

import { StyleSheet, Platform } from 'react-native';
import * as Color from '../configs/Color';
import { width, height, unitWidth, titleHeight, statusBarHeight } from '../utils/AdapterUtil'

//商家中心
export default MineFeedBackStyle = StyleSheet.create({

   
    
    /**
     * 底部视图
     */
    bottomViewStyle:{
        flex:1,
        alignItems:'center',

    },
    
    //文本样式
    bottomTextViewStyle: {
        width: width * 0.8,
        height: unitWidth * 150,
        backgroundColor:Color.themeColor,
        justifyContent:'center',
        alignItems:'center',
        borderRadius:unitWidth*15,
    },
    /**
     * 底部文本样式   ===确定回购
     */
    bottomTextStyle: {
        textAlign: 'center',  
        color: 'white',
    },


})