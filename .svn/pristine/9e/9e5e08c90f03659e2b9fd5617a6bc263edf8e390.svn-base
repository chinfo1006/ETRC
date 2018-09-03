/**
 * Created by Tloy on 2018/1/7.
 */


'use strict';

import React, {Component} from 'react'
import {
    View,
    Text,
    Image,
    PixelRatio,
    TouchableOpacity,
    ImageBackground,
    Platform,
    StyleSheet
} from 'react-native';
import {connect} from 'react-redux'
import TitleBar from "../../components/titlebar/TitleBar";
import QRCode from 'react-native-qrcode';
import Images from '../../images';
import RouteConfig from "../../configs/RouteConfig";
import ShareModal from "../../modals/ShareModal";
import SavePicModal from "../../modals/SavePicModal";
import {baseUrl} from "../../configs/Config";
import {height, width, unitWidth} from "../../utils/AdapterUtilNew";
import WhiteSpace from "../../components/whitespace/WhiteSpace";
import * as Color from "../../configs/Color";
import {getVipText} from "../../utils/CodeUtil";

/**
 * 分享页面
 */
class SharePage extends Component {
    constructor(props) {
        super(props);
    }

    /**
     * 渲染视图
     */
    render() {
        const {userInfo} = this.props;
        return (
            <TouchableOpacity
                activeOpacity={1}
                onPress={() => {
                    // this.refs.ShareModal.open()
                }}
                onLongPress={() => {
                    this.refs.savePicModal.open()
                }}>
                <ImageBackground
                    style={styles.bg}
                    resizeMode={"stretch"}
                    source={Images.share.bg}>
                    <TitleBar
                        left={true} title="我要推荐" right="推荐记录"
                        backgroundColor={"transparent"}
                        navigation={this.props.navigation}
                        pressRight={() => {
                            this.props.navigation.navigate(RouteConfig.ShareRecord.name)
                        }}/>
                    <WhiteSpace size={40}/>
                    <ImageBackground
                        style={styles.headBlock}
                        source={Images.share.head_block}>
                        {
                            userInfo.HeadImg ? <Image style={styles.head}
                                                      source={{uri: baseUrl + userInfo.HeadImg}}/> :
                                <Image style={styles.head}
                                       source={Images.public.default_head}/>
                        }
                    </ImageBackground>
                    <Text
                        style={styles.text}>{getVipText(userInfo.Identification)}</Text>
                    <Text style={styles.text}>{userInfo.UserPhone || " "}</Text>
                    <ImageBackground
                        style={styles.center}
                        resizeMode={"stretch"}
                        source={Images.share.center}>
                        <View style={styles.codeBorder}>
                            <View style={styles.codeBg}>
                                <QRCode size={unitWidth * 340}
                                        value={baseUrl + userInfo.RecommandUrl}
                                        bgColor={'black'}
                                        fgColor={"white"}/>
                                {/*<View style={ShareStyle.bottomBg}/>*/}
                                {/*<View style={ShareStyle.rightBg}/>*/}
                                <Image style={styles.qcCodeLogo}
                                       source={Images.public.logo}/>
                            </View>
                        </View>
                    </ImageBackground>
                    <View style={styles.clickRow}>
                        <View style={styles.clickLine}/>
                        <View style={{margin: unitWidth * 20}}>
                            {/*<Text style={styles.clickText}>点击分享到朋友圈</Text>*/}
                            <Text style={styles.clickText}>长按屏幕保存图片</Text>
                        </View>
                        <View style={styles.clickLine}/>
                    </View>
                    <WhiteSpace size={50}/>
                    <ShareModal ref={"ShareModal"} shareUrl={baseUrl + userInfo.RecommandUrl}/>
                    <SavePicModal ref={"savePicModal"}/>
                </ImageBackground>
            </TouchableOpacity>
        )
    }
}

/**
 * 把state绑定到props,在props中获取数据
 */
function mapStateToProps(state) {
    return {
        userInfo: state.mineReducer.userInfo,
    }
}

/**
 * 把dispatch绑定到props  可以直接调用对应的方法执行dispatch
 */
function mapDispatchToProps(dispatch) {
    return {}
}

export default connect(mapStateToProps, mapDispatchToProps)(SharePage)


const styles = StyleSheet.create({

    codeBorder: {
        width: unitWidth * 370,
        height: unitWidth * 370,
        backgroundColor: "#f9b395",
        alignItems: 'center',
        justifyContent: 'center',
    },
    codeBg: {
        width: unitWidth * 360,
        height: unitWidth * 360,
        backgroundColor: 'white',
        alignItems: 'center',
        justifyContent: 'center',
    },
    qcCodeLogo: {
        position: 'absolute',
        top: unitWidth * 150,
        left: unitWidth * 150,
        width: unitWidth * 60,
        height: unitWidth * 60,
    },

    center: {
        width: width,
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center'
    },
    text: {
        color: "white",
        fontSize: unitWidth * 40,
        backgroundColor: 'transparent',
    },
    headBlock: {
        width: unitWidth * 180,
        height: unitWidth * 180,
        borderRadius: unitWidth * 90,
        alignItems: 'center',
        justifyContent: 'center'
    },
    head: {
        width: unitWidth * 150,
        height: unitWidth * 150,
        borderRadius: unitWidth * 75,
        resizeMode: 'cover',
    },
    bg: {
        width: width,
        height: height,
        alignItems: 'center'
    },
    clickRow: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
    },
    clickLine: {
        width: unitWidth * 137,
        height: unitWidth * 5,
        backgroundColor: "white"
    },
    clickText: {
        fontSize: unitWidth * 35,
        color: "#ffffff",
        backgroundColor: 'transparent',
    },
})