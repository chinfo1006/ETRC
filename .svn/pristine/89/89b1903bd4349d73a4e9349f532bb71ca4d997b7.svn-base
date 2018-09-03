/**
 *  Created by majunhui on 2017/9/25
 */


'use strict';

import React, {Component} from 'react';
import {
    View,
    Text,
    Image,
    StyleSheet,
    TextInput,
    TouchableOpacity, ViewPropTypes
} from 'react-native';
import PropTypes from 'prop-types'
import Images from '../../images/index'
import {width, unitWidth} from "../../utils/AdapterUtil";
import * as Color from '../../configs/Color'
import {toast} from "../../utils/LogUtil";
import GetSMSButton from "../button/GetSMSButton";

export default class InputWithClearNumber extends Component {
    constructor(props) {
        super(props)
        this.state = {
            text: '',
            showClean: false,
        }
    }

    static propTypes = {
        ...TextInput.propTypes,
        icon: Image.propTypes.source,
        getSmsButton: PropTypes.bool,
        mobile: PropTypes.string,
        smsType: PropTypes.string
    }

    static defaultPropTypes = {
        onChangeText: () => {
        },
        getSmsButton: false,
        mobile: "1",
        smsType: "1"
    }


    onFocus() {
        if (this.state.text) {
            this.setState({showClean: true})
        }
    }

    onBlur() {
        this.setState({showClean: false})
    }

    clean() {
        this.setState({
            text: '',
            showClean: false
        })
        this.props.onChangeText('')
    }

    change(text) {
        this.setState({
            text: text,
            showClean: text
        })
        this.props.onChangeText(text)
    }

    render() {
        return (
            <View style={InputWithClearStyle.background}>
                <Image style={InputWithClearStyle.icon}
                       source={this.props.icon}/>
                <TextInput style={InputWithClearStyle.textInput}
                           underlineColorAndroid={'transparent'}
                           {...this.props}
                           onFocus={this.onFocus.bind(this)}
                           onBlur={this.onBlur.bind(this)}
                           value={this.state.text}
                          
                           onChangeText={this.change.bind(this)}/>
                {this.state.showClean ? (
                    <TouchableOpacity activeOpacity={1}
                                      onPress={this.clean.bind(this)}>
                        <Image style={InputWithClearStyle.clear}
                               source={Images.public.ic_delete}/>
                    </TouchableOpacity>
                ) : (null)}
                {this.props.getSmsButton ? (
                    <GetSMSButton mobile={this.props.mobile} smsType={this.props.smsType}/>
                ) : (null)}
            </View>
        )
    }
}

const InputWithClearStyle = StyleSheet.create({
    background: {
        borderBottomColor: '#dfdfdf',
        width: width - unitWidth * 200,
        height: unitWidth * 150,
        borderRadius: unitWidth * 100,
        flexDirection: 'row',
        alignItems: 'center',
        backgroundColor: 'white',
        paddingLeft: unitWidth * 50,
        paddingRight: unitWidth * 50
    },
    icon: {
        width: unitWidth * 80,
        height: unitWidth * 80,
        resizeMode: 'stretch',
        // backgroundColor: 'red'
    },
    textInput: {
        flex: 1,
        paddingLeft: unitWidth * 20,
        // backgroundColor: 'blue',
        textAlignVertical: 'center',
        marginTop: unitWidth * 20,
        // paddingTop:unitWidth*10,
        // backgroundColor: 'blue'
    },
    clear: {
        width: unitWidth * 60,
        height: unitWidth * 60,
        resizeMode: 'contain',
        marginRight: unitWidth * 20,
    },
})
