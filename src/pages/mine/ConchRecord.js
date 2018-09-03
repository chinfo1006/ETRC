/**
 * Created by leaf on 2018/8/21.
 */

"use strict"
import React, {Component} from 'react';
import {
    View,
    Text,
    FlatList
} from 'react-native';

import {connect} from 'react-redux'
import TitleBar from "../../components/titlebar/TitleBar";
import Images from '../../images'
import NoData from "../../components/NoData";
import ConchRecordItem from "../../items/ConchRecordItem";
import {GetWithdrawalsByList} from "../../server/ServerApi";
import WhiteSpace from "../../components/whitespace/WhiteSpace";

class ConchRecord extends Component {

    state = {
        data: [],
        pageIndex: 1,
        hadMode: true,
    }

    componentDidMount() {
        GetWithdrawalsByList({
            pageIndex: 1,
            status: -1
        }, (res) => {
            if (!res) return
            this.setState({
                data: res,
                hadMore: res.length == 100,
                pageIndex: 2
            })
        })
    }

    onRefresh() {
        GetWithdrawalsByList({
            pageIndex: 1,
            status: -1
        }, (res) => {
            if (!res) return
            this.setState({
                data: res,
                hadMore: res.length == 100,
                pageIndex: 2
            })
        })
    }

    loadMore() {
        if (this.state.pageIndex != 1 && this.state.hadMode) {
            GetWithdrawalsByList({
                pageIndex: this.state.pageIndex,
                status: -1
            }, (res) => {
                if (!res) return
                const list = this.state.data
                this.setState({
                    data: list.concat(res),
                    hadMore: res.length == 100,
                    pageIndex: this.state.pageIndex + 1
                })
            })
        }
    }

    render() {
        const {navigation} = this.props
        return (
            <View style={BaseStyle.background}>
                <TitleBar title={'兑换记录'} navigation={navigation}/>
                <FlatList
                    style={{flex: 1}}
                    data={this.state.data}
                    onRefresh={this.onRefresh.bind(this)}
                    refreshing={false}
                    keyExtractor={(item, index) => "list" + index}
                    onEndReachedThreshold={0.1}
                    onEndReached={this.loadMore.bind(this)}
                    ListEmptyComponent={<NoData text={"暂无数据"}/>}
                    ItemSeparatorComponent={() => <WhiteSpace size={10}/>}
                    renderItem={({item, index}) => {
                        return (
                            <ConchRecordItem item={item}/>
                        )
                    }}/>
            </View>
        )
    }
}

function mapStateToProps(state) {
    return {}
}

function mapDispatchToProps(dispatch) {
    return {}
}

export default connect(mapStateToProps, mapDispatchToProps)(ConchRecord)