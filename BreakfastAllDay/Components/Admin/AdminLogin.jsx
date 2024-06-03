import React, { useState } from "react";
import { View, StyleSheet, Text, TextInput, TouchableOpacity, Alert } from "react-native";
import axios from 'axios';


const API_KEY = 'AIzaSyArcWEPMgWNyUwmmJ8rn-uc41d_busPoBs';

const signIn = async (email, password) => {
  try {
    const response = await axios.post(`https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=${API_KEY}`, {
      email,
      password,
      returnSecureToken: true
    });
    console.log('User signed in!', response.data);
    return response.data;
  } catch (error) {
    console.error('Sign In Error:', error.response.data.error.message);
    throw new Error(error.response.data.error.message);
  }
};

const Login = ({navigation}) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = async () => {
    try {
    const response = await signIn(email, password);
    if(response){
      navigation.navigate("AdminLoad");
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
    justifyContent: "center",
  },
  title: {
    fontSize: 50,
    fontFamily: "Rakkas, sans-serif",
    borderWidth: 1,
    borderColor: "#000",
    paddingHorizontal: 20,
    textAlign: "center",
  },
  inputContainer: {
    marginTop: 54,
    width: '100%',
  },
  label: {
    fontSize: 17,
    fontFamily: "Inder, sans-serif",
    marginBottom: 8,
    color: '#333',
  },
  input: {
    backgroundColor: "rgba(0, 0, 0, 0.04)",
    borderRadius: 30,
    padding: 10,
    fontSize: 17,
    fontFamily: "Inder, sans-serif",
    marginBottom: 20,
  },
  loginButtonContainer: {
    marginTop: 20,
    width: '100%',
    alignItems: "center",
  },
  loginButton: {
    borderRadius: 30,
    backgroundColor: "#7E74BB",
    paddingVertical: 10,
    paddingHorizontal: 16,
    alignItems: 'center',
    justifyContent: 'center',
    width: '100%',
  },
  loginButtonText: {
    fontFamily: "Inika, sans-serif",
    fontSize: 18,
    color: "#FEFCFC",
    fontWeight: "700",
  },
});

export default Login;