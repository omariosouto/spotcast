import React from 'react';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import { PlayerScreen } from './screens/Player';

export default function App() {
  return (
    <SafeAreaProvider>
      <PlayerScreen />
    </SafeAreaProvider>
  );
}