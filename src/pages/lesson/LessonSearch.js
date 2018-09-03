/**
 *
 */


"use strict";

/**
 *  课程搜索
 */
import React, {Component} from "react";
import {
    Text,
    View,
    Image,
    FlatList,
    TouchableOpacity,
    Animated,
    NativeModules,
    NativeEventEmitter,
    ScrollView,
    TextInput,
} from "react-native";
import {connect} from "react-redux";
import * as LessonSearchAction from "../../actions/LessonSearchAction";
import {BaseStyle, LessonSearchStyle, StudyStyle} from "../../styles/index";
import RouteConfig from "../../configs/RouteConfig";
import TitleBar from "../../components/titlebar/TitleBar";
import Images from "../../images";
import WhiteSpace from "../../components/whitespace/WhiteSpace";
import LessonItem from "../../items/LessonItem";
import NoData from "../../components/NoData";

/**
 * 搜索列表
 */
class LessonSearch extends Component {
    constructor(props) {
        super(props);
    }

    componentDidMount() {
        this.props.searchLessonByKey({
            'pageIndex': 1,
            'keyValue': this.props.searchKey,
        })
    };

    /**
     * 下拉刷新
     */
    onRefresh() {

    };

    loadMoreData() {
    };

    render() {
        const {navigation, searchList, isRefresh, searchKey, pageIndex, inputSearchKey, searchLessonByKey, IsPayment} = this.props;
        return (
            <View style={BaseStyle.background}>
                <TitleBar title={"搜索课程"} navigation={navigation}/>
                <View style={LessonSearchStyle.searchBlock}>
                    <View
                        activeOpacity={1}
                        style={LessonSearchStyle.searchBar}>
                        <TouchableOpacity
                            onPress={() => {
                                let params = {
                                    'pageIndex': pageIndex,
                                    'keyValue': searchKey,
                                }
                                searchLessonByKey(params)
                            }}>
                            <Image
                                style={LessonSearchStyle.searchBarIcon}
                                source={Images.public.search}/>
                        </TouchableOpacity>

                        <TextInput
                            style={LessonSearchStyle.searchBarInput}
                            placeholder={"搜索课程名称"}
                            enablesReturnKeyAutomatically={true}
                            underlineColorAndroid={"transparent"}
                            onChangeText={(text) => {
                                inputSearchKey(text);
                            }}
                            onSubmitEditing={() => {
                                searchLessonByKey({
                                    'pageIndex': pageIndex,
                                    'keyValue': searchKey,
                                })
                            }}
                        />
                    </View>
                </View>
                <WhiteSpace size={30}/>
                <FlatList
                    data={searchList}
                    keyExtractor={(item, index) => "list" + index}
                    refreshing={isRefresh}
                    onRefresh={this.onRefresh.bind(this)}
                    onEndReached={() => {
                        this.loadMoreData();
                    }}
                    numColumns={2}
                    ListEmptyComponent={<NoData/>}
                    renderItem={({item, index}) => {
                        return (
                            <LessonItem
                                item={item}
                                IsPayment={IsPayment}
                                onPress={() => {
                                    navigation.navigate(RouteConfig.LessonDetail.name, {'id': item.Id});
                                }}/>
                        )
                    }}/>
            </View>
        );
    }
}

/**
 * 把state绑定到props,在props中获取数据
 */
function mapStateToProps(state) {
    return {
        ...state.iosReviewReducer,
        ...state.LessonSearchReducer,
    }
}

/**
 * 把dispatch绑定到props  可以直接调用对应的方法执行dispatch
 */
function mapDispatchToProps(dispatch) {
    return {
        inputSearchKey: (key) => dispatch(LessonSearchAction.inputSearchKey(key)), //输入搜索内容
        searchLessonByKey: (params) => dispatch(LessonSearchAction.searchLessonByKey(params)), //搜索课程
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(LessonSearch);
