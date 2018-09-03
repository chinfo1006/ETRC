/**
 * Created by leaf on 2018/8/22.
 * 海外实名
 */

"use strict";

import React, {Component} from 'react'
import PropTypes from 'prop-types';
import {
    View,
    Text,
    WebView,
    StyleSheet,
} from 'react-native'
import TitleBar from "../../components/titlebar/TitleBar";
import {connect} from "react-redux";
import Images from '../../images'
import {baseUrl} from '../../configs/Config'

class RealNameVerifyGuoWaiWeb extends Component {

    render() {
        const {navigation} = this.props
        return (
            <View style={styles.container}>
                <TitleBar title={'人工实名'} navigation={navigation}/>
                <WebView
                    style={{flex:1}}
                    source={{uri:baseUrl+'/Html/ArtificialAuditInfo.html' , method: 'GET'}}
                    javaScriptEnabled={true}
                    domStorageEnabled={true}
                    scalesPageToFit={false}
                />
            </View>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'white',
    },

})

/**
 * 把state绑定到props,在props中获取数据
 */
function mapStateToProps(state) {
    return {}
}

/**
 * 把dispatch绑定到props  可以直接调用对应的方法执行dispatch
 */
function mapDispatchToProps(dispatch) {
    return {}
}

export default connect(mapStateToProps, mapDispatchToProps)(RealNameVerifyGuoWaiWeb);
