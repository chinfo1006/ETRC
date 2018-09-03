/**
 * Created by Tloy on 2018/3/21.
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
import RouteConfig from "../configs/RouteConfig";
import Images from "../images";
import * as Color from "../configs/Color";
import {unitWidth, width} from "../utils/AdapterUtilNew";

export default class NewLessonItem extends Component {
    static propTypes = {
        item: PropTypes.object.isRequired,
        IsPayment: PropTypes.bool.isRequired,
        onPress: PropTypes.func.isRequired,
    }

    render() {
        return (
            <TouchableOpacity
                style={styles.newItemBg}
                activeOpacity={1}
                onPress={() => {
                    this.props.onPress()
                }}>
                <Image
                    style={styles.newItemIcon}
                    source={this.props.item.ThumbnailIUrl ? {uri: baseUrl + this.props.item.ThumbnailIUrl} : Images.public.logo}/>
                <View style={styles.newItemRow}>
                    <Text style={styles.newItemName}
                          numberOfLines={1}>{this.props.item.ProductName}</Text>
                    {Platform.OS == "android" || this.props.IsPayment ? (
                        <Text style={styles.newItemPrice}>¥{this.props.item.ProductPrice}</Text>
                    ) : (null)}
                </View>
            </TouchableOpacity>
        )
    }
}

const styles = StyleSheet.create({
    newItemBg: {
        width: width / 2,
        height: unitWidth * 250,
        backgroundColor: Color.white,
        alignItems: 'center'
    },
    newItemIcon: {
        width: unitWidth * 340,
        height: unitWidth * 150,
        borderRadius: unitWidth * 10,
    },
    newItemRow: {
        width: unitWidth * 340,
        marginTop: unitWidth * 20,
        flexDirection: 'row'
    },
    newItemName: {
        flex: 1
    },
    newItemPrice: {
        color: Color.themeColor
    },
})