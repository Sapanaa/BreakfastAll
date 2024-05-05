import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';

function MyGoodbye() {
  return (
    <LinearGradient
      colors={['#FCD5D5',"#999999", '#E9BABA',  "#999999",'#E9BABA', "#E9BABA"]}
      style={styles.gradient}
    >
      <View style={styles.container}>
        <Text style={styles.text}>Thanks!!</Text>
        <Text style={styles.text}>For your visit</Text>
        <Text style={styles.text}>See you next time</Text>
      </View>
    </LinearGradient>
  );
}

const styles = StyleSheet.create({
  gradient: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    width: "100%",
  },
  container: {
    justifyContent: 'center',
    alignItems: 'center',
    flex: 1,
  },
  text: {
    fontSize: 35,
    color: '#000',
    fontWeight: "bold",
    padding: 7,
    fontFamily: 'Helvetica', // Example font family
    textAlign: 'center',
  },
});

export default MyGoodbye;
