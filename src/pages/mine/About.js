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
import Images from '../../images'
import {unitWidth} from '../../utils/AdapterUtilNew';
import {BaseStyle,} from '../../styles'
import RouteConfig from "../../configs/RouteConfig";
import TitleBar from "../../components/titlebar/TitleBar";
import WhiteSpace from "../../components/whitespace/WhiteSpace";
import {getJson} from '../../server/Request';
import * as ApiUrl from '../../server/ApiUrl';
import ListItem from "../../components/ListItem";
import * as Color from '../../configs/Color'
import {Version} from "../../configs/Config";

/**
 * 关于我们
 */
export default class About extends Component {

    constructor(props) {
        super(props);
        this.state = {
            verNo: '',
        };
    }

    componentDidMount() {
        getJson(ApiUrl.GetVersionsInfo,
            (response) => {
                this.setState({
                    verNo: response.verNo,
                })
            }, (error) => {
            }
        )
    }

    /**
     * 渲染视图
     */
    render() {
        const {navigation} = this.props;
        return (
            <View style={BaseStyle.backgroundAlignCenter}>
                <TitleBar title={'关于ETRC'} navigation={navigation}/>
                <WhiteSpace size={60}/>
                <Image source={Images.public.logo}
                       style={{width: unitWidth * 150, height: unitWidth * 150, borderRadius: unitWidth * 15}}/>
                <WhiteSpace size={10}/>
                <Text style={{color: '#333333'}}>版本号{Version}</Text>
                <WhiteSpace size={60}/>
                <ListItem title={"检查更新"} text={"已是最新版本"} noArrow={true}/>
                {/*<View style={{height: unitWidth * 2, backgroundColor: Color.baseBackground}}/>*/}
                {/*<ListItem title={"服务协议"} onPress={() => {*/}
                    {/*navigation.navigate(RouteConfig.RegisterWebViewPage.name)*/}
                {/*}}/>*/}
                {/*<View style={{height: unitWidth * 2, backgroundColor: Color.baseBackground}}/>*/}
                {/*<ListItem title={"关于我们"} onPress={() => {*/}
                    {/*navigation.navigate(RouteConfig.AboutWebViewPage.name)*/}
                {/*}}/>*/}
            </View>
        )
    }
}




