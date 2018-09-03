/**
 * Created by Tloy on 2018/6/28.
 */

'use strict';
import React, {Component} from 'react';
import {
    View,
    Text,
    Image,
    StyleSheet,
    TouchableOpacity
} from 'react-native';
import PropTypes from 'prop-types'
import Modal from 'react-native-modalbox'
import {width, unitWidth,} from "../utils/AdapterUtilNew";

export default class ConfirmModal extends Component {
    constructor(props) {
        super(props)
    }

    static propTypes = {
        title: PropTypes.string.isRequired,
        onPressConfirm: PropTypes.func.isRequired,
        onPressCancel: PropTypes.func,
        confirmBtText: PropTypes.string,
        cancelBtText: PropTypes.string,
    }

    static defaultProps = {
        confirmBtText: "确定",
        cancelBtText: "取消",
        onPressConfirm: () => {
        },
        onPressCancel: () => {
        }
    }

    open() {
        this.refs.ConfirmModal.open()
    }

    close() {
        this.refs.ConfirmModal.close()
    }

    render() {
        return (
            <Modal
                style={styles.modal}
                ref={"ConfirmModal"}
                position="center"
                backButtonClose={true}
                swipeToClose={false}>
                <Text style={styles.text}>{this.props.title}</Text>
                <View style={styles.selectView}>
                    <TouchableOpacity
                        style={styles.closeBt}
                        activeOpacity={1}
                        onPress={() => {
                            this.props.onPressCancel();
                            this.close()
                        }}>
                        <Text style={styles.btText}>{this.props.cancelBtText}</Text>
                    </TouchableOpacity>
                    <TouchableOpacity
                        style={[styles.closeBt, {backgroundColor: 'red'}]}
                        activeOpacity={1}
                        onPress={() => {
                            this.props.onPressConfirm();
                            this.close()
                        }}>
                        <Text style={styles.btText}>{this.props.confirmBtText}</Text>
                    </TouchableOpacity>
                </View>
            </Modal>
        )
    }
}

const styles = StyleSheet.create({
    modal: {
        width: unitWidth * 560,
        height: unitWidth * 350,
        backgroundColor: 'white',
        alignItems: 'center',
        paddingHorizontal: unitWidth * 30,
        borderRadius: 5,
    },
    text: {
        marginTop: 30,
        color: '#333333',
        fontSize: unitWidth * 32,
        width: unitWidth * 520,
    },

    selectView: {
        flexDirection: 'row',
        // 设置绝对定位
        position: 'absolute',
        bottom: unitWidth * 40,
        left: unitWidth * 20,
        alignItems: 'center',
        width: unitWidth * 500,
        justifyContent: 'space-around',
    },


    closeBt: {
        width: unitWidth * 150,
        height: unitWidth * 60,
        backgroundColor: '#a0a0a0',
        borderRadius: 4,
        alignItems: 'center',
        justifyContent: 'center'
    },
    btText: {
        color: 'white',
        fontSize: unitWidth * 30,
    },
})

