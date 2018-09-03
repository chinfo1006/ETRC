/**
 * Created by Tloy on 2018/8/16.
 */

'use strict';

import React, {Component} from 'react';
import {
    View,
    Text,
    StyleSheet,
    Image,
    TextInput,
    Clipboard,
    ScrollView,
    TouchableOpacity,
    Platform
} from 'react-native';

import {connect} from 'react-redux'
import TitleBar from "../../components/titlebar/TitleBar";
import Images from '../../images'
import * as Color from '../../configs/Color'
import {width, unitWidth} from "../../utils/AdapterUtilNew";
import QRCode from 'react-native-qrcode'
import {toast} from "../../utils/LogUtil";
import KeyboardSpacer from 'react-native-keyboard-spacer'

class ReceiptCode extends Component {
    state = {
        amount: ""
    }

    componentDidMount() {

    }

    render() {
        const {navigation, userInfo} = this.props;
        const codeObj = {
            type: 'gathering',
            data: {
                walletAddress: userInfo.PurseAddress,
                amount: this.state.amount
            }
        }
        return (
            <View style={styles.about_bg_AlignCenter}>
                <TitleBar
                    title={'收款'}
                    navigation={navigation}
                />
                <ScrollView
                    contentContainerStyle={{alignItems: 'center'}}
                    showsVerticalScrollIndicator={false}
                    keyboardShouldPersistTaps={"handled"}>
                    <View style={styles.QRcode_bg}>
                        <TouchableOpacity
                            activeOpacity={1}
                            onPress={() => {
                                Clipboard.setString(userInfo.PurseAddress)
                                toast("复制成功")
                            }}>
                            <QRCode
                                size={unitWidth * 350}
                                value={JSON.stringify(codeObj)}/>
                        </TouchableOpacity>
                        <Text style={{marginTop: unitWidth * 20}}>点击二维码复制地址</Text>
                    </View>
                    <View style={styles.bg_view}>
                        <View style={styles.items}>
                            <Text style={styles.item_text}>钱包地址</Text>
                            <Text
                                style={styles.address_text}
                                onPress={() => {
                                    Clipboard.setString(userInfo.PurseAddress)
                                    toast("复制成功")
                                }}>{userInfo.PurseAddress}</Text>
                            <View style={styles.line}></View>
                        </View>
                        <View style={styles.items}>
                            <Text style={styles.item_text}>收款金额</Text>
                            <TextInput
                                underlineColorAndroid={"transparent"}
                                placeholder={'请输入收款金额(选填)'}
                                maxLength={14}
                                style={styles.textInputStyle}
                                keyboardType={'numeric'}
                                value={this.state.amount}
                                onChangeText={(text) => {
                                    this.setState({amount: this.getMoeny(text)})
                                }}
                            />
                        </View>
                    </View>
                </ScrollView>
                <KeyboardSpacer/>
            </View>
        )
    }

    getMoeny(obj) {
        obj = obj.replace(/[^\d.]/g, "");
        //必须保证第一位为1-9数字而不是.
        obj = obj.replace(/^\./g, "");
        //保证只有出现一个.而没有多个.
        obj = obj.replace(/\.{2,}/g, ".");
        //保证.只出现一次，而不能出现两次以上
        obj = obj.replace(".", "$#$").replace(/\./g, "").replace("$#$", ".");
        // 限制小数点位数
        var dotindex = obj.indexOf(".");
        if (dotindex > -1) {
            var index = obj.length - dotindex - 5
            if (index > 0) {
                obj = obj.substring(0, obj.length - index)
            }
        }
        return obj
    }
}


function mapStateToProps(state) {
    return {
        ...state.mineReducer,
    };
}

function mapDispatchToProps(dispatch) {
    return {};
}

export default connect(mapStateToProps, mapDispatchToProps)(ReceiptCode);

const styles = StyleSheet.create({
    about_bg_AlignCenter: {
        flex: 1,
        alignItems: 'center',
        backgroundColor: '#eeeeee',
    },
    QRcode_bg: {
        width: width,
        height: unitWidth * 500,
        backgroundColor: '#ffffff',
        marginTop: unitWidth * 20,
        alignItems: 'center',
        justifyContent: 'center'
    },
    bg_view: {
        marginTop: unitWidth * 25,
        width: unitWidth * 700,
        height: unitWidth * 240,
        backgroundColor: 'white',
    },
    items: {
        flex: 1,
        //  确认主轴的方向
        flexDirection: 'row',
        alignItems: 'center',
        paddingLeft: unitWidth * 25,
    },
    item_text: {
        fontSize: unitWidth * 24,
        color: '#555555',
    },
    textInputStyle: {
        marginLeft: unitWidth * 30,
        color: '#000000',
        fontSize: unitWidth * 24,
        width: unitWidth * 300,
        // textAlign: 'center',
        // textAlignVertical: 'center',
    },
    line: {
        // 设置绝对定位
        position: 'absolute',
        bottom: 0,
        height: 1,
        width: unitWidth * 700,
        backgroundColor: '#eeeeee',
    },
    address_text: {
        fontSize: unitWidth * 24,
        color: '#555555',
        marginLeft: unitWidth * 30,
        width: unitWidth * 500,
    },


})
