/**
 *  Created by majunhui on 2017/9/23
 */


'use strict';

import React, {Component} from 'react';
import PropTypes from 'prop-types';
import {
    View,
} from 'react-native';
import {width, unitWidth} from "../../utils/AdapterUtil";

export default class WhiteSpace extends Component {

    static propTypes = {
        horizontal: PropTypes.bool,
        size: PropTypes.number.isRequired,
        backgroundColor: PropTypes.string,
    }

    render() {
        return (
            <View style={{
                backgroundColor: this.props.backgroundColor ? this.props.backgroundColor : 'transparent',
                width: this.props.horizontal ? unitWidth * this.props.size : 0,
                height: this.props.horizontal ? 0 : unitWidth * this.props.size
            }}/>
        )
    }
}