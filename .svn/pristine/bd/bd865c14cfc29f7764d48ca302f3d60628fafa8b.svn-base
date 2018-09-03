import {HomeLessonType} from "../actiontypes/index";
import {
    GetProductTypeList,
    GetProductCenterList,
    GetCourseTopList,
    GetCourseMiddleList,
    GetNewProductList
} from "../server/ServerApi";

//顶部区域轮播图图片
export function getCourseTopList(params) {
    return dispatch => {
        GetCourseTopList(params, res => {
            dispatch({
                type: HomeLessonType.STUDY_COURSE_TOP_LIST,
                params: res,
            });
        });
    };
}

//课程分类
export function getProductTypeList(params) {
    return dispatch => {
        GetProductTypeList(params, res => {
            dispatch({
                type: HomeLessonType.STUDY_COURSE_TYPE,
                params: {
                    typeList: res.datas,
                    size: params.size,
                },
            });
        });
    };
}

//今日精选和热门课程列表
export function getProductCenterList(params) {
    return dispatch => {
        GetProductCenterList(params, res => {
            dispatch({
                type: HomeLessonType.STUDY_COURSE_TODAY_HOT,
                params: res
            });
        });
    };
}

//课程中间轮播图片
export function getCourseMiddleList(params) {
    return dispatch => {
        GetCourseMiddleList(params, res => {
            dispatch({
                type: HomeLessonType.STUDY_COURSE_MIDDLE_LIST,
                params: res,
            });
        });
    };
}

/**
 * @param {获取最新课程} params
 */
export function getNewProductList(params) {
    return dispatch => {
        GetNewProductList(params, res => {
            dispatch({
                type: HomeLessonType.STUDY_COURSE_LATEST_LIST,
                params: {
                    list: res.datas,
                    pageIndex: params.pageIndex,
                }
            });
        });
    };
}