/**
 *  Created by majunhui on 2017/12/9
 */

'use strict';

import React, {Component} from 'react';
import {
    ProgressBarAndroid,
    View,
    Text,
    Image,
    StyleSheet,
    Platform,
    TouchableOpacity,
    ScrollView,
    BackHandler,
    NativeModules,
    DeviceEventEmitter
} from 'react-native';
import PropTypes from 'prop-types'
import Modal from 'react-native-modalbox'
import {width, height, unitWidth, textSizeNormal, textSizebig} from "../utils/AdapterUtil";
import WhiteSpace from "../components/whitespace/WhiteSpace";
import * as Color from '../configs/Color'
import Images from '../images';
import {IosAppId} from "../configs/Config";

export default class UpdateModal extends Component {
    constructor(props) {
        super(props);
        this.state = {
            promptList: [],
            updateUrl: '', //更新url的地址
            iosUpdateUrl: '',
            forceUpdate: '',// 是否进行强制更新
            progress: 0
        }
        this.open = this.open.bind(this);
        this.close = this.close.bind(this);
    }

    //打开
    open(promptList, updateUrl, forceUpdate, iosUpdateUrl) {
        this.setState({
            promptList: promptList,
            updateUrl: updateUrl,
            forceUpdate: forceUpdate,
            iosUpdateUrl: iosUpdateUrl
        });
        this.refs.UpdateModal.open()
    }

    //关闭
    close() {
        this.refs.UpdateModal.close()
    }

    /**
     * 默认属性   isRequired必传
     */
    // static propTypes = {
    // }

    componentDidMount() {
        DeviceEventEmitter.addListener('LOAD_PROGRESS', (msg) => {
            let title = "当前下载进度：" + msg
            this.setState({
                progress: msg,
            })
            if (msg == 100) {
                this.close();
            }
        });
    }

    componentWillUnmount() {
        this.close();
        DeviceEventEmitter.removeListener('LOAD_PROGRESS')
    }

    render() {
        return (
            <Modal
                style={styles.background}
                ref={"UpdateModal"}
                backdropPressToClose={false}
                backButtonClose={true}
                position={'center'}
                swipeToClose={false}>
                <ScrollView>
                    <View style={styles.block}>
                        <Image style={styles.image}
                               source={Images.update.update}/>

                        <WhiteSpace size={50}/>
                        <Text style={styles.text}>更新内容：</Text>
                        {
                            this.renderItemPromptView()
                        }
                        <WhiteSpace size={50}/>
                        {this.state.progress == 0 ? (
                            <TouchableOpacity style={styles.bt}
                                              activeOpacity={1}
                                              onPress={() => {
                                                  if (Platform.OS == 'android') {
                                                      NativeModules.upgrade.upgrade(this.state.updateUrl);
                                                  } else {
                                                      // NativeModules.upgrade.openAPPStore(IosAppId);   //AppStore更新
                                                      NativeModules.upgrade.openBrowser(this.state.iosUpdateUrl);      // 更新
                                                      // NativeModules.upgrade.openBrowser("https://itunes.apple.com/us/app/id1233976744?ls=1&mt=8"); //蒲公英更新
                                                  }
                                              }}>

                                <Text style={styles.btText}>立即更新</Text>
                            </TouchableOpacity>
                        ) : (
                            <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
                                <ProgressBarAndroid
                                    color='red' styleAttr='Horizontal'
                                    progress={this.state.progress * 0.01}
                                    indeterminate={false}
                                    style={{
                                        marginTop: 10,
                                        height: unitWidth * 100,
                                        width: width * 0.5,
                                        borderRadius: unitWidth * 6,

                                    }}/>
                                {
                                    this.state.progress * 100 == 100 ? <Text>更新完成</Text> :
                                        <Text>正在更新中：{this.state.progress}%</Text>
                                }

                            </View>
                        )}
                    </View>
                </ScrollView>
                <Image style={styles.topImage}
                       source={Images.update.update2}/>
                <TouchableOpacity style={styles.close}
                                  activeOpacity={1}
                                  onPress={() => {
                                      if (this.state.forceUpdate == 1) {
                                          //强制升级
                                          //关闭不了  退出窗口
                                          this.refs.UpdateModal.close();
                                          BackHandler.exitApp();
                                      } else {
                                          //非强制更新
                                          this.refs.UpdateModal.close();
                                      }
                                  }}>
                    <Image style={styles.closeImage}
                           source={Images.update.close}/>
                </TouchableOpacity>
            </Modal>
        )
    }


