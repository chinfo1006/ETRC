/**
 * Created by Tloy on 2018/1/4.
 */

"use strict"

import React, {Component} from "react";
import {
    Text,
    View,
    Image,
    TouchableOpacity,
    ScrollView,
    StatusBar,
    StyleSheet,
    FlatList,
    Platform,
    Clipboard,
    ImageBackground
} from "react-native";
import {connect} from "react-redux";
import * as MineAction from "../../actions/MineAction";
import ListItem from "../../components/ListItem";
import WhiteSpace from "../../components/whitespace/WhiteSpace";
import {baseUrl} from "../../configs/Config";
import RouteConfig from "../../configs/RouteConfig";
import Images from "../../images";
import {BaseStyle, MineStyle} from "../../styles";
import BasePage from "../BasePage";
import {toast} from "../../utils/LogUtil";
import {unitWidth, width, statusBarHeight} from "../../utils/AdapterUtilNew";
import TitleBar from "../../components/titlebar/TitleBar";
import {JdType} from "../../configs/Code";
import {getVipText} from "../../utils/CodeUtil";
import ConfirmModal from "../../modals/ConfirmModal";

class MinePage extends BasePage {

    constructor(props) {
        super(props);
    }

    componentDidMount() {
        this.props.queryUserInfo();
    }

    onRefresh() {
        this.props.queryUserInfo();
    }

    render() {
        const {navigation, fresh} = this.props;
        return (
            <View style={BaseStyle.background}>
                <StatusBar backgroundColor={"transparent"}
                           barStyle={'light-content'}
                           translucent={true}/>
                <FlatList
                    style={{flex: 1, paddingBottom: 10}}
                    showsVerticalScrollIndicator={false}
                    keyExtractor={(item, index) => "list" + index}
                    ListHeaderComponent={this.renderHeader.bind(this)}
                    onRefresh={this.onRefresh.bind(this)}
                    refreshing={fresh}
                    data={[]}
                    renderItem={({item, index}) => {
                    }}
                />
                <ConfirmModal
                    ref={"ConfirmModal"}
                    title={"贝壳兑换前需进行实名认证，请填写正确的身份信息，以保证提现顺利到账"}
                    confirmBtText={"去实名"}
                    onPressConfirm={() => {
                        navigation.navigate(RouteConfig.RealNameVerifyPageA.name)
                    }}/>
            </View>)
    }

