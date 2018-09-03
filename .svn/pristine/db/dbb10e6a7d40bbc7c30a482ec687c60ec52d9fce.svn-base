/**
 * Created by Tloy on 2017/9/20.
 */


"use strict";

import React, {Component} from 'react';
import {
    Text,
    View,
    Image,
    StyleSheet,
    ScrollView,
    TouchableOpacity,
} from 'react-native';

import CheckBox from 'react-native-checkbox';
import {connect} from 'react-redux'
import {RegistLoginStyle} from '../../styles'
import TitleBar from "../../components/titlebar/TitleBar";
import LongButton from "../../components/button/LongButton";
import InputWithClear from "../../components/input/InputWithClear";
import WhiteSpace from "../../components/whitespace/WhiteSpace";
import Images from '../../images'
import RouteConfig from "../../configs/RouteConfig";
import * as RegistAction from "../../actions/RegistAction";
import {toast} from "../../utils/LogUtil";
import {checkMobile, checkPayPassword} from "../../utils/RegularUtil";
import {SmsTypes} from "../../configs/Code";
import {unitWidth} from '../../utils/AdapterUtil';
import {hideKeyboard} from "../../utils/MobileUtil";

/**
 * 注册页面
 */
class RegistPage extends Component {
    render() {
        const {
            navigation,
            inputUserName, inputPsw, inputConfirmPsw, inputCode, inputRecommand, userRegist,
            username, password, confirmPsw, code, recommand, onCheckChange, checked,
        } = this.props;
        return (
            <TouchableOpacity
                activeOpacity={1} style={RegistLoginStyle.background}
                onPress={() => {
                    hideKeyboard()
                }}>
                <TitleBar title={"注册"} navigation={navigation}/>
                <ScrollView contentContainerStyle={{alignItems: 'center'}}
                            keyboardShouldPersistTaps="handled"
                            showsVerticalScrollIndicator={false}>
                    <WhiteSpace size={80}/>
                    <Image style={RegistLoginStyle.logo}
                           source={Images.public.logo}/>
                    <WhiteSpace size={80}/>
                    <InputWithClear
                        showClean={true}
                        placeholder={"请输入手机号码"}
                        keyboardType="phone-pad"
                        maxLength={11}
                        icon={Images.public.username}
                        onChangeText={inputUserName}/>
                    <WhiteSpace size={50}/>
                    <InputWithClear
                        showClean={true}
                        placeholder={"请输入6-12位密码"}
                        secureTextEntry={true}
                        maxLength={12}
                        icon={Images.public.password}
                        onChangeText={inputPsw}/>
                    <WhiteSpace size={80}/>

                    <InputWithClear
                        showClean={true}
                        placeholder={"确认密码"}
                        icon={Images.public.password}
                        secureTextEntry={true}
                        maxLength={12}
                        onChangeText={inputConfirmPsw}/>

                    <WhiteSpace size={80}/>


                    <InputWithClear
                        showClean={true}
                        placeholder={"请输入验证码"}
                        icon={Images.public.sms_code}
                        keyboardType="phone-pad"
                        maxLength={6}
                        mobile={username}
                        smsType={SmsTypes.regist}
                        getSmsButton={true}
                        onChangeText={inputCode}/>
                    <WhiteSpace size={80}/>

                    <InputWithClear
                        showClean={true}
                        placeholder={"请输入推荐人手机号码（选填）"}
                        icon={Images.public.recommand}
                        keyboardType="phone-pad"
                        maxLength={11}
                        onChangeText={inputRecommand}/>
                    <WhiteSpace size={100}/>
                    <View style={{flexDirection: 'row', alignItems: 'center'}}>

                        <CheckBox
                            label='我已阅读并同意'
                            checked={checked}
                            checkedImage={Images.login.check_agree}
                            uncheckedImage={Images.login.check_unagree}
                            onChange={(checked) => {
                                onCheckChange(!checked)
                            }}
                        />

                        <TouchableOpacity
                            onPress={() => {
                                navigation.navigate(RouteConfig.RegisterWebViewPage.name, {})
                            }}>
                            <Text style={{textDecorationLine: 'underline'}}>《用户协议》</Text>
                        </TouchableOpacity>


                    </View>

                    <LongButton
                        text={"注册"}
                        onPress={() => {
                            if (!username) {
                                toast("请输入手机号码")
                                return
                            }

                            if (!password) {
                                toast("请输入密码")
                                return
                            }
                            // if(!checkPayPassword()){
                            //
                            // }
                            if (!confirmPsw) {
                                toast("请确认密码")
                                return
                            }
                            if (!code) {
                                toast("请输入验证码")
                                return
                            }
                            // if (!checkMobile(username)) {
                            //     toast("手机号码不正确")
                            //     return
                            // }
                            if (password != confirmPsw) {
                                toast("密码输入不一致")
                                return
                            }
                            if (!checked) {
                                toast("请选择用户协议")
                                return
                            }

                            userRegist({
                                "Mobile": username,
                                "Password": password,
                                "ConfirmPassword": confirmPsw,
                                "SmsVerCode": code,
                                "RecommandMobile": recommand
                            }, navigation);


                        }}/>
                    <View style={{height: unitWidth * 150}}></View>
                </ScrollView>
            </TouchableOpacity>
        )
    }
}


/**
 * 把state绑定到props,在props中获取数据
 */
function mapStateToProps(state) {
    return state.registReducer
}


/**
 * 把dispatch绑定到props  可以直接调用对应的方法执行dispatch
 */
function mapDispatchToProps(dispatch) {
    return {
        inputUserName: (userName) => dispatch(RegistAction.inputUserName(userName)),
        inputPsw: (psw) => dispatch(RegistAction.inputPsw(psw)),
        inputConfirmPsw: (psw) => dispatch(RegistAction.inputConfirmPsw(psw)),
        inputCode: (code) => dispatch(RegistAction.inputCode(code)),
        inputRecommand: (phone) => dispatch(RegistAction.inputRecommand(phone)),

        userRegist: (param, navigation) => dispatch(RegistAction.userRegist(param, navigation)),
        onCheckChange: (checked) => dispatch(RegistAction.onCheckChange(checked)),

    }
}

export default connect(mapStateToProps, mapDispatchToProps)(RegistPage)