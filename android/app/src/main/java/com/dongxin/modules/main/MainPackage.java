package com.dongxin.modules.main;

import com.dongxin.MainApplication;
import com.facebook.react.ReactPackage;
import com.facebook.react.bridge.NativeModule;
import com.facebook.react.bridge.ReactApplicationContext;
import com.facebook.react.uimanager.ViewManager;

import java.util.ArrayList;
import java.util.List;

/**
 * Created by Administrator on 2017/9/26.
 */

public class MainPackage implements ReactPackage {

    @Override
    public List<NativeModule> createNativeModules(ReactApplicationContext reactContext) {
        MainApplication.reactContext = reactContext;
        List<NativeModule> modules = new ArrayList<>();
        modules.add(new MainModule(reactContext));   //  公用功能
        modules.add(new ScreenCutModule(reactContext));
        return modules;
    }

    @Override
    public List<ViewManager> createViewManagers(ReactApplicationContext reactContext) {
        List<ViewManager> managers = new ArrayList<>();
        return managers;
    }



}
