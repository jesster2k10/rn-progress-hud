package com.rnprogresshud;

import androidx.annotation.NonNull;

import com.facebook.react.bridge.ReactApplicationContext;
import com.facebook.react.bridge.ReactContextBaseJavaModule;
import com.rnprogresshud.svprogresshud.SVProgressHUD;

public abstract class ProgressModule extends ReactContextBaseJavaModule {
  private SVProgressHUD mProgressHud;

  public ProgressModule(@NonNull ReactApplicationContext reactContext) {
    super(reactContext);
  }

  public SVProgressHUD getProgressHud() {
    if (mProgressHud == null) {
      this.mProgressHud = SVProgressHUD.withContext(getCurrentActivity());
    }
    return mProgressHud;
  }
}
