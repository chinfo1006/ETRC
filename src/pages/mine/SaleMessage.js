'use strict';

import React, {Component} from 'react';
import {
    Text,
    View,
    Image,
    TouchableOpacity,
    ScrollView,
    StyleSheet,
    FlatList,
} from 'react-native';

export default class SaleMessage extends Component {

    //构造器
    constructor(props) {
        //调用父类方法
        super(props);
        //刷新状态
        this.state = {}
    }

    //必须实现render
    render() {
        const {navigation} = this.props;
        return (
            <View>
                <Text>{navigation.state.params.name}</Text>
            </View>
        )
    }
}


const styles = StyleSheet.create({
    container: {
        flex: 1,
    },

})
