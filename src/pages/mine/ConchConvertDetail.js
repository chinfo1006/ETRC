/**
 * Created by leaf on 2018/8/21.
 *
 * 贝壳兑换详情
 */


"use strict"
import React, {Component} from 'react';
import {
    View,
    Text,
    Image,
    StyleSheet
} from 'react-native';

import {connect} from 'react-redux'
import TitleBar from "../../components/titlebar/TitleBar";
import {unitWidth, width} from "../../utils/AdapterUtilNew";
import WhiteSpace from "../../components/whitespace/WhiteSpace";
import {getDate} from "../../utils/DateUtil";
import LongButton from "../../components/button/LongButton";
import {concatUrl} from "../../utils/UrlUtil";
import {BaseStyle} from "../../styles";
import {GetWithDrawDetailConch} from "../../server/ServerApi"

class ConchConvertDetail extends Component {

    componentDidMount() {
        const {info: {accountInfo}} = this.props.navigation.state.params

        GetWithDrawDetailConch(accountInfo.BankId,(res) => {
            console.log('res',res)
        })
    }

    render() {
        const {navigation} = this.props
        const {info: {amount, accountInfo}} = navigation.state.params
        return (
            <View style={[BaseStyle.backgroundAlignCenter, {backgroundColor: 'white'}]}>
                <TitleBar title={'提现详情'} navigation={navigation}/>
                <WhiteSpace size={20}/>
                <View style={{backgroundColor: 'white', width: width, alignItems: 'center'}}>
                    <WhiteSpace size={20}/>
                    <View style={styles.bankIcon}>
                        <Image
                            style={styles.bankImg}
                            source={{uri: concatUrl(accountInfo.BankIco)}}/>
                    </View>
                    <WhiteSpace size={30}/>
                    <Text style={styles.bankName}>{accountInfo.BankName}</Text>
                    <WhiteSpace size={60}/>
                    <Text style={styles.amount}>¥ {amount}</Text>
                    <WhiteSpace size={60}/>
                    <Text style={styles.status}>银行处理中...</Text>
                    <WhiteSpace size={60}/>
                </View>
                <View size={40} style={{
                    backgroundColor: "#eeeeee",
                    width: width,
                    height: unitWidth * 20
                }}/>
                <View style={{backgroundColor: 'white'}}>
                    <Text style={styles.row}>提现金额：{amount}</Text>
                    <Text style={styles.row}>手续费：0</Text>
                    <Text style={styles.row}>申请时间：{getDate(0, "2")}</Text>
                    <Text style={styles.row}>到账时间：预计1-3个工作日到账</Text>
                </View>
                <View style={{flex: 1}}/>
                <LongButton
                    style={{borderRadius: unitWidth * 15}}
                    text={"完成"}
                    onPress={() => {
                        navigation.goBack()
                    }}/>
                <WhiteSpace size={200}/>
            </View>
        )
    }
}

function mapStateToProps(state) {
    return {
    }
}

function mapDispatchToProps(dispatch) {
    return {}
}

export default connect(mapStateToProps, mapDispatchToProps)(ConchConvertDetail)

const styles = StyleSheet.create({
    bg: {
        flex: 1,
        alignItems: 'center',
        backgroundColor: 'white'
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
    },
    bankImg: {
        width: unitWidth * 80,
        height: unitWidth * 80,
        borderRadius: unitWidth * 40,
    },
    bankName: {
        fontSize: unitWidth * 30,
        color: "#666666"
    },
    status: {
        fontSize: unitWidth * 32,
        color: "#ce0600"
    },
    amount: {
        fontSize: unitWidth * 36,
        color: "#000000",
        fontWeight: 'bold'
    },
    row: {
        width: width,
        paddingLeft: unitWidth * 40,
        lineHeight: unitWidth * 100,
        color: '#666666',
        fontSize: unitWidth * 32
    },
})