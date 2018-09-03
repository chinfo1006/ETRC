/**
 * Created by Tloy on 2018/1/30.
 */

'use strict';
import React, {Component} from 'react'
import {
    View,
    Text,
    TouchableOpacity,
    StyleSheet,
    PixelRatio, Platform
} from 'react-native'
import Modal from 'react-native-modalbox'
import {width, unitWidth, titleHeight, statusBarHeight} from "../utils/AdapterUtil";
import ScreenCutModule from '../modules/ScreenCutModule'
import {toast} from "../utils/LogUtil";
import {captureScreen} from "react-native-view-shot";

export default class SavePicModal extends Component {

    open() {
        this.refs.savePicModal.open();
    }

    save(type) {
        this.closeModal()
        setTimeout(() => {
            if(Platform.OS=='ios'){
                captureScreen({
                    format: "jpg",
                    quality: 0.8
                }).then(
                    uri => {
                        toast('已保存到手机')
                        console.log("Image saved to", uri)
                    },
                    error => {
                        toast('保存失败')
                        console.error("Oops, snapshot failed", error)
                    }
                );
            }else{
                var height = Math.ceil((statusBarHeight + titleHeight) * (PixelRatio.get()))
                ScreenCutModule.screenCut(height, 0, '已保存到手机')
            }
        }, 500)

    }

    closeModal() {
        this.refs.savePicModal.close()
    }


    render() {
        return (
            <Modal
                style={styles.savePic}
                ref={"savePicModal"}
                position="bottom"
                backdropPressToClose={true}
                backButtonClose={true}
                swipeToClose={false}>
                <View style={styles.savePicBg}>
                    <TouchableOpacity style={styles.savePicBtBg} activeOpacity={1}
                                      onPress={() => {
                                          this.save()
                                      }}>
                        <Text style={styles.savePicBtText}>保存图片</Text>
                    </TouchableOpacity>
                    <TouchableOpacity activeOpacity={1} style={styles.shareBt}
                                      onPress={() => {
                                          this.closeModal()
                                      }}>
                        <Text style={styles.shareBtText}>取消</Text>
                    </TouchableOpacity>
                </View>
            </Modal>
        )
    }
}

const styles = StyleSheet.create({

    savePic: {
        width: width,
        height: unitWidth * 480,
        backgroundColor: 'transparent'
    },
    savePicBg: {
        width: width,
        height: unitWidth * 480,
        backgroundColor: 'transparent',
        alignItems: 'center'
    },
    savePicBtBg: {
        width: width - unitWidth * 100,
        backgroundColor: 'white',
        borderRadius: unitWidth * 30,
        alignItems: 'center',
        justifyContent: 'center',
        height: unitWidth * 160,
    },
    savePicBtText: {
        fontSize: unitWidth * 60,
        color: '#027aff'
    },
    shareBt: {
        backgroundColor: 'white',
        width: width - unitWidth * 100,
        height: unitWidth * 160,
        borderRadius: unitWidth * 30,
        alignItems: 'center',
        justifyContent: 'center',
        marginTop: unitWidth * 50
    },
    shareBtText: {
        fontSize: unitWidth * 60,
        color: '#027aff'
    },
})