/**
 *   API
 */

import * as ApiUrl from './ApiUrl';
import {getJson, postJson, uploadImage, postShowAllJson, getShowAllJson} from "./Request";
import {getParam} from "../utils/ParamUtil";

export function GetMyConchRecordUserListApi(pageIndex, onSuccess, onFailed, notShowLoading) {
    getJson(`${ApiUrl.GetMyConchRecordUserListUrl}?pageIndex=${pageIndex}`, onSuccess, onFailed, notShowLoading)
}

export function GetETRCTransactionFeeApi(onSuccess) {
    getJson(ApiUrl.GetETRCTransactionFeeUrl, onSuccess)
}

export function GetDailyCheckInApi(onSuccess) {
    getJson(ApiUrl.GetDailyCheckInUrl, onSuccess)
}

export function GetWhetherSignInApi(onSuccess) {
    getJson(ApiUrl.GetWhetherSignInUrl, onSuccess, null, true)
}

export function GetGxbNewestPrice(onSuccess, onFailed, notShowLoading) {
    getJson(ApiUrl.GetGxbNewestPrice, onSuccess, onFailed, notShowLoading)
}

export function GetMyIETRCRecordUserList(pageIndex, onSuccess, onFailed, notShowLoading) {
    getJson(`${ApiUrl.GetMyIETRCRecordUserList}?pageIndex=${pageIndex}`, onSuccess, onFailed, notShowLoading)

}

/**
 * 我的ETRC信息
 */
export function GetCoinInfo(onSuccess, onFailed, notShowLoading) {
    getJson(ApiUrl.GetCoinInfo, onSuccess, onFailed, notShowLoading)
}

/**
 * ETRC兑换参数
 */
export function GetExchageInfo(onSuccess, onFailed, notShowLoading) {
    getJson(ApiUrl.GetExchageInfo, onSuccess, onFailed, notShowLoading)
}

/**
 * ETRC兑换
 */
export function ExchangeGXB(params, onSuccess, onFailed, notShowLoading) {
    postJson(ApiUrl.ExchangeGXB, params, onSuccess, onFailed, notShowLoading)
}

/**
 * ETRC兑换记录
 */
export function GetExchangeWaterList(pageIndex, onSuccess, onFailed, notShowLoading) {
    getJson(`${ApiUrl.GetExchangeWaterList}?pageIndex=${pageIndex}`, onSuccess, onFailed, notShowLoading)
}

/**
 * ETRC转赠参数
 */
export function GXBDonationInfo(onSuccess, onFailed, notShowLoading) {
    getJson(ApiUrl.GXBDonationInfo, onSuccess, onFailed, notShowLoading)
}

/**
 * 验证钱包地址
 */
export function VerificationPurseAddress(PurseAddress, onSuccess, onFailed, notShowLoading) {
    getJson(`${ApiUrl.VerificationPurseAddress}?PurseAddress=${PurseAddress}`, onSuccess, onFailed, notShowLoading)
}

/**
 * ETRC转赠
 * BuyPurseAddress:"", 转赠地址
 * ExchageNum:"", 转赠数量
 * Code:"",   验证码
 */
export function GXBDonation(params, onSuccess, onFailed, notShowLoading) {
    postJson(ApiUrl.GXBDonation, params, onSuccess, onFailed, notShowLoading)
}

/**
 * ETRC转赠验证
 * BuyPurseAddress:"", 转赠地址
 * ExchageNum:"", 转赠数量
 */
export function GXBDonationValidate(params, onSuccess, onFailed, notShowLoading) {
    postJson(ApiUrl.GXBDonationValidate, params, onSuccess, onFailed, notShowLoading)
}


/**
 * ETRC转赠记录
 */
export function GetGiveWaterList(pageIndex, onSuccess, onFailed, notShowLoading) {
    getJson(`${ApiUrl.GetGiveWaterList}?pageIndex=${pageIndex}`, onSuccess, onFailed, notShowLoading)
}

