import React, {ReactNode} from 'react';
import {Text, Pressable} from 'react-native';

import baseStyles from '../../constants/baseStyles';
import colors from '../../assets/colors';

type CustomTabBarItemPropsType = {
  isFocused: boolean;
  options: any;
  onPress: () => any;
  onLongPress: () => any;
  label:
    | string
    | ((props: {
        focused: boolean;
        color: string;
        children: string;
      }) => ReactNode);
};

const CustomTabBarItem = (props: CustomTabBarItemPropsType) => {
  const {isFocused, options, onPress, onLongPress, label} = props;

  return (
    <Pressable
      accessibilityRole="button"
      accessibilityState={isFocused ? {selected: true} : {}}
      accessibilityLabel={options.tabBarAccessibilityLabel}
      testID={options.tabBarTestID}
      onPress={onPress}
      onLongPress={onLongPress}
      style={[
        baseStyles.flexCenter,
        {
          height: 35,
          backgroundColor: isFocused ? colors.grey : colors.white,
        },
      ]}>
      <Text
        style={{
          color: !isFocused ? colors.black : colors.white,
          fontWeight: isFocused ? 'bold' : 'normal',
        }}>
        {label as string}
      </Text>
    </Pressable>
  );
};

export default CustomTabBarItem;
