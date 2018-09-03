/**
 * Created by leaf on 2018/8/20.
 * 贝壳兑换
 */

"use strict"
import React, {Component} from 'react';
import {
    View,
    Text,
    Image,
    TextInput,
    StyleSheet,
    TouchableOpacity
} from 'react-native';

import {connect} from 'react-redux'
import TitleBar from "../../components/titlebar/TitleBar";
import Images from '../../images'
import WhiteSpace from "../../components/whitespace/WhiteSpace";
import LongButton from "../../components/button/LongButton";
import {unitWidth, width} from "../../utils/AdapterUtilNew";
import {checkJinE} from "../../utils/RegularUtil";
import {GetUserAccountInfoConch,GetWithdrawalsPromptConch,ExecWithDrawConch} from "../../server/ServerApi";
import ToCrashMenuModal from "../../modals/ToCrashMenuModal";
import RouteConfig from "../../configs/RouteConfig";
import ToCrashPasswordModal from "../../modals/ToCrashPasswordModal";
import {concatUrl} from "../../utils/UrlUtil";
import * as MineAction from "../../actions/MineAction";
import {hideKeyboard} from "../../utils/MobileUtil";
import {toast} from "../../utils/LogUtil";

class ConchConvert extends Component {

    state = {
        amount: '',
        errorMessage: "",
        accountInfo: {
            "Balance": 0,
            "Fee": 0,
            "AccountName": "",
            "BankNumber": "",
            "BankName": "",
            "BankId": "",
            "BankIco": ""
        },
        jingGaoText: []
    }

    componentDidMount() {
        GetUserAccountInfoConch((res) => {
            console.log('res',res)
            this.setState({accountInfo: res.data})
        })
        GetWithdrawalsPromptConch((res) => {
            console.log('GetWithdrawalsPrompt',res)
            this.setState({jingGaoText:res})
        })
    }

    getBankNum() {
        const BankNumber = this.state.accountInfo.BankNumber
        if (BankNumber) {
            return `(${ BankNumber.substring(BankNumber.length - 4)})`
        }
        return ""
    }

    toCrash() {
        // if (Number(this.state.amount) > this.state.accountInfo.Balance) {
        //     this.setState({errorMessage: "金额超过可兑换金额"})
        //     return
        // }
        if (Number(this.state.amount) % 100 != 0) {
            toast('兑换金额不是100倍数')
            return
        }
        this.refs.ToCrashPasswordModal.open()
    }


    render() {
        const {navigation} = this.props
        return (
            <TouchableOpacity
                activeOpacity={1}
                style={BaseStyle.backgroundAlignCenter}
                onPress={() => {
                    hideKeyboard()
                }}>
                <TitleBar
                    title={'贝壳兑换'}
                    navigation={navigation}
                    right={"···"}
                    rightTextStyle={{fontSize: 30}}
                    pressRight={() => {
                        hideKeyboard()
                        this.refs.ToCrashMenuModal.open()
                    }}/>
                <WhiteSpace size={20}/>
                <View style={styles.backInfo}>
                    <View style={styles.bankIcon}>
                        <Image style={styles.bankImg}
                               source={{uri: concatUrl(this.state.accountInfo.BankIco)}}/>
                    </View>
                    <Text
                        style={styles.bankName}>{this.state.accountInfo.BankName}{this.getBankNum()}</Text>
                </View>
                <WhiteSpace size={30}/>
                <View style={styles.crashInfo}>
                    <Text>兑换金额</Text>
                    <View style={styles.inputRow}>
                        <Text style={styles.inputLabel}>¥</Text>
                        <TextInput
                            style={styles.input}
                            underlineColorAndroid={'transparent'}
                            maxLength={10}
                            value={this.state.amount}
                            keyboardType={"numeric"}
                            onChangeText={(text) => {
                                if (checkJinE(text)) {
                                    if (text) {
                                        if (Number(text) > this.state.accountInfo.Balance){
                                            let money = parseInt(this.state.accountInfo.Balance / 100)
                                            text = (money * 100).toString()
                                        }
                                        this.setState({amount: text})
                                    } else {
                                        this.setState({amount: text, errorMessage: ""})
                                    }
                                }
                            }}/>
                    </View>
                    <View style={styles.line}/>
                    <View style={styles.bottom}>
                        <Text style={styles.yue}>手续费：{this.state.accountInfo.Fee * 100}%</Text>
                        <Text style={styles.yue}>现有贝壳：{this.state.accountInfo.Balance}</Text>
                    </View>
                    <Text style={[styles.yue,{marginTop:6}]}>实时到账：{((1 - this.state.accountInfo.Fee) * this.state.amount).toFixed(2)}</Text>
                </View>
                {/* 警告 */}
                <View style={styles.Conch_JingGaoView}>
                    <View style={styles.JingGao_topView}>
                        <Image source={Images.mine.mine_jingGao} style={{width: 15,height:15}}/>
                        <Text style={styles.JingGao_title}>兑换须知</Text>
                    </View>
                    {this.renderJingGaoText()}

                </View>

                <WhiteSpace size={150}/>
                <LongButton
                    style={this.state.amount ? {borderRadius: unitWidth * 15} : {
                        backgroundColor: "#deaeac",
                        borderRadius: unitWidth * 15
                    }}
                    text={"确认提现"}
                    onPress={() => {
                        if (this.state.amount) {
                            this.toCrash()
                        }
                    }}/>

                <ToCrashMenuModal
                    ref={"ToCrashMenuModal"}
                    pressMenu={() => {
                        navigation.navigate(RouteConfig.ConchRecord.name)
                    }}
                />
                <ToCrashPasswordModal
                    ref={"ToCrashPasswordModal"}
                    amount={this.state.amount}
                    onPasswordEnd={(text) => {
                        ExecWithDrawConch({
                            "Money": this.state.amount,
                            "BankId": this.state.accountInfo.BankId,
                            "PayPwd": text
                        }, (res) => {
                            hideKeyboard()
                            this.props.queryUserInfo()
                            navigation.replace(RouteConfig.ConchRecord.name)
                        })
                    }}/>
            </TouchableOpacity>
        )
    }

