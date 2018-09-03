/**
 * Created by Tloy on 2018/4/19.
 */


"use strict"
import React, {Component} from 'react';
import {
    View,
    Text,
    Image,
    TextInput,
    TouchableOpacity,
    Clipboard
} from 'react-native';

import {connect} from 'react-redux'
import {BaseStyle, CoinGiveStyle} from '../../styles'
import TitleBar from "../../components/titlebar/TitleBar";
import BasePage from "../BasePage";
import Images from '../../images'
import WhiteSpace from "../../components/whitespace/WhiteSpace";
import LongButton from "../../components/button/LongButton";
import * as CoinGiveAction from '../../actions/CoinGiveAction'
import {insertMax} from "../../utils/NumberUtil";
import {toast} from "../../utils/LogUtil";
import {GXBDonation, GXBDonationValidate, SendSMS} from "../../server/ServerApi";
import MobileCheckCodeModal from "../../modals/MobileCheckCodeModal";
import {checkETRCInput} from "../../utils/RegularUtil";
import * as MyCoinAction from "../../actions/MyCoinAction";
import RouteConfig from "../../configs/RouteConfig";
import ETRCTransactionModal from "../../modals/ETRCTransactionModal";
import * as MineAction from "../../actions/MineAction";
import {hideKeyboard} from "../../utils/MobileUtil";

class CoinGive extends BasePage {

    state = {
        giveAdress: "",
        amount: ""
    }

    componentDidMount() {
        this.props.queryCoinGiveInfo()
        this.props.queryTransactionFee()
    }

    componentWillUnmount() {
        this.props.initReducer()
    }

    getFee() {
        console.log(typeof (this.props.giveCount))
        console.log(typeof (this.props.transactionFee))
        return (Number(this.props.giveCount) * this.props.transactionFee).toFixed(4)
    }

    getTransactionFee() {
        // if (this.props.transactionFee) {
        return `收取${this.props.transactionFee * 100}%手续费`
        // }
        // return `收取3%手续费`
        // return ""
    }

