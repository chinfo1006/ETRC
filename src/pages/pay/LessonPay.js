import React, {Component} from "react";
import {
    Text,
    View,
    Image,
    FlatList,
    TouchableOpacity,
    WebView,
} from "react-native";
import {connect} from "react-redux";
import * as LessonPayAction from "../../actions/LessonPayAction";
import PayItem from "../../components/pay/PayItem";
import TitleBar from "../../components/titlebar/TitleBar";
import WhiteSpace from "../../components/whitespace/WhiteSpace";
import Images from "../../images/index";
import {BaseStyle, DxPayStyle} from "../../styles/index";
import DxPayModal from "../../modals/DxPayModal";
import {baseUrl} from "../../configs/Config";
import {AlipayApi, UserAddOrderApi} from "../../server/ServerApi";
import Alipay from '@0x5e/react-native-alipay';
import {width} from "../../utils/AdapterUtilNew";
import {concatMallUrl} from "../../utils/UrlUtil";
import RouteConfig from "../../configs/RouteConfig";

class LessonPay extends Component {
    constructor(props) {
        super(props);
    }

    componentDidMount = () => {
        this.props.getRechargePrompt();
    }

    state = {
        payUrl: ""
    }

    render() {
        const {navigation, promptList, detailInfo, userInfo, price, payType, changePayType} = this.props;
        const {number} = navigation.state.params
        return (
            <View style={BaseStyle.backgroundAlignCenter}>
                <TitleBar title={"支付"} navigation={navigation}/>
                <WhiteSpace size={40}/>
                <View style={DxPayStyle.block}>
                    <Text style={DxPayStyle.title}>购买内容</Text>
                    <View style={DxPayStyle.content}>
                        <Image
                            source={{uri: baseUrl + detailInfo.imgUrl}}
                            style={DxPayStyle.lessonIcon}/>
                        <View>
                            <Text style={DxPayStyle.lessonTitle}>{detailInfo.ProductName}</Text>
                            <WhiteSpace size={25}/>
                            <Text style={DxPayStyle.num}>参与{navigation.state.params.number}次</Text>
                            <WhiteSpace size={20}/>
                            <Text>¥{(detailInfo.ProductPrice * navigation.state.params.number).toFixed(2)}
                                <Text
                                    style={DxPayStyle.lessonTitle}>(赠送{(detailInfo.ProductPrice * number / price).toFixed(4)}ETRC)</Text></Text>
                        </View>
                    </View>
                    <WhiteSpace size={20}/>
                </View>
                <WhiteSpace size={40}/>
                <View style={DxPayStyle.block}>
                    <Text style={DxPayStyle.title}>支付方式</Text>
                    <PayItem
                        payMethod={"支付宝支付"}
                        icon={Images.merchant.alipay}
                        select={payType == "alipay"}
                        onPress={() => {
                            changePayType("alipay")
                        }}
                    />
                    {/*<View style={DxPayStyle.line}/>*/}
                    {/*<PayItem*/}
                        {/*payMethod={"微信支付"}*/}
                        {/*icon={Images.merchant.wechat}*/}
                        {/*select={payType == "wechat"}*/}
                        {/*onPress={() => {*/}
                            {/*changePayType("wechat")*/}
                        {/*}}*/}
                    {/*/>*/}
                    <View style={DxPayStyle.line}/>
                    <PayItem
                        payMethod={"线下转账"}
                        icon={Images.merchant.qianqb}
                        select={payType == "offline"}
                        onPress={() => {
                            changePayType("offline")
                        }}
                    />
                    <WhiteSpace size={20}/>
                </View>
                <WhiteSpace size={120}/>
                <TouchableOpacity
                    style={DxPayStyle.bt}
                    activeOpacity={1}
                    onPress={() => {
                        if (payType == "offline") {
                            this.DxPayModal.open(promptList, detailInfo.Id, detailInfo.ProductPrice, navigation.state.params.number);
                        } else if (payType == "alipay") {
                            this.alipay(detailInfo, number)
                        } else {
                            this.wechatPay(detailInfo, number)
                        }
                    }}>
                    <Text style={DxPayStyle.btText}>确认支付</Text>
                </TouchableOpacity>
                <WebView
                    ref={"WebView"}
                    style={{width: 0, height: 0}}
                    source={{uri: this.state.payUrl}}
                    onMessage={(event) => {
                        console.log(event.nativeEvent.data)
                    }}/>
                <DxPayModal
                    ref={ref => {
                        this.DxPayModal = ref;
                    }}
                    userInfo={userInfo}
                    routeKey={navigation.state.key}
                    navigation={navigation}/>

            </View>
        );
    }

    wechatPay(detailInfo, number) {
        UserAddOrderApi({
            productId: detailInfo.Id,
            count: number
        }, (res) => {
            //  http://etrc.hhgongxing.com/pay/WxPay?orderNo=SO20180823000007
            this.props.navigation.replace(RouteConfig.WechatPayWebView.name,{
                url:`${baseUrl}/pay/WxPay?orderNo=${res.OrderNo}`
            })
            // this.setState({payUrl: `http://etrc.hhgongxing.com/pay/WxPay?orderNo=${res.OrderNo}`})
        })
    }

    alipay(detailInfo, number) {
        UserAddOrderApi({
            productId: detailInfo.Id,
            count: number
        }, (res) => {
            console.log(res)
            AlipayApi({
                orderNo: res.OrderNo
            }, async function (res) {
                try {
                    let orderStr = res.Body
                    let response = await Alipay.pay(orderStr);
                    console.log(response)
                    let {resultStatus, result, memo} = response;
                    if (resultStatus == "6001") {  // 用户取消支付
                    } else if (resultStatus == "9000") {
                        navigation.navigate(RouteConfig.DxPayResult.name, {
                            type: "1",
                            routeKey: navigation.state.key
                        });
                    } else {
                        navigation.navigate(RouteConfig.DxPayResult.name, {
                            type: "2",
                            routeKey: navigation.state.key
                        });
                    }
                } catch (error) {
                    console.error(error);
                }
            })
        })
    }
}

/**
 * 把state绑定到props,在props中获取数据
 */
function mapStateToProps(state) {
    return {
        ...state.LessonDetailReducer,
        ...state.LessonPayReducer,
        ...state.mineReducer,
        ...state.homeReducer
    };
}

/**
 * 把dispatch绑定到props  可以直接调用对应的方法执行dispatch
 */
function mapDispatchToProps(dispatch) {
    return {
        getRechargePrompt: () => dispatch(LessonPayAction.getRechargePrompt()),
        changePayType: (type) => dispatch(LessonPayAction.changePayType(type)),
    };
}

export default connect(mapStateToProps, mapDispatchToProps)(LessonPay);
