import {StyleSheet} from 'react-native';
import colors from '../assets/colors';

const baseStyles = StyleSheet.create({
  flexCenter: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  flexWhite: {
    flex: 1,
    backgroundColor: colors.white,
  },
});

export default baseStyles;
