import React, {Component} from "react";
import {
    View,
    Text
} from "react-native";
import ScrollableTabView, {DefaultTabBar} from "react-native-scrollable-tab-view";
import TitleBar from "../../components/titlebar/TitleBar";
import LessonOrder from "../lesson/LessonOrder";
import * as Color from "../../configs/Color";
import {GetFialdOrderCount} from "../../server/ServerApi";
import {unitWidth} from "../../utils/AdapterUtilNew";
import {BaseStyle} from "../../styles";

export default class LessonOrderTab extends Component {
    //  0、待审核;1、已完成；2、审核失败；-1、全部
    tabList = [
        {title: "购买成功", type: '1'},
        {title: "审核中", type: '0'},
        {title: "购买失败", type: '2'},
    ];
    state = {
        failedCount: 0
    }

    componentDidMount() {
        GetFialdOrderCount((res) => {
            this.setState({
                failedCount: res.count
            })
        })
    }

    render() {
        const {navigation} = this.props;
        return (
            <View style={BaseStyle.background}>
                <TitleBar title={"我的课程"} navigation={navigation}/>
                <View style={{flex: 1}}>
                    <ScrollableTabView
                        tabBarActiveTextColor={Color.themeColor}
                        tabBarUnderlineStyle={{backgroundColor: Color.themeColor}}
                        renderTabBar={() => <DefaultTabBar/>}
                        onChangeTab={({i, ref, from}) => {
                            if (i == 2) {
                                this.setState({failedCount: 0})
                            }
                        }}
                    >
                        {this.tabList.map((item, i) => {
                            return (
                                <LessonOrder
                                    key={i} style={{flex: 1}}
                                    tabLabel={item.title}
                                    type={item.type}
                                    navigation={navigation}
                                />)
                        })}
                    </ScrollableTabView>
                    {this.state.failedCount > 0 ? (
                        <View style={{
                            position: 'absolute',
                            top: unitWidth * 10,
                            right: unitWidth * 45,
                            width: unitWidth * 30,
                            height: unitWidth * 30,
                            borderRadius: unitWidth * 15,
                            backgroundColor: 'red',
                            alignItems: 'center',
                            justifyContent: 'center',
                        }}>
                            <Text style={{
                                fontSize: unitWidth * 20,
                                color: 'white'
                            }}>{this.state.failedCount}</Text>
                        </View>) : (null)}
                </View>
            </View>
        );
    }
}