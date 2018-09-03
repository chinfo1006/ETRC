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
import {HomeStyle, TitleStyle} from '../../styles';
import Picker from 'antd-mobile-rn/lib/picker'
import List from 'antd-mobile-rn/lib/list'
import city from '../../jsondate/area.json'
import * as Color from '../../configs/Color'
import Images from '../../images'
import StatusBarWhiteSpace from "../whitespace/StatusBarWhiteSpace";
import {width, unitWidth, titleHeight, statusBarHeight} from "../../utils/AdapterUtil";

/**
 * 顶部搜索组件
 */
export default class TitleBarSearchRight extends Component {
    constructor(props) {
        super(props);
        //this.search = this.search.bind(this)
        this.state = {
            seachText: '',
            near: 'near',
            inputValue: '',
        }

    }


    static propTypes = {
        city: PropTypes.string.isRequired,
        onChangeCity: PropTypes.func.isRequired,
        search: PropTypes.func,
    }


    /**
     * 搜索
     */
    // search() {

    //
    //  if (!this.state.inputValue) return

    // toast('input'+this.state.inputValue)

    // this.props.navigator.push({
    //     component: RouteConfig.HomeTab.name,
    //     params: {
    //         keyWord: this.state.seachText,
    //         near:this.state.near,
    //     }
    // })

    // }

    render() {
        return (
            <View style={{
                width: width,
                height: titleHeight + statusBarHeight,
                backgroundColor: Color.titleBarBackground,
            }}>
                <StatusBar
                    backgroundColor={"transparent"}
                    barStyle={'light-content'}
                    translucent={true}/>
                <StatusBarWhiteSpace/>
                <View style={TitleStyle.titleBar}>
                    <View style={{flexDirection: 'row', backgroundColor: Color.themeColor}}>
                        <Text style={HomeStyle.cityText}>{this.props.city}</Text>
                        <Image style={HomeStyle.TitleBarArrow} source={Images.public.arrow_dowm_white}/>
                    </View>
                    <View style={HomeStyle.picker}>
                        <Picker
                            extra=""
                            data={city}
                            cols={2}
                            onChange={(val) => {
                                this.props.onChangeCity(val[1])
                            }}>
                            <List.Item arrow="empty" style={{backgroundColor: '#00000000'}}></List.Item>
                        </Picker>
                    </View>
                    <View style={{
                        flex: 1,
                        flexDirection: 'row',
                        width: unitWidth * 700,
                        height: unitWidth * 130,
                        borderRadius: unitWidth * 50,
                        alignItems: 'center',
                        paddingLeft: unitWidth * 10,
                        backgroundColor: Color.home_hLine_background,
                    }}>
                        <TouchableOpacity activeOpacity={0.5} onPress={() => {
                            this.props.search(this.state.inputValue)
                        }}>
                            <Image style={TitleStyle.searchIcon} source={Images.public.search}/>
                        </TouchableOpacity>

                        <TextInput
                            style={{flex: 1}}
                            placeholder={'请输入你要搜索的名称'}
                            value={this.state.inputValue}
                            onChangeText={
                                (val) => {
                                    //toast(val);
                                    this.setState({
                                        inputValue: val,
                                    })
                                }
                            }
                        />

                    </View>
                    <View style={{width: unitWidth * 60}}></View>
                    <TouchableOpacity activeOpacity={0.5} onPress={() => {
                        this.props.search(this.state.inputValue)
                    }}><Text style={{color: 'white'}}>搜索</Text></TouchableOpacity>

                    <View style={{width: unitWidth * 60}}></View>
                </View>
            </View>
        );
    }
}
