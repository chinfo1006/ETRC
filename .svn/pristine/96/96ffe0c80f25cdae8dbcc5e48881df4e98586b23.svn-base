/**
 * Created by Tloy on 2018/8/16.
 */


'use strict';

import React, {Component} from "react";
import {
    View,
    Text,
    Image,
    StyleSheet,
    TouchableOpacity,
    ImageBackground
} from "react-native";
import Modal from "react-native-modalbox";
import {height, unitWidth, width} from "../utils/AdapterUtilNew";
import Images from '../images'
import WhiteSpace from "../components/whitespace/WhiteSpace";
import {GetDailyCheckInApi, GetWhetherSignInApi} from "../server/ServerApi";
import {toast} from "../utils/LogUtil";
import PropTypes from 'prop-types'
import RouteConfig from "../configs/RouteConfig";
import LongButton from "../components/button/LongButton";

export default class QianDaoModal extends Component {

    static propTypes = {
        getProductDetail: PropTypes.func.isRequired,
        navigation: PropTypes.object.isRequired
    }

    static defaultProps = {
        onPressBuy: () => {
        }
    }

    state = {
        commissionCharge: "",
        EverydayReleaseNumber: 0,
        FrozenCount: 0
    }

    componentDidMount() {
        if (!global.token) return
        GetWhetherSignInApi((res) => {
            this.setState({
                commissionCharge: res.commissionCharge,
                EverydayReleaseNumber: Number(res.EverydayReleaseNumber),
                FrozenCount: Number(res.FrozenCount),
            })
            this.props.getProductDetail({id: res.commissionCharge})
            this.open()
        })
    }

    open() {
        this.refs.QianDaoModal.open()
    }

    close() {
        this.refs.QianDaoModal.close()
    }

    render() {
        return (
            <Modal
                style={styles.modal}
                ref={"QianDaoModal"}
                backdropPressToClose={true}
                backButtonClose={true}
                position={'center'}
                swipeToClose={false}
                backdropOpacity={0.7}
            >
                <ImageBackground
                    style={styles.modal}
                    resizeMode={"stretch"}
                    source={Images.qiaodao.qiaodao_bg}>
                    <Text style={styles.amount}>{this.state.EverydayReleaseNumber.toFixed(2)}</Text>
                    <View style={{height: unitWidth * 30}}/>
                    <Text
                        style={styles.buy}
                        onPress={() => {
                            this.props.navigation.navigate(RouteConfig.LessonPay.name, {number: 1})
                            this.close()
                        }}>购买课程解冻剩余{this.state.FrozenCount.toFixed(0)}ETRC</Text>
                    <View style={{height: unitWidth * 80}}/>
                    <LongButton
                        style={styles.bt}
                        text={"存入账户"}
                        onPress={() => {
                            GetDailyCheckInApi((res) => {
                                toast(`解冻${this.state.EverydayReleaseNumber}ETRC成功`)
                                this.close()
                            })
                        }}/>
                    <View style={{height: unitWidth * 200}}/>
                </ImageBackground>

            </Modal>
        )
    }
}

const styles = StyleSheet.create({
    modal: {
        width: width,
        height: unitWidth * 899,
        alignItems: 'center',
        backgroundColor: 'transparent',
        justifyContent: 'flex-end'
    },
    amount: {
        fontSize: unitWidth * 78,
        color: "#fe4d01"
    },
    buy: {
        fontSize: unitWidth * 30,
        color: "#fd4902",
        textDecorationLine: "underline"
    },
    bt: {
        width: unitWidth * 260,
        height: unitWidth * 70,
        borderRadius: unitWidth * 35,
        backgroundColor: "#fe4d01"
    },
    btText: {
        fontSize: unitWidth * 30,
        color: "#ffffff"
    },
})
