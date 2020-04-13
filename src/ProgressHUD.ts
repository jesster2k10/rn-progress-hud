import { NativeModules, Platform, processColor } from 'react-native';

const { ProgressHUD: RNProgressHUD } = NativeModules;

export type ProgressHUDDisplayStyle =
  | 'info'
  | 'error'
  | 'success'
  | 'default'
  | 'progress';
export type ProgressHUDMaskType = 'black' | 'clear' | 'gradient' | 'none';

export default class ProgressHUD {
  static show(
    status?: string | null,
    style: ProgressHUDDisplayStyle = 'default'
  ) {
    if (style === 'progress' && Platform.OS === 'ios') {
      RNProgressHUD.show(status, null);
    } else {
      RNProgressHUD.show(status, style);
    }
  }

  static dismiss(delay: number = 0) {
    RNProgressHUD.dismiss(delay);
  }

  static setFont(fontName: string, fontSize: number) {
    RNProgressHUD.setFont(fontName, fontSize);
  }

  static setMaskType(maskType: ProgressHUDMaskType) {
    RNProgressHUD.setMaskType(maskType);
  }

  static setProgress(progress: number, status?: string) {
    const rawProgress = Platform.select({
      ios: progress, // takes progress as decimal
      android: progress * 100, // takes progress as percentage
    });
    RNProgressHUD.setProgress(rawProgress, status);
  }

  // MARK:- iOS Only Options

  static setBackgroundColor(color: string) {
    if (Platform.OS !== 'ios') return;
    RNProgressHUD.setBackgroundColor(processColor(color));
  }

  static setBackgroundLayerColor(color: string) {
    if (Platform.OS !== 'ios') return;
    RNProgressHUD.setBackgroundLayerColor(processColor(color));
  }

  static setRingRadius(ringRadius: number) {
    if (Platform.OS !== 'ios') return;
    RNProgressHUD.setRingRadius(ringRadius);
  }

  static setCornerRadius(cornerRadius: number) {
    if (Platform.OS !== 'ios') return;
    RNProgressHUD.setCornerRadius(cornerRadius);
  }

  static setHapticsEnabled(hapticsEnabled: Boolean) {
    if (Platform.OS !== 'ios') return;
    RNProgressHUD.setHapticsEnabled(hapticsEnabled);
  }

  static setMinimumDismissTimeInterval(interval: number) {
    if (Platform.OS !== 'ios') return;
    RNProgressHUD.setMinimumDismissTimeInterval(interval);
  }
}
