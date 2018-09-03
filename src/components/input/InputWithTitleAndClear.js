/**
 *  Created by majunhui on 2017/9/25
 */

'use strict';

import React, { Component } from 'react';
import {
    View,
    Text,
    Image,
    StyleSheet,
    TextInput,
    TouchableOpacity, ViewPropTypes,

} from 'react-native';
import PropTypes from 'prop-types';
import Images from '../../images/index'
import { width, unitWidth } from "../../utils/AdapterUtil";
import * as Color from '../../configs/Color'

export default class InputWithTitleAndClear extends Component {
    constructor(props) {
        super(props)
        this.state = {
            text: '',
            showClean: false,
        }
    }

    static propTypes = {
        ...TextInput.propTypes,
        title: PropTypes.string.isRequired,
        onChangeText: PropTypes.func
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
            this.setState({ showClean: true })
        }
    }

    onBlur() {
        this.setState({ showClean: false })
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
                <Text style={InputWithClearStyle.title}>{this.props.title}</Text>
                <TextInput style={InputWithClearStyle.textInput}
                    underlineColorAndroid={'transparent'}
                    {...this.props}
                    onFocus={this.onFocus.bind(this)}
                    onBlur={this.onBlur.bind(this)}
                    value={this.state.text}
                    onChangeText={this.change.bind(this)} />
                {this.state.showClean ? (
                    <TouchableOpacity activeOpacity={1}
                        onPress={this.clean.bind(this)}>
                        <Image style={InputWithClearStyle.clear}
                            source={Images.public.ic_delete} />
                    </TouchableOpacity>
                ) : (null)}


            </View>
        )
    }
}

const InputWithClearStyle = StyleSheet.create({
    background: {
        width: width,
        height: unitWidth * 150,
        flexDirection: 'row',
        alignItems: 'center',
        backgroundColor: 'white',
        paddingLeft: unitWidth * 50,
        paddingRight: unitWidth * 50,

    },
    title: {
        color: 'black',
        fontSize: unitWidth * 45
    },
    textInput: {
        flex: 1,
        marginLeft: unitWidth * 40,
        textAlignVertical: 'center',
        fontSize: unitWidth * 45
    },
    clear: {
        width: unitWidth * 30,
        height: unitWidth * 30,
        resizeMode: 'contain',
        marginRight: unitWidth * 20,
    },
})
