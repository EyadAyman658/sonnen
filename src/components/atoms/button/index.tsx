import React from 'react';
import { Text, TouchableOpacity } from 'react-native';
import { ButtonProps } from './index.interface';
import { createStyles } from './style';
import { useThemeStore } from '../../../store/theme.store';
import { themes } from '../../../theme';

const Button: React.FC<ButtonProps> = ({ title, ...rest }) => {
  const theme = themes[useThemeStore().mode];
  const styles = createStyles(theme.colors);

  return (
    <TouchableOpacity style={styles.container} {...rest}>
      <Text style={styles.title}>{title}</Text>
    </TouchableOpacity>
  );
};

export default Button;
