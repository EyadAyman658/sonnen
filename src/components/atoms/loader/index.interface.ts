import { ActivityIndicatorProps } from 'react-native';

export type LoaderSize = 'small' | 'medium' | 'large';

export interface LoaderProps extends ActivityIndicatorProps {
  sizeVariant?: LoaderSize;
}
