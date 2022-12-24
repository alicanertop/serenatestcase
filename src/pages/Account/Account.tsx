import React from 'react';

import { StyleSheet, View } from 'react-native';
import { WebView } from 'react-native-webview';

export type AccountProps = {};
type ICacheMode = 'LOAD_NO_CACHE' | 'LOAD_DEFAULT' | 'LOAD_CACHE_ONLY' | 'LOAD_CACHE_ELSE_NETWORK';
type IMixedContentMode = 'always' | 'never' | 'compatibility';

const styles = StyleSheet.create({ webViewContainer: { flex: 1 } });

const defaultWebViewProps = {
  useWebKit: true,
  cacheEnabled: false,
  originWhitelist: ['*'],
  javaScriptEnabled: true,
  domStorageEnabled: true,
  startInLoadingState: false,
  thirdPartyCookiesEnabled: true,
  allowUniversalAccessFromFileURLs: true,
  cacheMode: 'LOAD_NO_CACHE' as ICacheMode,
  mixedContentMode: 'always' as IMixedContentMode,
};

export const Account = ({}: AccountProps) => {
  return (
    <View style={styles.webViewContainer}>
      <WebView {...defaultWebViewProps} source={{ uri: 'https://www.google.com' }} />
    </View>
  );
};
