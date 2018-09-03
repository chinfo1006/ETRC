/**
 * Created by Tloy on 2018/1/3.
 */


'use strict';

import React, {Component} from 'react';
import {
    Text,
    View,
    Image,
    BackHandler,
    NativeEventEmitter,
    DeviceEventEmitter,
    ImageBackground,
    AsyncStorage,
    ProgressBarAndroid,
    ToastAndroid,
    Platform,
    SafeAreaView,
    TouchableOpacity
} from 'react-native';
import TabNavigator from 'react-native-tab-navigator';
import {TabStyle} from '../../styles'
import Images from '../../images/index'
import MainPage from '../home/MainPage'
import MinePage from '../mine/MinePage'
import HomeLesson from '../lesson/HomeLesson'
import MallPage from '../mall/Mall'
import {connect} from 'react-redux';
import * as HomeTabAction from "../../actions/HomeTabAction";
import {Version} from "../../configs/Config";
import {GetDailyCheckInApi, GetVersionsInfo} from "../../server/ServerApi";
import UpdateModal from "../../modals/UpdateModal";
import RouteConfig from "../../configs/RouteConfig";
import * as HomeAction from "../../actions/HomeAction";
import * as MineAction from "../../actions/MineAction";
import * as MyCoinAction from "../../actions/MyCoinAction";
import * as IosReviewAction from "../../actions/IosReviewAction";
import QianDaoModal from "../../modals/QianDaoModal";
import * as LessonDetailAction from "../../actions/LessonDetailAction";
import {toast} from "../../utils/LogUtil";

const tabItems = [     //  tab标签的内容
    {
        code: 'home',
        name: '首页',
        icon_n: Images.tab.home,
        icon_p: Images.tab.home_active,
        contentView: MainPage,
        badgeNum: null,
        mustLogin: false,
    },
    {
        code: 'lesson',
        name: '教程',
        icon_n: Images.tab.lesson,
        icon_p: Images.tab.lesson_active,
        contentView: HomeLesson,
        mustLogin: false,
    },
    {
        code: 'mall',
        name: '商城',
        icon_n: Images.tab.mall,
        icon_p: Images.tab.mall_active,
        contentView: MallPage,
        mustLogin: false,
    },

    {
        code: 'mine',
        name: '我的',
        icon_n: Images.tab.mine,
        icon_p: Images.tab.mine_active,
        contentView: MinePage,
        mustLogin: true,
    }];


//导航栏组建
class HomeTab extends Component {
    constructor(props) {
        super(props);
    }

    /**
     * 挂载组件
     */
    componentDidMount() {
        // this.props.queryIsPayment()
        //检测版本更新
        GetVersionsInfo((response) => {
            // const localVersion = Number(Version.replace("V", "").replace("v", "").replace(".", ""))
            // const androidVersion = Number(response.verNo.replace("V", "").replace("v", "").replace(".", ""))
            // const iosVersion = Number(response.iosVerNo.replace("V", "").replace("v", "").replace(".", ""))
            // console.log(localVersion + '---' + androidVersion + '---' + iosVersion)
            // console.log(iosVersion > localVersion)
            // console.log(androidVersion > localVersion)
            const currVerNum = Version.replace("V", '').replace("v", '');
            // console.log(Version)
            // console.log(response.iosVerNo)
            // console.log(response.verNo)
            // console.log(currVerNum)
            // console.log(response.iosVerNo.replace("V", '').replace("v", ''))
            // console.log(response.verNo.replace("v", '').replace("V", ''))
            if (Platform.OS == 'ios') {
                const iosVerNum = response.iosVerNo.replace("V", '').replace("v", '');
                if (iosVerNum > currVerNum) {
                    this.refs.UpdateModal.open(response.content, response.updateUrl, response.forceUpdate, response.iosUpdateUrl);
                }
            } else {
                const androidNum = response.verNo.replace("V", '').replace("v", '');
                if (androidNum > currVerNum) {
                    this.refs.UpdateModal.open(response.content, response.updateUrl, response.forceUpdate, response.iosUpdateUrl);
                }
            }
        });
        if (global.token) {
            this.props.queryUserInfo()
        }
    }

