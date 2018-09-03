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
    Animated,
    StyleSheet,
    NativeModules,
    NativeEventEmitter,
    ImageBackground,
    StatusBar,
    TextInput,
    Platform
} from 'react-native';

import {connect} from 'react-redux';
import Carousel from 'antd-mobile-rn/lib/carousel'
import {HomeStyle, MineStyle} from '../../styles'
import Images from '../../images'
import RouteConfig from "../../configs/RouteConfig";
import WhiteSpace from "../../components/whitespace/WhiteSpace";
import * as HomeAction from '../../actions/HomeAction';
import * as MallAction from '../../actions/MallAction';
import * as HomeTabAction from "../../actions/HomeTabAction";
import YoyxuanItem from "../../items/YoyxuanItem";
import LessonRankItem from "../../items/LessonRankItem";
import HomeLessonItem from "../../items/HomeLessonItem";
import AdView from "../../components/AdView";
import {baseUrl} from "../../configs/Config";
import {toast} from "../../utils/LogUtil";
import * as LoginAction from "../../actions/LoginAction";
import {concatUrl} from "../../utils/UrlUtil";
import StatusBarWhiteSpace from "../../components/whitespace/StatusBarWhiteSpace";
import ScrollNewsView from "../../components/ScrollNewsView";
import {postJson, postShowAllJson} from "../../server/Request";

//首页
class MainPage extends Component {
    //功能区
    functions = [
        {
            name: '课程列表',
            icon: Images.home.icon_function_lesson,
            routeName: "",
            mustLogin: false,
            code: 'lesson'
        },
        {
            name: '我要推荐',
            icon: Images.home.icon_function_share,
            routeName: RouteConfig.Share.name,
            // routeName: RouteConfig.Demo.name,
            mustLogin: true,
            code: 'share'
        },
        {
            name: 'ETRC转出',
            icon: Images.home.icon_function_help,
            routeName: RouteConfig.CoinGive.name,
            mustLogin: true,
            code: 'help'
        },
        {
            name: '商城中心',
            icon: Images.home.icon_function_mall,
            routeName: "",
            mustLogin: false,
            code: 'mall'
        }]

    constructor(props) {
        super(props);
    }

    componentDidMount() {
        global.canRelogin = false
        global.reLogin = this.reLogin.bind(this)
        //获取首页Banner ,数据,快报
        this.props.quryHomeBannerList()
        this.props.quryHomeData()
        this.props.queryKuaibaoList()
        this.props.getPrice()
        setTimeout(() => {
            global.canRelogin = true
        }, 1000 * 5)
    }

    /**
     * 重新登录,用于服务器返回该账号没有登录时进入登录页面
     */
    reLogin() {
        if (global.canRelogin) {
            global.canRelogin = false
            toast("当前用户未登录")
            this.props.reLogin(this.props.navigation)
            setTimeout(() => {
                global.canRelogin = true
            }, 1000 * 60)
        }
    }

    /**
     * 下拉刷新
     */
    onRefresh() {
        this.props.quryHomeBannerList()
        this.props.quryHomeData()
        this.props.queryKuaibaoList()
        this.props.getPrice()
        //设置刷新状态为正在刷新
        this.props.setFresh(true)
        setTimeout(() => {
            this.props.setFresh(false)
        }, 3000);
    };

    loadMoreData() {

    }

    render() {
        const {fresh, homeData, navigation, IsPayment} = this.props;
        return (
            <View style={HomeStyle.background}>
                <StatusBar backgroundColor={"transparent"}
                           barStyle={'light-content'}
                           translucent={true}/>
                <StatusBarWhiteSpace color={"#cccccc"}/>
                <FlatList
                    style={{flex: 1, paddingBottom: 10}}
                    showsVerticalScrollIndicator={false}
                    keyExtractor={(item, index) => "list" + index}
                    ListHeaderComponent={this.renderHeader.bind(this)}
                    onRefresh={this.onRefresh.bind(this)}
                    refreshing={fresh}
                    onEndReachedThreshold={2}
                    onEndReached={this.loadMoreData.bind(this)}
                    data={homeData.RecommendCourseList}
                    ItemSeparatorComponent={() => {
                        return (<WhiteSpace size={15}/>)
                    }}
                    renderItem={({item, index}) => {
                        return (
                            <HomeLessonItem
                                item={item}
                                IsPayment={IsPayment}
                                onPress={() => {
                                    navigation.navigate(RouteConfig.LessonDetail.name, {'id': item.Id});
                                }}/>
                        )
                    }}
                />
                <AdView list={homeData.RecommendCourseList}/>
            </View>
        )
    }

