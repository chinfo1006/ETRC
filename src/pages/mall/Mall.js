/**
 * Created by Tloy on 2018/3/15.
 */


"use strict";

import React, {Component} from 'react'
import {
    View,
    Text,
    WebView,
    ActivityIndicator
} from 'react-native'
import TitleBar from "../../components/titlebar/TitleBar";
import RouteConfig from "../../configs/RouteConfig";
import {connect} from "react-redux";
import * as MallAction from '../../actions/MallAction'
import {concatMallUrl} from "../../utils/UrlUtil";

class Mall extends Component {
    constructor(props) {
        super(props)
    }

    render() {
        const {url, mallDocument, changeDocument, changeUrl} = this.props
        return (
            <View style={BaseStyle.background}>
                <TitleBar title='ETRC商城' hideLeftArrow={!mallDocument.canGoBack} navigation={this.props.navigation}
                          pressRight={() => {
                              this.refs.webview.reload()
                          }}
                          pressLeft={() => {
                              this.refs.webview.goBack()
                          }}/>
                <WebView
                    ref="webview"
                    style={{flex: 1}}
                    source={{uri: url, headers: {token: global.token || ""}}}
                    renderLoading={this.renderLoading}
                    javaScriptEnabled={true}
                    mixedContentMode={"always"}
                    onMessage={(event) => {
                        console.log(event.nativeEvent.data)
                        const data = decodeURIComponent(event.nativeEvent.data)
                        // const data = '["login", "http://192.168.0.101:8003/m-Mobile/Cart/Cart"]'
                        console.log(data)
                        const params = JSON.parse(data)
                        if (params[0] == 'login') {
                            this.props.navigation.navigate(RouteConfig.RegistAndLogin.name, {mallUrl: concatMallUrl(params[1])})
                        }
                    }}
                    domStorageEnabled={true}
                    startInLoadingState={true}
                    scalesPageToFit={true}
                    showsHorizontalScrollIndicator={false}
                    showsVerticalScrollIndicator={false}
                    onNavigationStateChange={(document) => {
                        changeDocument(document)
                    }}/>
            </View>
        )
    }

    renderLoading() {
        return (
            <View style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
                <ActivityIndicator/>
            </View>
        )
    }
}

/**
 * 把state绑定到props,在props中获取数据
 */
function mapStateToProps(state) {
    return {
        ...state.MallReducer
    }
}

/**
 * 把dispatch绑定到props  可以直接调用对应的方法执行dispatch
 */
function mapDispatchToProps(dispatch) {
    return {
        changeDocument: (document) => dispatch(MallAction.changeDocument(document)),
        changeUrl: (url) => dispatch(MallAction.changeUrl(url))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Mall);