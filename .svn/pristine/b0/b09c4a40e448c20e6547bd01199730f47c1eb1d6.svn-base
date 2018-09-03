/**
 *  Created by majunhui on 2017/9/23
 */


'use strict';

import React, {Component} from 'react';
import PropTypes from 'prop-types';
import {
    View,
    Text,
    StyleSheet
} from 'react-native';
import {width, unitWidth} from "../utils/AdapterUtilNew";
import FamilyNames from '../json/FamilyNames'
import GivenNames from '../json/GivenNames'
import {HomeStyle} from "../styles";
import {getDate, getTimefromDate} from "../utils/DateUtil";

export default class AdView extends Component {
    constructor(props) {
        super(props)
        this.state = {
            isShowNew: false,
            userName: '',
            lesson: ''
        }
    }

    static propTypes = {
        list: PropTypes.array.isRequired,
    }

    componentDidMount() {
        // this.getRandom()
    }

    getRandom() {
        if (this.props.list.length > 0) {  //课程列表中有数据
            const time = Math.ceil(Math.random() * 100000)   //  随机弹出时间 0-100秒钟弹出一次
            const familyNameIndex = Math.ceil(Math.random() * 1000) % FamilyNames.length  //随机抽取姓氏
            const givenNameIndex = Math.ceil(Math.random() * 1000) % GivenNames.length   //随机抽取名字
            const name = `${FamilyNames[familyNameIndex]}*${GivenNames[givenNameIndex]}`
            const lessonIndex = Math.ceil(Math.random() * 100) % this.props.list.length //随机从课程列表中抽取课程
            const lessonName = this.props.list[lessonIndex].Title
            setTimeout(() => {
                this.setState({
                    isShowNew: true,
                    userName: name,
                    lesson: lessonName
                })

                // 弹出显示5秒后消失，并获取下次弹出数据
                setTimeout(() => {
                    this.setState({
                        isShowNew: false,
                    })
                    this.getRandom()
                }, 5000)
            }, time)
        } else {  //课程列表中无数据，10秒钟内随机再次进入循环
            const nextTime = Math.ceil(Math.random() * 10000)
            setTimeout(() => {
                this.getRandom()
            }, nextTime)
        }
    }

    render() {
        if (this.state.isShowNew) {
            return (
                <View style={styles.block}>
                    <Text
                        style={styles.text}
                        numberOfLines={1}
                    >刚刚{getTimefromDate(getDate(0, "2"))}用户{this.state.userName}购买了《{this.state.lesson}》</Text>
                </View>
            )
        } else {
            return null
        }
    }
}

const styles = StyleSheet.create({
    block: {
        position: 'absolute',
        bottom: 0,
        left: unitWidth * 10,
        width: unitWidth * 614,
        height: unitWidth * 60,
        // opacity: unitWidth * 0.9,
        borderRadius: unitWidth * 30,
        backgroundColor: "#888888dd",
        alignItems: 'center',
        justifyContent: 'center'
    },
    text: {
        width: unitWidth * 500,
        fontSize: unitWidth * 24,
        color: "#ff4d00"
    },
})