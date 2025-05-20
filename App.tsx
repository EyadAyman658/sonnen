import React, { useEffect } from 'react';
import { Appearance, StyleSheet,SafeAreaView } from 'react-native';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { useThemeStore } from './src/store';
import AppNavigation from './src/navigation';


const queryClient = new QueryClient();

const App = () => {
  const setTheme = useThemeStore((state) => state.setTheme);

  useEffect(() => {
    const listener = Appearance.addChangeListener(({ colorScheme }) => {
      setTheme(colorScheme ?? 'light');
    });

    return () => listener.remove();
  }, [setTheme]);

  return (
    <SafeAreaView  style={styles.container}>
    <QueryClientProvider client={queryClient}>
      <AppNavigation />
    </QueryClientProvider>
    </SafeAreaView>
  );
};
const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: '#fff' },
});

export default App;
