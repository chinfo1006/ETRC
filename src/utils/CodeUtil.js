/**
 *  Created by majunhui on 2017/10/16
 */

import {JdType} from "../configs/Code";

export function getVipText(type) {
    switch (type) {
        case JdType.pt:
            return "普通用户"
        case JdType.vip:
            return "VIP用户"
        case JdType.cj:
            return "超级节点"
        case JdType.lm:
            return "联盟节点"
        case JdType.sq:
            return "社区节点"
    }
    return "普通用户"
}


