import { scale, verticalScale } from 'react-native-size-matters';

export const spacing = {
  xs: scale(4),
  sm: scale(8),
  md: scale(16),
  lg: scale(24),
  xl: scale(32),
  vertical: {
    sm: verticalScale(8),
    md: verticalScale(16),
    lg: verticalScale(24),
  },
};
