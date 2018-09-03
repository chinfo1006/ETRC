/**
 *  Created by majunhui on 2017/9/22
 */


'use strict';

/**
 * 防止重复点击的button,
 */
import React, {Component} from 'react';
import PropTypes from 'prop-types';
import {
    View,
    Text,
    Image,
    StyleSheet,
    ViewPropTypes,
    TouchableOpacity
} from 'react-native'
import {width, unitWidth,textSizeNormal,textSizebig} from "../../utils/AdapterUtil";
import * as Color from '../../configs/Color'

export default class LongButton extends Component {
    static propTypes = {
        text: PropTypes.string.isRequired,
        onPress: PropTypes.func.isRequired,
        style: ViewPropTypes.style,
        textStyle: Text.propTypes.style
    }

    constructor(props) {
        super(props)
        this.state = {
            clickable: true
        }
    }

    render() {
        return (
            <TouchableOpacity style={[LongButtonStyle.longBtBg, this.props.style]} activeOpacity={1}
                              onPress={() => {
                                  if (this.state.clickable) {
                                      this.props.onPress()
                                  } else {
                                      console.log('重复点击')
                                  }
                              }}>
                <Text style={[LongButtonStyle.btText,this.props.textStyle]}>{this.props.text}</Text>
            </TouchableOpacity>
        )
    }
}

const LongButtonStyle = StyleSheet.create({
    longBtBg: {
        width: width - unitWidth * 200,
        height: unitWidth * 150,
        borderRadius: unitWidth * 100,
        backgroundColor: Color.longBtColor,
        alignItems: 'center',
        justifyContent: 'center',
    },

    btText: {
        color: 'white',
        fontSize: textSizebig
    },
})