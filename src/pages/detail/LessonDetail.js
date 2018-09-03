import React, {Component} from "react";
import {
    AppRegistry,
    StyleSheet,
    Text,
    Button,
    View,
    Image,
    FlatList,
    TouchableOpacity,
    AsyncStorage,
    ImageBackground,
    WebView,
    Platform
} from "react-native";
import {connect} from "react-redux";
import * as LessonDetailAction from "../../actions/LessonDetailAction";
import TitleBar from "../../components/titlebar/TitleBar";
import * as Color from "../../configs/Color";
import {baseUrl} from "../../configs/Config";
import RouteConfig from "../../configs/RouteConfig";
import WheelViewModal from '../../modals/WheelViewModal';
import Images from "../../images";
import {StudyDetailStyle,} from "../../styles";
import {concatUrl} from "../../utils/UrlUtil";
import WhiteSpace from "../../components/whitespace/WhiteSpace";

/**
 * 教程详情页面
 */
class LessonDetail extends Component {

    componentDidMount() {
        const {navigation} = this.props;
        let detailParams = {
            id: navigation.state.params.id,
        };
        this.props.getProductDetail(detailParams);
    };

    render() {
        const {navigation, detailInfo, IsPayment, price} = this.props;
        return (
            <View style={StudyDetailStyle.container}>
                <TitleBar title={detailInfo.ProductName} navigation={navigation}/>
                {this.renderBackgroundImg()}
                <View style={StudyDetailStyle.lineCenterRowStyle}>
                    <View style={StudyDetailStyle.lineCenterRowLeftStyle}>
                        <Text style={{color: Color.sixsixsixColor}}>
                            阅读:{detailInfo.BrowseNum}
                        </Text>
                    </View>
                    <View style={StudyDetailStyle.lineCenterRowCenterStyle}>
                        {/*{Platform.OS == "android" || IsPayment ? (*/}
                            {/*<Text style={StudyDetailStyle.lineCenterRowCenterTextStyle}>*/}
                                {/*已购买:{detailInfo.BuyNum}*/}
                            {/*</Text>*/}
                        {/*) : (null)}*/}
                    </View>
                </View>
                <WhiteSpace size={10}/>
                <View style={StudyDetailStyle.detailTitle}>
                    <Text style={StudyDetailStyle.studyIntroduceTextStyle}>课程介绍</Text>
                </View>
                <WebView
                    ref="webview"
                    style={{flex: 1, backgroundColor: 'white', borderBottomColor: 'blue', borderBottomWidth: 10}}
                    source={{uri: concatUrl(detailInfo.productUrl)}}
                    // automaticallyAdjustContentInsets={true}
                    // renderLoading={this.renderLoading}
                    // javaScriptEnabled={true}
                    // domStorageEnabled={true}
                    // startInLoadingState={false}
                    // scalesPageToFit={true}
                    showsHorizontalScrollIndicator={false}
                    showsVerticalScrollIndicator={false}
                />
                <WhiteSpace size={10}/>
                {Platform.OS == "android" || IsPayment ? (
                    <View style={StudyDetailStyle.bottomContainerStyle}>
                        <View style={StudyDetailStyle.bottomLeftContainerStyle}>
                            <Text style={StudyDetailStyle.bottomLeftContainerText1Style}>
                                ￥{detailInfo.ProductPrice}
                            </Text>
                            <Text numberOfLines={1} style={StudyDetailStyle.bottomLeftContainerText2Style}>
                                (赠送{(detailInfo.ProductPrice / price).toFixed(4)}ETRC)
                            </Text>
                        </View>

                        <TouchableOpacity
                            style={detailInfo.IsDelete == 1 ? StudyDetailStyle.bottomRightGray : StudyDetailStyle.bottomRightContainerStyle}
                            onPress={() => {
                                //课程已下架
                                if (detailInfo.IsDelete == 1) return
                                if (global.token) {
                                    this.pushOrderModal.open();
                                } else {
                                    navigation.navigate(RouteConfig.RegistAndLogin.name)
                                }
                            }}
                        >
                            <View>
                                <Text
                                    style={StudyDetailStyle.bottomRightContainerTextStyle}>{detailInfo.IsDelete == 1 ? "课程已下架" : "参与教程"}</Text>
                            </View>
                        </TouchableOpacity>
                    </View>
                ) : (null)}
                <WheelViewModal
                    ref={(ref) => {
                        this.pushOrderModal = ref
                    }}
                    onPress={(val) => {
                        navigation.navigate(RouteConfig.LessonPay.name, {number: val})
                    }}
                />
            </View>
        );
    }

    renderBackgroundImg = () => {
        const {detailInfo} = this.props;
        if (!detailInfo.imgUrl) {
            return (
                <ImageBackground
                    style={StudyDetailStyle.backgroundImgContainer}
                    source={Images.public.logo}
                >
                    <Image
                        source={Images.study.study_play}
                        style={StudyDetailStyle.backgroundImgStyle}
                    />
                </ImageBackground>
            );
        }
        return (
            <ImageBackground
                style={StudyDetailStyle.backgroundImgContainer}
                source={{uri: baseUrl + detailInfo.imgUrl}}
            >
                <Image
                    source={Images.study.study_play}
                    style={StudyDetailStyle.backgroundImgStyle}
                />
            </ImageBackground>
        );
    };
}

/**
 * 把state绑定到props,在props中获取数据
 */
function mapStateToProps(state) {
    return {
        ...state.LessonDetailReducer,
        ...state.iosReviewReducer,
        ...state.homeReducer
    };
}

/**
 * 把dispatch绑定到props  可以直接调用对应的方法执行dispatch
 */
function mapDispatchToProps(dispatch) {
    return {
        getProductDetail: params => dispatch(LessonDetailAction.queryLessonDetail(params)),
    };
}

export default connect(mapStateToProps, mapDispatchToProps)(LessonDetail);
