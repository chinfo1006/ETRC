/**
 * Created by Tloy on 2018/3/28.
 */

"use strict"

import React, {Component} from 'react';
import {
    Text,
    View,
    Image,
    StyleSheet,
    ImageBackground,
    TouchableOpacity
} from 'react-native';
import PropTypes from 'prop-types'
import {baseUrl} from "../configs/Config";
import {unitWidth} from "../utils/AdapterUtilNew";
import * as Color from '../configs/Color'
import Images from '../images'

export default class LessonOrderItem extends Component {
    static propTypes = {
        item: PropTypes.object.isRequired,
        index: PropTypes.number.isRequired,
        onPress: PropTypes.func
    }

    render() {
        return (
            <TouchableOpacity
                activeOpacity={1}
                style={styles.item}
                onPress={() => {
                    this.props.onPress && this.props.onPress()
                }}>
                <Image style={styles.image}
                       source={this.props.item.ThumbnailIUrl?{uri: baseUrl + this.props.item.ThumbnailIUrl}:Images.public.logo}/>
                <View style={styles.content}>
                    <Text numberOfLines={2}
                          style={styles.title}>{this.props.item.ProductName}</Text>
                    <View style={styles.other}>
                        {this.renderStateRow(this.props.item.ApprovalStatus, this.props.item.index)}
                    </View>
                </View>
            </TouchableOpacity>
        )
    }

    renderStateRow(status, index) {
        let views = []
        switch (status) {
            case "已完成":
                views.push(
                    <Text
                        style={styles.succed}
                        key={"已完成" + index}>{this.props.item.CreateDate} 购买成功</Text>
                )
                break
            case "待审核":
                views.push(
                    <Text key={"待审核" + index} style={styles.verifying}>{this.props.item.CreateDate} 提交审核</Text>
                )
                views.push(
                    <Text key={"凭证" + index} style={styles.pz}>查看凭证</Text>
                )
                break
            default  :
                views.push(
                    <Text key={"失败" + index} style={styles.feiled}>{this.props.item.CreateDate} 审核失败</Text>
                )
                views.push(
                    <Text key={"原因" + index} style={styles.pz}>查看原因</Text>
                )
                break
        }
        return views
    }
}

const styles = StyleSheet.create({
    item: {
        width: unitWidth * 750,
        height: unitWidth * 170,
        backgroundColor: "#ffffff",
        paddingLeft: unitWidth * 30,
        paddingRight: unitWidth * 30,
        alignItems: 'center',
        paddingTop: unitWidth * 25,
        paddingBottom: unitWidth * 25,
        flexDirection: 'row'
    },
    image: {
        width: unitWidth * 120,
        height: unitWidth * 120,
        backgroundColor: 'white',
        marginRight: unitWidth * 40
    },
    content: {
        flex: 1,
        height: unitWidth * 100,
        justifyContent: 'space-between',
    },
    title: {
        fontSize: unitWidth * 30,
        color: "#000000"
    },

    other: {
        flexDirection: 'row',
        alignItems: 'flex-end',
        justifyContent: 'space-between'
    },
    succed: {
        fontSize: unitWidth * 25,
        color: "#08811c"
    },

    feiled: {
        fontSize: unitWidth * 25,
        color: "red"
    },

    verifying: {
        fontSize: unitWidth * 25,
        color: Color.grayText
    },

    pz: {
        fontSize: unitWidth * 35,
        color: Color.themeColor
    },
})