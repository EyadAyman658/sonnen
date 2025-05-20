import { StyleSheet } from 'react-native';
import { scale, verticalScale } from 'react-native-size-matters';
import { typography } from '../../../theme/typography';
import { spacing } from '../../../theme/spacing';

export const createStyles = (colors: { primary: string; text: string }) =>
  StyleSheet.create({
    container: {
      backgroundColor: colors.primary,
      paddingVertical: verticalScale(spacing.sm),
      paddingHorizontal: scale(spacing.md),
      borderRadius: scale(8),
      alignItems: 'center',
    },
    title: {
      color: colors.text,
      fontWeight: 'bold',
      fontSize: typography.fontSizes.md,
    },
  });
