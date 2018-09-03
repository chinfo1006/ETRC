package com.dongxin.modules;

import com.facebook.react.bridge.ReactContext;
import com.facebook.react.modules.core.DeviceEventManagerModule;
import com.google.gson.Gson;

import java.util.Date;

/**
 * Created by Administrator on 2017/10/28.
 */

public class SendJsEventUtil {

    /**
     * 向Js端发送通知
     */
    public static void sendEvent(ReactContext reactContext, String name, Object data) {
        String res;
        if (data instanceof Integer) {
            res = data + "";
        } else if (data instanceof String) {
            res = (String) data;
        } else if (data instanceof Double) {
            res = data + "";
        } else if (data instanceof Float) {
            res = data + "";
        } else if (data instanceof Long) {
            res = data + "";
        } else if (data instanceof Boolean) {
            res = data + "";
        } else if (data instanceof Date) {
            res = data.toString();
        } else {
            res = new Gson().toJson(data);
        }
        System.out.println(reactContext);
        reactContext.getJSModule(DeviceEventManagerModule.RCTDeviceEventEmitter.class).emit(name, res);
    }
}
