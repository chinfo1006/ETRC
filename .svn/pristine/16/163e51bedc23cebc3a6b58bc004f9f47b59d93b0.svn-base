/**
 * Created by Tloy on 2018/7/3.
 */


"use strict"
import React, {Component} from 'react';
import {
    View,
    Text
} from 'react-native';
import QRScannerView from '../../components/scan/QRScanner';
import {connect} from 'react-redux'
import TitleBar from "../../components/titlebar/TitleBar";
import * as Color from '../../configs/Color'
import Images from "../../images";
import {toast} from "../../utils/LogUtil";

class ScanerTransfer extends Component {
    componentDidMount() {

    }

    scanable = true

    render() {
        const {navigation} = this.props
        return (
            <View style={BaseStyle.background}>
                <TitleBar
                    title={'收款码扫描'}
                    navigation={navigation}
                />
                < QRScannerView
                    onScanResultReceived={(scanRes) => {
                        if (!this.scanable) return
                        console.log(scanRes.data)
                        let resObj = ""
                        try {
                            resObj = eval('(' + scanRes.data + ')')
                        } catch (error) {
                            this.scanable = true
                        }
                        console.log(resObj)
                        if (!resObj) {
                            toast("该二维码无法识别")
                            this.scanable = true
                            return
                        }
                        if (resObj.type == "gathering") {
                            navigation.state.params.scanBack(resObj.data)
                            navigation.goBack()
                        }
                    }}
                    renderTopBarView={() => {
                        return null
                    }}
                    renderBottomMenuView={() => {
                        return null
                    }}
                />
            </View>
        )
    }
}

function mapStateToProps(state) {
    return {}
}

function mapDispatchToProps(dispatch) {
    return {}
}

export default connect(mapStateToProps, mapDispatchToProps)(ScanerTransfer)