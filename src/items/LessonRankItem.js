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
import {unitWidth} from "../utils/AdapterUtilNew";
import Images from '../images'

export default class LessonRankItem extends Component {
    static propTypes = {
        item: PropTypes.object.isRequired,
        index: PropTypes.number.isRequired,
        onPress: PropTypes.func
    }

    render() {
        return (
            <TouchableOpacity
                activeOpacity={1}
                style={styles.rank}
                onPress={() => {
                    this.props.onPress && this.props.onPress()
                }}>
                <Image style={styles.image}
                       source={{uri: baseUrl + this.props.item.ImageUrl}}/>
                <View style={styles.bottom}>
                    <Text
                        numberOfLines={1}
                        style={styles.text}>{this.props.item.Title}</Text>
                </View>
                <Image style={styles.ranking}
                       source={this.getImage(this.props.index)}/>
            </TouchableOpacity>
        )
    }

    getImage(index) {
        switch (index) {
            case 0:
                return Images.rank.icon_rank1
            case 1:
                return Images.rank.icon_rank2
            case 2:
                return Images.rank.icon_rank3
            case 3:
                return Images.rank.icon_rank4
            case 4:
                return Images.rank.icon_rank5
            case 5:
                return Images.rank.icon_rank6
            case 6:
                return Images.rank.icon_rank7
            case 7:
                return Images.rank.icon_rank8
            case 8:
                return Images.rank.icon_rank8
            case 9:
                return Images.rank.icon_rank10
            default:
                return Images.rank.icon_rank10
        }
    }
}

const styles = StyleSheet.create({
    rank: {
        width: unitWidth * 170,
        height: unitWidth * 200,
        borderStyle: "solid",
        borderWidth: unitWidth * 2,
        borderColor: "#bfbfbf",
        marginRight: unitWidth * 10
    },
    image: {
        width: unitWidth * 166,
        height: unitWidth * 150,
        resizeMode: 'stretch',
    },
    bottom: {
        flex: 1,
        backgroundColor: 'red',
        alignItems: 'center',
        justifyContent: 'center'
    },
    text: {
        color: 'white',
        fontSize: unitWidth * 25,
        width: unitWidth * 150,
        textAlign: 'center',
        backgroundColor: 'transparent'
    },
    ranking: {
        width: unitWidth * 55,
        height: unitWidth * 60,
        resizeMode: 'stretch',
        position: 'absolute',
        top: 0,
        left: unitWidth * 20
    },
})