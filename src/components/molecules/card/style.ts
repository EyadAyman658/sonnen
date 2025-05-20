import { StyleSheet } from 'react-native';
import { spacing } from '../../../theme/spacing';

export const createStyles = (background: string) =>
  StyleSheet.create({
    container: {
      backgroundColor: background,
      padding: spacing.md,
      borderRadius: 12,
      elevation: 2,
      shadowColor: '#000',
      shadowOpacity: 0.1,
      shadowOffset: { width: 0, height: 2 },
      shadowRadius: 4,
    },
  });
