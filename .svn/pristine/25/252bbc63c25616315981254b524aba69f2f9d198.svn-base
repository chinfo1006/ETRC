import React, { Component } from 'react';
import {
    Text,
    View,
    Image,
    TouchableOpacity,
    ScrollView,
    FlatList,
    WebView,
    ActivityIndicator,
} from 'react-native';
import TitleBar from "../../components/titlebar/TitleBar";
import { baseUrl } from '../../configs/Config';
import { width, height } from '../../utils/AdapterUtil'

export default class RegisterWebViewPage extends Component {

    constructor(props) {
        super(props);
        this.state = {

        }
    }


    render() {

        //Html/about/about.html
        //this.props.navigation.state.params.NewsId
        // http://api.qianqiuyungou.com/Html/RegisterNotice.html
        const { navigation } = this.props;
        return (
            <View style={{ width: width, height: height }}>
                <TitleBar title={"ETRC用户协议"} navigation={navigation} />
                <WebView
                    ref="webview"
                    style={{ flex: 1 }}
                    source={{ uri: baseUrl +'/Html/RegisterNotice.html' , headers: {} }}
                    renderLoading={this.renderLoading}
                    javaScriptEnabled={true}
                    domStorageEnabled={true}
                    startInLoadingState={false}
                    scalesPageToFit={true}
                    onLoadEnd={() => { }}
                    showsHorizontalScrollIndicator={false}
                    showsVerticalScrollIndicator={false}
                    onNavigationStateChange={(navState) => {
                        // console.log(navState.url)
                        // this.setState({
                        //     canGoBack: navState.canGoBack
                        // })
                        //for (var i in document) {
                        //   LogUtil.debug("xiaodu-", "" +document.title)
                        //  LogUtil.debug("xiaodu-", "" +document.height)
                        //}

                        
                    }}
                />
            </View>
        )
    }

}