import {NativeStackScreenProps} from '@react-navigation/native-stack';
import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import {MainStackScreensType} from '../../navigators/types';

const HomeScreen = (
  _props: NativeStackScreenProps<MainStackScreensType, 'home'>,
) => {
  return (
    <View style={styles.container}>
      <Text>{'Home Screen'}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
});

export default HomeScreen;
