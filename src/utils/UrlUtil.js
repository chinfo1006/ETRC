import {baseMallUrl, baseUrl} from "../configs/Config";

/**
 *
 */
export function concatUrl(path) {
    if (!path) return ""
    let url = ''
    if (path.indexOf("www.") == 0) {
        url = "http://" + path
    } else if (path.indexOf("http") == 0) {
        url = path
    } else {
        url = baseUrl + path
    }
    return url
}

export function decodeUrl(url) {
    return decodeURIComponent(url)
}

export function concatMallUrl(path) {
    if (!path) return ""
    let url = ''
    if (path.indexOf("www.") == 0) {
        url = "http://" + path
    } else if (path.indexOf("http") == 0) {
        url = path
    } else {
        url = baseMallUrl + path
    }
    return url
}