/**
 * Created by Tloy on 2016/10/27.
 */

"use strict";
import React, {Component} from 'react';
import {
    View,
    Text,
    Image,
    StyleSheet,
    TouchableOpacity,
} from 'react-native';
import Modal from 'react-native-modalbox';
import {shareType, registWx, shareToTimeline, shareToQQ, shareToWx, shareToQzone} from '../utils/ShareUtil'
import {baseHost} from '../server/ApiUrl'
import {width, unitWidth} from "../utils/AdapterUtil";
import PropTypes from 'prop-types'

export default class ShareModal extends Component {
    constructor(props) {
        super(props);
        this.state = {
            isWXAppInstalled: false
        }
    }

    static propTypes = {
        shareUrl: PropTypes.string.isRequired,
    }


    async componentDidMount() {
        registWx()
    }

    open() {
        this.refs.shareModal.open()
    }


    share(type) {
        switch (type) {
            case shareType.shareWx:
                console.log('shareWx')
                // shareToWx(this.props.shareUrl)
                break
            case shareType.shareTimeLine://分享到微信朋友圈
                // console.log('shareTimeLine')
                // shareToTimeline(this.props.shareUrl)
                break
            case shareType.shareQQ:
                // console.log('shareQQ')
                shareToQQ(this.props.shareUrl)
                break
            case shareType.shareQzone:
                // console.log('shareQzone')
                shareToQzone(this.props.shareUrl)
                break
            default:
                // console.log('default')
                break
        }
        this.closeModal()
    }

    closeModal() {
        this.refs.shareModal.close()
    }

    render() {
        return (
            <Modal
                style={styles.share}
                ref={"shareModal"}
                position="bottom"
                backButtonClose={true}
                swipeToClose={false}>
                <View style={styles.shareBg}>
                    <View style={styles.shareIconBlock}>
                        <TouchableOpacity style={styles.shareItem} activeOpacity={1}
                                          onPress={() => {
                                              this.share(shareType.shareWx)
                                          }}>
                            <Image style={styles.shareIcon}
                                   source={require('../images/share/wx.png')}/>
                            <Text style={styles.shareText}>微信好友</Text>
                        </TouchableOpacity>
                        <TouchableOpacity activeOpacity={1} style={styles.shareItem}
                                          onPress={() => {
                                              this.share(shareType.shareTimeLine)
                                          }}>
                            <Image style={styles.shareIcon}
                                   source={require('../images/share/time_line.png')}/>
                            <Text style={styles.shareText}>朋友圈</Text>
                        </TouchableOpacity>
                        <TouchableOpacity activeOpacity={1} style={styles.shareItem}
                                          onPress={() => {
                                              this.share(shareType.shareQQ)
                                          }}>
                            <Image style={styles.shareIcon}
                                   source={require('../images/share/qq.png')}/>
                            <Text style={styles.shareText}>QQ</Text>
                        </TouchableOpacity>
                        <TouchableOpacity activeOpacity={1} style={styles.shareItem}
                                          onPress={() => {
                                              this.share(shareType.shareQzone)
                                          }}>
                            <Image style={styles.shareIcon}
                                   source={require('../images/share/qzone.png')}/>
                            <Text style={styles.shareText}>QQ空间</Text>
                        </TouchableOpacity>
                    </View>
                    <TouchableOpacity activeOpacity={1} style={styles.shareBt}
                                      onPress={() => {
                                          this.closeModal()
                                      }}>
                        <Text style={styles.shareBtText}>取消</Text>
                    </TouchableOpacity>
                </View>
            </Modal>
        );
    }
}

const styles = StyleSheet.create({
    share: {
        width: width,
        height: unitWidth * 550,
        backgroundColor: '#00000000'
    },
    shareBg: {
        width: width,
        height: unitWidth * 550,
        backgroundColor: 'transparent',
        alignItems: 'center',
    },
    shareIconBlock: {
        backgroundColor: 'white',
        width: width - unitWidth * 100,
        height: unitWidth * 320,
        borderRadius: unitWidth * 30,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center'
    },
    shareItem: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center'
    },
    shareIcon: {
        width: unitWidth * 150,
        height: unitWidth * 150,
        resizeMode: 'contain'
    },
    shareText: {
        color: 'black',
        marginTop: unitWidth * 10
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