/**
 * Created by Tloy on 2018/8/20.
 */

"use strict"
import React, {Component} from 'react';
import {
    View,
    Text,
    FlatList,
    ImageBackground
} from 'react-native';
import {BaseStyle, CoinGiveRecordStyle} from '../../styles'
import TitleBar from "../../components/titlebar/TitleBar";
import BasePage from "../BasePage";
import NoData from "../../components/NoData";
import BeikeRecordItem from "../../items/BeikeRecordItem";
import {GetMyConchRecordUserListApi} from "../../server/ServerApi";

export default class BeikeRecord extends BasePage {

    state = {
        List: [],
        pageIndex: 1,
        hadMore: false
    }

    componentDidMount() {
        this.getData()
    }


    getData() {
        GetMyConchRecordUserListApi(1, (res) => {
            this.setState({
                List: res.List,
                pageIndex: 2,
                hadMore: res.List.length >= 10
            })
        })
    }

    onRefresh() {
        this.getData()
    }

    loadMoreData() {
        if (this.state.pageIndex == 1 || !this.state.hadMore) return

        GetMyConchRecordUserListApi(this.state.pageIndex, (res) => {
            let oldList = this.state.List
            this.setState({
                List: oldList.concat(res.List),
                pageIndex: this.state.pageIndex + 1,
                hadMore: res.List.length >= 10
            })
        })
    }

    render() {
        const {navigation, List, userInfo} = this.props
        return (
            <View style={BaseStyle.backgroundAlignCenter}>
                <TitleBar title={'贝壳记录'} navigation={navigation}/>
                <FlatList
                    style={{flex: 1}}
                    onRefresh={this.onRefresh.bind(this)}
                    refreshing={false}
                    data={this.state.List}
                    keyExtractor={(item, index) => "list" + index}
                    onEndReachedThreshold={0.2}
                    onEndReached={this.loadMoreData.bind(this)}
                    ListEmptyComponent={<NoData/>}
                    renderItem={({item, index}) => <BeikeRecordItem item={item}/>}
                />
            </View>
        )
    }
}