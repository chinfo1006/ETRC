import React, {Component} from "react";
import {
    View,
    FlatList,
} from "react-native";
import RouteConfig from "../../configs/RouteConfig";
import {StudyTabAllPageStyle} from "../../styles/index";
import WhiteSpace from '../../components/whitespace/WhiteSpace'
import {GetProductListByTypeId} from "../../server/ServerApi";
import LessonItem from "../../items/LessonItem";
import NoData from "../../components/NoData";

/**
 * 课程分类列表
 */
export default class LessonTypeList extends Component {
    constructor(props) {
        super(props)
    }

    pageIndex = 1
    hadMore = true

    state = {
        pageIndex: 1,
        list: [],
        freshing: false
    }

    componentDidMount() {
        this.queryDate()
    };

    queryDate() {
        let params = {
            pageIndex: this.pageIndex,
            typeId: this.props.typeId,
        };
        GetProductListByTypeId(params, (res) => {
            this.hadMore = res.datas.length != 0
            if (params.pageIndex == 1) {
                this.pageIndex = 2
                this.setState({
                    list: res.datas,
                    freshing: false,
                })
            } else {
                let oldList = this.state.list
                this.pageIndex = this.pageIndex + 1,
                    this.setState({
                        list: oldList.concat(res.datas),
                        freshing: false
                    })
            }
        })
    }

    onRefresh() {
        this.pageIndex = 1
        this.queryDate()
    };

    loadMoreData() {
        if (this.pageIndex != 1 && this.hadMore) {
            this.queryDate()
        }
    }

    render() {
        return (
            <View style={StudyTabAllPageStyle.container}>
                <WhiteSpace size={20}/>
                <FlatList
                    data={this.state.list}
                    keyExtractor={(item, index) => "list" + index}
                    refreshing={this.state.freshing}
                    onRefresh={this.onRefresh.bind(this)}
                    onEndReached={() => {
                        this.loadMoreData();
                    }}
                    numColumns={2}
                    ListEmptyComponent={<NoData/>}
                    renderItem={({item, index}) => {
                        return (
                            <LessonItem
                                item={item}
                                IsPayment={this.props.IsPayment}
                                onPress={() => {
                                    this.props.navigation.navigate(RouteConfig.LessonDetail.name, {'id': item.Id});
                                }}/>
                        )
                    }}/>
            </View>
        );
    }
}