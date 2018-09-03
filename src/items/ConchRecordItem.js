/**
 * Created by leaf on 2018/8/21.
 * 贝壳兑换记录 item
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
import {unitWidth, width} from "../utils/AdapterUtilNew";
import WhiteSpace from "../components/whitespace/WhiteSpace";

export default class ConchRecordItem extends Component {
    static propTypes = {
        item: PropTypes.object.isRequired,
    }


    getStatusStyle() {
        const {item} = this.props
        if (item.Status == "审核中") {
            return styles.waitting
        } else if (item.Status == "打款成功") {
            return styles.succed
        } else {
            return styles.failed
        }
    }

    render() {
        const {item} = this.props
        return (
            <TouchableOpacity
                style={styles.bg}
                activeOpacity={1}
                onPress={() => {
                }}>
                <View style={styles.row}>
                    <Text style={styles.bankName}>贝壳兑换</Text>
                    <Text style={styles.date}>{item.CreateDate}</Text>
                </View>
                <WhiteSpace size={20}/>
                <View style={[styles.row, {marginTop: 5}]}>
                    <Text style={this.getStatusStyle()}>{item.Status}</Text>
                    <Text style={styles.bankName}>{item.Amount}</Text>
                </View>
            </TouchableOpacity>
        )
    }
}

const styles = StyleSheet.create({
    bg: {
        width: width,
        backgroundColor: "#ffffff",
        paddingHorizontal: unitWidth * 30,
        paddingTop: unitWidth * 20,
        paddingBottom: unitWidth * 30
    },
    row: {
        width: width - unitWidth * 60,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between'
    },
    bankName: {
        fontSize: unitWidth * 30,
        color: "#000000"
    },
    date: {
        fontSize: unitWidth * 30,
        color: "#959393"
    },
    waitting: {
        fontSize: unitWidth * 30,
        color: "#ffaa22"
    },
    succed: {
        fontSize: unitWidth * 30,
        color: "#266b05"
    },
    failed: {
        fontSize: unitWidth * 30,
        color: "#ce0600"
    },
})