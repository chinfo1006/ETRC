/**
 * Created by Tloy on 2018/3/20.
 */


"use strict";
import React, {Component} from 'react';
import {
    View,
    Text,
    Image,
    StyleSheet,
    TouchableOpacity,
} from 'react-native';
import Modal from 'react-native-modalbox';
import PropTypes from 'prop-types'
import {RegistLoginModalStyle} from '../styles'
import Images from '../images'
import {RegistLoginInput} from "../components/input/RegistLoginInput";
import * as String from '../configs/String'
import {passwordLoginApi} from "../server/ServerApi";
import {hideKeyboard} from "../utils/MobileUtil";
import {checkMobile} from "../utils/RegularUtil";

export default class LoginModal extends Component {
    constructor(props) {
        super(props);
    }

    state = {
        username: '',
        password: "",
        errorMessage: '',

        phoneTrue: false,
    }

    static propTypes = {
        onLogin: PropTypes.func.isRequired,
        onPressForgot: PropTypes.func.isRequired,
    }

    open() {
        this.refs.loginModal.open()
    }

    render() {
        return (
            <Modal
                style={RegistLoginModalStyle.loginModal}
                ref={"loginModal"}
                position="center"
                backButtonClose={true}
                backdropPressToClose={false}
                backdropOpacity={0.8}
                swipeToClose={false}>
                <TouchableOpacity
                    style={RegistLoginModalStyle.loginModal}
                    activeOpacity={1}
                    onPress={() => {
                        hideKeyboard()
                    }}>
                    <Text style={RegistLoginModalStyle.title}>登录</Text>
                    <RegistLoginInput
                        icon={Images.login.icon_user}
                        placeholder={String.inputPhone}
                        maxLength={11}
                        autoFocus={true}
                        onChangeText={(text) => {
                            this.setState({
                                username: text,
                                errorMessage: '',
                                phoneTrue: checkMobile(text)
                            })
                        }}/>
                    <RegistLoginInput
                        secureTextEntry={true}
                        icon={Images.login.icon_pwd}
                        placeholder={String.inputPwd}
                        onChangeText={(text) => {
                            this.setState({
                                password: text,
                                errorMessage: '',
                            })
                        }}/>
                    <View style={RegistLoginModalStyle.forgetPwd}>
                        <Text style={RegistLoginModalStyle.forgetPwdText}
                              onPress={() => {
                                  this.props.onPressForgot && this.props.onPressForgot()
                              }}>忘记密码?</Text>
                        <View style={{flex: 1}}/>
                    </View>
                    <Text style={RegistLoginModalStyle.errorText}>{this.state.errorMessage}</Text>
                    <TouchableOpacity
                        style={this.state.phoneTrue ? RegistLoginModalStyle.bt : RegistLoginModalStyle.btGray}
                        activeOpacity={1}
                        onPress={() => {
                            this.pressLogin()
                        }}>
                        <Text style={RegistLoginModalStyle.btText}>登录</Text>
                    </TouchableOpacity>
                    <TouchableOpacity
                        style={RegistLoginModalStyle.close}
                        activeOpacity={1}
                        onPress={() => {
                            this.refs.loginModal.close()
                        }}>
                        <Image
                            style={RegistLoginModalStyle.closeImage}
                            source={Images.public.close}/>
                    </TouchableOpacity>
                </TouchableOpacity>
            </Modal>)
    }

    pressLogin() {
        const {username, password} = this.state
        if (!username) {
            this.setState({
                errorMessage: String.inputPhone
            })
            return
        }

        // if (!checkMobile(username)) {
        //     toast("请输入正确的手机号")
        //     return
        // }
        if (!password) {
            this.setState({
                errorMessage: String.inputPwd
            })
            return
        }
        // if (!password || password.length < 6) {
        //     this.setState({
        //         errorMessage: String.inputPwd
        //     })
        //     return
        // }
        passwordLoginApi({
            UserName: username,
            Password: password
        }, (res) => {
            this.props.onLogin(res)
        }, (res) => {
            this.setState({
                errorMessage: res.message
            })
        })
    }
}