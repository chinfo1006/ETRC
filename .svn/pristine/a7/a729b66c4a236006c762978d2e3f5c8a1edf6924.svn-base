/**
 * Created by Tloy on 2018/2/1.
 */

'use strict';

import React, {Component} from 'react';
import {
    Text,
    View,
    Image,
    StyleSheet
} from 'react-native';
import {unitWidth, width} from "../utils/AdapterUtil";
import PropTypes from 'prop-types'
import Images from '../images'
import * as Color from '../configs/Color'

export default class ShareRecordListItem extends Component {

    static propTypes = {
        item: PropTypes.object.isRequired,
        source:PropTypes.string,
    }

    render() {
        return (
            <View style={styles.background}>
                <Image
                    style={styles.image}
                    source={Images.public.logo}/>
                <View>
                    <Text>{this.props.item.PhoneNumber}</Text>
                    <Text>{this.props.item.CreateDate ? this.props.item.CreateDate.split(".")[0].replace("T", " ") : ''}</Text>
                </View>

                {/* <View style={styles.business}>
                     <Text style={styles.businessText}>商家</Text> 
                </View> */}
                
            </View>
        )
    }
}

const styles = StyleSheet.create({
    background: {
        width: width,
        height: unitWidth * 260,
        backgroundColor: 'white',
        paddingLeft: unitWidth * 295,
        alignItems: 'center',
        flexDirection: 'row',
    },
    image: {
        width: unitWidth * 180,
        height: unitWidth * 180,
        position: 'absolute',
        top: unitWidth * 35,
        left: unitWidth * 85,
    },
    business: {
        backgroundColor: "#e6001266",
        width: unitWidth * 165,
        height: unitWidth * 63,
        alignItems: 'center',
        justifyContent: 'center',
        position: 'absolute',
        top: unitWidth * 35,
        right: unitWidth * 85,
        borderRadius:unitWidth*10
    },
    businessText: {
        color: 'white',
        fontSize: unitWidth * 40,
    }
})