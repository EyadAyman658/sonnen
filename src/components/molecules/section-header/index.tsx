import React from 'react';
import { View, Text } from 'react-native';
import { SectionHeaderProps } from './index.interface';
import { useThemeStore } from '../../../store';
import { themes } from '../../../theme';
import { createStyles } from './style';

const SectionHeader: React.FC<SectionHeaderProps> = ({
  title,
  subtitle,
  titleProps,
  subtitleProps,
}) => {
  const theme = themes[useThemeStore().mode];
  const styles = createStyles(theme.colors.text);

  return (
    <View style={styles.container}>
      <Text style={styles.title} {...titleProps}>{title}</Text>
      {subtitle && (
        <Text style={styles.subtitle} {...subtitleProps}>{subtitle}</Text>
      )}
    </View>
  );
};

export default SectionHeader;
