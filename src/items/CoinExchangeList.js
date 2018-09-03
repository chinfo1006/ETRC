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

export default class CoinExchangeList extends Component {
    static propTypes = {
        item: PropTypes.object.isRequired,
        onPress: PropTypes.func.isRequired,
    }

    static defaultProps = {
        onPress: () => {
        }
    }

    render() {
        return (
            <TouchableOpacity
                style={PublicListStyle.item}
                activeOpacity={1}
                onPress={() => {
                    this.props.onPress()
                }}>
                <View style={PublicListStyle.row}>
                    <Text style={PublicListStyle.type}>{this.props.item.TypeName}</Text>
                    <Text style={PublicListStyle.date}>{this.props.item.CreateDate} </Text>
                </View>
                <View style={PublicListStyle.row}>
                    <Text style={PublicListStyle.date}>ETRC:{insertMax(this.props.item.Integral)}</Text>
                    {this.props.item.Currency > 0 ? (
                        <Text style={PublicListStyle.red}>+{insertMax(this.props.item.Currency)}</Text>
                    ) : (
                        <Text style={PublicListStyle.type}>{insertMax(this.props.item.Currency)}</Text>
                    )}
                </View>
            </TouchableOpacity>
        )
    }
}