/**
 *  Created by majunhui on 2017/12/9
 */

import React, {Component} from "react";
import {View, Text, Image, StyleSheet, TouchableOpacity, TextInput} from "react-native";
import Modal from "react-native-modalbox";
import * as Color from "../configs/Color";
import Images from "../images";
import UploadImageView from "../components/image/UploadImageView";
import SelectPicModal from "./SelectPicModal";
import {width, height, unitWidth, textSizebig,} from "../utils/AdapterUtilNew";
import WhiteSpace from "../components/whitespace/WhiteSpace";
import {toast} from "../utils/LogUtil";
import {AddOrder} from "../server/ServerApi";
import {hideKeyboard} from "../utils/MobileUtil";

export default class DxPayModDal extends Component {
    imageTag = 0;

    constructor(props) {
        super(props);
        this.state = {
            promptList: [],
            id: "",
            price: "",
            number: "",

            PayerName: '',  //用户名称
            PayerCardNumber: '',  //银行账号
            PaymentCategory: 4,  //支付类型
            VoucherImg: '',
            image1: '', //图片1
            image2: '',//图片2
        };
    }


    static propTypes = {};

    /**
     *  方法描述: 打开弹窗
     *  作    者: 马军辉
     */
    open(promptList, id, price, number) {
        this.setState({
            promptList: promptList,
            id: id,
            price: price,
            number: number,

            PayerName: '',  //用户名称
            PayerCardNumber: '',  //银行账号
            PaymentCategory: 4,  //支付类型
            VoucherImg: '',
            image1: '', //图片1
            image2: '',//图片2
        })
        this.refs.PayModal.open();
    }

    /**
     *  方法描述: 关闭弹窗,并取消倒计时
     *  作    者: 马军辉
     */
    close() {
        this.refs.PayModal.close();
    }


    /**
     * 渲染视图
     */
    render() {
        const {navigation} = this.props;
        return (
            <Modal
                style={styles.background}
                ref={"PayModal"}
                backdropPressToClose={true}
                backButtonClose={true}
                swipeToClose={false}
                position="bottom"
            >

                <TouchableOpacity
                    style={styles.bg}
                    activeOpacity={1}
                    onPress={() => {
                        this.close()
                    }}>
                    <TouchableOpacity
                        activeOpacity={1}
                        onPress={() => {
                            this.close()
                        }}>
                        <Image style={styles.close}
                               source={Images.public.close}/>
                    </TouchableOpacity>

                    <View style={styles.line}/>
                    <TouchableOpacity
                        style={styles.content}
                        activeOpacity={1}
                        onPress={() => {
                            hideKeyboard()
                        }}>
                        <View style={styles.block}>
                            <Text style={styles.prompTitle}>线下转账须知</Text>
                            <View style={styles.promp}>
                                {this.renderItemPromptView()}
                            </View>
                        </View>

                        <WhiteSpace size={20}/>
                        <View style={styles.block}>
                            <View style={styles.inputRow}>
                                <Text
                                    style={[styles.inputTitle, {color: Color.themeColor}]}> 获赠ETRC账号：{this.props.userInfo.UserPhone}</Text>
                            </View>
                            <View style={styles.inputRow}>
                                <Text style={styles.inputMust}>*</Text>
                                <Text style={styles.inputTitle}> 转账人姓名：</Text>
                                <TextInput
                                    style={styles.input}
                                    underlineColorAndroid={'transparent'}
                                    maxLength={10}
                                    placeholder={'请填写打款账户名'}
                                    onChangeText={(text) => {
                                        this.setState({
                                            PayerName: text
                                        })
                                    }}/>
                            </View>

                            <View style={styles.inputRow}>
                                <Text style={styles.inputMust}>*</Text>
                                <Text style={styles.inputTitle}> 转账卡号：</Text>
                                <TextInput
                                    style={styles.input}
                                    maxLength={20}
                                    underlineColorAndroid={'transparent'}
                                    keyboardType={'numeric'}
                                    placeholder={'请填写转账的银行卡号'}
                                    onChangeText={(text) => {
                                        this.setState({
                                            PayerCardNumber: text,
                                        })
                                    }}/>
                            </View>
                            <View style={styles.inputRow}>
                                <Text style={styles.inputMust}>*</Text>
                                <Text style={styles.inputTitle}> 转账金额：</Text>
                                <Text style={styles.amount}>{this.state.price * this.state.number}</Text>
                            </View>
                            <View style={styles.uploadRow}>
                                <Text style={styles.inputTitle}> 转账凭证：</Text>
                                <WhiteSpace size={50} horizontal={true}/>
                                <UploadImageView
                                    url={this.state.image1}
                                    ref={"image1"}
                                    onPress={() => {
                                        this.imageTag = 1
                                        this.refs.SelectPicModal.open()
                                    }}
                                    onUploadSuccess={(url) => {
                                        this.setState({
                                            image1: url
                                        })
                                    }}/>
                                <WhiteSpace size={30} horizontal={true}/>
                                <UploadImageView
                                    ref={"image2"}
                                    url={this.state.image2}
                                    onPress={() => {
                                        this.imageTag = 2
                                        this.refs.SelectPicModal.open()
                                    }}
                                    onUploadSuccess={(url) => {
                                        this.setState({
                                            image2: url
                                        })
                                    }}/>
                            </View>
                        </View>
                        <WhiteSpace size={20}/>
                        <TouchableOpacity
                            style={styles.bt}
                            activeOpacity={1}
                            onPress={() => {
                                this.onPress()
                            }}>
                            <Text style={styles.btText}>确认</Text>
                        </TouchableOpacity>
                        <WhiteSpace size={20}/>
                    </TouchableOpacity>
                    <SelectPicModal
                        ref={"SelectPicModal"}
                        onSelect={this.uploadImage.bind(this)}/>
                </TouchableOpacity>
            </Modal>
        );
    }