    renderHeader() {
        const {navigation, userInfo} = this.props;
        return (
            <View>
                <View style={styles.top}>
                    <TitleBar
                        title={"我的"}
                        backgroundColor={"transparent"}
                        navigation={navigation}
                        hideLeftArrow={true}/>
                    <View style={styles.info}>
                        <WhiteSpace size={25}/>
                        <View style={styles.nameRow}>
                            <Image
                                style={styles.head}
                                source={userInfo.HeadImg ? {uri: baseUrl + userInfo.HeadImg} : Images.public.default_head}/>
                            <View style={{justifyContent: 'center'}}>
                                <Text style={styles.phone}>{userInfo.UserPhone}</Text>
                                <WhiteSpace size={10}/>
                                <View style={{flexDirection: 'row', alignItems: 'center'}}>
                                    <Image
                                        style={styles.vip}
                                        source={this.getVipImage(userInfo.Identification)}/>
                                    <Text
                                        style={this.getVipStyle(userInfo.Identification)}>{getVipText(userInfo.Identification)}</Text>
                                </View>
                            </View>
                        </View>
                        <TouchableOpacity
                            style={styles.setting}
                            activeOpacity={1}
                            onPress={() => {
                                navigation.navigate(RouteConfig.UserCenterPage.name);
                            }}>
                            <Image style={styles.settingIcon} source={Images.mine.setting_black}/>
                        </TouchableOpacity>
                        <View style={{flex: 1, flexDirection: 'row', alignItems: 'center'}}>
                            <View style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
                                <Text style={styles.value}
                                      onPress={() => {
                                          navigation.navigate(RouteConfig.ETRCRecord.name)
                                      }}>{userInfo.Currency || "0"}</Text>
                                <Text style={styles.label}
                                      onPress={() => {
                                          navigation.navigate(RouteConfig.ETRCRecord.name)
                                      }}>可用ETRC</Text>
                            </View>
                            <View style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
                                <Text style={styles.label}
                                      onPress={() => {
                                          navigation.navigate(RouteConfig.ETRCRecord.name)
                                      }}>{userInfo.FrozenCount || "0"}</Text>
                                <Text style={styles.label}
                                      onPress={() => {
                                          navigation.navigate(RouteConfig.ETRCRecord.name)
                                      }}>冻结ETRC</Text>
                            </View>
                            <View style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
                                <Text style={styles.label}
                                      onPress={() => {
                                          navigation.navigate(RouteConfig.BeikeRecord.name)
                                      }}>{userInfo.ConchQuantity || "0"}</Text>
                                <Text style={styles.label}
                                      onPress={() => {
                                          navigation.navigate(RouteConfig.BeikeRecord.name)
                                      }}>贝壳</Text>
                            </View>
                        </View>
                    </View>
                </View>
                <WhiteSpace size={15}/>
                <TouchableOpacity
                    style={styles.addressRow}
                    activeOpacity={1}
                    onPress={() => {
                        navigation.navigate(RouteConfig.ReceiptCode.name)
                    }}>
                    <Text style={styles.address}>{this.getAddress(userInfo.PurseAddress)}</Text>

                    <ImageBackground
                        style={styles.receiptCode}
                        source={Images.mine.receipt_code}>
                    </ImageBackground>
                </TouchableOpacity>
                <WhiteSpace size={20}/>
                <ListItem
                    title={"ETRC转出"} noArrow={true}
                    source={Images.mine.etrc_out}
                    onPress={() => {
                        navigation.navigate(RouteConfig.CoinGive.name)
                    }}/>
                <WhiteSpace size={2}/>
                <ListItem
                    title={"ETRC记录"} noArrow={true}
                    source={Images.mine.etrc_record}
                    onPress={() => {
                        navigation.navigate(RouteConfig.ETRCRecord.name)
                    }}/>
                <WhiteSpace size={10}/>
                <ListItem
                    title={"贝壳记录"} noArrow={true}
                    source={Images.mine.bkjl}
                    onPress={() => {
                        navigation.navigate(RouteConfig.BeikeRecord.name)
                    }}/>
                <WhiteSpace size={2}/>
                <ListItem
                    title={"贝壳兑换"} noArrow={true}
                    source={Images.mine.bkdh}
                    onPress={() => {
                        if (userInfo.IsReal) {
                            navigation.navigate(RouteConfig.ConchConvert.name)
                        } else {
                            this.refs.ConfirmModal.open()
                        }

                    }}/>
                <WhiteSpace size={10}/>
                <ListItem
                    title={"我的课程"} noArrow={true}
                    source={Images.mine.my_lesson}
                    onPress={() => {
                        navigation.navigate(RouteConfig.LessonOrderTab.name)
                    }}/>
                <WhiteSpace size={2}/>
                <ListItem
                    title={"我要推荐"} noArrow={true}
                    source={Images.mine.my_share}
                    onPress={() => {
                        navigation.navigate(RouteConfig.Share.name)
                    }}/>
                <WhiteSpace size={10}/>
                <ListItem
                    title={"我要反馈"} noArrow={true}
                    source={Images.mine.my_feedback}
                    onPress={() => {
                        navigation.navigate(RouteConfig.MineFeedBackList.name)
                    }}/>
                <WhiteSpace size={2}/>
                <ListItem
                    title={"关于ETRC"} noArrow={true}
                    source={Images.mine.my_about_us}
                    onPress={() => {
                        navigation.navigate(RouteConfig.About.name)
                    }}/>
            </View>
        )
    }

