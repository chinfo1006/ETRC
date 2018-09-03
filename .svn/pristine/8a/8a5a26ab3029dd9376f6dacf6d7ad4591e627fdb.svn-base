/**
 * Created by Tloy on 2018/1/17.
 */


'use strict';

import React, {Component} from 'react';
import {
    Text,
    View,
    Image
} from 'react-native';
import {connect} from 'react-redux'
import {BaseStyle, RealNameVerifyStyle} from '../../styles'
import TitleBar from "../../components/titlebar/TitleBar";
import VerifyStepView from "../../components/step/VerifyStepView";
import WhiteSpace from "../../components/whitespace/WhiteSpace";
import LongButton from "../../components/button/LongButton";
import RouteConfig from "../../configs/RouteConfig";
import PasswordInput from "../../components/input/PasswordInput";
import {VerifyDataStep2} from "../../server/ServerApi";
import * as RealNameVerifyAction from '../../actions/RealNameVerifyAction'
import {toast} from "../../utils/LogUtil";

/**
 *页面b
 */
 class RealNameVerifyPageB extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        const {navigation, inputPwd} = this.props
        return (
            <View style={[BaseStyle.background, {alignItems: 'center'}]}>
                <TitleBar title={"实名认证"} navigation={navigation}/>
                <VerifyStepView steps={["认证信息", "支付密码", "照片上传"]} step={1}/>
                <WhiteSpace size={50}/>
                <View style={RealNameVerifyStyle.passBlock}>
                    <Text>请设置6位支付密码</Text>
                    <WhiteSpace size={50}/>
                    <PasswordInput maxLength={6}
                                   onChange={inputPwd}/>
                </View>
                <WhiteSpace size={50}/>
                <LongButton text={"确认，下一步"} onPress={this.next.bind(this)}/>
            </View>
        )
        
    }

    /**
     * 下一步
     */
    next() {
        if (this.props.Password.length < 6) {
            toast("请输入6位数支付密码")
            return
        }
        let params = {
            'Password': this.props.Password,
        }

       // this.props.navigation.navigate(RouteConfig.RealNameVerifyPageC.name);

        VerifyDataStep2(params, () => {
            this.props.navigation.navigate(RouteConfig.RealNameVerifyPageC.name);
        })
    }
}

/**
 * 把state绑定到props,在props中获取数据
 */
function mapStateToProps(state) {
    return state.realNameVerifyReducer
}

/**
 * 把dispatch绑定到props  可以直接调用对应的方法执行dispatch
 */
function mapDispatchToProps(dispatch) {
    return {
        inputPwd: (pwd) => dispatch(RealNameVerifyAction.inputPwd(pwd)),
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(RealNameVerifyPageB)