    onPress() {
        const {navigation} = this.props;
        if (!this.state.PayerName || this.state.PayerName.length < 2) {
            toast('请输入转账人姓名');
            return;
        }
        if (!this.state.PayerCardNumber) {
            toast('请输入银行卡账号');
            return;
        }

        if (!this.state.image1 && !this.state.image2) {
            toast('请上传凭证');
            return;
        }

        /**
         * 参数
         */
        let params = {
            'ProductId': this.state.id,
            "Count": this.state.number,
            "OrderAmount": this.state.number * this.state.price,
            "PaymentCategory": this.state.PaymentCategory,
            "PayerName": this.state.PayerName,
            "PayerCardNumber": this.state.PayerCardNumber,
            "VoucherImg": this.state.image1 ? this.state.image1 + ',' + this.state.image2 : this.state.image2,
        }
        AddOrder(params, (res) => {
            navigation.navigate(RouteConfig.DxPayResult.name, {type: "-1", routeKey: this.props.routeKey});
        })
    }

    /**
     * 返回提醒的警告视图view
     */
    renderItemPromptView() {
        let promptListView = [];
        for (let i = 0; i < this.state.promptList.length; i++) {
            let item = this.state.promptList[i];
            promptListView.push(
                <Text key={'index' + i}>{item.replace(/、/g, '.')}</Text>
            )
        }
        return promptListView;
    }

    /**
     * 图片上传
     */
    uploadImage(image) {
        switch (this.imageTag) {
            case 1:
                this.refs.image1.upload(image);
                break;
            case 2:
                this.refs.image2.upload(image);
                break;
        }
    }

    idCardImage = (image) => {
        console.log(image);
        this.setState({
            image1: image,
        })
    }

    idHtImage = (image) => {
        console.log(image);
        this.setState({
            image2: image,
        })
    }
}

const styles = StyleSheet.create({
    background: {
        width: width,
        height: height * 0.85,
        backgroundColor: Color.transparent
    },
    bg: {
        flex: 1,
        alignItems: 'center',
        // backgroundColor: 'red',
        backgroundColor: Color.transparent,
        justifyContent: 'flex-end',
    },
    close: {
        width: unitWidth * 50,
        height: unitWidth * 50,
        borderRadius: unitWidth * 25
    },
    line: {
        width: unitWidth * 2,
        height: unitWidth * 50,
        backgroundColor: "#ffffff"
    },
    content: {
        width: width,
        backgroundColor: Color.baseBackground,
        alignItems: 'center'
    },
    block: {
        width: width,
        backgroundColor: Color.white,
        paddingLeft: unitWidth * 30,
        paddingRight: unitWidth * 30,
    },
    prompTitle: {
        fontSize: unitWidth * 35,
        color: "#000000",
        marginBottom: unitWidth * 15,
        marginTop: unitWidth * 15
    },

    promp: {
        width: unitWidth * 685,
        borderRadius: unitWidth * 10,
        backgroundColor: "#fcf1e8",
        // paddingTop: unitWidth * 10,
        // paddingBottom: unitWidth * 10,
        marginBottom: unitWidth * 25
    },
    inputRow: {
        width: unitWidth * 685,
        height: unitWidth * 80,
        alignItems: 'center',
        flexDirection: 'row',
        borderBottomColor: Color.baseBackground,
        borderBottomWidth: unitWidth * 2,
        borderStyle: 'solid'
    },
    input: {
        flex: 1,
    },
    inputMust: {
        fontSize: unitWidth * 50,
        color: "red"
    },
    inputTitle: {
        fontSize: unitWidth * 35,
        color: "#000000"
    },
    uploadRow: {
        width: unitWidth * 685,
        height: unitWidth * 200,
        alignItems: 'center',
        flexDirection: 'row',
    },
    bt: {
        width: unitWidth * 600,
        height: unitWidth * 80,
        borderRadius: unitWidth * 40,
        backgroundColor: Color.themeColor,
        alignItems: 'center',
        justifyContent: 'center'
    },
    btText: {
        fontSize: unitWidth * 40,
        color: "#ffffff"
    },
    amount: {
        fontSize: unitWidth * 35,
        color: "#ff4d00"
    },
});