    /**
     * 顶部轮播图
     */
    renderBanner() {
        const {bannerList, navigation} = this.props;
        let bannerViews = [];
        for (let i = 0; i < bannerList.length; i++) {
            let item = bannerList[i];
            bannerViews.push(
                <TouchableOpacity style={HomeStyle.banner} key={"banner" + 1} activeOpacity={1}
                                  onPress={() => {
                                      if (item.LinkUrl) {
                                          navigation.navigate(RouteConfig.WebViewPage.name, {
                                              title: "",
                                              url: concatUrl(item.LinkUrl)
                                          })
                                      }
                                  }}>
                    <Image style={HomeStyle.bannerImage}
                           source={{uri: baseUrl + item.ImgUrl}}/>
                </TouchableOpacity>)
        }
        return bannerViews;
    }

    renderHeader() {
        const {navigation, homeData, kuaibaoList, IsPayment, price} = this.props;
        return (
            <View>
                <View>
                    <Carousel
                        style={{backgroundColor: '#fff'}}
                        autoplayTimeout={3000}
                        selectedIndex={0}
                        dots={false}
                        autoplay={true}
                        infinite
                        afterChange={() => {
                        }}>
                        {this.renderBanner()}
                    </Carousel>
                    <TouchableOpacity
                        activeOpacity={1}
                        style={HomeStyle.searchBar}
                        onPress={() => {
                            navigation.navigate(RouteConfig.LessonSearch.name)
                        }}>
                        <Image style={HomeStyle.searchBarIcon}
                               source={Images.public.search}/>
                        <Text>搜索课程名称</Text>
                    </TouchableOpacity>
                </View>
                <WhiteSpace size={20}/>
                <ImageBackground
                    style={MineStyle.jifen}
                    source={Images.mine.icon_middle_bg}>
                    <Text style={MineStyle.jifenText}>ETRC单价：{price} CNY</Text>
                </ImageBackground>
                <WhiteSpace size={20}/>
                <View style={HomeStyle.function}>
                    {this.renderfunctionItemView()}
                </View>
                <View style={HomeStyle.block}>
                    <Text style={HomeStyle.blockTitle}>- 为你优选 -</Text>
                    <ScrollView
                        style={HomeStyle.yx}
                        showsHorizontalScrollIndicator={false}
                        horizontal={true}>
                        {this.renderYouxuan()}
                    </ScrollView>
                </View>
                <WhiteSpace size={20}/>
                <View style={HomeStyle.kuaiBao}>
                    <Image source={Images.home.home_center_img} style={HomeStyle.kuaiBaoImage}/>
                    <ScrollNewsView
                        itemList={kuaibaoList}
                        onPressItem={(item) => {
                            navigation.navigate(RouteConfig.NewsDetail.name, {"NewsId": item.NewsId})
                        }}/>
                    <TouchableOpacity activeOpacity={1}
                                      onPress={() => {
                                          navigation.navigate(RouteConfig.MoreNewsPage.name, {});
                                      }}>
                        <View style={HomeStyle.moreViewStyle}>
                            <Text style={HomeStyle.kuaiBaoMore}>更多</Text>
                        </View>
                    </TouchableOpacity>
                </View>
                <View style={HomeStyle.block}>
                    <Text style={HomeStyle.blockTitle}>- 课程排行榜 -</Text>
                    <ScrollView
                        style={HomeStyle.rank}
                        showsHorizontalScrollIndicator={false}
                        horizontal={true}>
                        {this.renderLessonRank()}
                    </ScrollView>
                </View>
                {Platform.OS == 'android' || IsPayment ? (
                    <View style={HomeStyle.block}>
                        <Text style={HomeStyle.blockTitle}>- 实用工具 -</Text>
                        {this.renderAboutRow()}
                    </View>
                ) : (null)}
                <WhiteSpace size={20}/>
            </View>)
    }

