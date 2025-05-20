import React from 'react';
import { View } from 'react-native';
import { styles } from './style';
import SectionHeader from '../../molecules/section-header';
import Card from '../../molecules/card';
import BatteryChart from '../../molecules/battery-chart';
import { ChargingOverviewProps } from './index.interface';

const ChargingOverview: React.FC<ChargingOverviewProps> = ({ data }) => {
  return (
    <View style={styles.container}>
      <SectionHeader title="Battery Usage" subtitle="Last 24 hours" />
      <Card>
        <BatteryChart data={data} />
      </Card>
    </View>
  );
};

export default ChargingOverview;
