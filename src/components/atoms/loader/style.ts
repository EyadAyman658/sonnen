import { StyleSheet } from 'react-native';
import { scale } from 'react-native-size-matters';

export const loaderSizes = {
  small: scale(20),
  medium: scale(36),
  large: scale(48),
};

export const styles = StyleSheet.create({
  loader: {
    alignSelf: 'center',
  },
});
