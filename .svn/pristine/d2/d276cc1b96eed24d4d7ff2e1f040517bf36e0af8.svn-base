/**
 *
 */

"use strict";

import React, {Component} from "react";
import {Text, View, Image, TouchableOpacity, StyleSheet} from "react-native";
import TitleBar from "../../components/titlebar/TitleBar";
import WhiteSpace from "../../components/whitespace/WhiteSpace";
import Images from "../../images";
import {BaseStyle} from "../../styles";
import {width, unitWidth} from "../../utils/AdapterUtilNew";

export default class DxPayResult extends Component {

    getResult(type) {
        switch (type) {
            case  "-1":
                return "提交成功，等待审核"
            case  "1":
                return "支付成功"
            case "2":
                return "支付失败"
        }
    }

    render() {
        const {navigation} = this.props;
        const {type} = navigation.state.params
        return (
            <View style={BaseStyle.background}>
                <TitleBar title={"支付"} navigation={navigation}/>
                <View style={styles.bg}>
                    <Image
                        style={styles.resultImage}
                        source={type == 2 ? Images.pay.icon_pay_failed : Images.pay.icon_pay_succed}
                    />
                    <Text style={type == 2 ? styles.textFalse : styles.textTrue}>{this.getResult(type)}</Text>
                </View>
                <WhiteSpace size={100}/>

                <View style={styles.row}>
                    <TouchableOpacity
                        style={styles.goHome}
                        onPress={() => {
                            navigation.popToTop();
                            // navigation.dispatch(
                            //     NavigationActions.reset({
                            //         index: 0,
                            //         actions: [
                            //             NavigationActions.navigate({routeName: RouteConfig.HomeTab.name})
                            //         ]
                            //     }))
                        }}>
                        <Text style={styles.text}>返回首页</Text>
                    </TouchableOpacity>

                    <TouchableOpacity
                        style={styles.goLesson}
                        onPress={() => {
                            navigation.goBack(navigation.state.params.routeKey)
                        }}>
                        <Text style={styles.text}>返回教程</Text>
                    </TouchableOpacity>
                </View>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    bg: {
        width: width,
        height: unitWidth * 441,
        backgroundColor: "#ffffff",
        alignItems: 'center',
        justifyContent: 'center'
    },

    resultImage: {
        width: unitWidth * 200,
        height: unitWidth * 200,
        borderRadius: unitWidth * 100,
        marginBottom: unitWidth * 15
    },

    textFalse: {
        fontSize: unitWidth * 45,
        color: "#f2061c"
    },
    textTrue: {
        fontSize: unitWidth * 45,
        color: "#009944"
    },

    row: {
        width: width,
        flexDirection: 'row',
        justifyContent: 'space-around'
    },

    goHome: {
        width: unitWidth * 200,
        height: unitWidth * 60,
        borderRadius: unitWidth * 30,
        backgroundColor: "#b6b4b2",
        shadowColor: "rgba(219, 216, 212, 0.93)",
        shadowOffset: {
            width: unitWidth * 0,
            height: unitWidth * 9
        },
        shadowRadius: unitWidth * 14,
        shadowOpacity: 1,
        alignItems: 'center',
        justifyContent: 'center'
    },

    goLesson: {
        width: unitWidth * 200,
        height: unitWidth * 60,
        borderRadius: unitWidth * 30,
        backgroundColor: "#ff4d00",
        // shadowColor: "rgba(219, 216, 212, 0.93)",
        shadowColor: "rgba(255, 0, 0, 0.93)",
        shadowOffset: {
            width: unitWidth * 0,
            height: unitWidth * 9
        },
        shadowRadius: unitWidth * 14,
        shadowOpacity: 1,
        alignItems: 'center',
        justifyContent: 'center'
    },
    text: {
        fontSize: unitWidth * 40,
        color: "#ffffff"
    },
})