/**
 *
 */


"use strict";

import React, {Component} from 'react'
import {View, Text, Image, StyleSheet} from 'react-native'
import Images from '../images'
import {width, unitWidth} from "../utils/AdapterUtilNew";
import * as Color from '../configs/Color'

export default class NoData extends Component {

    render() {
        return (
            <View style={styles.bg}>
                <Image style={styles.image}
                       source={Images.public.no_data}/>
                <Text style={styles.text}>暂无数据</Text>
            </View>
        )
    }

}

const styles = StyleSheet.create({
    bg: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
    },
    image: {
        width: unitWidth * 200,
        height: unitWidth * 200,
        resizeMode: 'contain',
        marginTop: unitWidth * 200
    },
    text: {
        color: Color.grayText,
        fontSize: unitWidth * 38
    },
})