import * as React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';

import HomeScreen from '../screens/HomeScreen';

import {MainStackScreensType} from './types';
import PermissionScreen from '../screens/PermissionScreen';

const Stack = createNativeStackNavigator<MainStackScreensType>();

const MainNavigator = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="home"
          component={HomeScreen}
          options={{
            headerTitle: 'Home',
          }}
        />
        <Stack.Screen
          name="permission"
          component={PermissionScreen}
          options={{
            headerTitle: 'Permission',
          }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default MainNavigator;
