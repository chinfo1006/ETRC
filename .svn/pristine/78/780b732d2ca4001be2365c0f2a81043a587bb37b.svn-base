package com.dongxin.modules.main;

import android.content.Context;
import android.content.Intent;
import android.graphics.Bitmap;
import android.graphics.Rect;
import android.net.Uri;
import android.os.Environment;
import android.provider.MediaStore;
import android.util.Log;
import android.view.View;
import android.widget.Toast;

import com.dongxin.MainApplication;
import com.facebook.react.bridge.Callback;
import com.facebook.react.bridge.ReactApplicationContext;
import com.facebook.react.bridge.ReactContextBaseJavaModule;
import com.facebook.react.bridge.ReactMethod;

import java.io.File;
import java.io.FileNotFoundException;
import java.io.FileOutputStream;
import java.io.IOException;

/**
 * Created by Tloy on 2017/7/17.
 */

public class ScreenCutModule extends ReactContextBaseJavaModule {
    private Context context;
    private MainApplication app;

    public ScreenCutModule(ReactApplicationContext reactContext) {
        super(reactContext);
        context = reactContext;
        app = (MainApplication) context.getApplicationContext();
    }

    @Override
    public String getName() {
        return "ScreenCutModule";
    }

    @ReactMethod
    public void screenCut(final int top, final int bottom, final String message) {
//        Log.d("SanceLife", "screenCut");
        app.activity.runOnUiThread(new Runnable() {
            @Override
            public void run() {
                int width = app.activity.getWindowManager().getDefaultDisplay().getWidth();
                int height = app.activity.getWindowManager().getDefaultDisplay().getHeight();
                int stateBarHeight = getStatusBarHeight();
                Bitmap bitmap = takeScreenShot(0, top + stateBarHeight, width, height - top - bottom - stateBarHeight);
                saveBitMap(bitmap, message);
            }
        });

    }

    // 截屏并进行裁剪
    private Bitmap takeScreenShot(int x, int y, int width, int height) {
//        Log.d("SanceLife", "takeScreenShot");
        View view = app.activity.getWindow().getDecorView();
        view.setDrawingCacheEnabled(true);
        view.buildDrawingCache();
        Bitmap bitmap = view.getDrawingCache();
        Rect frame = new Rect();
        app.activity.getWindow().getDecorView().getWindowVisibleDisplayFrame(frame);
        int statusBarHeight = frame.top;

        // 裁剪
        Bitmap b = Bitmap.createBitmap(bitmap, x, y, width, height);

//        Log.d("SanceLife", b.getHeight() + "===" + b.getWidth());
        view.destroyDrawingCache();
        return b;
    }

    // 保存到本地
    private void saveBitMap(Bitmap bmp,  String message) {
        // 首先保存图片
        File appDir = new File(Environment.getExternalStorageDirectory(), "etrc");
        if (!appDir.exists()) {
            appDir.mkdir();
        }
        String fileName = System.currentTimeMillis() + ".jpg";
        File file = new File(appDir, fileName);
        try {
            FileOutputStream fos = new FileOutputStream(file);
            bmp.compress(Bitmap.CompressFormat.JPEG, 100, fos);
            fos.flush();
            fos.close();
            //这个广播的目的就是更新图库，发了这个广播进入相册就可以找到你保存的图片了
            context.sendBroadcast(new Intent(Intent.ACTION_MEDIA_SCANNER_SCAN_FILE, Uri.fromFile(file)));
            Toast.makeText(context, message, Toast.LENGTH_LONG).show();
        } catch (FileNotFoundException e) {
            Toast.makeText(context, "保存失败，请重试", Toast.LENGTH_LONG).show();
            e.printStackTrace();
        } catch (IOException e) {
            Toast.makeText(context, "保存失败，请重试", Toast.LENGTH_LONG).show();
            e.printStackTrace();
        }


//        Toast.makeText(context, message, Toast.LENGTH_LONG).show();

        // 其次把文件插入到系统图库
        try {
            MediaStore.Images.Media.insertImage(context.getContentResolver(),
                    file.getAbsolutePath(), fileName, null);
        } catch (FileNotFoundException e) {
            e.printStackTrace();
        }
//         最后通知图库更新
        context.sendBroadcast(new Intent(Intent.ACTION_MEDIA_SCANNER_SCAN_FILE, Uri.fromFile(file)));
    }

    private int getStatusBarHeight() {
        int statusBarHeight1 = 51;
        //获取status_bar_height资源的ID
        int resourceId = context.getResources().getIdentifier("status_bar_height", "dimen", "android");
        if (resourceId > 0) {
            //根据资源ID获取响应的尺寸值
            statusBarHeight1 = context.getResources().getDimensionPixelSize(resourceId);
        }
//        Log.e("WangJ", "状态栏-方法1:" + statusBarHeight1);
        return statusBarHeight1;
    }



}
