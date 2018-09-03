import {HomeLessonType, PublicTypes} from "../actiontypes";

const initialState = {
    topBanner: [],  //顶部Banner
    typeList: [], //课程类型
    centerBanner: [],//中间banner
    todayList: [],//今日精选
    hotList: [],//热门课程
    newList: [],//最新课程

    isRefresh: false, //是否设置刷新
    pageIndex: 1, //课程中心最新课程页码
};

export default function HomeLessonReducer(state = initialState, action) {
    switch (action.type) {
        case HomeLessonType.STUDY_COURSE_TOP_LIST:
            return {
                ...state,
                topBanner: action.params,
            };
        case HomeLessonType.STUDY_COURSE_TODAY_HOT:
            return {
                ...state,
                hotList: action.params.IsHotList,
                todayList: action.params.IsSelectionList,
            };

        case HomeLessonType.STUDY_COURSE_MIDDLE_LIST:
            return {
                ...state,
                centerBanner: action.params,
            };
        case HomeLessonType.STUDY_COURSE_LATEST_LIST:
            if (action.params.pageIndex == 1) {
                return {
                    ...state,
                    newList: action.params.list,
                    isRefresh: false,
                    pageIndex: 1,
                }
            } else {
                let lodList = state.newList
                return {
                    ...state,
                    newList: lodList.concat(action.params.list),
                    isRefresh: false,
                    pageIndex: action.params.pageIndex + 1,
                };
            }

        case HomeLessonType.STUDY_COURSE_TYPE:
            return {
                ...state,
                size: action.params.size,
                typeList: action.params.typeList,
            };
        case PublicTypes.LOGOUT:
        default:
            return state;
    }
}
