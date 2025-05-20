import React from 'react';
import { View } from 'react-native';
import { verticalScale, scale } from 'react-native-size-matters';
import { SpacerProps } from './index.interface';

const Spacer: React.FC<SpacerProps> = ({ height = 8, width = 0, ...rest }) => (
  <View
    style={{
      height: verticalScale(height),
      width: scale(width),
    }}
    {...rest}
  />
);

export default Spacer;
