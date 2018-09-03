import React, {Component} from "react";
import {
    View,
    Text
} from "react-native";
import ScrollableTabView, {DefaultTabBar} from "react-native-scrollable-tab-view";
import TitleBar from "../../components/titlebar/TitleBar";
import * as Color from "../../configs/Color";
import {BaseStyle} from "../../styles";
import LessonTypeList from "../lesson/LessonTypeList";
import {connect} from "react-redux";
import * as LessonTabAction from "../../actions/LessonTabAction";

class LessonTab extends Component {

    componentDidMount() {
        this.props.queryLessonType()
    }

    render() {
        const {navigation, typeList, IsPayment} = this.props
        let index = 0
        if (navigation.state.params && navigation.state.params.index) {
            index = navigation.state.params.index
        }
        return (
            <View style={BaseStyle.background}>
                <TitleBar title={"全部课程"} navigation={navigation}/>
                <View style={{flex: 1}}>
                    <ScrollableTabView
                        initialPage={index}
                        tabBarActiveTextColor={Color.themeColor}
                        tabBarUnderlineStyle={{backgroundColor: Color.themeColor}}
                        renderTabBar={() => <DefaultTabBar/>}
                    >
                        {typeList.map((item, i) => {
                            return (
                                <LessonTypeList
                                    key={i} style={{flex: 1}}
                                    tabLabel={item.TypeName}
                                    typeId={item.Id}
                                    IsPayment={IsPayment}
                                    navigation={navigation}
                                />
                            )
                        })}
                    </ScrollableTabView>
                </View>
            </View>
        );
    }
}

/**
 * 把state绑定到props,在props中获取数据
 */
function mapStateToProps(state) {
    return {
        ...state.iosReviewReducer,
        ...state.lessonTabReducer
    }
}

/**
 * 把dispatch绑定到props  可以直接调用对应的方法执行dispatch
 */
function mapDispatchToProps(dispatch) {
    return {
        queryLessonType: () => dispatch(LessonTabAction.queryLessonType())
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(LessonTab);