import React, {Component} from 'react';
import {
    Text,
    View,
    Image,
    TouchableOpacity,
    ScrollView,
} from 'react-native';
import {connect} from 'react-redux';
import TitleBar from "../../components/titlebar/TitleBar";
import WhiteSpace from "../../components/whitespace/WhiteSpace";
import {BaseStyle, OederDetailStyle} from "../../styles";
import ListItem from "../../components/ListItem";
import {GetOrderById} from "../../server/ServerApi";
import {baseUrl} from "../../configs/Config";
import RouteConfig from "../../configs/RouteConfig";
import Images from '../../images'

export default class OrderByIdDetail extends Component {

    state = {
        "Code": "",
        "BuyerAccount": "",
        "RealName": "",
        "CreateTime": "",
        "CompletionTime": "",
        "Actual": 0,
        "VoucherImg": null,
        "PaymentCategoryName": "",
        "ApprovalStatusName": "",
        "ApprovalRemark": "",
        "PayerName": null,
        "PayerCardNumber": null,
        "Remark": null,
        "ProductTitle": "",
        "ProductImg": "",
        "ProductId": "",
        Integral: 0,
        ProductPrice: 0
    }

    componentDidMount() {
        GetOrderById({'orderId': this.props.navigation.state.params.id}, (res) => {
            this.setState({...res.data})
        })
    }

    render() {
        const {navigation} = this.props;
        return (
            <View style={BaseStyle.background}>
                <TitleBar title={'购买明细'} navigation={navigation}/>
                <ScrollView style={{flex: 1}}
                            contentContainerStyle={{alignItems: 'center'}}>
                    <View style={OederDetailStyle.top}>
                        <Image style={OederDetailStyle.image}
                               source={this.state.ProductImg ? {uri: baseUrl + this.state.ProductImg} : Images.public.logo}/>
                        <Text
                            style={OederDetailStyle.name}
                            numberOfLines={2}>{this.state.ProductTitle}</Text>
                    </View>
                    <WhiteSpace size={40}/>
                    <ListItem title={"订单编号"} text={this.state.Code} noArrow={true}/>
                    <ListItem title={"购买时间"} text={this.state.CreateTime} noArrow={true}/>
                    <ListItem title={"课程单价"} text={this.state.ProductPrice.toFixed(2) + "元"} noArrow={true}/>
                    <ListItem title={"购买数量"} text={this.state.Count + ""} noArrow={true}/>
                    <ListItem title={"支付金额"} text={this.state.Actual.toFixed(2) + "元"} noArrow={true}/>
                    <ListItem title={"支付方式"} text={this.state.PaymentCategoryName} noArrow={true}/>
                    <ListItem title={"赠送ETRC"} text={this.state.Integral.toFixed(2) + ""} noArrow={true}/>
                    <WhiteSpace size={40}/>
                    {/*后台录单没有对应的课程*/}
                    {this.state.OrderSource == 3 ? (null) : (
                        <TouchableOpacity
                            style={OederDetailStyle.bt}
                            activeOpacity={1}
                            onPress={() => {
                                navigation.navigate(RouteConfig.LessonDetail.name, {id: this.state.ProductId})
                            }}>
                            <Text style={OederDetailStyle.btText}>再次购买 </Text>
                        </TouchableOpacity>
                    )}
                </ScrollView>
            </View>
        )
    }
}