import * as React from "react";
import { View, StyleSheet, Image, Text, TouchableOpacity } from "react-native";
import { useNavigation } from '@react-navigation/native';
import Breakfast from "../assets/Breakfast.png";

function MyHomePage() {
  const navigation = useNavigation();

  return (
    <View style={styles.container}>
      <Image
        resizeMode="auto"
        source={Breakfast}
        style={styles.image}
      />
      <Text style={styles.heading}>BREAKFAST ALL DAY</Text>
      <Text style={styles.description}>
        Eat healthy, Eat tasty
      </Text>
      <TouchableOpacity style={styles.qrCode} onPress={() => navigation.navigate('Home')}>
        <Text style={styles.qrCodeText}>Scan QR code</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    borderRadius: 45,
    backgroundColor: "#E9BABA",
    maxWidth: 480,
    width: "100%",
    flexDirection: "column",
    alignItems: "center",
    padding: 40,
    margin: "0 auto",
  },
  image: {
    width: "100%",
    aspectRatio: 1,
  },
  heading: {
    color: "#93092A",
    marginTop: 48,
    fontSize: 32,
  },
  description: {
    color: "#0D6056",
    marginTop: 27,
    marginLeft: 22,
    textAlign: "center",
  },
  qrCode: {
    backgroundColor: "#A25252",
    borderRadius: 30,
    paddingVertical: 15,
    paddingHorizontal: 10,
    marginTop: 58,
  },
  qrCodeText: {
    color: "#fff",
  },
});

export default MyHomePage;
