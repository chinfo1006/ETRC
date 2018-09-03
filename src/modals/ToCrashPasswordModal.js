/**
 * Created by Tloy on 2016/10/27.
 */


"use strict";
import React, {Component} from 'react';
import {
    View,
    Text,
    Image,
    StyleSheet,
    ScrollView,
    TouchableOpacity,
} from 'react-native';
import Modal from 'react-native-modalbox';
import {baseHost} from '../server/ApiUrl'
import {width, unitWidth, height} from "../utils/AdapterUtilNew";
import PropTypes from 'prop-types'
import ToCashPasswordInput from "../components/input/ToCashPasswordInput";
import Images from '../images'
import WhiteSpace from "../components/whitespace/WhiteSpace";

export default class ToCrashPasswordModal extends Component {
    constructor(props) {
        super(props);
    }

    static propTypes = {
        amount: PropTypes.string.isRequired,
        onPasswordEnd: PropTypes.func.isRequired,
    }

    open() {
        this.refs.ToCrashPasswordModal.open()
    }

    closeModal() {
        this.refs.ToCrashPasswordModal.close()
    }

    render() {
        const amount = "¥" + this.props.amount
        return (
            <Modal
                style={styles.modal}
                ref={"ToCrashPasswordModal"}
                position="center"
                backButtonClose={true}
                backdropPressToClose={false}
                swipeToClose={false}>
                <WhiteSpace size={380}/>
                <View style={styles.modalbg}>
                    <View style={styles.top}>
                        <TouchableOpacity
                            style={styles.close}
                            activeOpacity={1}
                            onPress={() => {
                                this.closeModal()
                            }}>
                            <Image style={styles.closeImg}
                                   source={Images.public.close}/>
                        </TouchableOpacity>

                        <Text style={styles.title}>输入支付密码</Text>
                    </View>
                    <View style={styles.line}/>
                    <WhiteSpace size={40}/>
                    <Text style={styles.amountLabel}>提现金额</Text>
                    <WhiteSpace size={20}/>
                    <Text style={styles.amount}>{amount}</Text>
                    <WhiteSpace size={20}/>
                    <View style={styles.input}>
                        <ToCashPasswordInput
                            maxLength={6}
                            onEnd={(text) => {
                                this.closeModal()
                                this.props.onPasswordEnd(text)
                            }}/>
                    </View>
                </View>
            </Modal>
        );
    }
}

const styles = StyleSheet.create({
    modal: {
        width: width,
        height: height,
        backgroundColor: 'transparent',
        alignItems: 'center'
    },
    modalbg: {
        width: width - unitWidth * 150,
        height: unitWidth * 400,
        borderRadius: unitWidth * 15,
        backgroundColor: 'white',
        alignItems: 'center'
    },
    top: {
        width: width - unitWidth * 150,
        height: unitWidth * 100,
        alignItems: 'center',
        justifyContent: 'center'
    },
    close: {
        position: 'absolute',
        top: unitWidth * 30,
        left: unitWidth * 30
    },
    closeImg: {
        width: unitWidth * 40,
        height: unitWidth * 40
    },
    title: {
        fontSize: unitWidth * 32,
        color: "#444444",
        fontWeight: 'bold'
    },

    line: {
        width: width - unitWidth * 150,
        height: StyleSheet.hairlineWidth * 2,
        backgroundColor: "#bfbfbf"
    },
    amountRow: {
        width: width - unitWidth * 150,
        height: unitWidth * 100,
        alignItems: 'center',
        justifyContent: 'center'
    },
    amountLabel: {
        fontSize: unitWidth * 30,
        color: "#000000",
    },
    amount: {
        fontSize: unitWidth * 40,
        color: "#000000",
        fontWeight: 'bold'
    },
    input: {
        height: unitWidth * 120,
        width: width - unitWidth * 150,
        alignItems: 'center',
        justifyContent: 'center'
    },
})