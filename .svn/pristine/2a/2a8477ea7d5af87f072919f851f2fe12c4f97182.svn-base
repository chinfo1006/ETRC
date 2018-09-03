/**
 * Created by Tloy on 2018/1/20.
 */

"use strict"
import React, {Component} from 'react'
import {View, Text, Image, StyleSheet, TouchableOpacity} from 'react-native'
import PropTypes from 'prop-types';
import {width, unitWidth} from "../../utils/AdapterUtilNew";
import Images from '../../images'

export default class PayItem extends Component {
    static propTypes = {
        icon: Image.propTypes.source.isRequired,
        payMethod: PropTypes.string.isRequired,
        select: PropTypes.bool,
        fontColor: PropTypes.string,
        onPress: PropTypes.func

    }
    static defaultPropTypes = {
        onPress: () => {

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
                <Image style={styles.icon}
                       source={this.props.icon}/>
                <Text style={{color: this.props.fontColor}}>{this.props.payMethod}</Text>
                <View style={{flex: 1}}/>
                <Image style={styles.select}
                       source={this.props.select ? Images.public.choose : Images.public.unchoose}/>
            </TouchableOpacity>
        )
    }
}

const styles = StyleSheet.create({
    item: {
        flexDirection: 'row',
        width: width,
        height: unitWidth * 110,
        alignItems: 'center',
        paddingLeft: unitWidth * 40,
        paddingRight: unitWidth * 35,
    },
    icon: {
        width: unitWidth * 80,
        height: unitWidth * 80,
        resizeMode: 'stretch',
        marginRight: unitWidth * 40
    },
    select: {
        width: unitWidth * 60,
        height: unitWidth * 60,
        resizeMode: 'stretch'
    },
})
 
 