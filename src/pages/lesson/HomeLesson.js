/**
 *
 */


"use strict";

import React, {Component} from "react";
import {
    Text,
    View,
    Image,
    FlatList,
    TouchableOpacity,
    ScrollView,
    TextInput,
    StatusBar,
    Platform
} from "react-native";
import Carousel from "antd-mobile-rn/lib/carousel";
import {connect} from "react-redux";
import * as HomeLessonAction from "../../actions/HomeLessonAction";
import * as Color from "../../configs/Color";
import {baseUrl} from "../../configs/Config";
import RouteConfig from "../../configs/RouteConfig";
import Images from "../../images";
import {BaseStyle, StudyStyle} from "../../styles";
import {unitWidth, width} from "../../utils/AdapterUtilNew";
import StatusBarWhiteSpace from "../../components/whitespace/StatusBarWhiteSpace";
import WhiteSpace from "../../components/whitespace/WhiteSpace";
import {concatUrl} from "../../utils/UrlUtil";
import * as LessonSearchAction from "../../actions/LessonSearchAction";
import NewLessonItem from "../../items/NewLessonItem";

class HomeLesson extends Component {

    constructor(props) {
        super(props);
    }

    componentDidMount() {
        this.queryData()
    };

    queryData() {
        let courseParams = {size: 5};
        this.props.getCourseTopList(); //顶部Banner
        this.props.getProductTypeList(courseParams); //获取课程类型
        this.props.getProductCenterList(); //获取热门 跟今日精选
        this.props.getCourseMiddleList(); //中部区域 轮播图片

        //最新课程参数
        let latestParams = {
            pageIndex: this.props.pageIndex,
        };
        this.props.getNewProductList(latestParams); //获取最新课程
    }

    onRefresh() {
        this.queryData()
    }

    loadMoreData() {
        if (this.props.pageIndex != 1) {
            this.queryData()
        }
    }

    render() {
        const {navigation, isRefresh, IsPayment, newList, searchLessonByKey, inputSearchKey} = this.props;
        return (
            <View style={BaseStyle.background}>
                <View style={StudyStyle.titleViewContainer}>
                    <StatusBar backgroundColor={"transparent"}
                               barStyle={'light-content'}
                               translucent={true}/>
                    <StatusBarWhiteSpace backgroundColor={'red'}/>
                    <View style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
                        <View
                            activeOpacity={1}
                            style={StudyStyle.searchBar}>
                            <TouchableOpacity
                                onPress={() => {
                                    searchLessonByKey({
                                        'pageIndex': 1,
                                        'keyValue': this.searchKey,
                                    })
                                    navigation.navigate(RouteConfig.LessonSearch.name, {})
                                }}>
                                <Image
                                    style={StudyStyle.searchBarIcon}
                                    source={Images.public.search}/>
                            </TouchableOpacity>

                            <TextInput
                                style={StudyStyle.searchBarInput}
                                placeholder={"搜索课程名称"}
                                enablesReturnKeyAutomatically={true}
                                underlineColorAndroid={"transparent"}
                                onChangeText={(val) => {
                                    inputSearchKey(val)
                                }}
                                onSubmitEditing={(event) => { //event.nativeEvent.text
                                    navigation.navigate(RouteConfig.LessonSearch.name)
                                }}
                            />
                        </View>
                    </View>
                </View>

                <FlatList
                    style={{flex: 1, backgroundColor: 'white'}}
                    showsVerticalScrollIndicator={false}
                    keyExtractor={(item, index) => "list" + index}
                    ListHeaderComponent={this.renderHeader.bind(this)}
                    onRefresh={this.onRefresh.bind(this)}
                    refreshing={isRefresh}
                    onEndReachedThreshold={0.3}
                    numColumns={2}
                    onEndReached={this.loadMoreData.bind(this)}
                    data={newList}
                    renderItem={({item, index}) => {
                        return (
                            <NewLessonItem
                                item={item}
                                IsPayment={IsPayment}
                                onPress={() => {
                                    navigation.navigate(RouteConfig.LessonDetail.name, {id: item.Id});
                                }}/>
                        )
                    }}
                />
            </View>
        );
    }

