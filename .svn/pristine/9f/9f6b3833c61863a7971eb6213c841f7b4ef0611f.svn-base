'use strict';

import {CoinExchangeType, CoinGiveType} from '../actiontypes'
import {GetETRCTransactionFeeApi, GXBDonationInfo, VerificationPurseAddress} from "../server/ServerApi";

export function initReducer() {
    return ({
        type: CoinGiveType.INIT,
    })
}

export function queryTransactionFee() {
    return dispatch => {
        GetETRCTransactionFeeApi((res) => {
            dispatch({
                type: CoinGiveType.QUERY_TRANSACTION_FEE,
                params: Number(res.commissionCharge) / 100,
            })
        })
    }
}

export function queryCoinGiveInfo() {
    return dispatch => {
        GXBDonationInfo((res) => {
            dispatch({
                type: CoinGiveType.QUERY_COIN_GIVE_INFO,
                params: res,
            })
        })
    }
}

export function scanQRCode(params) {
    return {
        type: CoinGiveType.SCANQRCODE,
        params: params,
    }
}

export function inputGiveAddress(address) {
    return {
        type: CoinGiveType.INPUT_GIVE_ADDRESS,
        params: address,
    }
}

export function inputGiveCount(address) {
    return {
        type: CoinGiveType.INPUT_GIVE_COUNT,
        params: address,
    }
}

export function queryGiveAddressInfo(address) {
    return dispatch => {
        VerificationPurseAddress(address, (res) => {
            dispatch({
                type: CoinGiveType.QUERY_GIVE_ADDRESS_INFO,
                params: {
                    giveAddressInfo: res,
                    giveAddressTrue: true
                },
            })
        }, (res) => {
            dispatch({
                type: CoinGiveType.QUERY_GIVE_ADDRESS_INFO,
                params: {
                    giveAddressInfo: res.message,
                    giveAddressTrue: false
                },
            })
        })
    }
}