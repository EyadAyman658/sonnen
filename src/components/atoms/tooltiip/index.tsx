import React from 'react';
import { View, Text } from 'react-native';
import { createStyles } from './style';

interface TooltipProps {
  x: number;
  y: number;
  value: number;
  label: string;
}

  const styles = createStyles();

const TooltipDecorator: React.FC<TooltipProps> = ({ x, y, value, label }) => (
  <View style={[styles.tooltip, { top: y - 40, left: x - 20 }]}>
    <Text style={styles.text}>{`${value}% at ${label}`}</Text>
  </View>
);



export default TooltipDecorator;
