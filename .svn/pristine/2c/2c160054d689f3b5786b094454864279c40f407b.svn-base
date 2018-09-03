import React, {Component} from 'react';
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
import {HomeStyle} from '../../styles'
import TitleBar from "../../components/titlebar/TitleBar";
import {baseUrl} from '../../configs/Config';
import {width, height} from '../../utils/AdapterUtil'

export default class NewsDetail extends Component {

    constructor(props) {
        super(props);
    }

    render() {
        const {navigation} = this.props;
        console.log('renUrl=' + baseUrl + "/Html/NewsDetail.html?id=" + navigation.state.params.NewsId);
        return (
            <View style={{width: width, height: height}}>
                <TitleBar title={"快报详情"} navigation={navigation}/>
                <WebView
                    ref="webview"
                    style={{flex: 1}}
                    source={{uri: baseUrl + "/Html/NewsDetail.html?id=" + navigation.state.params.NewsId, headers: {}}}
                    renderLoading={this.renderLoading}
                    javaScriptEnabled={true}
                    domStorageEnabled={true}
                    startInLoadingState={false}
                    scalesPageToFit={true}
                    onLoadEnd={() => {
                    }}
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


    renderLoading = () => {
        return (
            <View style={HomeStyle.container}>
                <ActivityIndicator
                    animating={true}
                    style={[HomeStyle.gray, {height: 80}]}
                    color='red'
                    size="large"
                />
            </View>
        );
    }
}