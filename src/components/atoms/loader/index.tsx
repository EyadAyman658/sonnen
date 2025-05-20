import React from 'react';
import { ActivityIndicator } from 'react-native';
import { LoaderProps } from './index.interface';
import { styles, loaderSizes } from './style';

const Loader: React.FC<LoaderProps> = ({ sizeVariant = 'medium', ...rest }) => {
  return (
    <ActivityIndicator
      style={styles.loader}
      size={loaderSizes[sizeVariant]}
      color="#1E90FF"
      {...rest}
    />
  );
};

export default Loader;
