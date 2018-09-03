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
//推送订单弹窗
export default class ApplyBusinessMessageModal extends Component {
    constructor(props) {
        super(props)

        this.state = {
            yesValue: '',
        }
        this.open = this.open.bind(this)
        this.close = this.close.bind(this)
    }

    static propTypes = {
        onSelect: PropTypes.func.isRequired,
    }

    componentWillUnmount() {
        this.close()
    }

    /**
     *  方法描述: 打开弹窗
     *  作    者: 马军辉
     */
    open(yesValue) {

        this.setState({
            yesValue:yesValue,
           
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

    render() {
        const { navigation } = this.props
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

                        <View style={CustomModalViewStyle.modalTitViewStyle}>

                            <Text style={{ color: 'black', fontWeight: 'bold', fontSize: 20, marginTop: unitWidth * 100 }}>申请商家</Text>
                            <WhiteSpace size={10} />
                            <Text>{this.state.yesValue}</Text>
                        </View>
                       
                        <WhiteSpace size={40} />
                        
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

                {/* <TouchableOpacity
                    style={styles.item} activeOpacity={1}
                    onPress={() => {
                        takePhoto(false,(image)=>{
                            this.props.onSelect(image)
                        })
                    }}>
                    <Text style={styles.text}>立即拍照</Text>
                </TouchableOpacity>
                <TouchableOpacity
                    style={styles.item} activeOpacity={1}
                    onPress={() => {
                        selectPhoto(false,(image)=>{
                            this.props.onSelect(image)
                        })
                    }}>
                    <Text style={styles.text}>从相册选择</Text>
                </TouchableOpacity>
                <TouchableOpacity
                    style={styles.item} activeOpacity={1}
                    onPress={this.close}>
                    <Text style={styles.text}>取消</Text>
                </TouchableOpacity> */}
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