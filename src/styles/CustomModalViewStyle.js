import { StyleSheet } from 'react-native'
import { width, height, unitWidth } from '../utils/AdapterUtil'
import * as Color from '../configs/Color'


/**
 * 自定义窗口样式
 */
export default CustomModalViewStyle = StyleSheet.create({


    outContainerView: {
        width: width * 0.8 + unitWidth * 100,
        height: width * 0.6 + unitWidth * 100,
        backgroundColor: '#00000000',
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: unitWidth * 15,

    },
    dialogIcon: {

        width: unitWidth * 100,
        height: unitWidth * 100,

    },
    modalContainer: {
        width: width * 0.8,
        height: width * 0.60,
        backgroundColor: 'white',
        borderRadius: unitWidth * 15,

    },
    modalTitViewStyle: {
        //flexDirection: 'row',
        justifyContent: 'center',
        height: width * 0.1,
        alignItems: 'center',
    },
    modalContentViewStyle: {
        flexDirection: 'row',
        justifyContent: 'center',
        // height: width * 0.15,
        alignItems: 'center',
        marginTop:unitWidth*40,
        flex:1,
    },
    widthOneHighView: {
        width: unitWidth * 10,
        height: width * 0.1,
        backgroundColor: Color.themeColor,
        borderRadius:unitWidth*5,
    },
    widthOneWidthView: {
        width: width * 0.07,
        height: unitWidth * 10,
        backgroundColor: Color.themeColor,
        borderBottomRightRadius:unitWidth*5,
        borderTopRightRadius:unitWidth*5,
        //borderRadius
    },
    contentViewStyle: {
        width: width * 0.4,
        height: width * 0.15,
        backgroundColor: Color.themeColor,
        justifyContent: 'center',
        borderRadius: unitWidth * 15,


    },
    textColor: {
        color: 'white',
        marginLeft: unitWidth * 45,
    },



    flexRowContent: {
        width: width * 0.4,
        height: width * 0.2,
        backgroundColor: 'white',
        justifyContent: 'center',

    },

})


