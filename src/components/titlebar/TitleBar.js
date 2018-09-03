/**
 * Created by Tloy on 2018/1/2.
 */


"use strict";

import React, {Component} from 'react';
import PropTypes from 'prop-types';
import {
    Text,
    View,
    Image,
    StatusBar,
    TouchableOpacity,
    StyleSheet,
} from 'react-native';
import {unitWidth, width, titleHeight, statusBarHeight, textSizebig} from "../../utils/AdapterUtilNew";
import * as Color from '../../configs/Color'
import StatusBarWhiteSpace from "../whitespace/StatusBarWhiteSpace";
import ScrollTitle from "../ScrollTitle";
import Images from '../../images'

//自定义titleBar
export default class TitleBar extends Component {
    static propTypes = {
        title: PropTypes.string.isRequired,
        navigation: PropTypes.object.isRequired,
        hideLeftArrow: PropTypes.bool,
        pressLeft: PropTypes.func,
        left: PropTypes.string,
        pressRight: PropTypes.func,
        backgroundColor: PropTypes.string,
        titleColor: PropTypes.string,
        right: PropTypes.string,
        rightImage: Image.propTypes.source
    }

    static defaultProps = {
        title: "",
        hideLeftArrow: false,
        pressRight: () => {
        },
    }


    //执行返回
    back() {
        if (this.props.pressLeft) {
            this.props.pressLeft()
            return
        }
        this.props.navigation.goBack(); //返回上一个页面
    }

    render() {
        const {backgroundColor, titleColor} = this.props
        return (
            <View style={{
                width: width,
                height: titleHeight,
                backgroundColor: backgroundColor || Color.titleBarBackground,
            }}>
                <StatusBar backgroundColor={"transparent"}
                           barStyle={'light-content'}
                           translucent={true}/>
                <StatusBarWhiteSpace/>
                <View
                    style={{
                        justifyContent: 'space-between',
                        flexDirection: 'row',   // 水平排布
                        alignItems: 'center',  // 使元素垂直居中排布, 当flexDirection为column时, 为水平居中
                        width: width,
                        height: titleHeight - statusBarHeight,
                        backgroundColor: this.props.backgroundColor || Color.titleBarBackground,
                    }}>

                    {this.props.hideLeftArrow ? (
                        <View style={TitleBarStyle.left}/>
                    ) : (
                        <TouchableOpacity activeOpacity={1} onPress={this.back.bind(this)}
                                          style={TitleBarStyle.left}>
                            <Image style={TitleBarStyle.titleLeftImage}
                                   source={Images.public.arrow_left}/>
                            <Text style={TitleBarStyle.leftText}>{this.props.left}</Text>
                        </TouchableOpacity>
                    )}
                    <View style={TitleBarStyle.middle}>
                        {this.props.title.length > 10 ? (
                            <ScrollTitle
                                title={this.props.title}/>
                        ) : (
                            <Text numberOfLines={1}
                                  style={[TitleBarStyle.middleTitle, titleColor ? {color: titleColor} : null]}>{this.props.title}</Text>
                        )}
                    </View>
                    {this.renderRight()}
                </View>
            </View>
        );
    }

    renderRight() {
        if (!this.props.right && !this.props.rightImage) {
            return <View style={TitleBarStyle.right}/>
        }
        return (
            <TouchableOpacity activeOpacity={1} style={TitleBarStyle.right}
                              onPress={() => {
                                  this.props.pressRight()
                              }}>
                {typeof this.props.right == 'object' ? (this.props.right) : (
                    <Text style={TitleBarStyle.rightText}>{this.props.right}</Text>
                )}
                {this.props.rightImage ? (
                    <Image style={TitleBarStyle.rightImage} source={this.props.rightImage}/>
                ) : (null)}
            </TouchableOpacity>
        )
    }
}

const TitleBarStyle = StyleSheet.create({
    background: {
        justifyContent: 'space-between',
        flexDirection: 'row',   // 水平排布
        height: titleHeight,
        backgroundColor: Color.titleBarBackground,
        alignItems: 'center',  // 使元素垂直居中排布, 当flexDirection为column时, 为水平居中
        width: width,
    },
    left: {
        width: unitWidth * 180,
        height: titleHeight,
        flexDirection: 'row',
        justifyContent: 'flex-start',
        alignItems: 'center',
        paddingLeft: unitWidth * 10,
        // backgroundColor: 'blue'
    },
    middle: {
        width: width - unitWidth * 360,
        height: titleHeight,
        justifyContent: 'center',
        alignItems: 'center',
    },
    middleTitle: {
        fontSize: unitWidth * 40,
        color: "white",
        alignItems: 'center',
        justifyContent: 'center'
    },

    right: {
        width: unitWidth * 180,
        height: titleHeight,
        flexDirection: 'row',
        justifyContent: 'flex-end',
        alignItems: 'center',
        paddingRight: unitWidth * 30,
        // backgroundColor: 'blue'
    },

    leftText: {
        fontSize: unitWidth * 30,
        color: "white",
        alignItems: 'center',
        justifyContent: 'center'
    },

    rightText: {
        fontSize: unitWidth * 30,
        color: "white",
        alignItems: 'center',
        justifyContent: 'center'
    },
    rightImage: {
        width: unitWidth * 60,
        height: unitWidth * 60,
        resizeMode: 'contain',
        marginLeft: unitWidth * 5,
    },

    titleLeftImage: {
        width: unitWidth * 50,
        height: unitWidth * 35,
        marginRight: unitWidth * 5,
        resizeMode: 'contain'
    },

    homeTitleIcon: {
        width: unitWidth * 213,
        height: unitWidth * 52,
        resizeMode: 'stretch'
    },
    titleRightImage: {
        width: unitWidth * 65,
        height: unitWidth * 65,
        resizeMode: 'contain'
    },
});
