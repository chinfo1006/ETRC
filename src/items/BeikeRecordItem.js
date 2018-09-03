/**
 * Created by Tloy on 2018/3/21.
 */

"use strict"

import React, {Component} from 'react';
import {
    Text,
    View,
    StyleSheet,
    TouchableOpacity
} from 'react-native';
import PropTypes from 'prop-types'
import {PublicListStyle} from '../styles'
import {insertMax} from "../utils/NumberUtil";
import {showMobile} from "../utils/ShowPrivacyUtil";
import {unitWidth, width} from "../utils/AdapterUtilNew";

export default class BeikeRecordItem extends Component {
    static propTypes = {
        item: PropTypes.object.isRequired,
        onPress: PropTypes.func.isRequired,
    }

    static defaultProps = {
        onPress: () => {
        }
    }

    render() {
        const {item} = this.props
        return (
            <TouchableOpacity
                style={styles.bg}
                activeOpacity={1}
                onPress={() => {
                    this.props.onPress()
                }}>
                <View style={styles.top}>
                    <View
                        style={{
                            flex: 1, justifyContent: 'center',
                            marginRight: unitWidth * 30
                        }}>
                        <Text
                            style={styles.text}
                            numberOfLines={2}>{item.Detailed}</Text>
                    </View>
                    <Text style={styles.type}>{item.GiveSource}</Text>
                </View>
                <View style={styles.line}/>
                <View style={styles.bottom}>
                    <View style={styles.row}>
                        <Text style={styles.amount}>{item.Quantity}</Text>
                        <Text style={styles.type}>贝壳 {item.Status}</Text>
                    </View>
                    <Text style={styles.time}>成交时间 {item.CreateDate}</Text>
                </View>
            </TouchableOpacity>
        )
    }
}

const styles = StyleSheet.create({
    bg: {
        width: width,
        height: unitWidth * 230,
        backgroundColor: "#ffffff",
        paddingHorizontal: unitWidth * 30,
        alignItems: "center",
        marginTop: unitWidth * 20
    },
    top: {
        width: width - unitWidth * 60,
        height: unitWidth * 95,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between'
    },
    text: {
        // width: unitWidth * 360,
        fontSize: unitWidth * 30,
        color: "#000000"
    },

    line: {
        width: unitWidth * 690,
        height: StyleSheet.hairlineWidth * 2,
        backgroundColor: "#cccccc"
    },

    bottom: {
        flex: 1,
        justifyContent: 'center'
    },
    row: {
        width: width - unitWidth * 60,
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center'
    },
    amount: {
        fontSize: unitWidth * 42,
        color: "#000000"
    },
    type: {
        fontSize: unitWidth * 30,
        color: "#000000"
    },
    time: {
        width: width - unitWidth * 60,
        textAlign: 'right',
        fontSize: unitWidth * 28,
        color: "#888888"
    },
})



