import { StyleSheet } from 'react-native';
import { typography } from '../../../theme/typography';
import { spacing } from '../../../theme/spacing';

export const createStyles = (color: string) =>
  StyleSheet.create({
    base: {
      fontSize: typography.fontSizes.md,
      color,
      marginBottom: spacing.xs,
    },
  });
