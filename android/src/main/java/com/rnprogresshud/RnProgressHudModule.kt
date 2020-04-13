package com.rnprogresshud

import android.os.Handler
import com.facebook.react.bridge.ReactApplicationContext
import com.facebook.react.bridge.ReactContextBaseJavaModule
import com.facebook.react.bridge.ReactMethod
import com.rnprogresshud.svprogresshud.SVProgressHUD

class RnProgressHudModule(reactContext: ReactApplicationContext) : ProgressModule(reactContext) {

  var maskType: SVProgressHUD.SVProgressHUDMaskType = SVProgressHUD.SVProgressHUDMaskType.Black

  override fun getName(): String {
    return "ProgressHUD"
  }

  @ReactMethod
    fun show(message: String?, style: String?) {
      reactApplicationContext.runOnUiQueueThread {
        if (message === null && style === null) {
          progressHud.show()
        } else {
          when (style) {
            "info" -> progressHud.showInfoWithStatus(message)
            "success" -> progressHud.showSuccessWithStatus(message)
            "error" -> progressHud.showErrorWithStatus(message)
            "progress" -> progressHud.showWithProgress(message, maskType)
            else -> progressHud.showWithStatus(message)
          }
        }
      }
    }

    @ReactMethod
    fun setProgress(progress: Int, status: String?) {
      reactApplicationContext.runOnUiQueueThread {
        val progressBar = progressHud.progressBar
        if (progressBar.progress < progressBar.max) {
          progressBar.progress = progress
        } else {
          progressHud.dismissImmediately();
          progressBar.progress = 0;
        }

        progressHud.setText(status)
      }
    }

  @ReactMethod
  fun dismiss(delay: Float = 0f) {
    reactApplicationContext.runOnUiQueueThread {
      progressHud.dismissImmediately()
    }
  }

  @ReactMethod
  fun setFont(fontName: String?, fontSize: Int?) {
    if (fontName == null || fontSize == null) return
    reactApplicationContext.runOnUiQueueThread {
      progressHud.setFontName(fontName)
        .setFontSize(fontSize)
    }
  }

  @ReactMethod
  fun setMaskType(maskTypeString: String?) {
    maskType = when (maskTypeString) {
      "black" -> SVProgressHUD.SVProgressHUDMaskType.Black
      "gradient" -> SVProgressHUD.SVProgressHUDMaskType.Gradient
      "clear" -> SVProgressHUD.SVProgressHUDMaskType.Clear
      "none" -> SVProgressHUD.SVProgressHUDMaskType.None
      else -> SVProgressHUD.SVProgressHUDMaskType.Gradient
    }
    reactApplicationContext.runOnUiQueueThread {
      progressHud.setMaskType(maskType)
    }
  }

  @ReactMethod
  fun setMinimumDismissTimeInterval(interval: Float) {
    reactApplicationContext.runOnUiQueueThread {
      progressHud.setMinimumDismissTimeInterval(interval.toLong());
    }
  }
}
