package com.dongxin;

import android.app.Activity;
import android.app.Application;
import android.content.Context;
import android.support.multidex.MultiDex;

import com.dongxin.android_upgrade.UpgradePackage;
import com.dongxin.modules.alipay.AlipayPackage;
import com.dongxin.modules.imagepicker.PickerPackage;
import com.dongxin.modules.main.MainPackage;
import com.dongxin.modules.qq.QQPackage;
import com.dongxin.modules.wechat.WeChatPackage;
import com.facebook.react.ReactApplication;

import com.facebook.react.bridge.ReactContext;
import com.facebook.react.ReactNativeHost;
import com.facebook.react.ReactPackage;
import com.facebook.react.shell.MainReactPackage;
import com.facebook.soloader.SoLoader;
//import com.remobile.marqueeLabel.RCTMarqueeLabelPackage;

import org.reactnative.camera.RNCameraPackage;

import java.util.Arrays;
import java.util.List;

public class MainApplication extends Application implements ReactApplication {
    public static ReactContext reactContext;
    public Activity activity;

    private final ReactNativeHost mReactNativeHost = new ReactNativeHost(this) {
        @Override
        public boolean getUseDeveloperSupport() {
            return BuildConfig.DEBUG;
        }

        @Override
        protected List<ReactPackage> getPackages() {
            return Arrays.<ReactPackage>asList(
                    new MainReactPackage(),
                    new WeChatPackage(),
                    new QQPackage(),
                    new PickerPackage(),
                    new MainPackage(),
                    new UpgradePackage(),
                    new AlipayPackage(),
                    new RNCameraPackage()
            );
        }

        //  new RNViewShotPackage()
        @Override
        protected String getJSMainModuleName() {
            return "index";
        }
    };

    @Override
    public ReactNativeHost getReactNativeHost() {
        return mReactNativeHost;
    }

    @Override
    public void onCreate() {
        super.onCreate();
        SoLoader.init(this, /* native exopackage */ false);
    }

    @Override
    protected void attachBaseContext(Context base) {
        super.attachBaseContext(base);
        MultiDex.install(this);
    }
}