GetTransactionList

/**
 * ETRC交易流水
 */
export function GetTransactionList(pageIndex, onSuccess, onFailed, notShowLoading) {
    getJson(`${ApiUrl.GetTransactionList}?pageIndex=${pageIndex}`, onSuccess, onFailed, notShowLoading)
}


/**************************------HomeApi------**************************/
export function HHGXHomeData(onSuccess, onFailed, notShowLoading) {
    getJson(ApiUrl.HHGXHomeData, onSuccess, onFailed, notShowLoading)
}

export function IsPayment(onSuccess, onFailed, notShowLoading) {
    getJson(ApiUrl.IsPayment, onSuccess, onFailed, notShowLoading)
}


/**
 * 登录
 * @param parmas
 *      {
 *           UserName: username,
 *           Password: password
 *      }
 * @param onSuccess
 */
export function passwordLoginApi(parmas, onSuccess, onFailed, notShowLoading) {
    postJson(ApiUrl.Login, parmas, onSuccess, onFailed, notShowLoading)
}


/**
 * 注册
 * @param params
 *      {
  "Mobile": "string",
  "Password": "string",
  "ConfirmPassword": "string",
  "SmsVerCode": "string",
  "RecommandMobile": "string"
}
 * @param onSuccess
 * @param onFailed
 * @param notShowLoading
 * @constructor
 */
export function Register(params, onSuccess, onFailed, notShowLoading) {
    postJson(ApiUrl.Register, params, onSuccess, onFailed, notShowLoading)
}

/**
 *
 * @param params
 * {
  "Mobile": "string",
  "Type": 0   1快捷登录 2注册 5修改登录密码 6 首次交易注册(非会员下单）  4商家审核成功,5修改登录密码,6修改支付密码 9转赠ETRC交易码
}
 * @param onSuccess
 * @param onFailed
 * @param notShowLoadings
 * @constructor
 */
export function SendSMS(params, onSuccess, onFailed, notShowLoading) {
    if (global.token) {
        postJson(ApiUrl.SendSMSAuthentication, params, onSuccess, onFailed, notShowLoading)
    } else {
        postJson(ApiUrl.SendSMSNotAuthentication, params, onSuccess, onFailed, notShowLoading)
    }
}

//获取首页精选商家  也就底部列表的数据
export function GetHomeBottomList(params, onSuccess, onFailed) {
    getJson(
        `${ApiUrl.HomeBottomListUrl}?${getParam(params)}`
        , onSuccess, onFailed)
}

//获取首页最上面的轮播图 的数据
export function GetHomeImageList(params, onSuccess, onFailed, notShowLoading) {
    getJson(
        `${ApiUrl.HomeImgListUrl}?${getParam(params)}`
        , onSuccess, onFailed, notShowLoading)
}

//获取最中间的轮播图
export function GetcenterImageList(params, onSuccess, onFailed, notShowLoading) {
    getJson(
        `${ApiUrl.HomeCenterListUrl}?${getParam(params)}`
        , onSuccess, onFailed, notShowLoading);
}

//新闻列表
export function GetNewsList(params, onSuccess, onFailed, notShowLoading) {
    getJson(
        `${ApiUrl.HomeNewsListUrl}?${getParam(params)}`
        , onSuccess, onFailed, notShowLoading);
}

//GetPowerValue
export function GetPowerValue(params, onSuccess, onFailed, notShowLoading) {
    getJson(
        `${ApiUrl.HomeGetPowerValueUrl}?${getParam(params)}`
        , onSuccess, onFailed, notShowLoading);
}

//获取首页分类 数据
export function GetShopType(params, onSuccess, onFailed, notShowLoading) {
    getJson(
        `${ApiUrl.CommonShopTypeUrl}?${getParam(params)}`
        , onSuccess, onFailed, notShowLoading);
}

