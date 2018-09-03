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
    ImageBackground,
    TouchableOpacity
} from 'react-native';
import PropTypes from 'prop-types'
import {PublicListStyle} from '../styles'
import {insertMax} from "../utils/NumberUtil";

export default class RiskFundItem extends Component {
    static propTypes = {
        item: PropTypes.object.isRequired,
    }

    render() {
        return (
            <View style={PublicListStyle.item}>
                <View style={PublicListStyle.row}>
                    <Text style={PublicListStyle.type}>{this.props.item.title}</Text>
                    <Text style={PublicListStyle.date}>{this.props.item.CreateDate} </Text>
                </View>
                <View style={PublicListStyle.row}>
                    <Text style={PublicListStyle.date}>贡献值:{insertMax(this.props.item.Contribution)}</Text>
                    {this.props.item.RiskFund > 0 ? (
                        <Text style={PublicListStyle.red}>+{insertMax(this.props.item.RiskFund)}</Text>
                    ) : (
                        <Text style={PublicListStyle.type}>{insertMax(this.props.item.RiskFund)}</Text>
                    )}
                </View>
            </View>
        )
    }
}