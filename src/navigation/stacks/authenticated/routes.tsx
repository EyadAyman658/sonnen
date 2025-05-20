import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import BatteryHistoryScreen from '../../../screens/battery-history';
import { AUTHENTICATED_SCREENS } from './screens';
import { AuthenticatedStackParamList } from './types';

const Stack = createNativeStackNavigator<AuthenticatedStackParamList>();

const AuthenticatedRoutes = () => (
  <Stack.Navigator screenOptions={{ headerShown: false }}>
    <Stack.Screen
      name={AUTHENTICATED_SCREENS.BatteryHistory}
      component={BatteryHistoryScreen}
    />
  </Stack.Navigator>
);

export default AuthenticatedRoutes;
