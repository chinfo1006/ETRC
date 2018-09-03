'use strict';
import React, { Component } from "react";
import { ActivityIndicator, Animated, FlatList, ScrollView, StyleSheet, Text, View, TouchableOpacity } from "react-native";





import TitleBar from "../../components/titlebar/TitleBar";


import { BaseStyle, HomeStyle, NearStyle } from '../../styles'


import Images from '../../images'
//导入http请求
import { toast } from "../../utils/LogUtil";
import { getJson } from "../../server/Request";
import * as ApiUrl from "../../server/ApiUrl";

import RouteConfig from "../../configs/RouteConfig";  //发送http请求  get请求
import { width, unitWidth } from "../../utils/AdapterUtil";


import { getParam } from "../../utils/ParamUtil";
import WhiteSpace from "../../components/whitespace/WhiteSpace";  //参数工具类


/**
 * 我是更多新闻页面
 */
export default class MoreNewsPage extends Component {


    /**
     *   首页列表页面的参数
     */
    homeListParams = {
        'rows': 10,   //每页显示的数据
        'page': 1,  //页码
        'sidx': '',
        'sord': 'asc',
        'records': '', 
        'conditionJson': '',
    }
    /**
     *   首页列表页面的参数
     */
    homeListParams = {
        'rows': 10,   //每页显示的数据
        'page': 1,  //页码
        'sidx': '',//ModifyDate
        'sord': 'asc',
        'records': '',
        'conditionJson': '',
    }

    /**
     * 构造器用于初始化数据
     * @param props
     */
    constructor(props) {
        super(props);//必须调用
        this.state = {
            newsList: [], //新闻列表数据
        }
    }

    /**
     *
     */
    componentDidMount() {
        this.httpNewsList();
    }


    /**
     * 获取新闻列表
     */
    httpNewsList() {

        /**
         * fetch数据 
         * 
         */

        getJson(`${ApiUrl.HomeNewsListUrl}?${getParam(this.homeListParams)}`, (response) => {
            console.log('00000000000000')
            console.log(JSON.stringify(response));
            console.log('11111111111111')
            // let dataNewsList = [];
            // //第一步拿到后台数据
            // response.map(function (item) {
            //     dataNewsList.push({
            //         key: i,
            //         value: item,
            //     })
            //     i++;
            // });
            //拿到newsid

            //刷新状态机
            this.setState({
                newsList: response,
                isLoading: false, //不是正在加载了
            })
        });
    }

    /**
     * 渲染视图
     */
    render() {
        const { navigation } = this.props;
        console.log(this.state.newsLis);
        return (
            <View>
                <TitleBar title={"快报列表"} navigation={navigation} />
                <FlatList
                    keyExtractor={(item, index) => "list" + index}
                    data={this.state.newsList}
                    ItemSeparatorComponent={() =>
                        <WhiteSpace size={5}/>
                    }
                    renderItem={
                        this.renderItem.bind(this)
                    }

                />

            </View>
        )
    }


    /**
     *  这个是新闻列表的item返回的视图
     */

    renderItem = (item, i) => {



        console.log(item);
        console.log('item=' + JSON.stringify(item));

        let newsId = item.item.NewsId;//列表的id
        const { navigation } = this.props;
        return (

            <View style={HomeStyle.kuaiBao}>

                <TouchableOpacity style={{ flex: 1 }} activeOpacity={0.6}
                    onPress={() => {
                        navigation.navigate(RouteConfig.NewsDetail.name, { "NewsId": newsId })
                    }}>
                    <Text numberOfLines={1}
                        style={HomeStyle.newsContent}>{item.item.FullHead}</Text>
                    <Text numberOfLines={1}
                        style={HomeStyle.newsContent}>{item.item.CreateDate}</Text>

                </TouchableOpacity>
                {/* <TouchableOpacity activeOpacity={1}
                                  onPress={
        
                                        ()=>{
                                              // this.props.navigator.push({
                                          //     component: RouteConfig.NewsDetail.name
                                          // })
                                          this.startNewsDetailPage(newsId)
                                        }
                                      
                                  }>
                    <Text style={HomeStyle.newsMore}>更多</Text>
                </TouchableOpacity> */}

            </View>

        )
    }



    //加载失败view
    renderErrorView(error) {
        return (
            <View style={HomeStyle.container}>
                <Text>
                    错误
                </Text>
            </View>
        );
    }

    //加载等待的view  当网络处于加载中的时候 显示视图
    renderLoadingView() {

        return (
            <View style={HomeStyle.container}>
                <ActivityIndicator
                    animating={true}
                    style={[HomeStyle.gray, { height: 80 }]}
                    color='red'
                    size="large"
                />
            </View>
        );
    }




}