/**
 * Created by Tloy on 2018/1/4.
 */

'use strict';

import {HomeType} from "../actiontypes/index";
import {
    GetHomeBottomList,
    GetHomeImageList,
    GetcenterImageList,
    GetShopType,
    GetNewsList,
    GetPowerValue, HHGXHomeData,
    GetGxbNewestPrice
} from "../server/ServerApi";

/**
 * 改变刷新状态
 */
export function setFresh(fresh) {
    return {
        type: HomeType.SET_FRESH,
        params: fresh
    }
}

export function getPrice() {
    return dispatch => {
        GetGxbNewestPrice((res) => {
            dispatch({
                type: HomeType.GET_PRICE,
                params: res
            })
        }, () => {
        }, true)
    }
}

/**
 * 获取首页数据
 */
export function quryHomeData() {
    return dispatch => {
        HHGXHomeData((res) => {
            dispatch({
                type: HomeType.QUERY_HOME_DATA,
                params: res
            })
        }, () => {
        }, true)
    }
}

//获取最上面的banner
export function quryHomeBannerList() {
    const params = {
        'rows': 3,
        'page': 1
    }
    return dispatch => {
        GetHomeImageList(params, (res) => {
            dispatch({
                type: HomeType.QUERY_HOME_BANNER_LIST,
                params: res,
            }, () => {
            }, true)
        });
    }
}

/**
 * 首页快报
 */
export function queryKuaibaoList() {
    const params = {
        'rows': 10,
        'page': 1,
        'sidx': '',      //表的 排序字段  可以为空  //ModifyDate
        'sord': '',          // 排序方式  比如升序 或者降序   可为空
        'records': '',          //返回总数量   可为空
        'conditionJson': '',     //可为空   比如   {AgenType:2}    查询条件  ===点击

    }
    return dispatch => {
        GetNewsList(params, (res) => {
            dispatch({
                type: HomeType.QUERY_HOME_KUAIBAO_LIST,
                params: res,
            }, () => {
            }, true)
        });
    }
}