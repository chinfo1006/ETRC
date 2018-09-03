import React, {Component} from 'react';
import {
    View,
    WebView,
} from 'react-native';
import TitleBar from "../../components/titlebar/TitleBar";
import {BaseStyle} from '../../styles'

export default class WebViewPage extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        const {navigation} = this.props;
        return (
            <View style={BaseStyle.background}>
                <TitleBar title={"支付"} navigation={navigation}/>
                <WebView
                    ref="webview"
                    style={{flex: 1}}
                    source={{
                        uri: this.props.navigation.state.params.url,
                        headers: {}
                    }}
                    javaScriptEnabled={true}
                    mixedContentMode={"always"}
                    onMessage={(event) => {
                        const data = event.nativeEvent.data
                        if (data == "backToHome") {
                            navigation.popToTop();
                        } else if (data == "backToLesson") {
                            navigation.goBack()
                        }
                    }}
                    domStorageEnabled={true}
                    startInLoadingState={true}
                    scalesPageToFit={true}
                    showsHorizontalScrollIndicator={false}
                    showsVerticalScrollIndicator={false}
                />
            </View>
        )
    }
}