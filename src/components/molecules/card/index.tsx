import React from 'react';
import { View } from 'react-native';
import { useThemeStore } from '../../../store';
import { themes } from '../../../theme';
import { CardProps } from './index.interface';
import { createStyles } from './style';

const Card: React.FC<CardProps> = ({ children, style, ...rest }) => {
  const theme = themes[useThemeStore().mode];
  const styles = createStyles(theme.colors.card);

  return (
    <View style={[styles.container, style]} {...rest}>
      {children}
    </View>
  );
};

export default Card;
