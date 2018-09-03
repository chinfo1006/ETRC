/**
 * Created by Tloy on 2018/8/8.
 */


"use strict"
import React, {Component} from 'react';
import {
    View,
    Text,
    FlatList,
    ImageBackground
} from 'react-native';
import {connect} from 'react-redux'
import {BaseStyle, RiskFundStyle, CoinGiveRecordStyle} from '../../styles'
import TitleBar from "../../components/titlebar/TitleBar";
import BasePage from "../BasePage";
import Images from '../../images'
import {insertMax} from "../../utils/NumberUtil";
import * as CoinGiveRecordAction from '../../actions/CoinGiveRecordAction'
import NoData from "../../components/NoData";
import CoinExchangeList from "../../items/CoinExchangeList";
import CoinGiveList from "../../items/CoinGiveList";
import CoinRecordItem from "../../items/CoinRecordItem";

class ETRCRecord extends BasePage {

    componentDidMount() {
        this.props.queryETRCRecord(1)
    }

    onRefresh() {
        this.props.queryETRCRecord(1)
    }

    loadMoreData() {
        if (this.props.pageIndex != 1 && this.props.hadMore) {
            this.props.queryETRCRecord(this.props.pageIndex)
        }
    }

    /**
     *  页面UI布局
     */
    render() {
        const {navigation, List, userInfo} = this.props
        return (
            <View style={BaseStyle.backgroundAlignCenter}>
                <TitleBar title={'ETRC记录'} navigation={navigation}/>
                <FlatList
                    style={{flex: 1}}
                    onRefresh={this.onRefresh.bind(this)}
                    refreshing={false}
                    data={List}
                    keyExtractor={(item, index) => "list" + index}
                    onEndReachedThreshold={0.2}
                    onEndReached={this.loadMoreData.bind(this)}
                    ListEmptyComponent={<NoData/>}
                    renderItem={({item, index}) => <CoinRecordItem item={item}/>}
                />
            </View>
        )
    }
}

/**
 * 把state绑定到props,在props中获取数据
 */
function mapStateToProps(state) {
    return {
        ...state.CoinGiveRecordReducer,
        ...state.mineReducer
    }
}

/**
 * 把dispatch绑定到props  可以直接调用对应的方法执行dispatch
 */
function mapDispatchToProps(dispatch) {
    return {
        queryETRCRecord: (pageIndex) => dispatch(CoinGiveRecordAction.queryETRCRecord(pageIndex))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(ETRCRecord)