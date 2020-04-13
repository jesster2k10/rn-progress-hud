//
//  ProgressHud.swift
//  rn-progress-hud
//
//  Created by Jesse Onolememen on 24/03/2020.
//

import Foundation

@objc(ProgressHUD)
class ProgressHUD: NSObject {
  
  // MARK: Common Functions
  @objc func show(_ status: String?, style: String?) {
    switch style {
    case "info":
      SVProgressHUD.showInfo(withStatus: status)
    case "success":
      SVProgressHUD.showSuccess(withStatus: status)
    case "error":
      SVProgressHUD.showError(withStatus: status)
    default:
      SVProgressHUD.show(withStatus: status)
    }
  }
  
  @objc func setProgress(_ progress: Float, status: String? = nil) {
    SVProgressHUD.showProgress(progress, status: status)
  }
  
  @objc func dismiss(_ delay: Float = 0) {
    DispatchQueue.main.async {
      SVProgressHUD.dismiss(withDelay: TimeInterval(delay))
    }
  }
  
  // MARK: iOS Specific Functions
  @objc func setFont(_ fontName: String, fontSize: CGFloat) {
    guard let font = UIFont(name: fontName, size: fontSize) else {return}
    SVProgressHUD.setFont(font)
  }
  
  @objc func setBackgroundColor(_ color: UIColor) {
    SVProgressHUD.setBackgroundColor(color)
  }
  
  @objc func setBackgroundLayerColor(_ color: UIColor) {
    SVProgressHUD.setBackgroundLayerColor(color)
  }
  
  @objc func setForegroundColor(_ color: UIColor) {
    SVProgressHUD.setForegroundColor(color)
  }
  
  @objc func setRingRadius(_ radius: CGFloat) {
    SVProgressHUD.setRingRadius(radius)
  }
  
  @objc func setHapticsEnabled(_ hapticsEnabled: Bool) {
    SVProgressHUD.setHapticsEnabled(hapticsEnabled)
  }
  
  @objc func setCornerRadius(_ cornerRadius: CGFloat) {
    SVProgressHUD.setCornerRadius(cornerRadius)
  }
  
  @objc func setMaskType(_ maskTypeString: String) {
    var maskType = SVProgressHUDMaskType.none
    switch (maskTypeString) {
    case "black":
      maskType = SVProgressHUDMaskType.black
    case "gradient":
      maskType = SVProgressHUDMaskType.gradient
    case "clear":
      maskType = SVProgressHUDMaskType.clear
    case "custom":
        maskType = SVProgressHUDMaskType.custom
    default:
      break
    }
    
    SVProgressHUD.setDefaultMaskType(maskType)
  }
  
  @objc func setFadeInDuration(_ duration: Double) {
    SVProgressHUD.setFadeInAnimationDuration(TimeInterval(duration))
  }
  
  @objc func setFadeOutDuration(_ duration: Double) {
    SVProgressHUD.setFadeOutAnimationDuration(TimeInterval(duration))
  }
  
  @objc func setMinimumDismissTimeInterval(_ interval: Double) {
    SVProgressHUD.setMinimumDismissTimeInterval(TimeInterval(interval))
  }
  
  @objc func setMaximumDismissTimeInterval(_ interval: Double) {
    SVProgressHUD.setMaximumDismissTimeInterval(TimeInterval(interval))
  }
  
  @objc
  static func requiresMainQueueSetup() -> Bool {
    return true
  }
}
