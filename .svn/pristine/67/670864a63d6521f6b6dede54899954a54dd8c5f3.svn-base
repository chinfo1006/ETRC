/**
 * Created by Tloy on 2018/1/20.
 */


"use strict"

import React, {Component} from 'react'
import {
    View,
    Text,
    Image,
    ToastAndroid,
    StyleSheet,
    TouchableOpacity,
    ActivityIndicator
} from 'react-native'
import PropTypes from 'prop-types';
import ImagePicker from 'react-native-image-crop-picker'
import {width, unitWidth} from "../../utils/AdapterUtil";
import * as Color from '../../configs/Color'
import {UploadImage} from "../../server/ServerApi";
import {getFileNameByUri} from "../../utils/FileUtil";
import {toast} from "../../utils/LogUtil";


export default class UploadImageView extends Component {
    constructor(props) {
        super(props)
        this.state = {
            status: 1,     // 1正常状态,2上传中, 3上传完成
            url: this.props.url,
            path: '',
            image: '',
        }
    }

    static propTypes = {
        // image: PropTypes.object,
        url: PropTypes.string,
        onPress: PropTypes.func.isRequired,
        must: PropTypes.bool,
        lebal: PropTypes.string,
        onUploadSuccess: PropTypes.func
    }

    upload(image) {
        console.log("upload")
        this.setState({
            // image:image,
            status: 2,
        })

        UploadImage(image, (res) => {
            toast("上传成功");
            console.log(res);
            this.props.onUploadSuccess(res)
            this.setState({
                status: 3,
                image: image
            })
        }, (res) => {
            toast("上传失败res");
            this.setState({
                status: 1,
            })
        })
    }

    render() {
        return (
            <TouchableOpacity style={styles.uploadItem} activeOpacity={1}
                              onPress={() => {
                                  this.props.onPress((image) => {
                                      this.upLoad()
                                  })
                              }}>
                <View style={styles.uploadBlock}>
                    {this.renderContain()}
                </View>
                <Text>
                    <Text style={{color: 'red'}}
                    >{this.props.must ? "" : ""}</Text>{this.props.lebal}</Text>
            </TouchableOpacity>
        )
    }

    renderContain() {

        if (this.state.status == 1) {
            if (this.props.url) {
                return (
                    <Image style={styles.uploadImage}
                           source={{uri: this.props.url}}/>
                )
            }
            if (this.props.image) {
                const image = this.props.image
                return (
                    <Image style={styles.uploadImage}
                           source={{uri: image.path, width: image.width, height: image.height, mime: image.mime}}/>
                )
            }
            return <Image style={styles.uploadDefault}
                          source={require('../../images/component/cmera.png')}/>
        }
        if (this.state.status == 2) {
            return <ActivityIndicator/>
        }
        if (this.state.status == 3) {
            const image = this.state.image
            return (
                <Image style={styles.uploadImage}
                       source={{uri: image.path, width: image.width, height: image.height, mime: image.mime}}/>
            )
        }
    }
}


const styles = StyleSheet.create({
    uploadItem: {
        width: unitWidth * 250,
    },
    uploadBlock: {
        width: unitWidth * 250,
        height: unitWidth * 250,
        alignItems: 'center',
        justifyContent: 'center'
    },
    uploadDefault: {
        width: unitWidth * 250,
        height: unitWidth * 250,
        resizeMode: 'stretch',
    },
    uploadImage: {
        width: unitWidth * 250,
        height: unitWidth * 250,
        resizeMode: 'cover',
    },
})
