/**
 * Created by Tloy on 2018/1/17.
 */

'use strict';

import React, {Component} from 'react';
import {
    View,
    Text,
    Image,
    TextInput,
    ScrollView,
    TouchableOpacity,
} from 'react-native';
import {connect} from 'react-redux'
import {BaseStyle, RealNameVerifyStyle} from '../../styles'
import TitleBar from "../../components/titlebar/TitleBar";
import * as RealNameVerifyAction from '../../actions/RealNameVerifyAction'
import VerifyStepView from "../../components/step/VerifyStepView";
import WhiteSpace from "../../components/whitespace/WhiteSpace";
import LongButton from "../../components/button/LongButton";
import RouteConfig from "../../configs/RouteConfig";
import SelectAreaDropDowm from '../../components/dropdown/SelectAreaDropDowm'
import Images from '../../images'
import {toast} from "../../utils/LogUtil";
import {VerifyDataStep1} from "../../server/ServerApi";

class RealNameVerifyPageA extends Component {
    componentDidMount() {
        this.props.setFromKey(this.props.navigation.state.key)
        this.props.getProviceList()
        this.props.getBankCardList()
    }

    componentWillUnmount() {
        this.props.clearData();
    }

    render() {
        const {
            navigation,
            currentProvices, currentCity, currentArea, currentBank,
            provicesList, citysList, areasList, bankList,
            selectProvice, selectCity, selectArea, selectBank,
            getCityList, getAreaList,
            inputName, inputId, inputBankNo,
        } = this.props
        return (
            <View style={[BaseStyle.background, {alignItems: 'center'}]}>
                <TitleBar title={"实名认证"} navigation={navigation}/>
                <VerifyStepView steps={["认证信息", "支付密码", "照片上传"]} step={0}/>
                <WhiteSpace size={30}/>
                <View style={RealNameVerifyStyle.content}>
                    <View style={RealNameVerifyStyle.inputRow}>
                        <Text style={RealNameVerifyStyle.inputMust}>* </Text>
                        <Text style={RealNameVerifyStyle.inputLabel}>真实姓名：</Text>
                        <TextInput
                            style={RealNameVerifyStyle.input}
                            underlineColorAndroid="transparent"
                            placeholder={"请输入您的真实姓名"}
                            onChangeText={inputName}/>
                    </View>
                    <View style={RealNameVerifyStyle.line}/>
                    <View style={RealNameVerifyStyle.inputRow}>
                        <Text style={RealNameVerifyStyle.inputMust}>* </Text>
                        <Text style={RealNameVerifyStyle.inputLabel}>身份证号：</Text>
                        <TextInput
                            style={RealNameVerifyStyle.input}
                            keyboardType={"name-phone-pad"}
                            underlineColorAndroid="transparent"
                            placeholder={"请输入正确的身份证号码"}
                            onChangeText={inputId}/>
                    </View>
                    <View style={RealNameVerifyStyle.line}/>
                    <View style={RealNameVerifyStyle.inputRow}>
                        <Text style={RealNameVerifyStyle.inputMust}>* </Text>
                        <Text style={RealNameVerifyStyle.inputLabel}>银行名称：</Text>
                        <SelectAreaDropDowm
                            style={RealNameVerifyStyle.dropdown}
                            showsVerticalScrollIndicator={false}
                            options={bankList}
                            onSelect={(rowID, rowData) => {
                                selectBank(rowData)
                                return false
                            }}

                            renderRow={(rowData, sectionID, rowID, highlightRow) => {
                                return (
                                    <View style={RealNameVerifyStyle.dropdownItem}>
                                        <Text>{rowData.bankName}</Text>
                                    </View>
                                )
                            }}
                        >
                            <View style={RealNameVerifyStyle.dropdown}>
                                <Text
                                    style={currentBank.bankCode ? RealNameVerifyStyle.dropdownText : RealNameVerifyStyle.dropdownPlaceholder}>{currentBank.bankName}</Text>
                                <Image style={RealNameVerifyStyle.dropdownImage}
                                       source={Images.public.arrow_dowm_black}/>
                            </View>
                        </SelectAreaDropDowm>
                    </View>
                    <View style={RealNameVerifyStyle.line}/>
                    <View style={RealNameVerifyStyle.inputRow}>
                        <Text style={RealNameVerifyStyle.inputMust}>* </Text>
                        <Text style={RealNameVerifyStyle.inputLabel}>银行账号：</Text>
                        <TextInput
                            style={RealNameVerifyStyle.input}
                            keyboardType={"numeric"}
                            underlineColorAndroid="transparent"
                            placeholder={"请填写正确银行卡号"}
                            onChangeText={inputBankNo}/>
                    </View>
                    <View style={RealNameVerifyStyle.line}/>
                    <View style={RealNameVerifyStyle.inputRow}>
                        <Text style={RealNameVerifyStyle.inputMust}>* </Text>
                        <Text style={RealNameVerifyStyle.inputLabel}>常驻地区：</Text>
                        <SelectAreaDropDowm
                            style={RealNameVerifyStyle.dropdown}
                            showsVerticalScrollIndicator={false}
                            options={provicesList}
                            onSelect={(rowID, rowData) => {
                                selectProvice(rowData)
                                getCityList(rowData.AreaId)
                                return false
                            }}

                            renderRow={(rowData, sectionID, rowID, highlightRow) => {
                                return (
                                    <View style={RealNameVerifyStyle.dropdownItem}>
                                        <Text numberOfLines={1}>{rowData.AreaName}</Text>
                                    </View>
                                )
                            }}
                        >
                            <View style={RealNameVerifyStyle.areaDropdown}>
                                <Text
                                    style={currentProvices.AreaId ? RealNameVerifyStyle.areaDropdownText : RealNameVerifyStyle.areaDropdownPlaceholder}
                                    numberOfLines={1}>{currentProvices.AreaName}</Text>
                                <Image style={RealNameVerifyStyle.dropdownImage}
                                       source={Images.public.arrow_dowm_black}/>
                            </View>
                        </SelectAreaDropDowm>
                        <SelectAreaDropDowm
                            style={RealNameVerifyStyle.dropdown}
                            showsVerticalScrollIndicator={false}
                            options={citysList}
                            onSelect={(rowID, rowData) => {
                                selectCity(rowData)
                                getAreaList(rowData.AreaId)
                                return false
                            }}

                            renderRow={(rowData, sectionID, rowID, highlightRow) => {
                                return (
                                    <View style={RealNameVerifyStyle.dropdownItem}>
                                        <Text numberOfLines={1}>{rowData.AreaName}</Text>
                                    </View>
                                )
                            }}
                        >
                            <View style={RealNameVerifyStyle.areaDropdown}>
                                <Text
                                    style={currentCity.AreaId ? RealNameVerifyStyle.areaDropdownText : RealNameVerifyStyle.areaDropdownPlaceholder}
                                    numberOfLines={1}>{currentCity.AreaName}</Text>
                                <Image style={RealNameVerifyStyle.dropdownImage}
                                       source={Images.public.arrow_dowm_black}/>
                            </View>
                        </SelectAreaDropDowm>
                        <SelectAreaDropDowm
                            style={RealNameVerifyStyle.dropdown}
                            showsVerticalScrollIndicator={false}
                            options={areasList}
                            onSelect={(rowID, rowData) => {
                                selectArea(rowData)
                                return false
                            }}

                            renderRow={(rowData, sectionID, rowID, highlightRow) => {
                                return (
                                    <View style={RealNameVerifyStyle.dropdownItem}>
                                        <Text>{rowData.AreaName}</Text>
                                    </View>
                                )
                            }}
                        >
                            <View style={RealNameVerifyStyle.areaDropdown}>
                                <Text
                                    style={currentArea.AreaId ? RealNameVerifyStyle.areaDropdownText : RealNameVerifyStyle.areaDropdownPlaceholder}
                                    numberOfLines={1}>{currentArea.AreaName}</Text>
                                <Image style={RealNameVerifyStyle.dropdownImage}
                                       source={Images.public.arrow_dowm_black}/>
                            </View>
                        </SelectAreaDropDowm>
                    </View>
                </View>
                <WhiteSpace size={50}/>
                <LongButton text={"确认，下一步"} onPress={this.next.bind(this)}/>
                <TouchableOpacity
                    activeOpacity={1}
                    style={RealNameVerifyStyle.Verify_guowai}
                    onPress={() => {
                        navigation.navigate(RouteConfig.RealNameVerifyGuoWaiWeb.name)
                    }}>
                    <Image source={Images.mine.mine_sm_gw} style={{width: 20, height:20,marginRight: 5}}/>
                    <Text style={RealNameVerifyStyle.guowai_text}>港澳台或者国外用户点击这里</Text>
                </TouchableOpacity>
            </View>
        )
    }

