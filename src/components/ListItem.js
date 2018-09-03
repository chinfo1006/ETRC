/**
 * Created by Tloy on 2018/1/7.
 */


'use strict';

import React, {Component} from 'react'
import {
    View,
    Text,
    Image,
    TouchableOpacity,
    StyleSheet
} from 'react-native'

import {ComponentStyle} from '../styles'
import Images from '../images'
import PropTypes from 'prop-types';
import {width, unitWidth} from "../utils/AdapterUtil";
import * as Color from '../configs/Color'

export default class ListItem extends Component {
    static propTypes = {
        title: PropTypes.string.isRequired,
        text: PropTypes.string,
        noArrow: PropTypes.bool,
        source: Image.propTypes.source,
        onPress: PropTypes.func
    }

    static defaultPropTypes = {
        onPress: function () {
        }
    }

    render() {
        return (
            <TouchableOpacity style={this.props.style || styles.listItem} activeOpacity={1}
                              onPress={this.props.onPress}>
                {this.props.source ? (
                    <Image style={styles.listItemIcon}
                           source={this.props.source}/>
                ) : (null)}
                <Text style={styles.listItemTitle}>{this.props.title}</Text>
                <View style={{flex: 1}}/>
                <Text style={this.props.textStyle || styles.listItemText}>{this.props.text}</Text>
                {this.props.noArrow ? (
                    <View style={styles.listItemArrow}/>
                ) : (
                    <Image style={styles.listItemArrow}
                           resizeMode='contain'
                           source={Images.public.arrow_right_grey}/>
                )}
            </TouchableOpacity>
        )
    }
}

const styles = StyleSheet.create({
    listItem: {
        width: width,
        height: unitWidth * 160,
        flexDirection: 'row',
        paddingLeft: unitWidth * 30,
        alignItems: 'center',
        backgroundColor: 'white',
        // borderBottomColor: Color.gray,
        // borderBottomWidth: unitWidth * 2
    },

    listItemIcon: {
        width: unitWidth * 75,
        height: unitWidth * 75,
        resizeMode: 'stretch',
        marginRight: unitWidth * 30
    },
    listItemTitle: {
        // flex: 1,
        color: 'black',
        fontSize: unitWidth * 45,
        // backgroundColor:'blue'
        // marginRight: unitWidth * 20
    },
    listItemText: {
        // flex: 1,
        // color: 'black',
        fontSize: unitWidth * 45,
        marginRight: unitWidth * 20,
        // backgroundColor:'red'
    },
    listItemArrow: {
        width: unitWidth * 28,
        height: unitWidth * 40,
        marginRight: unitWidth * 30,
        // backgroundColor:'black'
    },
})