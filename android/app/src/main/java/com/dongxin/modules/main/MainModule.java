package com.dongxin.modules.main;

import android.content.Intent;

import com.facebook.react.bridge.ReactApplicationContext;
import com.facebook.react.bridge.ReactContext;
import com.facebook.react.bridge.ReactContextBaseJavaModule;
import com.facebook.react.bridge.ReactMethod;
import com.facebook.react.bridge.ReadableMap;
import com.google.gson.Gson;

import java.util.Iterator;
import java.util.Map;

public class MainModule extends ReactContextBaseJavaModule {

    private ReactContext context;


    public MainModule(ReactApplicationContext reactContext) {
        super(reactContext);
        this.context = reactContext;
    }

    @Override
    public String getName() {
        return "MainModule";
    }

    /**
     * 开始导航
     */
    @ReactMethod
    public void startNavigation(String start, String end, String type) {

    }




}
