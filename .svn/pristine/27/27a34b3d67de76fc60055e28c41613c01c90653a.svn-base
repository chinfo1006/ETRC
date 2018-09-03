/**
 * Created by Tloy on 2018/1/16.
 */

'use strict';

import React, {Component} from 'react';
import {
    Text,
    View,
    Image,
    ScrollView,
    ImageBackground,
    TouchableOpacity
} from 'react-native';
import {connect} from 'react-redux'
import {BaseStyle, MineStyle, UserCenterStyle} from '../../styles'
import TitleBar from "../../components/titlebar/TitleBar";
import * as UserCenterAction from '../../actions/UserCenterAction'
import ListItem from "../../components/ListItem";
import Images from '../../images'
import LongButton from "../../components/button/LongButton";
import WhiteSpace from "../../components/whitespace/WhiteSpace";
import RouteConfig from "../../configs/RouteConfig";
import UserRealNameVerigyModal from '../../modals/UserRealNameVerigyModal';
import {toast, toastLong} from '../../utils/LogUtil';
import * as LoginAction from '../../actions/LoginAction';
import SelectPicModal from "../../modals/SelectPicModal";
import {UpdateHeadImg, UploadImage} from "../../server/ServerApi";
import {baseUrl} from '../../configs/Config';
import * as MineAction from "../../actions/MineAction";
import {showMobile} from "../../utils/ShowPrivacyUtil";

class UserCenterPage extends Component {

    /**
     * 挂载组件
     */
    componentDidMount() {
        // this.props.getUserSetInfo((res) => {
        //     if (!res.IsReal) {
        //         this.UserRealNameVerigyModal.open()
        //     }
        // });
        this.props.getUserSetInfo()
    }

    /**
     * 渲染视图
     */
    render() {
        const {navigation, userInfo, userSetInfo, logout} = this.props;
        return (
            <View style={BaseStyle.background}>
                <ImageBackground
                    style={MineStyle.top}
                    source={Images.mine.icon_top_bg}>
                    <TitleBar title={"个人中心"} navigation={navigation} backgroundColor={'transparent'}/>
                    <TouchableOpacity style={UserCenterStyle.userCenter} activeOpacity={1}
                                      onPress={() => {
                                          this.refs.SelectPicModal.open();
                                      }}>
                        <View style={UserCenterStyle.headbg}>
                            {
                                userInfo.HeadImg ? <Image style={UserCenterStyle.headPic}
                                                          source={{uri: baseUrl + userInfo.HeadImg}}/> :
                                    <Image style={UserCenterStyle.headPic}
                                           source={Images.public.default_head}/>
                            }

                        </View>
                        <View style={{flex: 1}}/>
                        <Image style={UserCenterStyle.listItemArrow}
                               source={Images.public.arrow_right_white}/>
                    </TouchableOpacity>
                </ImageBackground>

                <WhiteSpace size={15}/>
                <ScrollView
                    showsVerticalScrollIndicator={false}
                    contentContainerStyle={{alignItems: 'center'}}>
                    <WhiteSpace size={5}/>
                    <ListItem title={"手机号码"}
                              noArrow={true}
                              source={Images.mine.icon_user_phone}
                              text={userSetInfo.PhoneNumber}/>
                    <WhiteSpace size={15}/>
                    <ListItem title={"实名认证"}
                              source={Images.mine.icon_user_verify}
                              noArrow={userInfo.IsReal}
                              text={userInfo.IsReal ? "已认证" : "未认证"}
                              onPress={() => {
                                  if (userInfo.IsReal) return
                                  navigation.navigate(RouteConfig.RealNameVerifyPageA.name);
                              }}/>
                    <WhiteSpace size={5}/>
                    <ListItem title={"真实姓名"}
                              source={Images.mine.icon_user_real_name}
                              noArrow={userInfo.IsReal}
                              text={userInfo.IsReal ? userSetInfo.RealName : "未认证"}
                              onPress={() => {
                                  if (userInfo.IsReal) return
                                  navigation.navigate(RouteConfig.RealNameVerifyPageA.name);
                              }}/>
                    <WhiteSpace size={5}/>
                    <ListItem title={"身份证号"}
                              source={Images.mine.icon_user_id_card}
                              noArrow={userInfo.IsReal}
                              text={userInfo.IsReal ? userSetInfo.CardNo : "未认证"}
                              onPress={() => {
                                  if (userInfo.IsReal) return
                                  navigation.navigate(RouteConfig.RealNameVerifyPageA.name);
                              }}/>
                    <WhiteSpace size={5}/>
                    <ListItem title={"银行卡"}
                              source={Images.mine.icon_user_bank_card}
                              noArrow={userInfo.IsReal}
                              text={userInfo.IsReal ? userSetInfo.BankNumber : "未认证"}
                              onPress={() => {
                                  if (userInfo.IsReal) return
                                  navigation.navigate(RouteConfig.RealNameVerifyPageA.name);
                              }}/>
                    <WhiteSpace size={15}/>
                    <ListItem title={"修改登录密码"}
                              source={Images.mine.icon_user_modify_login_pwd}
                              onPress={() => {
                                  navigation.navigate(RouteConfig.ModifyLoginPwd.name, {type: 2})
                              }}/>
                    <WhiteSpace size={5}/>

                    <WhiteSpace size={5}/>
                    <ListItem title={"修改支付密码"}
                              source={Images.mine.icon_user_modify_pay_pwd}
                              onPress={() => {
                                  navigation.navigate(RouteConfig.ModifyPayPwd.name)
                              }}/>
                    <WhiteSpace size={50}/>
                    <LongButton text={"退出登录"} onPress={() => {
                        logout()
                        navigation.goBack()
                    }}/>
                    <WhiteSpace size={60}/>
                </ScrollView>
                <UserRealNameVerigyModal
                    navigation={navigation}
                    ref={(ref) => {
                        this.UserRealNameVerigyModal = ref
                    }}
                    onPress={() => {
                        navigation.navigate(RouteConfig.RealNameVerifyPageA.name);
                    }}
                    onCancle={() => {
                        //TODO  做缓存
                    }}/>
                <SelectPicModal
                    ref={"SelectPicModal"}
                    cropping={true}
                    onSelect={(image) => {
                        this.selectImage(image);
                    }}/>
            </View>
        )
    }

    /**
     * 图片上传
     */
    selectImage(image) {
        UploadImage(image, (res) => {
            let params = {MemberHeadImg: res};
            UpdateHeadImg(params, (res) => {
                this.props.queryUserInfo()
            }, () => {
            }, true)
        }, (res) => {
            console.log(res)
            toast("上传失败");
        })
    }
}

/**
 * 把state绑定到props,在props中获取数据
 */
function mapStateToProps(state) {
    return {
        userInfo: state.mineReducer.userInfo,
        userSetInfo: state.userCenterReducer.userSetInfo,
        userCenterReducer: state.userCenterReducer,
    }
}

/**
 * 把dispatch绑定到props  可以直接调用对应的方法执行dispatch
 */
function mapDispatchToProps(dispatch) {
    return {
        queryUserInfo: () => dispatch(MineAction.queryUserInfo()),
        getUserSetInfo: (callback) => dispatch(UserCenterAction.getUserSetInfo(callback)),
        logout: (navigation) => dispatch(LoginAction.logout(navigation)),
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(UserCenterPage)