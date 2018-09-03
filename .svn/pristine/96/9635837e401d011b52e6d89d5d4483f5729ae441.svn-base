/**
 * Created by Tloy on 2018/1/17.
 */

'use strict';
import React, { Component } from 'react';
import {
    Text,
    View,
    Image
} from 'react-native';
import { connect } from 'react-redux'
import { BaseStyle, RealNameVerifyStyle } from '../../styles'
import TitleBar from "../../components/titlebar/TitleBar";
import VerifyStepView from "../../components/step/VerifyStepView";
import WhiteSpace from "../../components/whitespace/WhiteSpace";
import LongButton from "../../components/button/LongButton";
import UploadImageView from "../../components/image/UploadImageView";
import SelectPicModal from "../../modals/SelectPicModal";
import * as RealNameVerifyAction from '../../actions/RealNameVerifyAction'
import * as UserCenterAction from '../../actions/UserCenterAction'
import { toast,toastLong } from '../../utils/LogUtil';
import { VerifyDataStep3 } from "../../server/ServerApi";
import RouteConfig from '../../configs/RouteConfig';




/**
 * 照片上传
 */
class RealNameVerifyPageC extends Component {
    imageTag = 0;

    constructor(props) {
        super(props);
    }

    render() {
        const { navigation, setIdCardPic, setIdCardReversePic, setBankCardPic } = this.props
        return (
            <View style={[BaseStyle.background, { alignItems: 'center' }]}>
                <TitleBar title={"实名认证"} navigation={navigation} />
                <VerifyStepView steps={["认证信息", "支付密码", "照片上传"]} step={2} />
                <WhiteSpace size={50} />
                <View style={RealNameVerifyStyle.picBlock}>

                    <WhiteSpace size={30} />
                    <View style={{
                        flexDirection: 'row',

                    }}>
                        <Text>认证信息</Text>

                        <View style={{ flexDirection: 'row-reverse', flex: 1 }}>
                            <Text>按照提示上传照片</Text>
                        </View>


                    </View>
                    <WhiteSpace size={30} />
                    <View style={{ flexDirection: 'row' }}>


                        <View>
                            <UploadImageView
                                ref={"idCardImage"}
                                must={true}
                                lebal={""}
                                onPress={() => {
                                    this.imageTag = 1
                                    this.refs.SelectPicModal.open()
                                }}

                                onUploadSuccess={setIdCardPic} />
                            <Text>*身份证正面</Text>
                        </View>
                        <View style={{ flex: 1 }} />

                        <View>
                            <UploadImageView
                                ref={"idReturnCardImage"}
                                must={true}
                                lebal={""}
                                onPress={() => {
                                    this.imageTag = 2
                                    this.refs.SelectPicModal.open()
                                }}
                                onUploadSuccess={setIdCardReversePic}
                            />
                            <Text>*身份证反面</Text>
                        </View>
                        <View style={{ flex: 1 }} />

                        <View>
                            <UploadImageView
                                ref={"idBankImage"}
                                must={true}
                                lebal={""}
                                onPress={() => {
                                    this.imageTag = 3
                                    this.refs.SelectPicModal.open()
                                }}
                                onUploadSuccess={setBankCardPic}
                            />
                            <Text>*银行卡照片</Text>
                        </View>
                    </View>
                </View>
                <WhiteSpace size={50} />
                <LongButton text={"提交实名认证"} onPress={() => {
                    this._onPressSubmit()
                }} />
                <SelectPicModal
                    ref={"SelectPicModal"}
                    onSelect={this.selectImage.bind(this)} />
            </View>
        )
    }

    /**
     * 提交实名认证
     */
    _onPressSubmit() {
        const { navigation, idCardUrl, idCardReverseUrl, bankCardUrl, fromKey, getUserSetInfo } = this.props;

        //navigation.navigate(RouteConfig.HomeTab.name);
        if (!idCardUrl) {
            toast('请选择身份证正面图片');
            return;
        }
        if (!idCardReverseUrl) {
            toast('请选择身份证正面图片');
            return;
        }
        if (!bankCardUrl) {
            toast('请上传银行卡照片');
            return;
        }
        let postParams = {
            'IdCard_Z_Imgurl': idCardUrl,//身份证正面
            'IdCard_F_Imgurl': idCardReverseUrl,//反面
            'BankCard_Imgurl': bankCardUrl,//银行卡照片
        }

        //第三步
        VerifyDataStep3(postParams, (response) => {
            // 刷新个人中心数据
            getUserSetInfo();
            //跳转
            toastLong("实名认证成功");
            navigation.navigate(RouteConfig.HomeTab.name);
            
        })
        

    }

    /**
     * 选择图片
     */
    selectImage(image) {
        switch (this.imageTag) {
            case 1:
                this.refs.idCardImage.upload(image);
                break;
            case 2:
                this.refs.idReturnCardImage.upload(image)
                break
            case 3:
                this.refs.idBankImage.upload(image)
                break
        }
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
        getUserSetInfo: () => dispatch(UserCenterAction.getUserSetInfo()),
        setIdCardPic: (url) => dispatch(RealNameVerifyAction.setIdCardPic(url)),
        setIdCardReversePic: (url) => dispatch(RealNameVerifyAction.setIdCardReversePic(url)),
        setBankCardPic: (url) => dispatch(RealNameVerifyAction.setBankCardPic(url)),
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(RealNameVerifyPageC)