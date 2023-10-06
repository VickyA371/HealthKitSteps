import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import {NativeStackScreenProps} from '@react-navigation/native-stack';

import {MainStackScreensType} from '../../navigators/types';

const PermissionScreen = (
  _props: NativeStackScreenProps<MainStackScreensType, 'permission'>,
) => {
  return (
    <View style={styles.container}>
      <View style={styles.container}>
        <Text>{'Permission Screen'}</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});

export default PermissionScreen;
