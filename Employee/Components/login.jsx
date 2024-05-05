import React from "react";
import { View, StyleSheet, Text,TextInput, TouchableOpacity } from "react-native";

function Mylogin() {
  return (
    <View style={[styles.container, { backgroundColor: "#F9E7E7" }]}>
      <View style={styles.innerContainer}>
        <Text style={styles.title}>Login</Text>
        <View style={styles.inputContainer}>
          <Text style={styles.label}>Email Address</Text>
          <TextInput
            style={styles.input}
            placeholder="Email address"
            placeholderTextColor="#999"
          />
        </View>
        <View style={styles.inputContainer}>
          <Text style={styles.label}>Password</Text>
          <TextInput
            style={styles.input}
            placeholder="*****"
            placeholderTextColor="#999"
            secureTextEntry={true}
          />
        </View>
        <TouchableOpacity style={[styles.enterButtonContainer, { backgroundColor: "#7E74BB" }]}>
          <Text style={styles.enterButtonText}>Login</Text>
        </TouchableOpacity>
        <View style={styles.divider} />
      </View>
      <TouchableOpacity style={[styles.enterButtonContainer, { backgroundColor: "#7E74BB", marginTop: 20 }]}>
        <Text style={styles.enterButtonText}>Enter</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  innerContainer: {
    width: "80%",
    paddingVertical: 20,
    paddingHorizontal: 10,
    borderRadius: 10,
  },
  title: {
    fontSize: 24,
    fontWeight: "bold",
    marginBottom: 20,
  },
  inputContainer: {
    marginBottom: 20,
  },
  label: {
    fontSize: 16,
    marginBottom: 5,
    color: "#333",
  },
  input: {
    borderWidth: 1,
    borderColor: "#999",
    borderRadius: 5,
    paddingVertical: 10,
    paddingHorizontal: 15,
    fontSize: 16,
    color: "#333",
  },
  divider: {
    height: 1,
    backgroundColor: "#999",
    marginBottom: 20,
  },
  enterButtonContainer: {
    width: "80%",
    borderRadius: 10,
    alignItems: "center",
    justifyContent: "center",
    paddingVertical: 15,
  },
  enterButtonText: {
    color: "#FFF",
    fontSize: 16,
    fontWeight: "bold",
  },
});


export default Mylogin;
