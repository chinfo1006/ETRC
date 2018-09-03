/**
 *
 */

"use strict";

import React, {Component} from "react";
import {
    Text,
    View,
    Image,
    StyleSheet,
    ScrollView
} from "react-native";
import {connect} from 'react-redux';
import TitleBar from "../../components/titlebar/TitleBar";
import WhiteSpace from "../../components/whitespace/WhiteSpace";
import {BaseStyle} from "../../styles/index";
import {baseUrl} from "../../configs/Config";
import {GetOrderById} from "../../server/ServerApi";
import {width, unitWidth} from "../../utils/AdapterUtilNew";
import * as Color from '../../configs/Color'


/**
 * 凭证查看
 */
export default class StudyVoucherPage extends Component {

    state = {
        "Code": "",
        "BuyerAccount": null,
        "RealName": "",
        "CreateTime": "",
        "CompletionTime": null,
        "Actual": 80,
        "VoucherImg": "",
        "PaymentCategoryName": "",
        "ApprovalStatusName": "",
        "ApprovalRemark": null,
        "PayerName": "",
        "PayerCardNumber": "",
        "Remark": null,
        "ProductTitle": "",
        "ProductImg": "",
        "Count": 0,
        "ProductPrice": 0,
        "Integral": 0
    }

    componentDidMount() {
        GetOrderById({
            'orderId': this.props.navigation.state.params.id,
        }, (res) => {
            this.setState({
                ...res.data
            })
        })
    }

    render() {
        const {navigation, tabOrderAllReducer} = this.props;
        return (
            <View style={BaseStyle.background}>
                <TitleBar title={"凭证查看"} navigation={navigation}/>
                <ScrollView>
                    <View style={styles.block}>
                        <View style={styles.info}>
                            <View style={styles.row}>
                                <Text>支付人</Text>
                                <Text>{this.state.PayerName}</Text>
                            </View>
                            <View style={styles.row}>
                                <Text>支付卡号</Text>
                                <Text>{this.state.PayerCardNumber}</Text>
                            </View>
                            <View style={styles.row}>
                                <Text>订单金额</Text>
                                <Text>{this.state.Actual}元</Text>
                            </View>
                            {this.state.ApprovalStatusName == "待审核" ? (null) :
                                (
                                    <Text style={styles.reason}>审核失败：{this.state.ApprovalRemark}</Text>
                                )}
                        </View>
                        <View style={styles.line}/>
                    </View>
                    <WhiteSpace size={50}/>
                    <View style={styles.block}>
                        <Text style={styles.title}>凭证查看</Text>
                        {
                            this.renderVocherImg()
                        }
                    </View>
                </ScrollView>
            </View>
        );
    }

    /**
     * 凭证图片
     */
    renderVocherImg() {
        if (!this.state.VoucherImg) return null
        let imgArr = this.state.VoucherImg.split(',');
        let imageView = []
        for (let i = 0; i < imgArr.length; i++) {
            imageView.push(
                <Image key={"image" + i}
                       source={{uri: baseUrl + imgArr[i]}}
                       style={styles.image}
                />
            )
        }
        return imageView
    }
}

const styles = StyleSheet.create({
    block: {
        width: width,
        paddingTop: unitWidth * 15,
        paddingLeft: unitWidth * 35,
        paddingBottom: unitWidth * 35,
        paddingRight: unitWidth * 45,
        backgroundColor: "white",
    },
    info: {
        width: unitWidth * 668,
        borderStyle: "solid",
        // borderTopColor: "#d9d9d9",
        // borderTopWidth: unitWidth * 2,
        // borderBottomColor: "#d9d9d9",
        // borderBottomWidth: unitWidth * 2,
        paddingLeft: unitWidth * 20,
        paddingRight: unitWidth * 30,
        paddingTop: unitWidth * 20,
        paddingBottom: unitWidth * 30
    },
    line: {
        width: unitWidth * 668,
        height: unitWidth * 2,
        backgroundColor: '#d9d9d9',

    },
    row: {
        width: unitWidth * 620,
        height: unitWidth * 50,
        alignItems: 'center',
        flexDirection: 'row',
        justifyContent: 'space-between'
    },
    reason: {
        width: unitWidth * 620,
        fontSize: unitWidth * 30,
        color: "#f70505",
        backgroundColor: Color.transparent
    },
    title: {
        fontSize: unitWidth * 36,
        color: "#000000",
        marginBottom: unitWidth * 20,
        backgroundColor: Color.transparent
    },
    image: {
        width: unitWidth * 659,
        height: unitWidth * 300,
        resizeMode: 'stretch'
    },
})