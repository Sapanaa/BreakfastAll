import * as React from 'react';
import { StatusBar } from 'expo-status-bar';
import AppNavigator from './Navigation';
//import QRCode from 'react-native-qrcode-svg';
import QRCodeCompo from './QRCode';

export default function App() {
  return (
    <>
     <AppNavigator />
    {/* <QRCodeCompo/>*/}

      <StatusBar style="auto" />
    </>
  );
}
