/**
 * Created by Tloy on 2018/3/23.
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
import {PublicListStyle} from '../styles'
import {insertMax} from "../utils/NumberUtil";

export default class MallCouponItem extends Component {
    static propTypes = {
        item: PropTypes.object.isRequired,
    }

    render() {
        return (
            <View style={PublicListStyle.item}>
                <View style={PublicListStyle.row}>
                    <Text style={PublicListStyle.type}>{this.props.item.SourceRemark}</Text>
                    <Text style={PublicListStyle.date}>{this.props.item.CreateDate} </Text>
                </View>
                <View style={PublicListStyle.row}>
                    <Text style={PublicListStyle.date}>余额:{insertMax(this.props.item.CurrentShoppingCurremcy)}</Text>
                    {this.props.item.ChangeShoppingCurremcy > 0 ? (
                        <Text style={PublicListStyle.red}>+{insertMax(this.props.item.ChangeShoppingCurremcy)}</Text>
                    ) : (
                        <Text style={PublicListStyle.type}>{insertMax(this.props.item.ChangeShoppingCurremcy)}</Text>
                    )}
                </View>
            </View>
        )
    }
}