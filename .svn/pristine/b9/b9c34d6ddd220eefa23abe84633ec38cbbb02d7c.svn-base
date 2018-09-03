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
import * as ModifyLoginPwdAction from '../../actions/ModifyLoginPwdAction'
import * as LoginAction from '../../actions/LoginAction'
import {UpdateLoginPwd} from "../../server/ServerApi";
import {NavigationActions} from 'react-navigation';

class ModifyLoginPwd extends Component {

    /**
     *  页面UI布局
     */
    render() {
        const {
            navigation, inputCode, inputConfirmPsw, inputPsw, inputUserName, Mobile, userCenterReducer, userInfo
        } = this.props
        const {type} = navigation.state.params

        return (
            <View style={BaseStyle.background}>
                <TitleBar title={type == 1 ? "忘记密码" : '修改密码'} navigation={navigation}/>
                <ScrollView contentContainerStyle={{alignItems: 'center', flex: 1}}
                            keyboardShouldPersistTaps='handled'>
                    <WhiteSpace size={50}/>
                    <InputWithClear
                        showClean={true}
                        placeholder={'请输入手机号码'}
                        defaulValue={global.userInfo.UserPhone}
                        keyboardType="phone-pad"
                        icon={Images.public.username}
                        value={global.userInfo.UserPhone}
                        onChangeText={inputUserName}/>
                    <WhiteSpace size={50}/>
                    <InputWithClear
                        showClean={true}
                        placeholder={"请输入6-12位新密码"}
                        secureTextEntry={true}
                        maxLength={16}
                        icon={Images.public.password}
                        onChangeText={inputPsw}/>
                    <WhiteSpace size={50}/>
                    <InputWithClear
                        showClean={true}
                        placeholder={"确认密码"}
                        icon={Images.public.password}
                        secureTextEntry={true}
                        maxLength={16}
                        onChangeText={inputConfirmPsw}/>
                    <WhiteSpace size={50}/>
                    <InputWithClear
                        showClean={true}
                        placeholder={"请输入验证码"}
                        icon={Images.public.sms_code}
                        keyboardType="phone-pad"
                        maxLength={6}
                        mobile={Mobile}
                        smsType={SmsTypes.modifyLoginPsw}
                        getSmsButton={true}
                        onChangeText={inputCode}/>
                    <WhiteSpace size={80}/>
                    <LongButton text="重置密码" onPress={() => {
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
        UpdateLoginPwd(param, (res) => {
            // this.props.type == 1 ? "忘记密码" : '修改密码'
            if (this.props.type == 1) {
                toast("找回密码成功")
                navigation.goBack();
            } else {
                toast("密码修改成功，请重新登录")
                this.props.reLogin(navigation)
            }
        });
    }


    /**
     * 挂载
     */
    componentDidMount() {

    }


}

/**
 * 把state绑定到props,在props中获取数据
 */
function mapStateToProps(state) {
    return {
        ...state.modifyLoginPwdReducer,
        userInfo: state.mineReducer.userInfo,
        userCenterReducer: state.userCenterReducer,
    }

}

/**
 * 把dispatch绑定到props  可以直接调用对应的方法执行dispatch
 */
function mapDispatchToProps(dispatch) {
    return {
        inputCode: (code) => dispatch(ModifyLoginPwdAction.inputCode(code)),
        inputConfirmPsw: (comPwd) => dispatch(ModifyLoginPwdAction.inputConfirmPsw(comPwd)),
        inputPsw: (pwd) => dispatch(ModifyLoginPwdAction.inputPsw(pwd)),
        inputUserName: (user) => dispatch(ModifyLoginPwdAction.inputUserName(user)),
        reLogin: (navigation) => dispatch(LoginAction.reLogin(navigation))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(ModifyLoginPwd)