    /**
     * 关于和兴
     */
    renderAboutRow() {
        const list = this.props.homeData.AboutUsList
        let rowView = []
        for (let i = 0; i < list.length / 2; i++) {
            rowView.push(
                <View style={HomeStyle.aboutRow} key={'row' + i}>
                    {this.renderAboutItem(list, i)}
                </View>)
        }
        return rowView
    }

    /**
     * 实用工具
     */
    renderAboutItem(list, rowIndex) {
        let itemView = []
        for (let i = rowIndex * 2; i < list.length && i < rowIndex * 2 + 2; i++) {
            itemView.push(
                <TouchableOpacity
                    activeOpacity={1} key={"item" + i}
                    onPress={() => {
                        this.props.navigation.navigate(RouteConfig.WebViewPage.name, {
                            url: concatUrl(decodeURIComponent(list[i].Url)),
                            title: list[i].TopTitle || list[i].Title
                        })
                    }}>
                    <Image style={HomeStyle.aboutItem}
                           source={{uri: baseUrl + list[i].ImageUrl}}/>
                </TouchableOpacity>)
        }
        return itemView
    }

    /**
     * 功能视图
     */
    renderfunctionItemView() {
        let functionViews = [];
        for (let i = 0; i < this.functions.length; i++) {
            functionViews.push(
                <TouchableOpacity
                    activeOpacity={1} style={HomeStyle.functionItem}
                    key={'functionViews' + i}
                    onPress={this.pressFunction.bind(this, this.functions[i])}>
                    <Image style={HomeStyle.functionIcon} source={this.functions[i].icon}/>
                    <Text style={HomeStyle.functionText}>{this.functions[i].name}</Text>
                </TouchableOpacity>
            )
        }
        return functionViews;
    }

    /**
     * 为你优选
     */
    renderYouxuan() {
        let YouxuanView = []
        this.props.homeData.GoodsForYou.map((item, index) => {
            YouxuanView.push(
                <YoyxuanItem
                    item={item} key={"youxuan" + index}
                    onPress={() => {
                        this.props.changeUrl(item.Url)
                        this.props.changeTab('mall')
                    }}/>
            )
        })
        return YouxuanView
    }

    /**
     * 课程排行榜
     */
    renderLessonRank() {
        let RankView = []
        this.props.homeData.CourseRankingList.map((item, index) => {
            RankView.push(
                <LessonRankItem
                    item={item} key={"RankView" + index}
                    index={index}
                    onPress={() => {
                        this.props.navigation.navigate(RouteConfig.LessonDetail.name, {id: item.Id});
                    }}/>
            )
        })
        return RankView
    }

    pressFunction(item) {
        const {navigation, changeTab} = this.props;
        if (item.mustLogin && !global.token) {
            navigation.navigate(RouteConfig.RegistAndLogin.name);
            return
        }
        switch (item.code) {
            case "lesson":
                changeTab("lesson")
                return
            case "mall":
                changeTab("mall")
                return
        }
        this.props.navigation.navigate(item.routeName);
    }
}

/**
 * 把state绑定到props,在props中获取数据
 */
function mapStateToProps(state) {
    return {
        ...state.publicReducer,  //从state栈里面 获取reducer
        ...state.homeReducer,
        ...state.iosReviewReducer
    }
}

/**
 * 把dispatch绑定到props  可以直接调用对应的方法执行dispatch
 */
function mapDispatchToProps(dispatch) {
    return {
        setFresh: (fresh) => dispatch(HomeAction.setFresh(fresh)),  //设置刷新
        getPrice: () => dispatch(HomeAction.getPrice()),
        changeTab: (itemCode) => dispatch(HomeTabAction.changeTab(itemCode)), //底部改变
        quryHomeBannerList: () => dispatch(HomeAction.quryHomeBannerList()),//首页banner
        quryHomeData: () => dispatch(HomeAction.quryHomeData()),//获取首页数据
        queryKuaibaoList: () => dispatch(HomeAction.queryKuaibaoList()), //获取新闻列表
        changeUrl: (url) => dispatch(MallAction.changeUrl(url)),//更新商城地址
        reLogin: (navigation) => dispatch(LoginAction.reLogin(navigation)),
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(MainPage);