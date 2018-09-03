/**
 * Created by Tloy on 2018/3/19.
 */


"use strict"
import React, {Component} from 'react';
import {
    View,
    Text,
    Image,
    TouchableOpacity,
    ImageBackground,
    KeyboardAvoidingView
} from 'react-native';
import {connect} from 'react-redux'
import {BaseStyle, RegistAndLoginStyle} from '../../styles'
import BasePage from "../BasePage";
import Images from '../../images'
import WhiteSpace from "../../components/whitespace/WhiteSpace";
import LoginModal from "../../modals/LoginModal";
import RegistModal from "../../modals/RegistModal";
import {setToken} from "../../utils/CacheUtil";
import * as MallAction from '../../actions/MallAction'
import RouteConfig from "../../configs/RouteConfig";
import {toast} from "../../utils/LogUtil";
import * as MineAction from "../../actions/MineAction";
import {NavigationActions} from "react-navigation";

class RegistAndLogin extends BasePage {
    componentDidMount() {
    }

    /**
     *  页面UI布局
     */
    render() {
        const {navigation, changeUrl} = this.props
        return (
            <KeyboardAvoidingView style={BaseStyle.background}>
                <ImageBackground
                    style={RegistAndLoginStyle.background}
                    source={Images.login.regist_login}>
                    <WhiteSpace size={300}/>
                    <Image
                        style={RegistAndLoginStyle.logo}
                        source={Images.login.logo}/>
                    <WhiteSpace size={200}/>
                    <TouchableOpacity
                        activeOpacity={1}
                        style={RegistAndLoginStyle.loginBt}
                        onPress={() => {
                            this.refs.LoginModal.open()
                        }}>
                        <Text style={RegistAndLoginStyle.loginText}>登录</Text>
                    </TouchableOpacity>
                    <View style={{flex: 1}}/>
                    <Text style={RegistAndLoginStyle.regist}>如果您还没有账户，请注册</Text>
                    <WhiteSpace size={20}/>
                    <TouchableOpacity
                        activeOpacity={1}
                        style={RegistAndLoginStyle.registBt}
                        onPress={() => {
                            this.refs.RegistModal.open()
                        }}>
                        <Text style={RegistAndLoginStyle.registText}>注册</Text>
                    </TouchableOpacity>
                    <WhiteSpace size={50}/>
                    <TouchableOpacity
                        activeOpacity={1}
                        style={RegistAndLoginStyle.loginBt}
                        onPress={() => {
                            navigation.goBack()
                        }}>
                        <Text style={RegistAndLoginStyle.loginText}>取消</Text>
                    </TouchableOpacity>
                    <WhiteSpace size={50}/>
                </ImageBackground>
                <LoginModal
                    ref={"LoginModal"}
                    onLogin={(res) => {
                        setToken(res.Ticket)
                        navigation.dispatch(
                            NavigationActions.reset({
                                index: 0,
                                actions: [
                                    NavigationActions.navigate({routeName: RouteConfig.HomeTab.name}),
                                ]
                            }))
                        // navigation.goBack()
                        this.props.queryUserInfo()
                        if (this.props.navigation.state.params && this.props.navigation.state.params.mallUrl) {
                            changeUrl(this.props.navigation.state.params.mallUrl)
                        } else {
                            changeUrl()
                        }
                    }}
                    onPressForgot={() => {
                        navigation.navigate(RouteConfig.ModifyLoginPwd.name, {type: 1})
                    }}/>
                <RegistModal
                    ref={"RegistModal"}
                    onPressAgreement={() => {
                        navigation.navigate(RouteConfig.RegisterWebViewPage.name, {})
                    }}
                    onRegist={(res) => {
                        toast("注册成功")
                        setToken(res.Ticket)
                        // navigation.goBack()
                        navigation.dispatch(
                            NavigationActions.reset({
                                index: 0,
                                actions: [
                                    NavigationActions.navigate({routeName: RouteConfig.HomeTab.name}),
                                ]
                            }))
                        changeUrl()
                    }}/>
            </KeyboardAvoidingView>
        )
    }
}

/**
 * 把state绑定到props,在props中获取数据
 */
function mapStateToProps(state) {
    return {}
}

/**
 * 把dispatch绑定到props  可以直接调用对应的方法执行dispatch
 */
function mapDispatchToProps(dispatch) {
    return {
        changeUrl: (url) => dispatch(MallAction.changeUrl(url)),
        queryUserInfo: () => dispatch(MineAction.queryUserInfo()),
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(RegistAndLogin)