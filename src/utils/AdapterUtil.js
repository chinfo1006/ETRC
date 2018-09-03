/**
 *  Created by Tloy on 2018/1/2.
 *
 *  屏幕适配,根据UI设计图和手机的屏幕大小按照百分比的方式进行取值
 */

"use strict"

import {Dimensions, StatusBar, Platform} from 'react-native'
import {getStatusBarHeight} from './AdapterUtilNew'

//UI设计图的宽度
const designWidth = 1242
//UI设计图的高度
const designHeight = 2208

//手机屏幕的宽度
export const width = Dimensions.get('window').width;
//手机屏幕的高度
export const height = Dimensions.get('window').height;
//计算手机屏幕宽度对应设计图宽度的单位宽度
export const unitWidth = width / designWidth
//计算手机屏幕高度对应设计图高度的单位高度
export const unitHeight = height / designHeight
//状态栏的高度
export const statusBarHeight = getStatusBarHeight();
//标题栏的高度
export const titleHeight = unitWidth * 150;

// 普通字体
export const textSizeNormal = unitWidth * 35
export const textSizeSmall = unitWidth * 30
export const textSizebig = unitWidth * 60
export const textSize18 = unitWidth * 18
