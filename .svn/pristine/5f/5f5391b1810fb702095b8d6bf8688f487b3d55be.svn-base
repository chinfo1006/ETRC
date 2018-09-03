/**
 * Created by Tloy on 2016/8/16.
 */


"use strict";
import React, {Component} from 'react';
import {
    Text,
    View,
    Image,
    NetInfo,
    TouchableOpacity,
    StyleSheet,
    TextInput,
    StatusBar
} from 'react-native';
import PropTypes from 'prop-types';
import {TitleStyle} from '../../styles';
import * as Color from '../../configs/Color'
import Images from '../../images'
import StatusBarWhiteSpace from "../whitespace/StatusBarWhiteSpace";
import {width, unitWidth, titleHeight, statusBarHeight} from "../../utils/AdapterUtil";

export default class TitleBarOnlySearch extends Component {
    constructor(props) {
        super(props);
        this.search = this.search.bind(this)
        this.state = {
            seachText: '',
        }
    }

    // static propTypes = {
    //     city: PropTypes.string.isRequired,
    //     onChangeCity: PropTypes.func.isRequired,
    // }

    search() {
        // if (!this.state.seachText) return
        // this.props.navigator.push({
        //     component: SearchBusinessList,
        //     params: {
        //         keyWord: this.state.seachText
        //     }
        // })
    }

    render() {
        return (
            <View style={{
                width: width,
                height: titleHeight + statusBarHeight,
                backgroundColor: Color.titleBarBackground,
            }}>
                <StatusBar backgroundColor={"transparent"}
                           barStyle={'light-content'}
                           translucent={true}/>
                <StatusBarWhiteSpace/>
                <View style={TitleStyle.titleBar}>

                    <View style={TitleStyle.searchBlock}>
                        <Image style={TitleStyle.searchIcon} source={Images.public.search}/>
                        <TouchableOpacity activeOpacity={0.5} onPress={this.search}>
                            <Text>搜索商户名,商品名</Text>
                        </TouchableOpacity>
                    </View>
                    <View style={{flex: 1}}></View>
                </View>
            </View>
        );
    }
}
