/**
 *  Created by majunhui on 2017/10/13
 */

'use strict';
import React, {Component,} from 'react';
import PropTypes from 'prop-types';
import {
    StyleSheet,
    View,
    TextInput,
    TouchableOpacity,
    InteractionManager,
} from 'react-native';
import {checkPayPassword} from "../../utils/RegularUtil";
import {unitWidth} from "../../utils/AdapterUtil";

const itemBockWidth = unitWidth * 130
const itemmMrgin = unitWidth * 5
const iconWidth = unitWidth * 50
export default class ToCashPasswordInput extends Component {
    constructor(props) {
        super(props)
        this.onPress = this.onPress.bind(this)
    }

    static propTypes = {
        // style: View.propTypes.style,
        // itemStyle: View.propTypes.style,
        maxLength: TextInput.propTypes.maxLength.isRequired,
        onChange: PropTypes.func,
        onEnd: PropTypes.func,
        autoFocus: PropTypes.bool,
    };

    static defaultProps = {
        autoFocus: true,
        onChange: () => {
        },
        onEnd: (text) => {
        },
    };

    state = {
        text: ''
    };

    componentDidMount() {
        if (this.props.autoFocus) {
            InteractionManager.runAfterInteractions(() => {
                this.onPress();
            });
        }
    }

    render() {
        return (
            <TouchableOpacity
                onPress={this.onPress.bind(this)}
                activeOpacity={1}>
                <View style={[styles.container, this.props.style]}>
                    {this.renderInputItem()}
                    <TextInput
                        style={{
                            height: 35,
                            position: 'absolute',
                            width: itemBockWidth * this.props.maxLength,
                            opacity: 0
                        }}
                        caretHidden={true}
                        ref='textInput'
                        maxLength={this.props.maxLength}
                        autoFocus={this.props.autoFocus}
                        value={this.state.text}
                        keyboardType="numeric"
                        onChangeText={(text) => {
                            if (!checkPayPassword(text)) return   // 输入的不是数字则忽略
                            this.setState({text});
                            this.props.onChange(text);
                            if (text.length === this.props.maxLength) {
                                this.props.onEnd(text);
                            }
                        }}/>
                </View>
            </TouchableOpacity>
        )

    }

    renderInputItem() {
        let inputItem = [];
        let {text} = this.state;
        for (let i = 0; i < parseInt(this.props.maxLength); i++) {
            inputItem.push(
                <View key={i} style={[styles.inputItem, this.props.itemStyle]}>
                    {i < text.length ? <View style={[styles.iconStyle, this.props.iconStyle]}/> : null}
                </View>)
        }
        return inputItem;
    }

    onPress() {
        this.refs.textInput.focus();
    }
}

const styles = StyleSheet.create({
    container: {
        alignItems: 'center',
        flexDirection: 'row',
        backgroundColor: '#fff'
    },
    inputItem: {
        height: itemBockWidth,
        width: itemBockWidth,
        justifyContent: 'center',
        alignItems: 'center',
        marginLeft: itemmMrgin,
        marginRight: itemmMrgin,
        borderWidth: 1,
        borderColor: '#ccc',
    },
    iconStyle: {
        width: iconWidth,
        height: iconWidth,
        backgroundColor: '#222',
        borderRadius: iconWidth / 2,
    },
});