package com.dongxin;

import android.Manifest;
import android.content.Intent;
import android.content.pm.PackageManager;
import android.os.Build;
import android.os.Bundle;
import android.support.v4.app.ActivityCompat;
import android.support.v4.content.ContextCompat;

import com.facebook.react.ReactActivity;

public class MainActivity extends ReactActivity {

    /**
     * Returns the name of the main component registered from JavaScript.
     * This is used to schedule rendering of the component.
     */


    @Override
    protected void onCreate(Bundle savedInstanceState) {
        super.onCreate(savedInstanceState);
        ((MainApplication) getApplication()).activity = this;
        if (Build.VERSION.SDK_INT >= Build.VERSION_CODES.M) {
            checkPermission();//检查权限
        }


    }


    /**
     * 检查是否拥有相关权限,
     */
    private void checkPermission() {
        String[] permissions = new String[]{
//                Manifest.permission.ACCESS_FINE_LOCATION,
                Manifest.permission.READ_EXTERNAL_STORAGE,
                Manifest.permission.READ_EXTERNAL_STORAGE,
        };

        for (String permission : permissions) {
            if (ContextCompat.checkSelfPermission(this, permission) != PackageManager.PERMISSION_GRANTED) {
                System.out.println(ContextCompat.checkSelfPermission(this, permission));

                //请求权限    用户权限
                ActivityCompat.requestPermissions(this, permissions, 1000011);
                break;
            }
        }

    }

    @Override
    protected String getMainComponentName() {
        return "dongxin";
    }


    @Override
    public void onActivityResult(int requestCode, int resultCode, Intent data) {
        super.onActivityResult(requestCode, resultCode, data);
//        mReactInstanceManager.onActivityResult(requestCode, resultCode, data);


    }

}