    // 渲染
    render() {
        return (
            <View style={{flex: 1}}>
                <TabNavigator tabBarStyle={TabStyle.background}>
                    {this.rendTabItem()}
                </TabNavigator>
                <SafeAreaView/>
                <UpdateModal ref={"UpdateModal"}/>
                <QianDaoModal
                    ref={"QianDaoModal"}
                    navigation={this.props.navigation}
                    getProductDetail={this.props.getProductDetail}/>
                {/*<TouchableOpacity*/}
                {/*style={TabStyle.circleBt}*/}
                {/*activeOpacity={1}*/}
                {/*onPress={() => {*/}
                {/*if (!global.token) {*/}
                {/*this.props.navigation.navigate(RouteConfig.RegistAndLogin.name);*/}
                {/*return*/}
                {/*}*/}
                {/*this.props.queryCoinInfo()*/}
                {/*this.props.changeTab("coin")*/}
                {/*}}>*/}
                {/*<View style={TabStyle.circleBt2}>*/}
                {/*</View>*/}
                {/*<View style={TabStyle.circleBtbg}/>*/}
                {/*<Image style={TabStyle.circleBtImage}*/}
                {/*source={Images.tab.gxb}/>*/}
                {/*</TouchableOpacity>*/}
            </View>
        );
    }


    /**
     * 渲染Tab标签及页面
     */
    rendTabItem() {
        var items = [];
        for (var i = 0; i < tabItems.length; i++) {
            let item = tabItems[i]
            items.push(
                <TabNavigator.Item
                    key={item.code}
                    title={item.name}
                    renderIcon={() =>
                        <Image style={TabStyle.icon}
                               source={item.icon_n}/>}
                    renderSelectedIcon={() =>
                        <Image style={TabStyle.icon}
                               source={item.icon_p}/>}
                    selected={this.props.selectTab === item.code}
                    titleStyle={TabStyle.titleStyle}
                    selectedTitleStyle={TabStyle.titleSelectStyle}
                    onPress={() => this.onPress(item)}
                    renderBadge={() => item.badgeNum ?
                        <Text>{item.badgeNum}</Text>
                        : null}>
                    <item.contentView navigation={this.props.navigation}/>
                </TabNavigator.Item>
            );
        }
        return items;
    }


    /**
     * 点击Tab 标签的操作
     */
    onPress(item) {
        if (item.code == this.props.selectTab) return   //点击当前已选中的tab 不做任何操作
        if (item.mustLogin && !global.token) {
            this.props.navigation.navigate(RouteConfig.RegistAndLogin.name);
            return
        }
        //刷新对应页面数据
        switch (item) {
            case tabItems[0].code:
                // this.props.quryHomeBannerList()
                // this.props.quryHomeData()
                // this.props.queryKuaibaoList()
                break
            case tabItems[1].code:
                break
            case tabItems[3].code:
                this.props.queryUserInfo()
                break
        }
        //否则 执行changeTab事件
        this.props.changeTab(item.code);
    }


    /**
     * 当用户执行返回键的时候 执行此函数
     */
    componentWillMount() {
        // BackHandler.addEventListener('hardwareBackPress', () => {
        //     //0  +155
        //     //
        //     this.firstBackPressed = this.lastBackPressed;
        //     console.log(this.firstBackPressed);
        //     this.lastBackPressed = Date.now();
        //     console.log(this.lastBackPressed);

        //     if (this.lastBackPressed && this.lastBackPressed - this.firstBackPressed >= 2000) {

        //         console.log('555555')
        //         toast('再按一次退出应用');
        //         return true;
        //     } else {
        //         console.log('666666');//
        //         BackHandler.exitApp();//连续按键2小于2秒钟 
        //     }
        //     return true;
        // });
    }


    /**
     * 当用户点击返回的时候 触发此函数  页面要死的时候执行
     */
    componentWillUnmount() {
    }
}

/**
 * 把state绑定到props,在props中获取数据
 */
function mapStateToProps(state) {
    return {
        ...state.homeTabReducer,
    }
}

/**
 * 把dispatch绑定到props  可以直接调用对应的方法执行dispatch
 */
function mapDispatchToProps(dispatch) {
    return {
        changeTab: (itemCode) => dispatch(HomeTabAction.changeTab(itemCode)),
        quryHomeBannerList: () => dispatch(HomeAction.quryHomeBannerList()),//首页banner
        quryHomeData: () => dispatch(HomeAction.quryHomeData()),//获取首页数据
        queryKuaibaoList: () => dispatch(HomeAction.queryKuaibaoList()), //获取新闻列表
        queryUserInfo: () => dispatch(MineAction.queryUserInfo()),
        queryCoinInfo: () => dispatch(MyCoinAction.queryCoinInfo()),
        queryIsPayment: () => dispatch(IosReviewAction.queryIsPayment()),
        getProductDetail: params => dispatch(LessonDetailAction.queryLessonDetail(params)),
    }
}


export default connect(mapStateToProps, mapDispatchToProps)(HomeTab);



