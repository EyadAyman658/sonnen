import React from 'react';
import { ScrollView, View } from 'react-native';
import { styles } from './style';
import { useTranslation } from 'react-i18next';
import ChargingOverview from '../../components/organisms/charging-overview';
import { useChargingData } from '../../services/charging.services';
import Label from '../../components/atoms/label';
import Loader from '../../components/atoms/loader';

const BatteryHistoryScreen: React.FC = () => {
  const { t } = useTranslation();
  const { data, isLoading, isError } = useChargingData();

  if (isLoading) {
    return (
      <View style={styles.centered}>
        <Loader sizeVariant="large" />
        <Label>{t('loading')}</Label>
      </View>
    );
  }

  if (isError || !data) {
    return (
      <View style={styles.centered}>
        <Label>{t('error.loadingData')}</Label>
      </View>
    );
  }

  return (
    <ScrollView contentContainerStyle={styles.container}>
      <ChargingOverview data={data} />
    </ScrollView>
  );
};

export default BatteryHistoryScreen;
