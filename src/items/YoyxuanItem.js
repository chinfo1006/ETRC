/**
 * Created by Tloy on 2018/3/15.
 */

"use strict"

import React, {Component} from 'react';
import {
    Text,
    View,
    Image,
    StyleSheet,
    ImageBackground,
    TouchableOpacity
} from 'react-native';
import PropTypes from 'prop-types'
import {baseUrl} from "../configs/Config";
import {HomeStyle} from "../styles";
import {width, unitWidth} from "../utils/AdapterUtilNew";

export default class YoyxuanItem extends Component {
    static propTypes = {
        item: PropTypes.object.isRequired,
        onPress: PropTypes.func
    }

    render() {
        return (
            <ImageBackground
                style={styles.yxItem}
                imageStyle={styles.yxItemImage}
                source={{uri: baseUrl + this.props.item.ImageUrl}}>
                <TouchableOpacity style={{flex: 1}}
                                  onPress={() => {
                                      this.props.onPress && this.props.onPress()
                                  }}>
                </TouchableOpacity>
                {/*<View style={HomeStyle.yxItemTextBg}>*/}
                {/*<Text>{homeData.CourseRankingList[0].Title}</Text>*/}
                {/*</View>*/}
            </ImageBackground>
        )
    }
}

const styles = StyleSheet.create({
    yxItem: {
        width: unitWidth * 220,
        height: unitWidth * 220,
        marginRight: unitWidth * 17,
    },
    yxItemImage: {
        width: unitWidth * 220,
        height: unitWidth * 220,
        resizeMode: 'stretch',
    },
    yxItemTextBg: {
        width: unitWidth * 200,
        height: unitWidth * 100,
        backgroundColor: '#ffff0066',
        alignItems: 'center',
        justifyContent: 'center'
    },
    yxItemText: {
        color: 'white',
        fontSize: unitWidth * 40
    },
})