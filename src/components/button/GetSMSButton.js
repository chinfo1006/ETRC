/**
 * Created by Tloy on 2018/1/11.
 */


"use strict"
import React, { Component } from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native'
import PropTypes from 'prop-types';
import * as Color from "../../configs/Color";
import { toast } from "../../utils/LogUtil";
import { checkMobile } from "../../utils/RegularUtil";
import { SendSMS } from "../../server/ServerApi";

export default class GetSMSButton extends Component {
    constructor(props) {
        super(props)
        this.intervalId = 0
        this.state = {
            time: 60,
            showTime: false
        }
    }

    static propTypes = {
        mobile: PropTypes.string,
        smsType: PropTypes.string.isRequired
    }

    componentWillUnmount() {
        clearInterval(this.intervalId)
    }

    sendSucced() {
        toast("验证码已发送")
        this.setState({
            showTime: true
        })
        this.intervalId = setInterval(() => {
            if (this.state.time <= 0) {
                clearInterval(this.intervalId)
                this.setState({
                    showTime: false,
                    time: 60
                })
                return
            }
            this.setState({
                time: this.state.time - 1
            })
        }, 1000)
    }

    render() {
        if (this.state.showTime) {
            return (
                <Text>{this.state.time}</Text>
            )
        }
        return (


            // <TouchableOpacity
            //     activeOpacity={0.6}
            //     onPress={
            //         () => {

            //         }
            //     }
            // >

                <Text style={{
                    color: Color.themeColor,
                    textDecorationLine: 'underline',
                }}
                    onPress={() => {
                        console.log('点击了获取验证码');
                        if (!this.props.mobile) {
                            toast("请输入手机号码")
                            return
                        }
                        if (!checkMobile(this.props.mobile)) {
                            toast("手机号码不正确")
                        }
                        SendSMS({
                            Mobile: this.props.mobile,
                            Type: this.props.smsType
                        }, () => {
                            this.sendSucced()
                        })
                    }}>发送验证码</Text>
                    
            // </TouchableOpacity>
        )
    }


}



