import React from 'react';
import { View  } from 'react-native';
import { styles } from './style';
import { useAuthStore } from '../../store/auth.store';
import  Button from '../../components/atoms/button';
import  Label from '../../components/atoms/label';

const WelcomeScreen: React.FC = () => {
  const setIsLoggedIn = useAuthStore((state) => state.setIsLoggedIn);

  const handleContinue = () => {
    setIsLoggedIn(true);
  };


  return (
    <View style={styles.container}>
      <Label>Welcome to the App</Label>
      <Button title="Continue" onPress={handleContinue} />
    </View>
  );
};

export default WelcomeScreen;
