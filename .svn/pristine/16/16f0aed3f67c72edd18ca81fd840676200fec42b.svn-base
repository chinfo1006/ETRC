/**
 * Created by Tloy on 2017/9/20.
 */

"use strict";

import React, {Component} from 'react';
import {
    Text,
    View,
    Image,
    BackHandler,
    TouchableOpacity,
} from 'react-native';
import {RegistLoginStyle} from '../../styles'
import {connect} from 'react-redux'
import TitleBar from "../../components/titlebar/TitleBar";
import LongButton from "../../components/button/LongButton";
import Images from '../../images'
import RouteConfig from "../../configs/RouteConfig";
import * as LoginAction from '../../actions/LoginAction'
import {toast} from "../../utils/LogUtil";
import InputWithClear from "../../components/input/InputWithClear";
import WhiteSpace from "../../components/whitespace/WhiteSpace";
import {NavigationActions} from 'react-navigation';
import * as MineAction from '../../actions/MineAction';
import BasePage from "../BasePage";

//账号密码登陆页面
class PasswordLoginPage extends BasePage {
    constructor(props) {
        super(props);
    }

    componentDidMount() {
    }

    render() {
        const {navigation, inputUserName, inputPsw} = this.props;
        return (
            <View style={RegistLoginStyle.background}>
                <TitleBar title={"登陆"} navigation={navigation}/>
                <WhiteSpace size={80}/>
                <Image style={RegistLoginStyle.logo}
                       source={Images.public.logo}/>
                <WhiteSpace size={80}/>
                <InputWithClear
                    showClean={true}
                    placeholder={"请输入账号"}
                    icon={Images.public.username}
                    keyboardType="default"
                    //maxLength={11}
                    //type={'text'}
                    onChangeText={inputUserName}/>
                <WhiteSpace size={80}/>

                <InputWithClear
                    showClean={true}
                    placeholder={"请输入密码"}
                    icon={Images.public.password}
                    secureTextEntry={true}
                    maxLength={16}
                    onChangeText={inputPsw}/>
                <WhiteSpace size={100}/>
                <LongButton text={"登  陆"}
                            onPress={this.pressLogin.bind(this)}/>
                <WhiteSpace size={80}/>
                <View style={RegistLoginStyle.function}>

                    <TouchableOpacity
                        onPress={() => {
                            navigation.navigate(RouteConfig.RegistPage.name)
                        }}>
                        <View style={RegistLoginStyle.pressViewStyle}>
                            <Text style={RegistLoginStyle.textStyle}>注册</Text>
                        </View>
                    </TouchableOpacity>
                    <TouchableOpacity
                        onPress={() => {
                            navigation.navigate(RouteConfig.ModifyLoginPwd.name, {type: 1})
                        }}>
                        <View style={RegistLoginStyle.pressViewStyle}>
                            <Text style={RegistLoginStyle.textStyle} numberOfLines={1}>忘记密码</Text>
                        </View>
                    </TouchableOpacity>
                </View>
            </View>)
    }

    /**
     * 点击登录按钮
     */
    pressLogin() {
        const {username, password, passwordLogin, navigation} = this.props
        if (!username) {
            toast("请输入账号")
            return
        }

        // if (!checkMobile(username)) {
        //     toast("请输入正确的手机号")
        //     return
        // }

        if (!password || password.length < 6) {
            toast("请输入6-16位密码")
            return
        }
        //跳转页面
        passwordLogin({
            UserName: username,
            Password: password
        }, navigation, navigation.state.params ? navigation.state.params.mallUrl : '');
    }
}

/**
 * 把state绑定到props,在props中获取数据
 */
function mapStateToProps(state) {
    return state.loginReducer
}

/**
 * 把dispatch绑定到props  可以直接调用对应的方法执行dispatch
 */
function mapDispatchToProps(dispatch) {
    return {
        inputUserName: (userName) => dispatch(LoginAction.inputUserName(userName)),
        inputPsw: (psw) => dispatch(LoginAction.inputPsw(psw)),
        passwordLogin: (param, navigation, mallUrl) => dispatch(LoginAction.passwordLogin(param, navigation, mallUrl)),
    }
}


export default connect(mapStateToProps, mapDispatchToProps)(PasswordLoginPage);