    /**
     *  页面UI布局
     */
    render() {
        const {
            navigation, SellerPhone, UserGXBNum, PurseAddress, MinNum, MaxNum, giveAdress, giveAddressInfo, giveAddressTrue, giveCount,
            inputGiveAddress, queryGiveAddressInfo, inputGiveCount, queryCoinInfo, userInfo, scanQRCode, transactionFee, queryUserInfo
        } = this.props
        return (
            <TouchableOpacity
                style={BaseStyle.backgroundAlignCenter}
                activeOpacity={1}
                onPress={() => {
                    hideKeyboard()
                }}>
                <TitleBar
                    left={"返回"}
                    title={'ETRC转出'} navigation={navigation}
                    rightImage={Images.mine.scan}
                    pressRight={() => {
                        navigation.navigate(RouteConfig.ScanerTransfer.name, {
                            scanBack: (res) => {
                                queryGiveAddressInfo(res.walletAddress)
                                if (res.amount > UserGXBNum) {
                                    toast("余额不足")
                                    scanQRCode({
                                        giveAdress: res.walletAddress,
                                        giveCount: "",
                                    })
                                } else {
                                    scanQRCode({
                                        giveAdress: res.walletAddress,
                                        giveCount: res.amount,
                                    })
                                }
                            }
                        })
                    }}/>
                <View style={CoinGiveStyle.block}>
                    <WhiteSpace size={50}/>
                    <Text style={CoinGiveStyle.textBlack}>账户余额</Text>
                    <WhiteSpace size={50}/>
                    <View style={{flexDirection: 'row', alignItems: 'center'}}>
                        {/*<Image*/}
                        {/*style={CoinGiveStyle.image}*/}
                        {/*source={Images.coin.coin_logo}/>*/}
                        <Text style={CoinGiveStyle.balance}>{insertMax(UserGXBNum)}</Text>
                    </View>
                    <WhiteSpace size={50}/>
                    <Text style={CoinGiveStyle.textGary}>来自地址：{userInfo.PurseAddress}</Text>
                    <WhiteSpace size={50}/>
                </View>
                <WhiteSpace size={30}/>
                <View style={[CoinGiveStyle.block, {alignItems: 'center'}]}>
                    <View style={CoinGiveStyle.inputItem}>
                        <Text style={CoinGiveStyle.textBlack}>发往地址：</Text>
                        <TextInput
                            style={CoinGiveStyle.input}
                            maxLength={32}
                            value={giveAdress}
                            underlineColorAndroid={'transparent'}
                            placeholder={"输入对方ETRC地址"}
                            onChangeText={(text) => {
                                inputGiveAddress(text)
                                if (text.length == 32) {
                                    queryGiveAddressInfo(text)
                                }
                            }}/>
                        {giveAdress ? (
                            <TouchableOpacity
                                activeOpacity={1}
                                onPress={() => {
                                    inputGiveAddress("")
                                }}>
                                <Image style={CoinGiveStyle.clean}
                                       source={Images.public.close}/>
                            </TouchableOpacity>
                        ) : (
                            <TouchableOpacity
                                style={CoinGiveStyle.pasteBt}
                                onPress={() => {
                                    Clipboard.getString().then((content) => {
                                        inputGiveAddress(content)
                                        if (content.length == 32) {
                                            queryGiveAddressInfo(content)
                                        }
                                    })
                                }}>
                                <Text style={CoinGiveStyle.pasteText}>粘贴地址</Text>
                            </TouchableOpacity>
                        )}
                    </View>
                    <View style={CoinGiveStyle.inputLine}/>
                    <View style={CoinGiveStyle.inputItem}>
                        <Text style={CoinGiveStyle.textBlack}>转出数量：</Text>
                        <TextInput
                            style={CoinGiveStyle.input}
                            underlineColorAndroid={'transparent'}
                            placeholder={`最少转出${MinNum}个ETRC`}
                            value={giveCount}
                            maxLength={10}
                            keyboardType={"numeric"}
                            onChangeText={(text) => {
                                if (!text) {
                                    inputGiveCount(text);
                                    return
                                }
                                if (checkETRCInput(text)) {
                                    inputGiveCount(text)
                                }
                            }}/>
                    </View>
                </View>
                <WhiteSpace size={50}/>
                <View style={CoinGiveStyle.feeRow}>
                    <Text>{giveCount ? `手续费：${this.getFee()}` : this.getTransactionFee()}</Text>
                    <Text
                        style={CoinGiveStyle.giveAddressInfo}>{giveAddressTrue ? "" : giveAddressInfo}</Text>
                </View>

                <WhiteSpace size={100}/>
                <LongButton text={"确认转出"} onPress={() => {
                    hideKeyboard()
                    if (!giveAdress) {
                        toast("请输入要转出的ETRC地址")
                        return
                    }
                    if (PurseAddress == giveAdress) {
                        toast("不能转出给自己")
                        return
                    }
                    if (!giveAddressTrue) {
                        toast("请输入正确的ETRC地址")
                        return
                    }
                    if (!giveCount) {
                        toast("请输入要转出的ETRC数量")
                        return
                    }
                    if (Number(giveCount) < MinNum) {
                        toast(`单次最低转出${MinNum}个`)
                        return
                    }
                    if (Number(giveCount) > MaxNum) {
                        toast(`单次最多转出${MaxNum}个`)
                        return
                    }
                    if (Number(giveCount) > UserGXBNum) {
                        toast("ETRC余额不足")
                        return
                    }

                    GXBDonationValidate({
                        BuyPurseAddress: giveAdress,
                        ExchageNum: giveCount,
                    }, () => {
                        this.refs.ETRCTransactionModal.open()
                    }, (res) => {
                        toast(res.message)
                    })
                }}/>
                <ETRCTransactionModal
                    ref={"ETRCTransactionModal"}
                    amount={Number(giveCount)}
                    yue={UserGXBNum}
                    transactionFee={transactionFee}
                    onPress={() => {
                        this.refs.MobileCheckCodeModal.open()
                    }}/>
                <MobileCheckCodeModal
                    SellerPhone={SellerPhone}
                    ref={"MobileCheckCodeModal"}
                    onPressGetCode={() => {
                        SendSMS({
                            "Mobile": SellerPhone,
                            "Type": 9
                        }, (res) => {
                            this.refs.MobileCheckCodeModal.updateState({
                                time: 60
                            })
                        })
                    }}
                    onEnd={(code) => {
                        GXBDonation({
                            BuyPurseAddress: giveAdress,
                            ExchageNum: giveCount,
                            Code: code
                        }, () => {
                            this.refs.MobileCheckCodeModal.close()
                            queryCoinInfo()
                            queryUserInfo()
                            navigation.goBack()
                            toast("转赠成功")
                        }, (res) => {
                            this.refs.MobileCheckCodeModal.updateState({
                                msg: res.message
                            })
                        })
                    }}/>
            </TouchableOpacity>
        )
    }
}

/**
 * 把state绑定到props,在props中获取数据
 */
function mapStateToProps(state) {
    return {
        ...state.CoinGiveReducer,
        ...state.MyCoinReducer,
        ...state.mineReducer
    }
}

/**
 * 把dispatch绑定到props  可以直接调用对应的方法执行dispatch
 */
function mapDispatchToProps(dispatch) {
    return {
        queryTransactionFee: () => dispatch(CoinGiveAction.queryTransactionFee()),
        queryCoinGiveInfo: () => dispatch(CoinGiveAction.queryCoinGiveInfo()),
        inputGiveAddress: (address) => dispatch(CoinGiveAction.inputGiveAddress(address)),
        inputGiveCount: (count) => dispatch(CoinGiveAction.inputGiveCount(count)),
        scanQRCode: (params) => dispatch(CoinGiveAction.scanQRCode(params)),
        queryGiveAddressInfo: (address) => dispatch(CoinGiveAction.queryGiveAddressInfo(address)),
        initReducer: () => dispatch(CoinGiveAction.initReducer()),
        queryCoinInfo: () => dispatch(MyCoinAction.queryCoinInfo()),
        queryUserInfo: () => dispatch(MineAction.queryUserInfo()),
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(CoinGive)