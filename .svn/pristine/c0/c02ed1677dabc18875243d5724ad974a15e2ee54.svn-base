'use strict';

import React, {Component} from 'react';
import {
    View,
    FlatList,
    Text,
    TouchableOpacity
} from 'react-native';
import RouteConfig from "../../configs/RouteConfig";
import {GetOrderListByUseId} from "../../server/ServerApi";
import {BaseStyle} from '../../styles'
import LessonOrderItem from "../../items/LessonOrderItem";
import WhiteSpace from "../../components/whitespace/WhiteSpace";
import NoData from "../../components/NoData";

/**
 *  回购记录
 */
export default class LessonOrder extends Component {
    pageIndex = 1;

    constructor(props) {
        super(props);
        this.state = {
            list: [],
            refreshing: false,
        }
    }

    componentDidMount() {
        this.queryDate()
    }

    onRefresh() {
        this.setState({
            refreshing: true,
        });
        this.pageIndex = 1
        this.queryDate();
    };

    loadMoreData() {
        if (this.pageIndex == 1) return;
        this.queryDate();
    }

    queryDate() {
        GetOrderListByUseId({
            pageIndex: this.pageIndex,
            status: this.props.type
        }, (res) => {
            if (res.length == 0) return
            if (this.pageIndex == 1) {
                this.setState({
                    list: res.List,
                    refreshing: false
                })
            } else {
                const oldList = this.state.list
                this.pageIndex++
                this.setState({
                    list: oldList.concat(res.List),
                    refreshing: false
                })
            }
        })
    }


    render() {
        return (
            <View style={BaseStyle.background}>
                <FlatList
                    style={{flex: 1}}
                    keyExtractor={(item, index) => "list" + index}
                    data={this.state.list}
                    onRefresh={this.onRefresh.bind(this)}
                    refreshing={this.state.refreshing}
                    onEndReachedThreshold={0.3}
                    onEndReached={this.loadMoreData.bind(this)}
                    ListEmptyComponent={<NoData/>}
                    ItemSeparatorComponent={() => {
                        return (<WhiteSpace size={40}/>)
                    }}
                    renderItem={({item, index}) => {
                        return (
                            <LessonOrderItem
                                item={item} index={index}
                                onPress={() => {
                                    console.log(item.Id)
                                    if (item.ApprovalStatus == "已完成") {
                                        this.props.navigation.navigate(RouteConfig.OrderByIdDetail.name, {id: item.Id});
                                    } else {
                                        this.props.navigation.navigate(RouteConfig.StudyVoucherPage.name, {'id': item.Id});
                                    }
                                }}/>
                        )
                    }}
                />
            </View>
        )
    }
}