    /**
     * 返回提醒的警告视图view
     */
    renderItemPromptView() {
        let promptListView = [];
        for (let i = 0; i < this.state.promptList.length; i++) {
            let item = this.state.promptList[i];
            promptListView.push(
                <Text style={{marginLeft: unitWidth * 40}} key={'index' + i}>{item}</Text>
            )
        }
        return promptListView;
    }


    /**
     * 显示最新版本号
     */
    showLatestNewVersion() {
        //如果版本号为空
        if (!global.versionInfo) {
            return <Text>最新版本</Text>;
        }
        if (!global.versionInfo.verNo) {
            return <Text>最新版本</Text>;
        }
        return <Text style={styles.text}>最新版本 {global.versionInfo.verNo}</Text>
    }

    /**
     * 显示新版本内容1
     */
    showLatestNewVersionContent1() {
        if (!global.versionInfo) {
            return <Text style={styles.text}></Text>;
        }
        if (!global.versionInfo.verNo) {
            return <Text style={styles.text}></Text>;
        }
        return <Text style={styles.text}>{global.versionInfo.content1}</Text>
    }

    /**
     * 显示新版本内容2
     */
    showLatestNewVersionContent2() {
        if (!global.versionInfo) {
            return <Text style={styles.text}></Text>;
        }
        if (!global.versionInfo.verNo) {
            return <Text style={styles.text}></Text>;
        }
        return <Text style={styles.text}>{global.versionInfo.content2}</Text>
    }


    /**
     * 显示新版本内容3
     */
    showLatestNewVersionConten3() {
        if (!global.versionInfo) {
            return <Text style={styles.text}></Text>;
        }
        if (!global.versionInfo.verNo) {
            return <Text style={styles.text}></Text>;
        }
        return <Text style={styles.text}>{global.versionInfo.content3}</Text>
    }


    /**
     * 显示新版本内容3
     */
    showLatestNewVersionConten4() {
        if (!global.versionInfo) {
            return <Text style={styles.text}></Text>;
        }
        if (!global.versionInfo.verNo) {
            return <Text style={styles.text}></Text>;
        }
        return <Text style={styles.text}>{global.versionInfo.content4}</Text>
    }
}

const styles = StyleSheet.create({
    background: {
        width: unitWidth * 775,
        //height: height - unitWidth * 750,
        height: height * 0.7,
        alignItems: 'center',
        // backgroundColor: '#ff000066',
        paddingTop: unitWidth * 132,
        backgroundColor: 'transparent',
    },
    block: {
        width: unitWidth * 775,
        height: unitWidth * 1070,
        backgroundColor: 'white',
        borderRadius: unitWidth * 30
    },
    image: {
        width: unitWidth * 775,
        height: unitWidth * 413,
        resizeMode: 'stretch'
    },
    flexBtnContainer: {
        flexDirection: 'row',
        justifyContent: 'space-between',
    },
    bt: {
        width: unitWidth * 700,
        height: unitWidth * 120,
        backgroundColor: Color.titleBarBackground,
        borderRadius: unitWidth * 60,
        alignItems: 'center',
        justifyContent: 'center',
        marginLeft: unitWidth * 60
    },
    text: {
        marginLeft: unitWidth * 60,
    },
    btText: {
        color: 'white',
    },
    close: {
        position: 'absolute',
        width: unitWidth * 70,
        height: unitWidth * 132,
        top: 0,
        right: unitWidth * 30,
    },
    closeImage: {
        width: unitWidth * 70,
        height: unitWidth * 132,
        resizeMode: 'stretch'
    },
    topImage: {
        width: unitWidth * 163,
        height: unitWidth * 265,
        resizeMode: 'stretch',
        position: 'absolute',
        left: unitWidth * 306,
        top: unitWidth * 10
    }
})