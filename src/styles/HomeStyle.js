/**
 * Created by Tloy on 2017/5/18.
 */

import {StyleSheet, Dimensions, Platform} from 'react-native';
import * as Color from '../configs/Color'
import {width, height, unitWidth, titleHeight, unitHeight} from '../utils/AdapterUtilNew'

export default HomeStyle = StyleSheet.create({
    background: {
        flex: 1,
        backgroundColor: Color.baseBackground,
    },

    banner: {
        width: width,
        height: unitWidth * 375,
        // backgroundColor: 'white',
    },
    bannerImage: {
        width: width,
        height: unitWidth * 375,
        resizeMode: 'stretch',
        // backgroundColor:Color.home_hLine_background,
    },
    searchBar: {
        flexDirection: 'row',
        position: 'absolute',
        left: unitWidth * 50,
        bottom: unitWidth * 20,
        width: unitWidth * 650,
        height: unitWidth * 70,
        borderRadius: unitWidth * 35,
        backgroundColor: "rgba(255, 255, 255, 0.6)",
        borderStyle: "solid",
        borderWidth: unitWidth * 1,
        borderColor: "rgba(166, 166, 166, 0.6)",
        alignItems: 'center',
        paddingLeft: unitWidth * 50,
        paddingRight: unitWidth * 50
    },
    searchBarIcon: {
        width: unitWidth * 50,
        height: unitWidth * 50,
        resizeMode: 'stretch',
        marginRight: unitWidth * 40
    },
    searchBarInput: {
        width: unitWidth * 460,
        height: unitWidth * 70,
        fontSize: unitWidth * 30,
        backgroundColor: 'transparent',
        alignItems: 'center',
        marginTop: unitWidth * 20,
        paddingTop: 0
    },

    platformInfo: {
        width: width,
        height: unitWidth * 190,
        // flexDirection: 'row',
        backgroundColor: "white",
        justifyContent: 'space-around',
        paddingTop: unitWidth * 17,
    },
    platformInfoItem: {
        width: unitWidth * 350,
        height: unitWidth * 150,
        borderRadius: unitWidth * 10,
        backgroundColor: "#ff4d00",
        alignItems: 'center',
        justifyContent: 'center',
    },
    platformInfoText: {
        fontSize: unitWidth * 30,
        color: 'white',
    },

    function: {
        flexDirection: 'row',
        width: width,
        height: unitWidth * 192,
        backgroundColor: 'white',
        justifyContent: 'space-around'
    },

    functionItem: {
        flex: 1,
        alignItems: 'center',
        paddingTop: unitWidth * 13,
    },

    functionIcon: {
        width: unitWidth * 120,
        height: unitWidth * 120,
        borderRadius: unitWidth * 60,
    },

    functionText: {
        backgroundColor: 'transparent',
        fontSize: unitWidth * 30,
        marginTop: unitWidth * 10,
        color: 'black'
    },

    block: {
        width: width,
        alignItems: 'center',
        backgroundColor: 'white',
        marginTop: unitWidth * 20,
    },
    blockTitle: {
        marginTop: unitWidth * 20,
        marginBottom: unitWidth * 10,
        color: 'black',
        fontSize: unitWidth * 35
    },

    yx: {
        width: width,
        height: unitWidth * 220,
        marginBottom: unitWidth * 30,
        marginLeft: unitWidth * 26,
    },

    kuaiBao: {
        width: width,
        height: unitWidth * 118,
        flexDirection: 'row',
        alignItems: 'center',
        backgroundColor: 'white',
        paddingLeft: unitWidth * 32,
        paddingRight: unitWidth * 33,
        paddingTop: unitWidth * 25,
        paddingBottom: unitWidth * 21,
    },
    kuaiBaoImage: {
        width: unitWidth * 78,
        height: unitWidth * 72,
        marginRight: unitWidth * 44,
        resizeMode: 'contain',
    },

    kuaiBaoContent: {
        width: unitWidth * 440,
        height: unitWidth * 100,
    },
    kuaiBaoView: {
        width: unitWidth * 440,
        height: unitWidth * 72,
        justifyContent: 'space-between'
    },
    kuaiBaoItem: {
        width: unitWidth * 440,
        height: unitWidth * 36,
        justifyContent: 'center',
        // backgroundColor: 'red'
    },
    kuaiBaoText: {
        fontSize: unitWidth * 24,
        color: "#444444"
    },
    kuaiBaoMore: {
        backgroundColor: 'transparent',
        fontSize: unitWidth * 24,
        color: "white"
    },

    moreViewStyle: {
        width: unitWidth * 120,
        height: unitWidth * 50,
        borderRadius: unitWidth * 25,
        backgroundColor: "#ff4d00",
        alignItems: 'center',
        justifyContent: 'center'
    },


    kuaibaoText: {
        width: unitWidth * 248,
        height: unitWidth * 24,
        fontSize: 24,
        lineHeight: 30,
        color: "#444444"
    },

    rank: {
        width: width,
        height: unitWidth * 200,
        marginBottom: unitWidth * 50,
        marginLeft: unitWidth * 20,
    },
    aboutRow: {
        flexDirection: 'row',
        width: width,
        height: unitWidth * 150,
        marginBottom: unitWidth * 15,
        paddingLeft: unitWidth * 25
    },
    aboutItem: {
        width: unitWidth * 340,
        height: unitWidth * 150,
        resizeMode: 'stretch',
        marginRight: unitWidth * 20
    },
    bottom: {
        position: 'absolute',
        bottom: 0,
        left: unitWidth * 10,
        width: unitWidth * 614,
        height: unitWidth * 60,
        opacity: unitWidth * 0.6,
        borderRadius: unitWidth * 30,
        backgroundColor: "rgba(100, 100, 100, 1)",
        alignItems: 'center',
        justifyContent: 'center'
    },
    bottomText: {
        width: unitWidth * 500,
        fontSize: unitWidth * 24,
        color: "#ff4d00"
    },

    container: {
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#F5FCFF',
    },
});