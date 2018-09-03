import {StyleSheet} from "react-native";
import * as Color from "../configs/Color";
import {width, unitWidth, textSize24,titleHeight} from "../utils/AdapterUtilNew";

export default StudyStyle = StyleSheet.create({
    titleViewContainer: {
        width: width,
        height: titleHeight,
        backgroundColor: Color.themeColor
    },
    searchBar: {
        flexDirection: 'row',
        width: unitWidth * 650,
        height: unitWidth * 70,
        borderRadius: unitWidth * 35,
        backgroundColor: "rgba(255, 255, 255, 0.6)",
        // borderStyle: "solid",
        // borderWidth: unitWidth * 1,
        // borderColor: "rgba(166, 166, 166, 0.6)",
        alignItems: 'center',
        paddingLeft: unitWidth * 50,
        paddingRight: unitWidth * 50
    },
    searchBarIcon: {
        width: unitWidth * 50,
        height: unitWidth * 50,
        resizeMode: 'stretch',
        marginRight: unitWidth * 40
    },
    searchBarInput: {
        width: unitWidth * 460,
        fontSize: unitWidth * 30,
        backgroundColor: 'transparent',
        paddingTop: 0,
        paddingBottom: 0,
    },
    moreViewStyle: {
        width: unitWidth * 180,
        height: unitWidth * 106,
        justifyContent: "center",
        alignItems: 'flex-end',
    },
    newsMore: {
        backgroundColor: "transparent",
        color: "white",
        textAlign: "center",
    },
    bannerViewContainer: {},
    bannerImage: {
        width: width,
        height: unitWidth * 300,
    },
    typeContainer: {
        flexDirection: "row",
        width: width,
        height: unitWidth * 200,
        backgroundColor: "white",
        alignItems: 'center',
        flexWrap: "wrap",
    },
    typeItemView: {
        width: width / 5,
        height: unitWidth * 200,
        justifyContent: "center",
        alignItems: "center",
    },
    studyTodayTitleStyle: {
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
        paddingLeft: unitWidth * 60,
        paddingRight: unitWidth * 60,
        backgroundColor: "white",
    },
    titleLeftStyle: {
        color: "#000000",
    },
    hotItemViewContainer: {
        flexDirection: "row",
        height: unitWidth * 175,
        paddingLeft: unitWidth * 20,
        paddingRight: unitWidth * 24,
        backgroundColor: Color.white,
    },
    hotItemLeftImgViewContainer: {
        width: unitWidth * 220,
        paddingLeft: unitWidth * 4,
        justifyContent: 'center',
    },
    hotItemLeftImg: {
        width: unitWidth * 200,
        height: unitWidth * 150,
        borderRadius: unitWidth * 10,
    },
    hotRightView: {
        flex: 1,
        paddingLeft: unitWidth * 11,
    },
    hotSpaceView1: {
        height: unitWidth * 12,
    },
    hotSpaceView2: {
        height: unitWidth * 51,
    },
    hotRightSpaceBetweenView: {
        flexDirection: "row",
        justifyContent: "space-between",
    },

    hotRightSpaceBetweenLeftView: {
        height: unitWidth * 20,
    },
    hotRightSpaceBetweenLeftText: {
        fontSize: textSize24,
        color: "#ff4d00"
    },
    hotRightSpaceBetweenRightText: {
        color: "#888383",
        fontSize: textSize24
    },
    hotItemRightTextTop: {
        fontSize: textSize24,
        color: "#000000",
    },

    titleStyle: {
        color: "#494949",
        fontSize: unitWidth * 35,
    },

    newsMore: {
        backgroundColor: "transparent",
        color: "darkgray",
        textAlign: "center",
    },

    renderItemViewContainer: {
        width: width / 3,
        justifyContent: "center",
        alignItems: "center",
        borderRadius: unitWidth * 6,
        padding: unitWidth * 15,
    },
});