/**
 * 获取获取会员中心数据
 */
export function GetUserCenterInfo(onSuccess, onFailed, notShowLoading) {
    getJson(ApiUrl.GetUserCenterInfo, onSuccess, onFailed, notShowLoading)
}

/**
 * 获取个人中心数据
 */
export function GetUserSetInfo(onSuccess, onFailed, notShowLoading) {
    getJson(ApiUrl.GetUserSetInfo, onSuccess, onFailed, notShowLoading);
}

/***********************************-------商家-------***********************************/

export function GetMerchantCenterInfo(onSuccess, onFailed, notShowLoading) {
    getJson(ApiUrl.GetMerchantCenterInfo, onSuccess, onFailed, notShowLoading);
}

//修改商家logo 
export function UpdateLogo(params, onSuccess, onFailed, notShowLoading) {
    postJson(ApiUrl.UpdateLogo + '?merchantLogo=' + params, params, onSuccess, onFailed, notShowLoading);
}

/***********************************-------common-------***********************************/

export function GetVersionsInfo(onSuccess, onFailed) {
    getJson(ApiUrl.GetVersionsInfo, onSuccess, onFailed, true);
}

/**
 * 文件上传
 */
export function UploadImage(image, onSuccess, onFailed) {
    uploadImage(ApiUrl.UploadFile, image, onSuccess, onFailed);
}

export function CheckMobile(mobile, onSuccess, onFailed, notShowLoading) {
    getJson(
        `${ApiUrl.CheckMobile}?mobile=${mobile}`
        , onSuccess, onFailed, notShowLoading)
}

/***********************************-------商家------***********************************/

/**
 * 风险基金流水
 */
export function GetRiskList(params, onSuccess, onFailed, notShowLoading) {
    getJson(
        `${ApiUrl.GetRiskListUrl}?${getParam(params)}`
        , onSuccess, onFailed, notShowLoading);
}

/**
 *
 * @param areaId  上级id
 */
export function GetAreaList(areaId, onSuccess, onFailed, notShowLoading) {
    postJson(`${ApiUrl.GetAreaList}?parentId=${areaId}`, {}, onSuccess, onFailed, notShowLoading);
}

export function GetBankList(onSuccess, onFailed, notShowLoading) {
    getJson(ApiUrl.GetBankList, onSuccess, onFailed, notShowLoading);
}


/***********************************-------User-------***********************************/


/**
 * 账户信息
 */
export function GetUserAccountInfo(onSuccess, onFailed, notShowLoading) {
    getJson(ApiUrl.GetUserAccountInfo + "?type=1", onSuccess, onFailed, notShowLoading);
}

/**
 * 回购
 * {
    "Usertype": "string",
    "Money": "string",
    "BankId": "string",
    "PayPwd": "string"
   }
 */
export function UserExecWithDraw(params, onSuccess, onFailed, notShowLoading) {
    postJson(ApiUrl.UserExecWithDraw, params, onSuccess, onFailed, notShowLoading);
}

/**
 *  提现须知
 */
export function GetWithdrawalsPrompt(onSuccess, onFailed, notShowLoading) {
    getJson(ApiUrl.GetWithdrawalsPrompt, onSuccess, onFailed, notShowLoading);
}

/**
 *
 * @param params
 *  {
 *          "UserName": "string",
 *          "IdNumber": "string",
 *          "CardNumber": "string",
 *          "BanKName": "string",
 *          "BankId": "string",
 *          "Provice": "string",
 *          "City": "string",
 *          "AreaCity": "string",
 *          "ProviceName": "string",
 *          "CityName": "string",
 *          "AreaCityName": "string"
 *  }
 */
export function VerifyDataStep1(params, onSuccess, onFailed, notShowLoading) {
    postJson(ApiUrl.VerifyDataStep1, params, onSuccess, onFailed, notShowLoading);
}

