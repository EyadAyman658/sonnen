import React, { useState } from 'react';
import { View, Text, ScrollView, Dimensions } from 'react-native';
import { LineChart } from 'react-native-chart-kit';
import { BatteryChartProps } from './index.interface';
import { styles } from './style';
import TooltipDecorator from '../../atoms/tooltiip';

const screenWidth = Dimensions.get('window').width;

const BatteryChart: React.FC<BatteryChartProps> = ({ data }) => {
  const [tooltip, setTooltip] = useState<{
    x: number;
    y: number;
    index: number;
    value: number;
    color?: string;
  } | null>(null);

  const values = data.map(item => item.chargingLevel);
  const labels = data.map(item => {
    const hour = new Date(item.date).getHours();
    const suffix = hour >= 12 ? 'PM' : 'AM';
    const formattedHour = hour % 12 === 0 ? 12 : hour % 12;
    return `${formattedHour} ${suffix}`;
  });

  const chartWidth = Math.max(screenWidth, labels.length * 40);

  return (
    <View style={styles.container}>
      <Text style={{ fontWeight: '600', marginBottom: 8 }}>
        Charging Level (%)
      </Text>

      <ScrollView horizontal showsHorizontalScrollIndicator={false}>
        <View>
          <LineChart
            data={{
              labels,
              datasets: [{ data: values }],
            }}
            width={chartWidth}
            height={250}
            chartConfig={{
              backgroundColor: '#fff',
              backgroundGradientFrom: '#fff',
              backgroundGradientTo: '#fff',
              decimalPlaces: 0,
              color: () => '#1E90FF',
              labelColor: () => '#666',
            }}
            bezier
            style={{ borderRadius: 12 }}
            withVerticalLines={false}
            withInnerLines
            onDataPointClick={({ index, value, getColor, x, y }) => {
              setTooltip({ x, y, index, value, color: getColor(0) });
            }}
            decorator={() =>
  tooltip ? (
    <TooltipDecorator
      x={tooltip.x}
      y={tooltip.y}
      value={tooltip.value}
      label={labels[values.indexOf(tooltip.value)]}
    />
  ) : null
}

          />
        </View>
      </ScrollView>

      <Text style={{ textAlign: 'center', marginTop: 6 }}>
        Hour of the Day
      </Text>
    </View>
  );
};

export default BatteryChart;
