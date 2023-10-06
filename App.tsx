/**
 * React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React from 'react';
import {StyleSheet} from 'react-native';
import {SafeAreaProvider} from 'react-native-safe-area-context';

import MainNavigator from './src/navigators/MainNavigator';
import ManageCustom from './src/context/ManageCustom';

function App(): JSX.Element {
  return (
    <SafeAreaProvider style={styles.safeAreaContainer}>
      <ManageCustom>
        <MainNavigator />
      </ManageCustom>
    </SafeAreaProvider>
  );
}

const styles = StyleSheet.create({
  safeAreaContainer: {
    flex: 1,
    backgroundColor: 'white',
  },
});

export default App;
