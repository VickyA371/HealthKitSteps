import React from 'react';
import {createMaterialTopTabNavigator} from '@react-navigation/material-top-tabs';

// Screens
import StepsCount from '../screens/StepsCount';

// Components
import CustomTabBar from '../components/CustomTabBar';

// Types
import {StepsCountDurationType, TopTabNavigatorScreensType} from './types';

// constants
const Tab = createMaterialTopTabNavigator<TopTabNavigatorScreensType>();

/**
 * TopTabNavigator top tab navigator component
 * @returns React.ReactNode
 */
const TopTabNavigator = () => {
  return (
    <Tab.Navigator
      tabBar={CustomTabBar}
      screenOptions={{
        lazy: true,
      }}>
      <Tab.Screen
        name={StepsCountDurationType.DAILY}
        component={StepsCount}
        options={{
          title: 'D',
        }}
        initialParams={{
          type: StepsCountDurationType.DAILY,
        }}
      />
      <Tab.Screen
        name={StepsCountDurationType.WEEKLY}
        component={StepsCount}
        options={{
          title: 'W',
        }}
        initialParams={{
          type: StepsCountDurationType.WEEKLY,
        }}
      />
      <Tab.Screen
        name={StepsCountDurationType.MONTHLY}
        component={StepsCount}
        options={{
          title: 'M',
        }}
        initialParams={{
          type: StepsCountDurationType.MONTHLY,
        }}
      />
      <Tab.Screen
        name={StepsCountDurationType.SIX_MONTHS}
        component={StepsCount}
        options={{
          title: '6M',
        }}
        initialParams={{
          type: StepsCountDurationType.SIX_MONTHS,
        }}
      />
      <Tab.Screen
        name={StepsCountDurationType.YEARLY}
        component={StepsCount}
        options={{
          title: 'Y',
        }}
        initialParams={{
          type: StepsCountDurationType.YEARLY,
        }}
      />
    </Tab.Navigator>
  );
};

export default TopTabNavigator;