export function GetCurrencyDetailById(id, onSuccess, onFailed, notShowLoading) {
    getJson(`${ApiUrl.GetCurrencyDetailById}?id=${id}`, onSuccess, onFailed, notShowLoading)
}

/**
 * ETRC详情
 */
export function GetBeanDetailById(id, onSuccess, onFailed, notShowLoading) {
    getJson(`${ApiUrl.GetBeanDetailById}?id=${id}`, onSuccess, onFailed, notShowLoading)
}

/**
 * ETRC列表
 */
export function UserDataBeanDetailListUrl(pageIndex, onSuccess, onFailed, notShowLoading) {
    getJson(`${ApiUrl.UserDataBeanDetailListUrl}?pageIndex=${pageIndex}`, onSuccess, onFailed, notShowLoading)
}

/**
 * 和兴元
 */
export function UserGetCurrencyDetailList(pageIndex, onSuccess, onFailed, notShowLoading) {
    getJson(`${ApiUrl.UserGetCurrencyDetailList}?pageIndex=${pageIndex}`, onSuccess, onFailed, notShowLoading)
}

/**
 *
 * @param params
 *  {
 *      "Password": "string"
 *  }
 */
export function VerifyDataStep2(params, onSuccess, onFailed, notShowLoading) {
    postJson(ApiUrl.VerifyDataStep2, params, onSuccess, onFailed, notShowLoading)
}

/**
 * @param params
 *      {
 *        "IdCard_Z_Imgurl": "string",
 *        "IdCard_F_Imgurl": "string",
 *        "BankCard_Imgurl": "string"
 *      }
 */
export function VerifyDataStep3(params, onSuccess, onFailed, notShowLoading) {
    postJson(ApiUrl.VerifyDataStep3, params, onSuccess, onFailed, notShowLoading)
}

/**
 *
 * @param params   "Password": "string",
 "Mobile": "string",
 "VCode": "string"
 * @param onSuccess
 * @param onFailed
 * @param notShowLoading
 * @constructor
 */
export function UpdateLoginPwd(params, onSuccess, onFailed, notShowLoading) {
    postJson(ApiUrl.UpdateLoginPwd, params, onSuccess, onFailed, notShowLoading)
}

export function UpdatePayPwd(params, onSuccess, onFailed, notShowLoading) {
    postJson(ApiUrl.UpdatePayPwd, params, onSuccess, onFailed, notShowLoading)
}

// 获取直接推荐列表
export function GetMyRecommendUserList(pageIndex, onSuccess, onFailed, notShowLoading) {
    getJson(`${ApiUrl.GetMyRecommendUserList}?pageIndex=${pageIndex}`, onSuccess, onFailed, notShowLoading)
}

// 获取间接推荐列表
export function GetMyIndirectRecommendUserList(pageIndex, onSuccess, onFailed, notShowLoading) {
    getJson(`${ApiUrl.GetMyIndirectRecommendUserList}?pageIndex=${pageIndex}`, onSuccess, onFailed, notShowLoading)
}

// 获取三级推荐列表
export function GetMyThirdRecommendUserList(pageIndex, onSuccess, onFailed, notShowLoading) {
    getJson(`${ApiUrl.GetMyThirdStageRecommendUserList}?pageIndex=${pageIndex}`, onSuccess, onFailed, notShowLoading)
}

/**
 */
export function GetMerchantCapital(type, onSuccess, onFailed, notShowLoading) {
    getJson(`${ApiUrl.GetMerchantCapital}?type=${type}`, onSuccess, onFailed, notShowLoading)
}

/**
 * 获取审核失败订单数
 */
export function GetFialdOrderCount(onSuccess, onFailed, notShowLoading) {
    getJson(ApiUrl.GetFialdOrderCount, onSuccess, onFailed, notShowLoading)
}

export function GetReportOrderPrompt(onSuccess, onFailed, notShowLoading) {
    getJson(ApiUrl.GetReportOrderPrompt, onSuccess, onFailed, notShowLoading)
}

