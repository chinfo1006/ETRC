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
                <TitleBar title={this.props.navigation.state.params.title} navigation={navigation}/>
                <WebView
                    ref="webview"
                    style={{flex: 1}}
                    source={{
                        uri: this.props.navigation.state.params.url,
                        headers: {}
                    }}
                    renderLoading={this.renderLoading}
                    javaScriptEnabled={true}
                    domStorageEnabled={true}
                    startInLoadingState={false}
                    scalesPageToFit={true}
                    onLoadEnd={() => {
                    }}
                    showsHorizontalScrollIndicator={false}
                    showsVerticalScrollIndicator={false}
                    nativeConfig={
                        {
                            props: {
                                backgroundColor: '#ffffff',
                                flex: 1,
                            }
                        }
                    }
                    renderError={(e) => {
                        console.log(e)
                        if (e === 'WebKitErrorDomain') {
                            return null
                        }
                    }}
                    onNavigationStateChange={(navState) => {
                    }}
                />
            </View>
        )
    }
}