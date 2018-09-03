/**
 * Created by Tloy on 2018/1/16.
 */

'use strict';

import React, {Component} from 'react'
import {View, Text, StyleSheet} from 'react-native'
import PropTypes from 'prop-types';
import {width, unitWidth} from "../../utils/AdapterUtil";
import * as Color from '../../configs/Color'

const textSize = unitWidth * 45,
    lineLength = unitWidth * 330,
    stepSize = unitWidth * 80

export default class VerifyStepView extends Component {

    constructor(props) {
        super(props)
        this.left = this.props.steps[0].length * textSize / 2 - stepSize / 2
        this.right = this.props.steps[this.props.steps.length - 1].length * textSize / 2 - stepSize / 2
        this.width = (stepSize + lineLength) * this.props.steps.length - lineLength + this.left + this.right
    }

    static propTypes = {
        steps: PropTypes.array.isRequired,
        // 当前第几步
        step: PropTypes.number.isRequired,
    }


    render() {
        return (
            <View style={styles.bg}>
                <View style={[styles.row, {
                    width: this.width,
                    paddingLeft: this.left,
                    // paddingRight: this.right,
                    // backgroundColor: 'gray',
                    marginBottom: unitWidth * 10
                }]}>
                    {this.renderStep()}
                </View>
                <View style={[styles.row, {width: this.width}]}>
                    {this.renderStepBottom()}
                </View>
            </View>
        )
    }

    renderStep() {
        let stepViews = []
        for (let i = 0; i < this.props.steps.length; i++) {
            stepViews.push(
                <View key={"step" + i}
                      style={this.props.step == i ? styles.stepCurrent : styles.step}>
                    <Text style={this.props.step == i ? styles.stepIndexCurrent : styles.stepIndex}>{i + 1}</Text>
                </View>
            )
            if (i != this.props.steps.length - 1) {
                stepViews.push(
                    <View key={"line" + i} style={styles.line}></View>
                )
            }
        }
        return stepViews
    }

    renderStepBottom() {
        let stepBottomViews = []
        for (let i = 0; i < this.props.steps.length; i++) {
            stepBottomViews.push(
                <Text key={"text" + i}
                      style={this.props.step == i ? styles.textCurrent : styles.text}
                >{this.props.steps[i]}</Text>
            )
            if (i != this.props.steps.length - 1) {
                stepBottomViews.push(
                    <View key={"empty" + i} style={{flex: 1}}/>
                )
            }
        }
        return stepBottomViews
    }
}

const styles = StyleSheet.create({
    bg: {
        width: width,
        paddingTop: unitWidth * 40,
        paddingBottom: unitWidth * 40,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: 'white'
    },
    row: {
        alignItems: 'center',
        flexDirection: 'row',
        // backgroundColor:'blue'
    },
    step: {
        width: stepSize,
        height: stepSize,
        borderRadius: stepSize / 2,
        borderWidth: unitWidth * 3,
        borderColor: Color.themeColor,
        alignItems: 'center',
        justifyContent: 'center',
    },
    stepCurrent: {
        width: stepSize,
        height: stepSize,
        borderRadius: stepSize / 2,
        backgroundColor: Color.themeColor,
        alignItems: 'center',
        justifyContent: 'center',
    },
    stepIndex: {
        color: Color.themeColor,
        fontSize: unitWidth * 50,
    },
    stepIndexCurrent: {
        color: 'white',
        fontSize: unitWidth * 50,
    },
    line: {
        width: lineLength,
        height: unitWidth * 3,
        backgroundColor: Color.themeColor
    },
    text: {
        color: 'black',
        fontSize: textSize
    },
    textCurrent: {
        color: Color.themeColor,
        fontSize: textSize
    }
})