    /**
     * 下一步
     */
    next() {
        const {navigation, currentProvices, currentCity, currentArea, UserName, IdNumber, currentBank, CardNumber} = this.props
        if (!UserName) {
            toast('请输入姓名')
            return
        }
        if (!IdNumber) {
            toast('请输入身份证号')
            return
        }
        if (!currentBank.bankCode) {
            toast('请选择银行')
            return
        }
        if (!CardNumber) {
            toast('请输入银行卡号')
            return
        }
        if (!currentProvices.AreaId || !currentCity.AreaId || !currentArea.AreaId) {
            toast('请选择常住地')
            return
        }

        const params = {
            "UserName": UserName,//用户名称
            "IdNumber": IdNumber, //身份证号码
            "CardNumber": CardNumber, //卡号
            "BanKName": currentBank.bankName, //银行名称
            "BankId": currentBank.bankCode,  //银行卡id  就是bankcode

            "ProviceName": currentProvices.AreaName, //省会名称
            "CityName": currentCity.AreaName,  //城市名称
            "AreaCityName": currentArea.AreaName, //区名称
            "Provice": currentProvices.AreaId,
            "City": currentCity.AreaId,
            "AreaCity": currentArea.AreaId,
        }
        //第一步 执行后台
        VerifyDataStep1(params, () => {
            navigation.navigate(RouteConfig.RealNameVerifyPageB.name)
        })
    }
}

