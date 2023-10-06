import React from 'react';
import {ActivityIndicator, StyleSheet, Text, View} from 'react-native';
import {NativeStackScreenProps} from '@react-navigation/native-stack';

import useHealthPermissions from '../../hooks/useHealthPermissions';

import {MainStackScreensType} from '../../navigators/types';
import baseStyles from '../../constants/baseStyles';
import colors from '../../assets/colors';
import TopTabNavigator from '../../navigators/TopTabNavigator';

const HomeScreen = (
  _props: NativeStackScreenProps<MainStackScreensType, 'home'>,
) => {
  const {error, isLoading, permissionGranted} = useHealthPermissions();

  if (error) {
    <View style={baseStyles.flexCenter}>
      <Text>{typeof error === 'string' ? error : 'Something went wrong'}</Text>
    </View>;
  }

  if (isLoading || !permissionGranted) {
    return (
      <View style={baseStyles.flexCenter}>
        <ActivityIndicator size={'large'} color={colors.black} />
      </View>
    );
  }

  return (
    <View style={[baseStyles.flexWhite, {paddingTop: 16}]}>
      <TopTabNavigator />
    </View>
  );
};

const styles = StyleSheet.create({});

export default HomeScreen;
