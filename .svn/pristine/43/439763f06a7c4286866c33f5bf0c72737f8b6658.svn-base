'use strict';

import React, {Component} from 'react';
import {
    Text,
    View,
    Image,
    TouchableOpacity,
    FlatList,
    ScrollView,
    ActivityIndicator,
    StyleSheet,
    TextInput,
} from 'react-native';
import {connect} from 'react-redux'
import {BaseStyle, MineFeedBackListStyle} from '../../styles'
import TitleBar from "../../components/titlebar/TitleBar";
import RouteConfig from "../../configs/RouteConfig";
import WhiteSpace from "../../components/whitespace/WhiteSpace";
import * as FeedBackAction from '../../actions/FeedBackAction'
import NoData from "../../components/NoData";

/**
 * 反馈列表
 */
class MineFeedBackList extends Component {
    constructor(props) {
        super(props);
    }

    componentDidMount() {
        this.props.queryFeedbackList(1)
    }

    /**
     * 渲染视图
     */
    render() {
        const {navigation, list} = this.props;
        return (
            <View style={BaseStyle.background}>
                <TitleBar
                    style={MineFeedBackListStyle.titleBarView}
                    title={"意见反馈列表"}
                    navigation={navigation}
                    right={'我要反馈'}
                    pressRight={() => {
                        navigation.navigate(RouteConfig.MineFeedBack.name);
                    }}/>
                <FlatList
                    style={MineFeedBackListStyle.list}
                    data={list}
                    keyExtractor={(item, index) => "list" + index}
                    ListEmptyComponent={<NoData/>}
                    ItemSeparatorComponent={() => {
                        return <WhiteSpace size={10}/>
                    }}
                    renderItem={
                        this.renderItemView.bind(this)
                    }
                />
            </View>
        )
    }

    /**
     * 返回的某一项的视图
     */
    renderItemView({item, index}) {
        return (
            <View style={MineFeedBackListStyle.itemContainer}>
                <Text style={MineFeedBackListStyle.questionDate}>{item.CreateDate}</Text>
                <WhiteSpace size={40}/>
                <Text style={MineFeedBackListStyle.question}>Q：{item.Content}</Text>
                <WhiteSpace size={30}/>
                {
                    item.ReplyDate ? (
                        <View style={MineFeedBackListStyle.answer}>
                            <Text style={MineFeedBackListStyle.questionDate}>回复（{item.ReplyDate}）</Text>
                            <WhiteSpace size={18}/>
                            <Text style={MineFeedBackListStyle.answerText}>{item.ReplyContent}</Text>
                        </View>
                    ) : (null)
                }
            </View>
        )
    }
}

/**
 * 把state绑定到props,在props中获取数据
 */
function mapStateToProps(state) {
    return state.FeedBackReducer
}

/**
 * 把dispatch绑定到props  可以直接调用对应的方法执行dispatch
 */
function mapDispatchToProps(dispatch) {
    return {
        queryFeedbackList: (pageIndex) => dispatch(FeedBackAction.queryFeedbackList(pageIndex))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(MineFeedBackList)


