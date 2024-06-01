import * as React from 'react';
import { StatusBar } from 'expo-status-bar';
import AppNavigator from './Navigation';

export default function App() {
  return (
    <>
      <AppNavigator />
      <StatusBar style="auto" />
    </>
  );
}
