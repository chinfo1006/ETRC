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
import {showMobile} from "../utils/ShowPrivacyUtil";

export default class CoinTransactionList extends Component {
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
                    <Text style={PublicListStyle.date}>{this.props.item.DateTime} </Text>
                </View>
                <View style={PublicListStyle.row}>
                    <Text style={PublicListStyle.date}>{showMobile(this.props.item.AccountNo)}</Text>
                    {this.props.item.Currency > 0 ? (
                        <Text style={PublicListStyle.red}>{insertMax(this.props.item.Currency)}</Text>
                    ) : (
                        <Text style={PublicListStyle.type}>{insertMax(this.props.item.Currency)}</Text>
                    )}
                </View>
            </TouchableOpacity>
        )
    }
}