/**
 * 把state绑定到props,在props中获取数据
 */
function mapStateToProps(state) {
    return state.realNameVerifyReducer
}

/**
 * 把dispatch绑定到props  可以直接调用对应的方法执行dispatch
 */
function mapDispatchToProps(dispatch) {
    return {
        getBankCardList: () => dispatch(RealNameVerifyAction.getBankCardList()),
        getProviceList: () => dispatch(RealNameVerifyAction.getProviceList()),
        getCityList: (parentId) => dispatch(RealNameVerifyAction.getCityList(parentId)),
        getAreaList: (parentId) => dispatch(RealNameVerifyAction.getAreaList(parentId)),
        selectProvice: (provice) => dispatch(RealNameVerifyAction.selectProvice(provice)),
        selectCity: (city) => dispatch(RealNameVerifyAction.selectCity(city)),
        selectArea: (area) => dispatch(RealNameVerifyAction.selectArea(area)),
        selectBank: (bank) => dispatch(RealNameVerifyAction.selectBank(bank)),
        inputName: (name) => dispatch(RealNameVerifyAction.inputName(name)),
        inputId: (name) => dispatch(RealNameVerifyAction.inputId(name)),
        inputBankNo: (bankNo) => dispatch(RealNameVerifyAction.inputBankNo(bankNo)),
        realNameVerifyA: (params) => dispatch(RealNameVerifyAction.realNameVerifyA(params)),
        setFromKey: (key) => dispatch(RealNameVerifyAction.setFromKey(key)),
        clearData: () => dispatch(RealNameVerifyAction.clearData()),
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(RealNameVerifyPageA)