import React, {useContext} from 'react';
import {
  ActivityIndicator,
  Button,
  Linking,
  StyleSheet,
  Switch,
  Text,
  View,
} from 'react-native';
import {NativeStackScreenProps} from '@react-navigation/native-stack';

// custom context
import {ManageCustomContext} from '../../context/ManageCustom';

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
  const manageCustomHooks = useContext(ManageCustomContext);
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
      <View style={styles.headerContainer}>
        <Text style={styles.text}>{'Include custom added steps'}</Text>
        <Switch
          value={manageCustomHooks.considerCustomAdded}
          onChange={e => {
            manageCustomHooks.setConsiderCustomAdded(e.nativeEvent.value);
          }}
        />
      </View>
      <TopTabNavigator />
    </View>
  );
};

const styles = StyleSheet.create({
  headerContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: 16,
    marginBottom: 24,
  },
  text: {
    fontWeight: 'bold',
    fontSize: 16,
  },
});

export default HomeScreen;
