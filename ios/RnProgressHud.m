#import <Foundation/Foundation.h>
#import <React/RCTBridgeModule.h>

@interface RCT_EXTERN_MODULE(ProgressHUD, NSObject)

RCT_EXTERN_METHOD(show: (NSString *)status style:(NSString*)style)
RCT_EXTERN_METHOD(dismiss: (float) delay)
RCT_EXTERN_METHOD(setFont: (NSString*)fontName fontSize:(CGFloat)size)
RCT_EXTERN_METHOD(setBackgroundColor: (UIColor*) color)
RCT_EXTERN_METHOD(setBackgroundLayerColor: (UIColor*) color)
RCT_EXTERN_METHOD(setForegroundColor: (UIColor*) color)
RCT_EXTERN_METHOD(setRingRadius: (CGFloat) radius)
RCT_EXTERN_METHOD(setHapticsEnabled: (BOOL) hapticsEnabled)
RCT_EXTERN_METHOD(setCornerRadius: (CGFloat) radius)
RCT_EXTERN_METHOD(setMaskType: (NSString*) maskType)
RCT_EXTERN_METHOD(setFadeInDuration: (NSTimeInterval) duration)
RCT_EXTERN_METHOD(setFadeOutDuration: (NSTimeInterval) duration)
RCT_EXTERN_METHOD(setMinimumDismissTimeInterval: (NSTimeInterval) interval)
RCT_EXTERN_METHOD(setMaximumDismissTimeInterval: (NSTimeInterval) interval)
RCT_EXTERN_METHOD(setProgress: (float) progress status:(NSString *)status)

@end
