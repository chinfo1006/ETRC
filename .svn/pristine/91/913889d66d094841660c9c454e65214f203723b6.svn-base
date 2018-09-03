
'use strict';

import React, {Component} from 'react';
import {
    View,
    Text,
    Image,
    StyleSheet,
    TouchableOpacity
} from 'react-native';
import PropTypes from 'prop-types'
import Modal from 'react-native-modalbox'
import {width, unitWidth,} from "../utils/AdapterUtilNew";
import WhiteSpace from "../components/whitespace/WhiteSpace";
import Images from '../images';
import PasswordInput from "../components/input/PasswordInput";
import * as Color from '../configs/Color'

export default class MobileCheckCodeModal extends Component {
    constructor(props) {
        super(props)
    }

    state = {
        time: 0,
        msg: ''
    }

    static propTypes = {
        onEnd: PropTypes.func,
        onPressGetCode: PropTypes.func,
    }

    static defaultProps = {
        onEnd: () => {
        },
        onPressGetCode: () => {
        }
    }

    open() {
        this.setState({
            msg: ''
        })
        this.refs.MobileCheckCodeModal.open()
        if (this.state.time > 0) return
        this.props.onPressGetCode()
    }

    updateState(state) {
        this.setState({
            ...state
        })
        if (state.time) {
            this.intervalId = setInterval(() => {
                if (this.state.time <= 0) {
                    clearInterval(this.intervalId)
                    return
                }
                this.setState({
                    time: this.state.time - 1
                })
            }, 1000)
        }
    }

    componentWillUnmount() {
        console.log("componentWillUnmount")
        clearInterval(this.intervalId)
    }

    close() {
        this.refs.MobileCheckCodeModal.close()
    }

    render() {
        return (
            <Modal
                style={styles.background}
                ref={"MobileCheckCodeModal"}
                backdropPressToClose={false}
                backButtonClose={true}
                position={'center'}
                swipeToClose={false}>
                <TouchableOpacity
                    activeOpacity={1}
                    onPress={() => {
                        this.close()
                    }}>
                    <Image
                        style={styles.close}
                        source={Images.public.close_transparent}/>
                </TouchableOpacity>
                <View style={styles.line}/>
                <View style={styles.block}>
                    <Text
                        style={styles.title}>请输入尾号为{this.props.SellerPhone ? this.props.SellerPhone.substring(this.props.SellerPhone.length - 4) : ""}收到的验证码</Text>
                    <WhiteSpace size={80}/>
                    <PasswordInput
                        maxLength={6}
                        itemStyle={styles.itemStyle}
                        onChange={this.props.onChange}
                        onEnd={(text) => {
                            // this.close()
                            this.props.onEnd(text)
                        }}/>
                    <WhiteSpace size={60}/>
                    <View style={styles.bottomRow}>
                        <Text style={styles.msg}>{this.state.msg}</Text>
                        {this.state.time > 0 ? (
                            <Text style={styles.countDown}>{this.state.time}s后重新发送</Text>
                        ) : (
                            <Text
                                style={styles.getCode}
                                onPress={() => {
                                    this.props.onPressGetCode()
                                }}>重新发送</Text>
                        )}
                    </View>
                </View>
            </Modal>
        )
    }
}

const styles = StyleSheet.create({
    background: {
        width: width,
        height: unitWidth * 520,
        alignItems: 'center',
        backgroundColor: 'transparent',
    },
    close: {
        width: unitWidth * 75,
        height: unitWidth * 75,
    },
    line: {
        width: 1,
        height: unitWidth * 95,
        backgroundColor: "#ffffff"
    },
    block: {
        width: unitWidth * 680,
        height: unitWidth * 350,
        borderRadius: unitWidth * 10,
        alignItems: 'center',
        backgroundColor: '#ffffff',
        paddingTop: unitWidth * 50,
        paddingHorizontal: unitWidth * 40
    },
    title: {
        fontSize: unitWidth * 32,
        color: "#7f7c7c"
    },
    itemStyle: {
        width: unitWidth * 80,
        height: unitWidth * 80,
        borderStyle: "solid",
        borderWidth: 1,
        borderColor: "#b5b5b5"
    },
    bottomRow: {
        width: unitWidth * 540,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between'
    },
    msg: {
        fontSize: unitWidth * 30,
        color: "#fa0404"
    },
    getCode: {
        textAlign: 'right',
        fontSize: unitWidth * 30,
        textDecorationLine: "underline",
        color: Color.themeColor
    },
    countDown: {
        textAlign: 'right',
        fontSize: unitWidth * 30,
        color: "#a4a1a1"
    },
})