import React from 'react';
import {ActivityIndicator, Text, View} from 'react-native';

import {MaterialTopTabScreenProps} from '@react-navigation/material-top-tabs';
import {
  StepsCountDurationType,
  TopTabNavigatorScreensType,
} from '../../navigators/types';
import useHealthKitData from '../../hooks/useHealthData';

import baseStyles from '../../constants/baseStyles';
import colors from '../../assets/colors';

const StepsCount = (
  props: MaterialTopTabScreenProps<
    TopTabNavigatorScreensType,
    StepsCountDurationType
  >,
) => {
  const type = props?.route?.params?.type;

  const {isLoading, data, error} = useHealthKitData(type);

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

  return (
    <View style={baseStyles.flexCenter}>
      <Text>
        {'Steps Count : ' +
          data.reduce((acc, item, _arr, _index) => {
            return acc + item.value;
          }, 0)}
      </Text>
    </View>
  );
};

export default StepsCount;
