import React from 'react';
import { StyleSheet } from 'react-native';

import { MainNavigatior } from 'navigation';
import { SafeAreaView } from 'react-native-safe-area-context';

const styles = StyleSheet.create({
  safeAreaView: { flex: 1 },
});

export const App = () => {
  return (
    <SafeAreaView edges={['top', 'left', 'right']} style={styles.safeAreaView}>
      <MainNavigatior />
    </SafeAreaView>
  );
};
