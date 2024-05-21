import React, { useState } from "react";
import { View, StyleSheet, Text, TextInput, TouchableOpacity, Alert } from "react-native";
import { doc, getDoc } from "firebase/firestore";
import { db } from "../firebase.config"; // Assuming you have configured Firebase

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = async () => {
    try {
      const userRef = doc(db, "users", email);
      const userSnap = await getDoc(userRef);

      if (userSnap.exists()) {
        const userData = userSnap.data();
        if (userData.password === password) {
          // Successful login
          console.log("Login successful");
          // Navigate to dashboard or perform any other action
        } else {
          // Incorrect password
          Alert.alert('Login Failed', 'Invalid email or password. Please try again.');
        }
      } else {
        // User not found
        Alert.alert('Login Failed', 'User not found. Please register or check your credentials.');
      }
    } catch (error) {
      console.error('Error:', error);
      Alert.alert('Error', 'An unexpected error occurred. Please try again later.');
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Login</Text>
      <View style={styles.inputContainer}>
        <Text style={styles.label}>Email Address</Text>
        <TextInput
          style={styles.input}
          value={email}
          onChangeText={setEmail}
          placeholder="Enter your email"
          keyboardType="email-address"
        />
        <Text style={styles.label}>Password</Text>
        <TextInput
          style={styles.input}
          value={password}
          onChangeText={setPassword}
          placeholder="Enter your password"
          secureTextEntry
        />
      </View>
      <View style={styles.loginButtonContainer}>
        <TouchableOpacity style={styles.loginButton} onPress={handleLogin}>
          <Text style={styles.loginButtonText}>Login</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

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
    fontFamily: "Rakkas, sans-serif",
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
    fontFamily: "Inder, sans-serif",
    marginBottom: 20,
  },
  password: {
    backgroundColor: "rgba(0, 0, 0, 0.04)",
    borderRadius: 30,
    padding: 10,
    fontSize: 17,
    fontFamily: "Inder, sans-serif",
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
    fontFamily: "Inika, sans-serif",
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
    fontFamily: "Inika, sans-serif",
    fontWeight: "700",
  }
});

export default Login;