/**
 * 下单
 *  {
 *    "OrderAmount": 0,
 *    "VoucherImg": "string",
 *    "PaymentCategory": 0,
 *    "PayerName": "string",
 *    "PayerCardNumber": "string",
 *    "ProductId": "string",
 *    "Count": 0
 *  }
 *
 */
export function AddOrder(params, onSuccess, onFailed, notShowLoading) {
    postJson(ApiUrl.AddOrderUrl, params, onSuccess, onFailed, notShowLoading)
}

/**
 *  购买课程下单
 * @param params
 *  {
 *      productId:""，
 *      count:""
 *  }
 */
export function UserAddOrderApi(params, onSuccess, onFailed, notShowLoading) {
    getJson(`${ApiUrl.UserAddOrderUrl}?${getParam(params)}`, onSuccess, onFailed, notShowLoading)
}

/**
 *
 * @param params
 *  {
 *      orderNo:""
 *  }
 */
export function AlipayApi(params, onSuccess, onFailed, notShowLoading) {
    getJson(`${ApiUrl.AlipayUrl}?${getParam(params)}`, onSuccess, onFailed, notShowLoading);
}

/**
 *  查询支付结果
 * @param params
 *  {
 *      orderNo:""
 *  }
 */
export function AlipayOrderQueryApi(params, onSuccess, onFailed, notShowLoading) {
    getJson(`${ApiUrl.AlipayOrderQueryUrl}?${getParam(params)}`, onSuccess, onFailed, notShowLoading);
}


/**
 * 获取订单列表
 */
export function GetOrderListByUseId(params, onSuccess, onFailed, notShowLoading) {
    getJson(`${ApiUrl.GetOrderListByUseId}?${getParam(params)}`, onSuccess, onFailed, notShowLoading);
}

/**
 * 获取订单明细
 */
export function GetOrderById(params, onSuccess, onFailed, notShowLoading) {
    getJson(`${ApiUrl.GetOrderById}?${getParam(params)}`, onSuccess, onFailed, notShowLoading);
}

/**
 * 反馈列表
 */
export function FeedbackGetList(pageIndex, onSuccess, onFailed, notShowLoading) {
    getJson(
        `${ApiUrl.FeedbackGetListUrl}?pageIndex=${pageIndex}`

        , onSuccess, onFailed, notShowLoading);
}

/**
 * 添加反馈
 */
export function FeedbackAdd(params, onSuccess, onFailed, notShowLoading) {
    postJson(ApiUrl.FeedbackAddUrl, params, onSuccess, onFailed, notShowLoading);
}

export function GetRechargeList(params, onSuccess, onFailed, notShowLoading) {
    getJson(
        `${ApiUrl.GetRechargeList}?${getParam(params)}`

        , onSuccess, onFailed, notShowLoading);
}

//修改商家logo
export function UpdateHeadImg(params, onSuccess, onFailed, notShowLoading) {
    postShowAllJson(ApiUrl.UpdateHeadImg, params, onSuccess, onFailed, notShowLoading);
}

/**
 * 回购记录列表
 * pageIndex 页码
 * status 状态：-1 全部，1、审核中，2、回购失败
 */
export function GetWithdrawalsByUserIdAndType(params, onSuccess, onFailed, notShowLoading) {
    getJson(
        `${ApiUrl.GetWithdrawalsByUserIdAndType}?${getParam(params)}`

        , onSuccess, onFailed, notShowLoading);
}

/**
 * 回购详情  id
 */
export function GetWithDrawDetail(id, onSuccess, onFailed, notShowLoading) {
    getJson(ApiUrl.GetWithDrawDetail + "?id=" + id, onSuccess, onFailed, notShowLoading);
}

//获取课程中心分类的课程
export function GetProductTypeList(params, onSuccess, onFailed, notShowLoading) {
    getJson(
        `${ApiUrl.GetProductTypeList}?${getParam(params)}`

        , onSuccess, onFailed, notShowLoading);
}

