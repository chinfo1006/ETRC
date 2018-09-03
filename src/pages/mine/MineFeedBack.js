'use strict';

import React, {Component} from 'react';
import {
    Text,
    View,
    Image,
    TouchableOpacity,
    FlatList,
    ScrollView,
    ActivityIndicator,
    Animated,
    StyleSheet,
    ImageBackground,
    TextInput,
} from 'react-native';
import {connect} from 'react-redux'
import {BaseStyle, MineFeedBackStyle} from '../../styles'
import TitleBar from "../../components/titlebar/TitleBar";
import {toast} from "../../utils/LogUtil";
import TextareaItem from 'antd-mobile-rn/lib/textarea-item';
import WhiteSpace from "../../components/whitespace/WhiteSpace";
import * as FeedBackAction from "../../actions/FeedBackAction";
import {FeedbackAdd} from "../../server/ServerApi";

class MineFeedBack extends Component {
    constructor(props) {
        super(props);
    }

    componentDidMount() {
        this.props.inputMobile(this.props.userInfo.UserPhone)
    }

    render() {
        const {userInfo, navigation, inputFeedback, MobilePhone, inputMobile} = this.props;
        return (
            <View style={BaseStyle.background}>
                <TitleBar title={"意见反馈"} navigation={navigation}/>
                <TextareaItem
                    placeholder={"请输入反馈内容，1000字以内"}
                    rows={8}
                    onChange={(message) => {
                        inputFeedback(message)
                    }}/>
                <TextareaItem
                    placeholder={"联系方式"}
                    rows={1}
                    type={'number'}
                    value={MobilePhone}
                    onChange={(message) => {
                        inputMobile(message)
                    }}/>
                <WhiteSpace size={60}/>
                <View style={MineFeedBackStyle.bottomViewStyle}>
                    < TouchableOpacity
                        activeOpacity={0.6}
                        onPress={() => {
                            this._onPress()
                        }}>
                        <View style={MineFeedBackStyle.bottomTextViewStyle}>
                            <Text style={MineFeedBackStyle.bottomTextStyle}>提交</Text>
                        </View>
                    </TouchableOpacity>
                </View>
            </View>
        )
    }

    _onPress() {
        if (!this.props.feedbackMessage) {
            toast("请输入你要反馈的信息");
            return
        }
        let feedBackParams = {
            'Content': this.props.feedbackMessage,
            'MobilePhone': this.props.MobilePhone,
        }
        FeedbackAdd(feedBackParams, (res) => {
            toast("提交成功")
            this.props.queryFeedbackList(1)
            this.props.init()
            this.props.navigation.goBack();
        })
    }
}

/**
 * 把state绑定到props,在props中获取数据
 */
function mapStateToProps(state) {
    return {
        ...state.FeedBackReducer,
        ...state.mineReducer
    }
}

/**
 * 把dispatch绑定到props  可以直接调用对应的方法执行dispatch
 */
function mapDispatchToProps(dispatch) {
    return {
        inputMobile: (mobile) => dispatch(FeedBackAction.inputMobile(mobile)),
        inputFeedback: (feedback) => dispatch(FeedBackAction.inputFeedback(feedback)),
        queryFeedbackList: (pageIndex) => dispatch(FeedBackAction.queryFeedbackList(pageIndex)),
        init: () => dispatch(FeedBackAction.init())
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(MineFeedBack)