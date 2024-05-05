import React from "react";
import { View, StyleSheet, Text } from "react-native";

function MyComponent() {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Login</Text>
      <View style={styles.inputContainer}>
        <Text style={styles.label}>Email Address</Text>
        <Text style={styles.password}>*****</Text>
      </View>
      <View style={styles.loginButtonContainer}>
        <View style={styles.loginButton}>
          <Text style={styles.loginButtonText}>Login</Text>
        </View>
      </View>
      <View style={styles.divider} />
      <View style={styles.enterButtonContainer}>
        <Text style={styles.enterButtonText}>Enter</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    borderRadius: 50,
    backgroundColor: "#F9E7E7",
    maxWidth: 480,
    width: "100%",
    paddingHorizontal: 36,
    paddingVertical: 75,
    alignItems: "center",
  },
  title: {
    fontSize: 50,
    borderWidth: 1,
    borderColor: "#000",
    paddingHorizontal: 20,
  },
  inputContainer: {
    marginTop: 54,
    alignItems: "center",
  },
  label: {
    backgroundColor: "rgba(0, 0, 0, 0.04)",
    borderRadius: 30,
    padding: 10,
    fontSize: 17,
    marginBottom: 20,
  },
  password: {
    backgroundColor: "rgba(0, 0, 0, 0.04)",
    borderRadius: 30,
    padding: 10,
    fontSize: 17,
  },
  loginButtonContainer: {
    marginTop: 20,
    alignItems: "center",
  },
  loginButton: {
    borderRadius: 30,
    backgroundColor: "#7E74BB",
    paddingVertical: 10,
    paddingHorizontal: 16,
  },
  loginButtonText: {
    fontSize: 18,
    color: "#FEFCFC",
    fontWeight: "700",
  },
  divider: {
    backgroundColor: "rgba(0, 0, 0, 0.10)",
    marginTop: 20,
    height: 1,
    width: "100%",
  },
  enterButtonContainer: {
    marginTop: 165,
    alignItems: "center",
  },
  enterButtonText: {
    borderRadius: 20,
    backgroundColor: "#7E74BB",
    color: "#FEFCFC",
    paddingVertical: 9,
    paddingHorizontal: 16,
    fontSize: 20,
    fontWeight: "700",
  },
});

export default MyComponent;
