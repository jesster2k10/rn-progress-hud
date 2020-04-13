import * as React from 'react';
import { StyleSheet, View, Button, Platform, Text } from 'react-native';
import ProgressHUD from 'rn-progress-hud';

ProgressHUD.dismiss();
export default function App() {
  const showWithProgress = () => {
    ProgressHUD.show(`Progress 0%`, 'progress');
    const progressInterval = 1 / 5;
    let progress = 0;
    let interval = setInterval(() => {
      if (progress < 1) {
        progress += progressInterval;
        ProgressHUD.setProgress(
          progress,
          `Progress ${Math.floor(progress * 100)}%`
        );
      } else {
        clearInterval(interval);
        if (Platform.OS === 'ios') {
          ProgressHUD.show('Done', 'success');
        } else {
          ProgressHUD.dismiss();
        }
      }
    }, 1000);
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>ProgressHUD</Text>
      <Text style={styles.message}>
        A simple cross-platform loading indicator
      </Text>
      <View style={styles.section}>
        <Button
          title="Show (Default)"
          onPress={() => {
            ProgressHUD.show();
            setTimeout(() => {
              ProgressHUD.dismiss();
            }, 1000);
          }}
        />
        <Button
          title="Show (Error)"
          onPress={() => ProgressHUD.show('error message', 'error')}
        />
        <Button
          title="Show (Info)"
          onPress={() => ProgressHUD.show('info status', 'info')}
        />
        <Button
          title="Show (Success)"
          onPress={() => ProgressHUD.show('Success', 'success')}
        />
        <Button
          title="Show with Status"
          onPress={() => {
            ProgressHUD.show('Example Status');
            setTimeout(() => {
              ProgressHUD.dismiss();
            }, 1000);
          }}
        />
        <Button title="Show with Progress" onPress={showWithProgress} />
        <Button title="Dismiss" onPress={() => ProgressHUD.dismiss()} />
      </View>
      <View style={styles.section}>
        <Button
          title="Set Custom Font"
          onPress={() =>
            ProgressHUD.setFont(
              Platform.select({
                ios: 'HiraKakuProN-W6',
                default: 'sans-serif-bold',
              }),
              14
            )
          }
        />
        <Button
          title="Set Mask (Black)"
          onPress={() => ProgressHUD.setMaskType('black')}
        />
        <Button
          title="Set Mask (Gradient)"
          onPress={() => ProgressHUD.setMaskType('gradient')}
        />
        <Button
          title="Set Mask (None)"
          onPress={() => ProgressHUD.setMaskType('clear')}
        />
        <Button
          title="Set Longer Dismiss Interval"
          onPress={() => ProgressHUD.setMinimumDismissTimeInterval(2000)}
        />
        <Button
          title="Set Shorter Dismiss Interval"
          onPress={() => ProgressHUD.setMinimumDismissTimeInterval(500)}
        />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  section: {
    flexDirection: 'column',
    marginBottom: 25,
    width: '100%',
  },
  message: {
    textAlign: 'center',
    marginTop: 10,
    marginBottom: 50,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    maxWidth: '80%',
  },
});
