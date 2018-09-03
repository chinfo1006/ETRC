/**
 * Created by Tloy on 2018/3/15.
 */

"use strict"

import React, {Component} from 'react';
import {
    Text,
    View,
    Image,
    Platform,
    StyleSheet,
    ImageBackground,
    TouchableOpacity
} from 'react-native';
import PropTypes from 'prop-types'
import {baseUrl} from "../configs/Config";
import {textSize18, textSize24, unitWidth, width} from "../utils/AdapterUtilNew";
import * as Color from "../configs/Color";

export default class LessonItem extends Component {
    static propTypes = {
        item: PropTypes.object.isRequired,
        IsPayment: PropTypes.bool.isRequired,
        onPress: PropTypes.func
    }

    render() {
        return (
            <TouchableOpacity
                style={styles.touchBg}
                activeOpacity={1}
                onPress={() => {
                    this.props.onPress()
                }}>
                <Image style={styles.image}
                       source={{uri: baseUrl + this.props.item.ThumbnailIUrl}}/>
                <View style={styles.titleView}>
                    <Text
                        style={styles.title}
                        numberOfLines={1}>{this.props.item.ProductName}</Text>
                </View>
                {/*<Text style={StudyTabAllPageStyle.itemCenterProductIntroduceStye}>*/}
                    {/*{this.props.item.Introduce}*/}
                {/*</Text>*/}
                <View style={styles.line}/>
                <View style={styles.bottomRow}>
                    <Text style={styles.bottomRowText}>阅读数:{this.props.item.Browse}</Text>
                    {Platform.OS == "android" || this.props.IsPayment ? (
                        <Text style={styles.bottomRowText}>已购买:{this.props.item.BuyCount}</Text>
                    ) : (null)}
                </View>

                {Platform.OS == "android" || this.props.IsPayment ? (
                    <View style={styles.price}>
                        <Text style={styles.priceText}
                              numberOfLines={1}>￥{this.props.item.ProductPrice}</Text>
                    </View>
                ) : (null)}
            </TouchableOpacity>
        )
    }
}

const styles = StyleSheet.create({
    touchBg: {
        width: unitWidth * 350,
        height: unitWidth * 360,
        marginLeft: unitWidth * 17,
        backgroundColor: Color.white,
        marginBottom: unitWidth * 10,
        alignItems: 'center',
        paddingTop: unitWidth * 15
    },
    image: {
        width: unitWidth * 320,
        height: unitWidth * 200,
    },
    titleView: {
        flex: 1,
        paddingLeft: unitWidth * 15,
        paddingRight: unitWidth * 15,
        alignItems: 'center',
        justifyContent: 'center'
    },
    title: {
        fontSize: unitWidth * 30,
        color: "#222423",
        backgroundColor: Color.transparent
    },
    line: {
        width: unitWidth * 330,
        height: unitWidth * 2,
        backgroundColor: "#dcdcdc"
    },
    bottomRow: {
        height: unitWidth * 55,
        flexDirection: 'row',
        width: unitWidth * 320,
        justifyContent: 'space-between',
        alignItems: 'center'
    },
    bottomRowText: {
        fontSize: unitWidth * 24,
        alignItems: 'center',
        backgroundColor: Color.transparent
    },
    price: {
        position: 'absolute',
        top: 0,
        left: 0,
        width: unitWidth * 150,
        height: unitWidth * 51,
        backgroundColor: Color.appthemeColor,
        justifyContent: 'center',
        alignItems: 'center',
        borderBottomLeftRadius: unitWidth * 10,
        borderBottomRightRadius: unitWidth * 10,
    },
    priceText: {
        color: Color.white,
        fontSize: unitWidth * 24,
        backgroundColor: Color.transparent
    },
})