//获取课程中心分类的课程
export function GetProductListByTypeId(params, onSuccess, onFailed, notShowLoading) {
    getJson(
        `${ApiUrl.GetProductListByTypeId}?${getParam(params)}`

        , onSuccess, onFailed, notShowLoading);
}

//获取今日精选跟热门课程
export function GetProductCenterList(params, onSuccess, onFailed, notShowLoading) {
    getJson(
        `${ApiUrl.GetProductCenterList}?${getParam(params)}`

        , onSuccess, onFailed, notShowLoading);
}


//课程顶部banner
export function GetCourseTopList(params, onSuccess, onFailed, notShowLoading) {
    getJson(
        `${ApiUrl.GetCourseTopList}?${getParam(params)}`

        , onSuccess, onFailed, notShowLoading);
}

//中部区域的轮播图图片
export function GetCourseMiddleList(params, onSuccess, onFailed, notShowLoading) {
    getJson(
        `${ApiUrl.GetCourseMiddleList}?${getParam(params)}`

        , onSuccess, onFailed, notShowLoading);
}

//中部区域的轮播图图片
export function GetNewProductList(params, onSuccess, onFailed, notShowLoading) {
    getJson(
        `${ApiUrl.GetNewProductList}?${getParam(params)}`

        , onSuccess, onFailed, notShowLoading);
}

export function GetProductDetail(params, onSuccess, onFailed, notShowLoading) {
    getJson(
        `${ApiUrl.GetProductDetail}?${getParam(params)}`

        , onSuccess, onFailed, notShowLoading);
}

//搜索课程
export function GetSearchProductByKey(params, onSuccess, onFailed, notShowLoading) {
    getJson(
        `${ApiUrl.GetSearchProductByKey}?${getParam(params)}`

        , onSuccess, onFailed, notShowLoading);
}

/**
 * 获取平台账户信息
 */
export function GetRechargePrompt(onSuccess, onFailed, notShowLoading) {
    getJson(ApiUrl.GetRechargePrompt, onSuccess, onFailed, notShowLoading);
}

/**
 * 商城消费券流水
 */
export function GetShoppingCurrencyList(pageIndex, onSuccess, onFailed, notShowLoading) {
    getJson(
        `${ApiUrl.GetShoppingCurrencyList}?pageIndex=${pageIndex}`

        , onSuccess, onFailed, notShowLoading);
}


/**************   贝壳兑换模块      ****************/
/**
 * 获取提现初始化信息
 */
export function GetUserAccountInfoConch(onSuccess, onFailed, notShowLoading) {
    getJson(ApiUrl.GetUserAccountInfoConch, onSuccess, onFailed, notShowLoading);
}

/**
 * 获取提现提醒信息
 */
export function GetWithdrawalsPromptConch(onSuccess, onFailed, notShowLoading) {
    getJson(ApiUrl.GetWithdrawalsPromptConch, onSuccess, onFailed, notShowLoading);
}
/**
 * 提现
 * {
    "Money": "string",
    "BankId": "string",
    "PayPwd": "string"
   }
 */
export function ExecWithDrawConch(params, onSuccess, onFailed, notShowLoading) {
    postJson(ApiUrl.ExecWithDrawConch, params, onSuccess, onFailed, notShowLoading);
}

//提现列表
export function GetWithdrawalsByList(params, onSuccess, onFailed, notShowLoading) {
    getJson(`${ApiUrl.GetWithdrawalsByList}?${getParam(params)}`, onSuccess, onFailed, notShowLoading);
}

// 提现明细
export function GetWithDrawDetailConch(id, onSuccess, onFailed, notShowLoading) {
    getJson(ApiUrl.GetWithDrawDetailConch + "?id=" + id, onSuccess, onFailed, notShowLoading);
}
