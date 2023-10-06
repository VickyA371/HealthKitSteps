import React from 'react';
import {ActivityIndicator, Button, Linking, Text, View} from 'react-native';
import {NativeStackScreenProps} from '@react-navigation/native-stack';

// navigators
import TopTabNavigator from '../../navigators/TopTabNavigator';

// hooks
import useHealthPermissions from '../../hooks/useHealthPermissions';

import {MainStackScreensType} from '../../navigators/types';
import baseStyles from '../../constants/baseStyles';
import colors from '../../assets/colors';

const HomeScreen = (
  _props: NativeStackScreenProps<MainStackScreensType, 'home'>,
) => {
  const {error, isLoading, permissionGranted} = useHealthPermissions();

  if (error) {
    <View style={baseStyles.flexCenter}>
      <Text>{typeof error === 'string' ? error : 'Something went wrong'}</Text>
    </View>;
  }

  if (isLoading) {
    return (
      <View style={baseStyles.flexCenter}>
        <ActivityIndicator size={'large'} color={colors.black} />
      </View>
    );
  }

  if (!permissionGranted) {
    return (
      <View style={baseStyles.flexCenter}>
        <Text>{'HealthKit Permission required!'}</Text>
        <Button title="Open Settings" onPress={Linking.openSettings} />
      </View>
    );
  }

  return (
    <View style={[baseStyles.flexWhite, {paddingTop: 16}]}>
      <TopTabNavigator />
    </View>
  );
};

export default HomeScreen;
