import React, {useContext} from 'react';
import {ActivityIndicator, StyleSheet, Text, View} from 'react-native';

import {MaterialTopTabScreenProps} from '@react-navigation/material-top-tabs';

import useHealthKitData from '../../hooks/useHealthData';
import {ManageCustomContext} from '../../context/ManageCustom';

import baseStyles from '../../constants/baseStyles';
import {
  StepsCountDurationType,
  TopTabNavigatorScreensType,
} from '../../navigators/types';
import colors from '../../assets/colors';

const StepsCount = (
  props: MaterialTopTabScreenProps<
    TopTabNavigatorScreensType,
    StepsCountDurationType
  >,
) => {
  const type = props?.route?.params?.type;

  const manageCustomHooks = useContext(ManageCustomContext);

  const {isLoading, data, error} = useHealthKitData(
    type,
    manageCustomHooks.considerCustomAdded,
  );

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
      <Text style={styles.text}>
        {'Steps Count : ' +
          data.reduce((acc, item, _arr, _index) => {
            return acc + Math.round(item.value);
          }, 0)}
      </Text>
    </View>
  );
};

const styles = StyleSheet.create({
  text: {fontSize: 16, fontWeight: 'bold'},
});

export default StepsCount;