    renderHeader() {
        const {navigation, todayList, hotList} = this.props
        return (
            <View>
                <Carousel
                    style={{backgroundColor: "#ffffff"}}
                    autoplayTimeout={2000}
                    selectedIndex={0}
                    autoplay={true}
                    infinite
                    afterChange={() => {
                    }}>
                    {this.renderBanner()}
                </Carousel>
                <View style={StudyStyle.typeContainer}>
                    {this.renderTypeView()}
                </View>
                <View style={{height: 10, backgroundColor: Color.baseBackground}}/>
                <View style={StudyStyle.studyTodayTitleStyle}>
                    <Text style={StudyStyle.titleLeftStyle}>每日精选</Text>
                    <TouchableOpacity
                        activeOpacity={1}
                        onPress={() => {
                            navigation.navigate(RouteConfig.LessonTab.name, {index: 0});
                        }}
                    >
                        <View style={StudyStyle.moreViewStyle}>
                            <Text style={StudyStyle.newsMore}>更多></Text>
                        </View>
                    </TouchableOpacity>
                </View>
                <FlatList
                    style={{backgroundColor: 'white'}}
                    data={todayList}
                    keyExtractor={(item, index) => "list" + index}
                    numColumns={3}
                    renderItem={this.renderTodayItem.bind(this)}
                />
                <View style={{height: 10, backgroundColor: Color.baseBackground}}/>
                <Carousel
                    style={{backgroundColor: Color.white}}
                    autoplayTimeout={2000}
                    selectedIndex={0}
                    autoplay={true}
                    infinite
                    afterChange={() => {
                    }}
                >
                    {this.renderCenterBanner()}
                </Carousel>
                <View style={{height: 10, backgroundColor: Color.baseBackground}}/>
                <View style={StudyStyle.studyTodayTitleStyle}>
                    <Text style={StudyStyle.titleLeftStyle}>热门课程</Text>
                    <TouchableOpacity
                        activeOpacity={1}
                        onPress={() => {
                            navigation.navigate(RouteConfig.LessonTab.name);
                        }}
                    >
                        <View style={StudyStyle.moreViewStyle}>
                            <Text style={StudyStyle.newsMore}>更多></Text>
                        </View>
                    </TouchableOpacity>
                </View>

                <FlatList
                    data={hotList}
                    keyExtractor={(item, index) => "list" + index}
                    numColumns={1}
                    renderItem={this.renderHotItem.bind(this)}
                />
                <View style={{height: 10, backgroundColor: Color.baseBackground}}/>
                <View style={StudyStyle.studyTodayTitleStyle}>
                    <Text style={StudyStyle.titleLeftStyle}>最新课程</Text>
                    <TouchableOpacity
                        activeOpacity={1}
                        onPress={() => {
                            navigation.navigate(RouteConfig.LessonTab.name);
                        }}
                    >
                        <View style={StudyStyle.moreViewStyle}>
                            <Text style={StudyStyle.newsMore}>更多></Text>
                        </View>
                    </TouchableOpacity>
                </View>
            </View>
        )
    }

    /**
     * 最上面轮播图
     */
    renderBanner = () => {
        const {topBanner} = this.props;
        let bannerViews = [];
        for (let i = 0; i < topBanner.length; i++) {
            let item = topBanner[i];
            bannerViews.push(
                <TouchableOpacity
                    style={StudyStyle.bannerViewContainer}
                    key={"banner" + 1}
                    activeOpacity={1}
                    onPress={() => {
                        this.pressBanner(item)
                    }}
                >
                    <Image
                        style={StudyStyle.bannerImage}
                        source={{uri: baseUrl + item.ImgUrl}}
                    />
                </TouchableOpacity>
            );
        }
        return bannerViews;
    };

    /**
     * 类型视图层
     */
    renderTypeView() {
        const {navigation, typeList} = this.props;
        let views = [];
        for (let i = 0; i < typeList.length; i++) {
            if (i >= 5) {
                break;
            }

            views.push(
                <TouchableOpacity
                    key={"index" + i}
                    onPress={() => {
                        navigation.navigate(RouteConfig.LessonTab.name, {index: i + 1});
                    }}
                >
                    <View style={StudyStyle.typeItemView} key={"swiperPage" + i}>
                        {typeList[i].Img ? (
                            <Image
                                source={{uri: baseUrl + typeList[i].Img}}
                                style={{width: unitWidth * 114, height: unitWidth * 114}}
                            />
                        ) : (
                            <Image
                                source={Images.public.logo}
                                style={{width: unitWidth * 114, height: unitWidth * 114}}
                            />
                        )}

                        <Text numberOfLines={1} style={{color: "#666666", marginTop: 3}}>{typeList[i].TypeName}</Text>
                    </View>
                </TouchableOpacity>
            );
        }
        return views;
    };

