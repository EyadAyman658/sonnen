import React from 'react';
import AuthenticatedRoutes from './stacks/authenticated/routes';
import GuestRoutes from './stacks/guest/routes';
import { useAuthStore } from '../store/auth.store';

const AppNavigator = () => {
  const isLoggedIn = useAuthStore((state) => state.isLoggedIn);

  return isLoggedIn ? <AuthenticatedRoutes /> : <GuestRoutes />;
};

export default AppNavigator;
