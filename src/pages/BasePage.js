/**
 * Created by Tloy on 2018/1/28.
 */

/**
 * 所有的页面继承BasePage.对navigation做全局保存.
 * 以便进行全局页面操作
 */

'use strict';

import React, {Component} from 'react';
import {connect} from 'react-redux'
import {NavigationActions} from 'react-navigation';

export default class BasePage extends Component {
    constructor(props) {
        super(props)
    }
}