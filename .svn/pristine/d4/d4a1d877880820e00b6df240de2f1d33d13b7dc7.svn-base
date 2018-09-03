/**
 *  Created by majunhui on 2017/9/23
 */

'use strict';

import {HomeType} from "../actiontypes/index";

const initialState = {
    homeData: {
        //    平台总风险基金
        "RiskFunds": 0.00,
        //    昨日奖励比例
        "PointValue": 0.00,
        //    为你优选
        "GoodsForYou": [{}, {}, {}],
        //    课程排行榜
        "CourseRankingList": [{}],
        //    关于合和共兴
        "AboutUsList": [],
        //    首页下方的精选课程
        "RecommendCourseList": []
    },
    bannerList: [{ImgUrl: ''}],  //头部轮播图
    kuaibaoList: [],
    fresh: false,
    isShowNew: false,
    userName: '',
    lesson: '',
    price: 0
}

/**
 * 响应reducer 接收action操作返回的值
 * @param {*} state
 * @param {*} action
 */
export default function getFailureApproveOrderReducer(state = initialState, action) {
    switch (action.type) {
        case HomeType.SET_FRESH: {
            return {
                ...state,
                fresh: action.params,
            }
        }
        case HomeType.GET_PRICE: {
            return {
                ...state,
                price: action.params,
            }
        }
        case HomeType.QUERY_HOME_DATA:
            return {
                ...state,
                homeData: action.params
            }
        case HomeType.QUERY_HOME_BANNER_LIST:  //首页最上面图片轮播 reducer框架响应
            return {
                ...state,
                bannerList: action.params,
            }
        case HomeType.QUERY_HOME_KUAIBAO_LIST:
            return {
                ...state,
                kuaibaoList: action.params,
            }
        default:
            return state;
    }
}
