import React from 'react';
import { View, Button, StyleSheet, Text } from 'react-native';
import QRCode from 'react-native-qrcode-svg';

export default function QRCodeCompo() {
  const [qrValue, setQRValue] = React.useState('');

  const handleGenerateQR = (tableNumber) => {
    setQRValue(`${tableNumber}`);
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Select Table Number</Text>
      <View style={styles.buttonContainer}>
        {[1, 2, 3, 4].map((tableNumber) => (
          <View key={tableNumber} style={styles.buttonWrapper}>
            <Button
              title={`Table ${tableNumber}`}
              onPress={() => handleGenerateQR(tableNumber)}
            />
          </View>
        ))}
      </View>
      {qrValue ? (
        <View style={styles.qrContainer}>
          <QRCode value={qrValue} size={200} />
        </View>
      ) : null}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    padding: 20,
    backgroundColor: '#fff',
  },
  title: {
    fontSize: 20,
    marginBottom: 20,
  },
  buttonContainer: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    width: '100%',
  },
  buttonWrapper: {
    margin: 10,
  },
  qrContainer: {
    marginTop: 20,
    alignItems: 'center',
  },
});
