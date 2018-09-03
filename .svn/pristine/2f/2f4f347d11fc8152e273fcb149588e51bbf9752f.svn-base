/**
 *  Created by majunhui on 2017/12/9
 */


'use strict';

import React, { Component } from 'react';
import {
    View,
    Text,
    Image,
    StyleSheet,
    TouchableOpacity
} from 'react-native';
import PropTypes from 'prop-types'
import Modal from 'react-native-modalbox'
import { width, height, unitWidth, textSizeNormal, textSizebig } from "../utils/AdapterUtil";


import { BaseStyle, HomeStyle, NearStyle, CustomModalViewStyle } from '../styles'
import WhiteSpace from "../components/whitespace/WhiteSpace";
import * as Color from '../configs/Color'
import { selectPhoto, takePhoto } from "../utils/SelectPicUtil";

import Images from '../images';
import RouteConfig from '../configs/RouteConfig';

//推送订单弹窗
export default class UserRealNameVerigyModal extends Component {
    constructor(props) {
        super(props)
        this.state = {
            yesValue: '',
        }
        this.open = this.open.bind(this)
        this.close = this.close.bind(this)
    }

    /**
     * 默认属性   isRequired必传
     */
    static propTypes = {
        onPress: PropTypes.func.isRequired,
        onCancle: PropTypes.func.isRequired,
    }

    componentWillUnmount() {
        this.close()
    }

    /**
     *  方法描述: 打开弹窗
     *  作    者: 马军辉
     */
    open(res) {
        this.setState({
            yesValue: res
        })
        this.refs.SelectPicModal.open()
    }

    /**
     *  方法描述: 关闭弹窗,并取消倒计时
     *  作    者: 马军辉
     */
    close() {
        this.refs.SelectPicModal.close()
    }

    /**
     * 渲染视图
     */
    render() {

        return (
            <Modal
                style={styles.background}
                ref={"SelectPicModal"}
                backdropPressToClose={false}
                backButtonClose={true}
                position={'center'}
                swipeToClose={false}>
                <View style={CustomModalViewStyle.outContainerView}>
                    <View style={CustomModalViewStyle.modalContainer}>
                        <WhiteSpace  size={50}/>
                        <View style={CustomModalViewStyle.modalTitViewStyle}>
                            <Text style={{ color: 'black', fontWeight: 'bold', fontSize: 18 }}>温馨提示</Text>
                        </View>
                        <WhiteSpace  size={60}/>
                        <View style={CustomModalViewStyle.modalTitViewStyle}>
                            <View style={{ flex: 1,alignItems:'center' }}>
                            <Text style={{ color: 'black',fontSize:14,paddingLeft:unitWidth*100,paddingRight:unitWidth*100,lineHeight:30}}>账号尚未进行实名认证，认证之后将会享受更优质的服务</Text>

                            </View>
                          
                        </View>
                        <View style={CustomModalViewStyle.modalContentViewStyle}>
                            <View style={{
                                backgroundColor: '#C2C2C2',
                                borderRadius: unitWidth * 10,
                                padding: unitWidth * 30,
                                
                            }}>
                                <TouchableOpacity
                                    onPress={() => {
                                        this.close()
                                    }}>
                                    <Text style={{ color: 'white',fontSize:17 }}>我再考虑一下</Text>

                                </TouchableOpacity>
                            </View>
                            <WhiteSpace  size={60} horizontal={true}/>
                            <View style={{
                                marginLeft: unitWidth * 15,
                                backgroundColor: '#e60012',
                                borderRadius: unitWidth * 10,
                                padding: unitWidth * 30
                            }}>
                                <TouchableOpacity
                                    onPress={
                                        () => {
                                            this.props.onPress()
                                            this.close()
                                        }
                                    }
                                >
                                    <Text style={{ color: 'white',fontSize:17 }}>去完善资料</Text>
                                </TouchableOpacity>
                            </View>
                        </View>
                    </View>

                    <TouchableOpacity
                        style={{
                            position: 'absolute',
                            top: 0,
                            right: 0,
                        }}
                        onPress={
                            () => {
                                this.close()
                            }
                        }
                    >
                        <Image
                            source={Images.public.close}
                            style={CustomModalViewStyle.dialogIcon}
                        />
                    </TouchableOpacity>
                </View>
            </Modal>
        )
    }
}

const styles = StyleSheet.create({
    background: {
        width: width,
        height: height,
        backgroundColor: 'transparent',
        alignItems: 'center',
        justifyContent: 'center',
    },
    item: {
        width: width,
        height: unitWidth * 140,
        backgroundColor: 'white',
        alignItems: 'center',
        justifyContent: 'center',
        borderBottomColor: Color.gray,
        borderBottomWidth: StyleSheet.hairlineWidth * 3
    },
    text: {
        color: Color.blackText,
        fontSize: textSizebig
    }
})