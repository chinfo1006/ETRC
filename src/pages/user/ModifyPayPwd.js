/**
 * Created by Tloy on 2018/1/24.
 */


"use strict"
import React, {Component} from 'react';
import {
    View,
    ScrollView,
    StyleSheet
} from 'react-native';

import {connect} from 'react-redux'
import {BaseStyle} from '../../styles'
import TitleBar from "../../components/titlebar/TitleBar";
import LongButton from "../../components/button/LongButton";
import InputWithClear from "../../components/input/InputWithClear";
import WhiteSpace from "../../components/whitespace/WhiteSpace";
import {toast} from "../../utils/LogUtil";
import {SmsTypes} from "../../configs/Code";
import BasePage from "../BasePage";
import Images from '../../images'
import * as ModifyPayPwdAction from '../../actions/ModifyPayPwdAction'
import {UpdatePayPwd} from "../../server/ServerApi";

class ModifyPayPwd extends BasePage {

    /**
     *  页面UI布局
     */
    render() {
        const {
            navigation, inputCode, inputConfirmPsw, inputPsw, inputUserName, Mobile
        } = this.props
        return (
            <View style={BaseStyle.background}>
                <TitleBar title={'修改支付密码'} navigation={navigation}/>
                <ScrollView contentContainerStyle={{alignItems: 'center', flex: 1}}
                            keyboardShouldPersistTaps='handled'>
                    <WhiteSpace size={50}/>
                    <InputWithClear
                        showClean={true}
                        placeholder={"请输入手机号码"}
                        keyboardType="phone-pad"
                        icon={Images.public.username}
                        onChangeText={inputUserName}/>
                    <WhiteSpace size={50}/>
                    <InputWithClear
                        showClean={true}
                        placeholder={"请输入6位支付密码"}
                        keyboardType="numeric"
                        secureTextEntry={true}
                        maxLength={6}
                        icon={Images.public.password}
                        onChangeText={inputPsw}/>
                    <WhiteSpace size={50}/>
                    <InputWithClear
                        showClean={true}
                        keyboardType="numeric"
                        placeholder={"确认支付密码"}
                        icon={Images.public.password}
                        secureTextEntry={true}
                        maxLength={6}
                        onChangeText={inputConfirmPsw}/>
                    <WhiteSpace size={50}/>
                    <InputWithClear
                        showClean={true}
                        placeholder={"请输入验证码"}
                        icon={Images.public.sms_code}
                        keyboardType="phone-pad"
                        maxLength={6}
                        mobile={Mobile}
                        smsType={SmsTypes.modifyPayPsw}
                        getSmsButton={true}
                        onChangeText={inputCode}/>
                    <WhiteSpace size={80}/>
                    <LongButton text="修改支付密码" onPress={() => {
                        this.resetPsw()
                    }}/>
                </ScrollView>
            </View>
        )
    }

    /**
     * 对输入内容的合法性进行判断
     */
    resetPsw() {
        const {Password, Mobile, VCode, conPwd, navigation} = this.props
        if (!Mobile) {
            toast("手机号不能为空")
            return
        }
        if (!Password || !conPwd) {
            toast("密码不能为空")
            return
        }
        if (Password !== conPwd) {
            toast("密码不一致")
            return
        }
        if (!VCode) {
            toast("验证码不能为空")
            return
        }
        const param = {
            "Password": Password,
            "Mobile": Mobile,
            "VCode": VCode
        }
        // 修改密码
        UpdatePayPwd(param, (res) => {
            toast("修改成功")
            navigation.goBack()
        })
    }
}

/**
 * 把state绑定到props,在props中获取数据
 */
function mapStateToProps(state) {
    return {
        ...state.modifyPayPwdReducer,
    }
}

/**
 * 把dispatch绑定到props  可以直接调用对应的方法执行dispatch
 */
function mapDispatchToProps(dispatch) {
    return {
        inputCode: (code) => dispatch(ModifyPayPwdAction.inputCode(code)),
        inputConfirmPsw: (comPwd) => dispatch(ModifyPayPwdAction.inputConfirmPsw(comPwd)),
        inputPsw: (pwd) => dispatch(ModifyPayPwdAction.inputPsw(pwd)),
        inputUserName: (user) => dispatch(ModifyPayPwdAction.inputUserName(user)),
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(ModifyPayPwd)


const styles = {}
 