    renderJingGaoText() {
        let textItem = [];
        let {jingGaoText} = this.state;

        if (!jingGaoText.length){
            return <View style={{width:width,height: 50}}></View>
        }

        for (let i = 0; i < jingGaoText.length; i++) {
            textItem.push(
                <Text style={styles.JingGao_Text}>{i+1}、{jingGaoText[i]}</Text>
            )
        }
        return textItem;
    }

}

function mapStateToProps(state) {
    return {}
}

function mapDispatchToProps(dispatch) {
    return {
        queryUserInfo: () => dispatch(MineAction.queryUserInfo()),
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(ConchConvert)

const styles = StyleSheet.create({
    backInfo: {
        width: width,
        height: unitWidth * 120,
        backgroundColor: 'white',
        paddingLeft: unitWidth * 50,
        flexDirection: 'row',
        alignItems: 'center',

    },
    bankIcon: {
        width: unitWidth * 84,
        height: unitWidth * 84,
        borderRadius: unitWidth * 42,
        backgroundColor: "#ffffff",
        borderStyle: "solid",
        borderWidth: 1,
        borderColor: "#bfbfbf",
        alignItems: 'center',
        justifyContent: 'center',
        marginRight: unitWidth * 35
    },
    bankImg: {
        width: unitWidth * 80,
        height: unitWidth * 80,
        borderRadius: unitWidth * 40,
    },
    bankName: {
        fontSize: unitWidth * 24,
        color: "#000000",
        fontWeight: 'bold'
    },
    crashInfo: {
        width: width,
        backgroundColor: "#ffffff",
        paddingLeft: unitWidth * 45,
        paddingRight: unitWidth * 55,
        justifyContent: 'center',
        paddingTop: unitWidth * 35,
        paddingBottom: unitWidth * 27
    },
    inputRow: {
        flexDirection: 'row',
        alignItems: 'center',
        marginTop: unitWidth * 20
    },
    inputLabel: {
        fontSize: unitWidth * 35,
        color: "#000000",
        marginRight: unitWidth * 10
    },
    input: {
        width: unitWidth * 550,
        fontSize: unitWidth * 45,
        color: "#000000"
    },
    line: {
        width: unitWidth * 650,
        height: StyleSheet.hairlineWidth * 2,
        backgroundColor: "#bfbfbf"
    },
    bottom: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        marginTop: unitWidth * 27
    },
    yue: {
        fontSize: unitWidth * 24,
        color: "#666666"
    },

    all: {
        fontSize: unitWidth * 24,
        color: "#ce0600"
    },

    Conch_JingGaoView: {
        width: width,
        backgroundColor: '#ffffff',
        paddingLeft: unitWidth * 50,
        marginTop: unitWidth * 24,
    },
    JingGao_topView: {
        flexDirection: 'row',
        marginTop: unitWidth * 38,
        marginBottom: unitWidth * 10,
    },
    JingGao_title: {
        fontSize: unitWidth * 28,
        color: "#000000",
        marginLeft: unitWidth * 10,
    },
    JingGao_Text: {
        marginTop: unitWidth * 20,
        fontSize: unitWidth * 24,
        color: "#000000"
    }
})