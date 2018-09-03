/**
 * Created by Tloy on 2018/3/20.
 */


"use strict";
import React, {Component} from 'react';
import {
    View,
    Text,
    Image,
    ScrollView,
    StyleSheet,
    TouchableOpacity,
    KeyboardAvoidingView
} from 'react-native';
import Modal from 'react-native-modalbox';
import PropTypes from 'prop-types'
import {RegistLoginModalStyle} from '../styles'
import Images from '../images'
import * as String from "../configs/String";
import {SmsTypes} from "../configs/Code";
import {RegistLoginInput} from "../components/input/RegistLoginInput";
import WhiteSpace from "../components/whitespace/WhiteSpace";
import {hideKeyboard} from "../utils/MobileUtil";
import RouteConfig from "../configs/RouteConfig";
import {toast} from "../utils/LogUtil";
import {Register} from "../server/ServerApi";
import {setToken} from "../utils/CacheUtil";

export default class RegistModal extends Component {
    constructor(props) {
        super(props);
    }

    state = {
        username: '',
        password: "",
        confirmPwd: '',
        checkCode: '',
        recommendPhone: '',
        errorMessage: ''
    }

    static propTypes = {
        onRegist: PropTypes.func.isRequired,
        onPressAgreement: PropTypes.func.isRequired,
    }

    open() {
        this.refs.registModal.open()
    }

    render() {
        return (
            <Modal
                style={RegistLoginModalStyle.registBg}
                ref={"registModal"}
                position="center"
                backButtonClose={true}
                backdropOpacity={0.8}
                backdropPressToClose={false}
                swipeToClose={false}>
                <TouchableOpacity
                    style={RegistLoginModalStyle.registModal}
                    activeOpacity={1}
                    onPress={() => {
                        hideKeyboard()
                    }}>
                    <Text style={RegistLoginModalStyle.title}>注册</Text>
                    <ScrollView
                        contentContainerStyle={{alignItems: 'center'}}
                        style={{flex: 1}}
                        keyboardShouldPersistTaps="handled"
                        showsVerticalScrollIndicator={false}>
                        <RegistLoginInput
                            icon={Images.login.icon_user}
                            placeholder={String.inputPhone}
                            maxLength={11}
                            keyboardType="phone-pad"
                            onChangeText={(text) => {
                                this.setState({
                                    username: text,
                                    errorMessage: ''
                                })
                            }}/>
                        <RegistLoginInput
                            icon={Images.login.icon_pwd}
                            secureTextEntry={true}
                            placeholder={String.inputPwd}
                            onChangeText={(text) => {
                                this.setState({
                                    password: text,
                                    errorMessage: ''
                                })
                            }}/>
                        <RegistLoginInput
                            icon={Images.login.icon_pwd}
                            secureTextEntry={true}
                            placeholder={String.comfirmPwd}
                            onChangeText={(text) => {
                                this.setState({
                                    confirmPwd: text,
                                    errorMessage: ''
                                })
                            }}/>
                        <RegistLoginInput
                            icon={Images.login.icon_code}
                            keyboardType="phone-pad"
                            placeholder={String.inputCheckCode}
                            getSmsButton={true}
                            smsType={SmsTypes.regist}
                            mobile={this.state.username}
                            onChangeText={(text) => {
                                this.setState({
                                    checkCode: text,
                                    errorMessage: ''
                                })
                            }}/>
                        <RegistLoginInput
                            icon={Images.login.icon_recomend}
                            keyboardType="phone-pad"
                            placeholder={String.inputInviter}
                            onChangeText={(text) => {
                                this.setState({
                                    recommendPhone: text,
                                    errorMessage: ''
                                })
                            }}/>
                        <Text style={RegistLoginModalStyle.agreementText}
                        >在ETRC注册并创建账户同时，我接受
                            <Text style={RegistLoginModalStyle.agreementText2}
                                  onPress={() => {
                                      this.props.onPressAgreement && this.props.onPressAgreement()
                                  }}>《服务条款》</Text></Text>
                        <Text style={RegistLoginModalStyle.errorText}>{this.state.errorMessage}</Text>
                        <TouchableOpacity
                            style={RegistLoginModalStyle.bt}
                            activeOpacity={1}
                            onPress={() => {
                                this.pressRegist()
                            }}>
                            <Text style={RegistLoginModalStyle.btText}>注册</Text>
                        </TouchableOpacity>
                        <WhiteSpace size={400}/>
                    </ScrollView>
                    <TouchableOpacity
                        style={RegistLoginModalStyle.close}
                        activeOpacity={1}
                        onPress={() => {
                            this.refs.registModal.close()
                        }}>
                        <Image
                            style={RegistLoginModalStyle.closeImage}
                            source={Images.public.close}/>
                    </TouchableOpacity>
                </TouchableOpacity>
            </Modal>)
    }

    pressRegist() {
        const {username, password, confirmPwd, checkCode, recommendPhone} = this.state
        if (!username) {
            this.setState({
                errorMessage: '请输入手机号码'
            })
            return
        }

        if (!password) {
            this.setState({
                errorMessage: '请输入密码'
            })
            return
        }
        // if(!checkPayPassword()){
        //
        // }
        if (!confirmPwd) {
            this.setState({
                errorMessage: '请确认密码'
            })
            return
        }
        if (!checkCode) {
            this.setState({
                errorMessage: '请输入验证码'
            })
            return
        }
        // if (!checkMobile(username)) {
        //     toast("手机号码不正确")
        //     return
        // }
        if (password != confirmPwd) {
            this.setState({
                errorMessage: '密码输入不一致'
            })
            return
        }
        Register({
            "Mobile": username,
            "Password": password,
            "ConfirmPassword": confirmPwd,
            "SmsVerCode": checkCode,
            "RecommandMobile": recommendPhone
        }, (res) => {
            this.props.onRegist(res)
        }, (res) => {
            this.setState({
                errorMessage: res.message
            })
        })
    }
}