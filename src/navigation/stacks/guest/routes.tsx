import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import WelcomeScreen from '../../../screens/welcome';
import { GUEST_SCREENS } from './screens';
import { GuestStackParamList } from './types';

const Stack = createNativeStackNavigator<GuestStackParamList>();

const GuestRoutes = () => (
  <Stack.Navigator screenOptions={{ headerShown: false }}>
    <Stack.Screen
      name={GUEST_SCREENS.Welcome}
      component={WelcomeScreen}
    />
  </Stack.Navigator>
);

export default GuestRoutes;
