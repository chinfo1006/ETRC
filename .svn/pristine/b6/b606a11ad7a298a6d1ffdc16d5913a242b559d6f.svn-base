'use strict';

import React, {Component} from 'react';
import {
    Text,
    View,
    Image,
    TouchableOpacity,
    ScrollView,
    StyleSheet,
    FlatList,
} from 'react-native';
import {ShareRecordStyle} from '../../styles'
import * as Color from '../../configs/Color'
import TitleBar from "../../components/titlebar/TitleBar";
import {connect} from 'react-redux'
import WhiteSpace from "../../components/whitespace/WhiteSpace";
import * as  ShareRecordAction from '../../actions/ShareRecordAction'
import BasePage from "../BasePage";
import {unitWidth, width} from "../../utils/AdapterUtil";
import {baseUrl} from '../../configs/Config';
import Images from '../../images'
import NoData from "../../components/NoData";

/**
 * 推荐记录
 *
 *  思路分析： 第一步  默认传个1
 *            第二步
 */


class ShareRecord extends BasePage {
    constructor(props) {
        super(props)
    }

    componentDidMount() {
        this.props.queryRecommendList(1);
        this.props.queryIndirectRecommendList(1);
        this.props.queryThirdRecommendList(1)
    }

    changeTab(tab) {
        if (tab == this.props.tab) {
            return
        }
        this.props.setTab(tab)
        if (tab == 1) {
        } else {
        }
    }

    loadMore() {
        if (this.props.firstLoad) return
        if (this.props.tab == 1) {
            if (!this.props.hadMore) return
            this.props.queryRecommendList(this.props.pageIndex + 1)
        } else if (this.props.tab == 2) {
            if (!this.props.hadMoreII) return;
            this.props.queryIndirectRecommendList(this.props.pageIndexII + 1)
        } else {
            if (!this.props.hadMoreIII) return;
            this.props.queryThirdRecommendList(this.props.pageIndexII + 1)
        }
    }

    refresh() {
        if (this.props.tab == 1) {
            this.props.queryRecommendList(1);
        } else if (this.props.tab == 2) {
            this.props.queryIndirectRecommendList(1)
        } else {
            this.props.queryThirdRecommendList(1)
        }
    }


    render() {
        const {recordList, recordListII, recordListIII, tab, TotalCount, TotalCountII, TotalCountIII, freshing} = this.props;
        return (
            <View style={ShareRecordStyle.background}>
                <TitleBar title="推荐记录" navigation={this.props.navigation}/>
                <View style={ShareRecordStyle.recordTab}>
                    <TouchableOpacity
                        style={ShareRecordStyle.tabItem} activeOpacity={1}
                        onPress={() => {
                            this.changeTab(1)
                        }}>
                        <Text style={tab == 1 ? {color: Color.themeColor} : null}>第一区块</Text>
                        <WhiteSpace size={15}/>
                        <Text style={{color: tab == 1 ? Color.themeColor : 'black'}}>{TotalCount}人</Text>
                        <View
                            style={[ShareRecordStyle.tabUnderLine, tab == 1 ? null : {backgroundColor: 'transparent'}]}/>
                    </TouchableOpacity>
                    <TouchableOpacity
                        style={ShareRecordStyle.tabItem} activeOpacity={1}
                        onPress={() => {
                            this.changeTab(2)
                        }}>
                        <View style={{flex: 1}}></View>
                        <Text style={tab == 2 ? {color: Color.themeColor} : null}>第二区块</Text>
                        <WhiteSpace size={15}/>
                        <Text style={{color: tab == 2 ? Color.themeColor : 'black'}}>{TotalCountII}人</Text>
                        <View
                            style={[ShareRecordStyle.tabUnderLine, tab == 2 ? null : {backgroundColor: 'transparent'}]}/>
                    </TouchableOpacity>
                    <TouchableOpacity
                        style={ShareRecordStyle.tabItem} activeOpacity={1}
                        onPress={() => {
                            this.changeTab(3)
                        }}>
                        <View style={{flex: 1}}></View>
                        <Text style={tab == 3 ? {color: Color.themeColor} : null}>第三区块</Text>
                        <WhiteSpace size={15}/>
                        <Text style={{color: tab == 3 ? Color.themeColor : 'black'}}>{TotalCountIII}人</Text>
                        <View
                            style={[ShareRecordStyle.tabUnderLine, tab == 3 ? null : {backgroundColor: 'transparent'}]}/>
                    </TouchableOpacity>
                </View>

                <WhiteSpace size={30}/>
                <FlatList
                    style={{flex: 1}}
                    data={tab == 1 ? recordList : tab == 2 ? recordListII : recordListIII}
                    keyExtractor={(item, index) => index + "share"}
                    initialListSize={5}
                    onEndReachedThreshold={0.5}
                    refreshing={freshing}
                    ListEmptyComponent={<NoData/>}
                    ItemSeparatorComponent={() => {
                        return <WhiteSpace size={10}/>
                    }}

                    onRefresh={this.refresh.bind(this)}

                    renderItem={({item}) => {
                        return (

                            <View style={styles.background}>

                                {
                                    item.HeadImg ?
                                        <Image
                                            style={styles.image}
                                            source={{uri: baseUrl + item.HeadImg}}/>
                                        : <Image
                                            style={styles.image}
                                            source={Images.public.logo}/>
                                }

                                <View>
                                    <Text>{item.PhoneNumber}</Text>
                                    <Text>{item.CreateDate ? item.CreateDate.split(".")[0].replace("T", " ") : ''}</Text>
                                </View>

                            </View>

                        )
                    }}
                    onEndReached={this.loadMore.bind(this)}
                />
            </View>
        )
    }
}


const styles = StyleSheet.create({
    background: {
        width: width,
        height: unitWidth * 260,
        backgroundColor: 'white',
        paddingLeft: unitWidth * 295,
        alignItems: 'center',
        flexDirection: 'row',
    },
    image: {
        width: unitWidth * 180,
        height: unitWidth * 180,
        position: 'absolute',
        top: unitWidth * 35,
        left: unitWidth * 85,
        borderRadius: unitWidth * 15
    },
    business: {
        backgroundColor: "#e6001266",
        width: unitWidth * 165,
        height: unitWidth * 63,
        alignItems: 'center',
        justifyContent: 'center',
        position: 'absolute',
        top: unitWidth * 35,
        right: unitWidth * 85,
        borderRadius: unitWidth * 10
    },
    businessText: {
        color: 'white',
        fontSize: unitWidth * 40,
    }
})

/**
 * 把state绑定到props,在props中获取数据
 */
function mapStateToProps(state) {
    return state.shareRecordReducer
}


/**
 * 把dispatch绑定到props  可以直接调用对应的方法执行dispatch
 */
function mapDispatchToProps(dispatch) {
    return {
        setTab: (tab) => dispatch(ShareRecordAction.setTab(tab)),
        queryRecommendList: (pageIndex) => dispatch(ShareRecordAction.queryRecommendList(pageIndex)),
        queryIndirectRecommendList: (pageIndex) => dispatch(ShareRecordAction.queryIndirectRecommendList(pageIndex)),
        queryThirdRecommendList: (pageIndex) => dispatch(ShareRecordAction.queryThirdRecommendList(pageIndex))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(ShareRecord)