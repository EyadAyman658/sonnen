import React from 'react';
import { Text } from 'react-native';
import { useThemeStore } from '../../../store';
import { themes } from '../../../theme';
import { LabelProps } from './index.interface';
import { createStyles } from './style';

const Label: React.FC<LabelProps> = ({ children, style, ...rest }) => {
  const theme = themes[useThemeStore().mode];
  const styles = createStyles(theme.colors.text);

  return (
    <Text style={[styles.base, style]} {...rest}>
      {children}
    </Text>
  );
};

export default Label;
