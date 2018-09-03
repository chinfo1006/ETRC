/**
 * Created by Tloy on 2018/3/15.
 */

"use strict"

import React, {Component} from 'react';
import {
    View,
    Text,
    Image,
    StyleSheet,
    TouchableOpacity
} from 'react-native';
import PropTypes from 'prop-types'
import {width, unitWidth} from "../utils/AdapterUtilNew";
import Images from '../images'
import * as Color from '../configs/Color'
import {baseUrl} from "../configs/Config";

export default class WithdrawCashrRecordItem extends Component {
    static propTypes = {
        item: PropTypes.object.isRequired,
        onPress: PropTypes.func
    }

    getStatusStyle(string) {
        switch (string) {
            case "成功":
            case "打款成功":
            case "已退款":
                return styles.succed
            case "不通过":
            case "回购失败":
                return styles.failed
            default :
                return styles.verifying
        }
    }

    render() {
        return (
            <TouchableOpacity
                style={styles.item}
                activeOpacity={1}
                onPress={() => {
                    this.props.onPress()
                }}>
                <Image style={styles.backIcon}
                       source={this.props.BankIco ? {uri: baseUrl + this.props.BankIco} : Images.public.logo}/>
                <View style={styles.content}>
                    <Text style={styles.title}>合兴元回购</Text>
                    <Text style={this.getStatusStyle(this.props.item.Status)}>{this.props.item.Status}</Text>
                    <Text style={styles.date}>{this.props.item.CreateDate}</Text>
                </View>
                <View style={{flex: 1}}/>
                <Text style={styles.price}>{this.props.item.Amount}</Text>
            </TouchableOpacity>
        )
    }
}

const styles = StyleSheet.create({
    item: {
        width: width,
        height: unitWidth * 132,
        paddingLeft: unitWidth * 27,
        paddingRight: unitWidth * 27,
        flexDirection: "row",
        alignItems: 'center',
        backgroundColor: 'white'
    },
    backIcon: {
        width: unitWidth * 100,
        height: unitWidth * 100,
        borderRadius: unitWidth * 50,
        // borderWidth: 1,
        // borderColor: "#e5e5e5",
        marginRight: unitWidth * 20
    },
    content: {
        width: unitWidth * 400,
        height: unitWidth * 110,
        // flex: 1,
        justifyContent: 'space-between',
    },
    title: {
        backgroundColor: Color.transparent,
        fontSize: unitWidth * 30,
        color: "#000000"
    },
    price: {
        backgroundColor: Color.transparent,
        fontSize: unitWidth * 36,
        color: "#000000"
    },
    succed: {
        backgroundColor: Color.transparent,
        fontSize: unitWidth * 30,
        color: "#06a211"

    },
    verifying: {
        backgroundColor: Color.transparent,
        fontSize: unitWidth * 30,
        color: Color.themeColor
    },
    failed: {
        fontSize: unitWidth * 30,
        color: "#e50909",
        backgroundColor: Color.transparent,
    },

    date: {
        backgroundColor: Color.transparent,
        fontSize: unitWidth * 24,
        color: "#908e8e"
    }
})