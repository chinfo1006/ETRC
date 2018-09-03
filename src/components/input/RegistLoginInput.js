/**
 * Created by Tloy on 2018/3/20.
 */


"use strict";
import React, {Component} from 'react';
import {
    View,
    Text,
    Image,
    StyleSheet,
    TextInput,
    TouchableOpacity,
} from 'react-native';
import {width, unitWidth} from "../../utils/AdapterUtilNew";
import PropTypes from 'prop-types'
import Images from "../../images";
import GetSMSButton from "../button/GetSMSButton";

export class RegistLoginInput extends Component {
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

    componentDidMount() {
        this.setState({
            text: this.props.defaulValue,
        })
        this.props.onChangeText(this.props.defaulValue)
    }


    render() {
        return (
            <View style={styles.background}>
                <Image style={styles.icon}
                      source={this.props.icon}/>
                <TextInput
                    style={styles.textInput}
                    underlineColorAndroid={'transparent'}
                    {...this.props}
                    onFocus={this.onFocus.bind(this)}
                    onBlur={this.onBlur.bind(this)}
                    value={this.state.text}
                    onChangeText={this.change.bind(this)}/>
                {this.state.showClean ? (
                    <TouchableOpacity activeOpacity={1}
                                      onPress={this.clean.bind(this)}>
                        <Image style={styles.clear}
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

const styles = StyleSheet.create({
    background: {
        width: unitWidth * 650,
        height: unitWidth * 120,
        flexDirection: 'row',
        alignItems: 'center',
        borderBottomColor: "#929090",
        borderBottomWidth: StyleSheet.hairlineWidth * 2,
    },
    icon: {
        width: unitWidth * 51,
        height: unitWidth * 48,
        marginLeft: unitWidth * 10,
        marginRight: unitWidth * 25,
        resizeMode: 'contain'
    },
    textInput: {
        flex: 1,
        textAlignVertical: 'center',
        marginTop: unitWidth * 5,
    },
    clear: {
        width: unitWidth * 30,
        height: unitWidth * 30,
        resizeMode: 'contain',
        marginRight: unitWidth * 10,
    },
})