    getAddress(addr) {
        let res = ""
        if (addr) {
            res = addr.substr(0, 9) + "****" + addr.substring(addr.length - 10)
        }
        return res
    }

    getVipImage(type) {
        switch (type) {
            case JdType.pt:
                return Images.jd.jd_putong
            case JdType.vip:
                return Images.jd.jd_vip
            case JdType.cj:
                return Images.jd.jd_chaoji
            case JdType.lm:
                return Images.jd.jd_lianmeng
            case JdType.sq:
                return Images.jd.jd_shequ
        }
        return Images.jd.jd_putong
    }

    getVipStyle(type) {
        switch (type) {
            case JdType.pt:
                return styles.jdPT
            case JdType.vip:
                return styles.jdVIP
            case JdType.cj:
                return styles.jdCJ
            case JdType.lm:
                return styles.jdLM
            case JdType.sq:
                return styles.jdSQ
        }
        return styles.jdPT
    }
}

function mapStateToProps(state) {
    return {
        ...state.mineReducer,
        ...state.iosReviewReducer
    };
}

function mapDispatchToProps(dispatch) {
    return {
        queryUserInfo: () => dispatch(MineAction.queryUserInfo()),
        browseNewMessage: () => dispatch(MineAction.browseNewMessage()),
    };
}

export default connect(mapStateToProps, mapDispatchToProps)(MinePage);

const styles = StyleSheet.create({
    top: {
        width: width,
        height: unitWidth * 450,
        backgroundColor: "#fc3f05",
        alignItems: 'center'
    },
    info: {
        width: unitWidth * 658,
        height: unitWidth * 283,
        borderRadius: unitWidth * 10,
        backgroundColor: "#ffffff"
    },
    nameRow: {
        width: unitWidth * 658,
        height: unitWidth * 100,
        paddingLeft: unitWidth * 66,
        flexDirection: 'row'
    },
    head: {
        width: unitWidth * 100,
        height: unitWidth * 100,
        borderRadius: unitWidth * 50,
        marginRight: unitWidth * 15
    },
    phone: {
        fontSize: unitWidth * 30,
        color: "#000000"
    },
    setting: {
        position: 'absolute',
        top: unitWidth * 0,
        right: unitWidth * 0,
        padding: unitWidth * 25
    },
    settingIcon: {
        width: unitWidth * 30,
        height: unitWidth * 30,
    },
    label: {
        fontSize: unitWidth * 30,
        color: "#000000"
    },
    value: {
        fontSize: unitWidth * 30,
        color: "#fc3f05"
    },
    addressRow: {
        width: width,
        height: unitWidth * 100,
        backgroundColor: "#ffffff",
        flexDirection: 'row',
        alignItems: 'center',
        paddingHorizontal: unitWidth * 45,
        justifyContent: 'space-between'
    },
    address: {
        fontSize: unitWidth * 28,
        color: "#fc3f05"
    },
    receiptCode: {
        width: unitWidth * 40,
        height: unitWidth * 40,
    },
    copyText: {
        fontSize: unitWidth * 20,
        color: "#fc3f05",
        backgroundColor: 'transparent'
    },
    vip: {
        width: unitWidth * 30,
        height: unitWidth * 45,
        marginRight: unitWidth * 15
    },
    jdLM: {
        fontSize: unitWidth * 24,
        color: "#ff682b"
    },
    jdCJ: {
        fontSize: unitWidth * 24,
        color: "#ffa162"
    },
    jdVIP: {
        fontSize: unitWidth * 24,
        color: "#08b3f0"
    },
    jdSQ: {
        fontSize: unitWidth * 24,
        color: "#ffa162"
    },
    jdPT: {
        fontSize: unitWidth * 24,
        color: "#999999"
    },
})
