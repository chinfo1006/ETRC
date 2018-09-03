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
// import {baseHost} from '../server/ApiUrl'
import {width, unitWidth} from "../utils/AdapterUtilNew";
import PropTypes from 'prop-types'

export default class ToCrashMenuModal extends Component {
    constructor(props) {
        super(props);
    }

    static propTypes = {
        pressMenu: PropTypes.func.isRequired,
    }


    open() {
        this.refs.ToCrashMenuModal.open()
    }

    closeModal() {
        this.refs.ToCrashMenuModal.close()
    }

    render() {
        return (
            <Modal
                style={styles.modal}
                ref={"ToCrashMenuModal"}
                position="bottom"
                backButtonClose={true}
                swipeToClose={false}>
                <View style={styles.modalBg}>
                    <TouchableOpacity
                        style={styles.menuItem} activeOpacity={1}
                        onPress={() => {
                            this.closeModal()
                            this.props.pressMenu()
                        }}>
                        <Text style={styles.menuText}>兑换记录</Text>
                    </TouchableOpacity>
                    <View style={styles.menuLine}/>
                    <TouchableOpacity
                        style={styles.menuItem} activeOpacity={1}
                        onPress={() => {
                            this.closeModal()
                        }}>
                        <Text style={styles.menuText}>取消</Text>
                    </TouchableOpacity>
                </View>
            </Modal>
        );
    }
}

const styles = StyleSheet.create({
    modal: {
        width: width,
        // height: unitWidth * 550,
        backgroundColor: '#00000000',
        justifyContent: 'flex-end'
    },
    modalBg: {
        width: width,
        backgroundColor: 'white',
    },
    menuItem: {
        width: width,
        height: unitWidth * 100,
        backgroundColor: "#ffffff",
        alignItems: 'center',
        justifyContent: 'center'
    },
    menuLine: {
        width: width,
        height: StyleSheet.hairlineWidth * 2,
        backgroundColor: "#bfbfbf"
    },
    menuText: {
        fontSize: unitWidth * 32,
        color: "#666666"
    },
})