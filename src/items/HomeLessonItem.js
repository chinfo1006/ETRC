/**
 * Created by Tloy on 2018/3/15.
 */

"use strict"

import React, {Component} from 'react';
import {
    Text,
    View,
    Image,
    StyleSheet,
    Platform,
    ImageBackground,
    TouchableOpacity
} from 'react-native';
import PropTypes from 'prop-types'
import {baseUrl} from "../configs/Config";
import {unitWidth, width} from "../utils/AdapterUtilNew";
import * as Color from '../configs/Color'

export default class HomeLessonItem extends Component {
    static propTypes = {
        item: PropTypes.object.isRequired,
        IsPayment: PropTypes.bool.isRequired,
        onPress: PropTypes.func
    }

    render() {
        return (
            <TouchableOpacity
                activeOpacity={1}
                style={styles.bg}
                onPress={() => {
                    this.props.onPress && this.props.onPress()
                }}>
                <Image style={styles.image}
                       source={{uri: baseUrl + this.props.item.ImageUrl}}/>
                <View style={styles.bottom}>
                    <Text style={styles.text}>日期：{this.props.item.PublicDate}</Text>
                    {Platform.OS == "android" || this.props.IsPayment ? (
                        <Text style={styles.text}>已购买：{this.props.item.ViewNum}次</Text>
                    ) : (null)}
                </View>
                <View style={styles.title}>
                    <Text style={styles.titleText}>{this.props.item.Title}</Text>
                </View>
                <View style={styles.label}>
                    <Text style={styles.labelText}>{this.props.item.Lable || "热门"}</Text>
                </View>
            </TouchableOpacity>
        )
    }
}

const styles = StyleSheet.create({
    bg: {
        width: width,
        height: unitWidth * 352,
        padding: unitWidth * 25,
        paddingBottom: unitWidth * 20,
        backgroundColor: 'white'
    },
    image: {
        width: unitWidth * 702,
        height: unitWidth * 256,
        borderRadius: unitWidth * 20,
        // resizeMode: 'stretch',
    },
    bottom: {
        flexDirection: 'row',
        flex: 1,
        alignItems: 'center',
        justifyContent: 'space-between',
        // backgroundColor: 'blue'
    },
    text: {
        fontSize: unitWidth * 24,
        color: "#9b9a9a",
        backgroundColor: 'transparent'
    },

    title: {
        position: 'absolute',
        top: unitWidth * 55,
        left: unitWidth * 25,
        height: unitWidth * 60,
        borderBottomLeftRadius: 0,
        borderTopLeftRadius: 0,
        borderBottomRightRadius: unitWidth * 30,
        borderTopRightRadius: unitWidth * 30,
        backgroundColor: "#ffffffdd",
        alignItems: 'center',
        justifyContent: 'center',
        paddingLeft: unitWidth * 40,
        paddingRight: unitWidth * 40,
    },
    titleText: {
        fontSize: unitWidth * 24,
        color: "#591d03",
        fontWeight: 'bold'
    },
    label: {
        position: 'absolute',
        top: unitWidth * 25,
        right: unitWidth * 50,
        width: unitWidth * 100,
        height: unitWidth * 46,
        borderRadius: unitWidth * 10,
        backgroundColor: Color.themeColor,
        alignItems: 'center',
        justifyContent: 'center',
    },

    labelText: {
        color: 'white',
        fontSize: unitWidth * 30
    },
})