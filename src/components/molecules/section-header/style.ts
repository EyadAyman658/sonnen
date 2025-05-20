import { StyleSheet } from 'react-native';
import { typography } from '../../../theme/typography';
import { spacing } from '../../../theme/spacing';

export const createStyles = (textColor: string) =>
  StyleSheet.create({
    container: {
      marginBottom: spacing.md,
    },
    title: {
      fontSize: typography.fontSizes.lg,
      fontWeight: '700',
      color: textColor,
    },
    subtitle: {
      fontSize: typography.fontSizes.sm,
      color: textColor,
      marginTop: spacing.xs,
    },
  });