    renderTodayItem({item, index}) {
        return (
            <TouchableOpacity
                onPress={() => {
                    this.props.navigation.navigate(RouteConfig.LessonDetail.name, {id: item.Id});
                }}
            >
                <View style={StudyStyle.renderItemViewContainer}>
                    {item.ThumbnailIUrl ? (
                        <Image
                            source={{uri: baseUrl + item.ThumbnailIUrl}}
                            style={{
                                width: width / 3 - unitWidth * 30,
                                height: width / 3 * 0.6,
                                borderRadius: 5,
                                borderColor: "#bfbfbf",
                            }}
                        />
                    ) : (
                        <Image
                            source={Images.public.logo}
                            style={{
                                width: width / 3 - unitWidth * 30,
                                height: width / 3 * 0.6,
                                borderRadius: 5,
                                borderColor: "#bfbfbf",
                                borderWidth: 1,
                            }}
                        />
                    )}
                    <Text numberOfLines={2}
                          style={{fontSize: 13, lineHeight: 15, marginTop: 3}}>{item.ProductName}</Text>
                </View>
            </TouchableOpacity>
        )
    }

    /**
     * 最中间轮播图
     */
    renderCenterBanner() {
        const {centerBanner} = this.props;
        let bannerViews = [];
        for (let i = 0; i < centerBanner.length; i++) {
            let item = centerBanner[i];
            bannerViews.push(
                <TouchableOpacity
                    style={StudyStyle.banner}
                    key={"banner" + 1}
                    activeOpacity={1}
                    onPress={() => {
                        this.pressBanner(item)
                    }}
                >
                    <Image
                        style={StudyStyle.bannerImage}
                        source={{uri: baseUrl + item.ImgUrl}}
                    />
                </TouchableOpacity>
            );
        }

        return bannerViews;
    }

    /**
     * 热门课程列表
     */
    renderHotItem({item, index}) {
        const {navigation, IsPayment} = this.props;
        return (
            <TouchableOpacity
                onPress={() => {
                    navigation.navigate(RouteConfig.LessonDetail.name, {id: item.Id});
                }}
            >
                <View style={StudyStyle.hotItemViewContainer}>
                    <View style={StudyStyle.hotItemLeftImgViewContainer}>
                        {item.ThumbnailIUrl ? (
                            <Image
                                source={{uri: baseUrl + item.ThumbnailIUrl}}
                                style={StudyStyle.hotItemLeftImg}
                            />
                        ) : (
                            <Image
                                source={Images.public.log}
                                style={StudyStyle.hotItemLeftImg}
                            />
                        )}
                    </View>

                    <View style={StudyStyle.hotRightView}>
                        <View style={StudyStyle.hotSpaceView1}/>
                        <Text style={StudyStyle.hotItemRightTextTop}>{item.ProductName}</Text>
                        <View style={StudyStyle.hotSpaceView2}/>
                        <View style={StudyStyle.hotRightSpaceBetweenView}>
                            {Platform.OS == "android" || IsPayment ? (
                                <Text style={StudyStyle.hotRightSpaceBetweenLeftText}>
                                    ¥{item.ProductPrice}
                                </Text>
                            ) : (null)}
                            <Text style={StudyStyle.hotRightSpaceBetweenRightText}>
                                观看:{item.Browse}次
                            </Text>
                        </View>
                    </View>
                </View>
            </TouchableOpacity>
        );
    };

    pressBanner(item) {
        if (item.LinkUrl) {
            this.props.navigation.navigate(RouteConfig.WebViewPage.name, {
                title: item.FullHead,
                url: concatUrl(item.LinkUrl)
            })
        }
    };
}

/**
 * 把state绑定到props,在props中获取数据
 */
function mapStateToProps(state) {
    return {
        ...state.iosReviewReducer,
        ...state.HomeLessonReducer,
    };
}

/**
 * 把dispatch绑定到props  可以直接调用对应的方法执行dispatch
 */
function mapDispatchToProps(dispatch) {
    return {
        getCourseTopList: params => dispatch(HomeLessonAction.getCourseTopList(params)),
        getProductTypeList: params => dispatch(HomeLessonAction.getProductTypeList(params)),  //课程分类
        getProductCenterList: params => dispatch(HomeLessonAction.getProductCenterList(params)),
        getCourseMiddleList: params => dispatch(HomeLessonAction.getCourseMiddleList(params)),
        getNewProductList: params => dispatch(HomeLessonAction.getNewProductList(params)),

        inputSearchKey: (key) => dispatch(LessonSearchAction.inputSearchKey(key)), //输入搜索内容
        searchLessonByKey: (params) => dispatch(LessonSearchAction.searchLessonByKey(params)), //搜索课程
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(HomeLesson);
