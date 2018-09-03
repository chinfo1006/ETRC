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

/**
 * 顶部搜索组件
 */
export default class TitleBarSearch extends Component {
    constructor(props) {
        super(props);
        this.search = this.search.bind(this)
        this.state = {
            seachText: '',
            near: 'near',
        }
    }


    static propTypes = {
        city: PropTypes.string,
        onChangeCity: PropTypes.func,
        search: PropTypes.func,
    }


    /**
     * 搜索
     */
    search() {

        //
        //if (!this.state.seachText) return

        // this.props.navigator.push({
        //     component: RouteConfig.HomeTab.name,
        //     params: {
        //         keyWord: this.state.seachText,
        //         near:this.state.near,
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
                <StatusBar
                    backgroundColor={"transparent"}
                    barStyle={'light-content'}
                    translucent={true}/>
                <StatusBarWhiteSpace/>
                <View style={TitleStyle.titleBar}>
                    {/* <View style={{flexDirection: 'row', backgroundColor: Color.themeColor}}>
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
                    </View>  */}
                    <View style={{flex: 1}}></View>
                    <View style={TitleStyle.searchBlock}>
                        <Image style={TitleStyle.searchIcon} source={Images.public.search}/>
                        <TouchableOpacity activeOpacity={0.5} onPress={this.props.search}>
                            <Text>搜索课程名称</Text>
                        </TouchableOpacity>
                    </View>
                    <View style={{flex: 1}}></View>
                </View>
            </View>
        );
    }
}
