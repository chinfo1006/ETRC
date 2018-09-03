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
    TouchableOpacity,
} from 'react-native';
import Modal from 'react-native-modalbox';
import {width, unitWidth} from "../utils/AdapterUtilNew";
import PropTypes from 'prop-types'
import WhiteSpace from "../components/whitespace/WhiteSpace";
import LongButton from "../components/button/LongButton";

export default class ETRCTransactionModal extends Component {
    constructor(props) {
        super(props);
    }

    static propTypes = {
        onPress: PropTypes.func.isRequired,
        amount: PropTypes.number.isRequired,
        yue: PropTypes.number.isRequired,
        transactionFee: PropTypes.number.isRequired,
    }

    static defaultProps = {
        onPress: () => {
        }
    }

    open() {
        this.refs.ETRCTransactionModal.open()
    }

    close() {
        this.refs.ETRCTransactionModal.close()
    }

    render() {
        let {amount, yue, transactionFee} = this.props
        let fee = amount * transactionFee
        let max = 0
        if (amount + fee > yue) {
            max = yue / (1 + transactionFee)
            amount = max
            fee = yue - amount
        }

        return (
            <Modal
                style={styles.modal}
                ref={"ETRCTransactionModal"}
                position="bottom"
                backButtonClose={true}
                backdropPressToClose={true}
                swipeToClose={false}>
                <Text style={styles.title}>ETRC转出提示</Text>
                <View style={styles.line}/>
                {max > 0 ? (
                    <Text style={styles.rowText}>账户余额不足以支付服务费，实际转出金额如下</Text>
                ) : (null)}
                <View style={styles.row}>
                    <Text style={styles.textblack}>转出数量</Text>
                    <Text style={max > 0 ? styles.textRed : styles.textblack}>{amount.toFixed(4)}</Text>
                </View>
                <View style={styles.row}>
                    <Text style={styles.textblack}>本次手续费</Text>
                    <Text style={styles.textblack}>{fee.toFixed(4)}</Text>
                </View>
                <View style={styles.row}>
                    <Text style={styles.textblack}>合计扣取</Text>
                    <Text style={styles.textblack}>{(amount + fee).toFixed(4)}</Text>
                </View>
                <WhiteSpace size={50}/>
                <LongButton text={"继续转出"} onPress={() => {
                    this.close()
                    this.props.onPress()
                }}/>
            </Modal>
        );
    }
}

const styles = StyleSheet.create({
    modal: {
        width: width,
        height: unitWidth * 600,
        backgroundColor: "white",
        alignItems: 'center'
    },
    title: {
        width: width,
        textAlign: 'center',
        paddingVertical: unitWidth * 15,
        color: 'black',
        fontSize: unitWidth * 40
    },
    line: {
        width: width,
        height: StyleSheet.hairlineWidth * 2,
        backgroundColor: "#eeeeee"
    },
    rowText: {
        width: width,
        paddingHorizontal: unitWidth * 30,
        paddingVertical: unitWidth * 15,
        color: '#444444',
        fontSize: unitWidth * 30
    },

    row: {
        width: width,
        flexDirection: 'row',
        paddingHorizontal: unitWidth * 30,
        paddingVertical: unitWidth * 15,
        alignItems: 'center',
        justifyContent: 'space-between'
    },
    textblack: {
        color: '#444444',
        fontSize: unitWidth * 30
    },
    textRed: {
        color: 'red',
        fontSize: unitWidth * 30
    },
})