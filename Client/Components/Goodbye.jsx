import React from "react";
import { View, StyleSheet, Text } from "react-native";

function MyGoodbye() {
  return (
    <View style={styles.view1}>
      <Text style={styles.text}>Thanks!!</Text>
      <Text style={styles.text}>For your visit</Text>
      <Text style={styles.text}>See you next time</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  view1: {
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#FFF",
    maxWidth: 480,
    width: "100%",
    paddingVertical: 20,
  },
  text: {
    fontSize: 60,
    fontFamily: "Jomhuria, sans-serif",
    textAlign: "center",
  },
});

export default MyGoodbye;
