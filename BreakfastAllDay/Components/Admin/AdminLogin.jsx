import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity, TextInput, Alert } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient'; // Import LinearGradient
import { useState } from 'react';
const GradientButton = ({ text, onPress }) => (
    <TouchableOpacity style={styles.buttonContainer} onPress={onPress}>
      <LinearGradient colors={['#8359E3', '#7D4EE5']} style={styles.button} start={{ x: 0, y: 0.5 }} end={{ x: 1, y: 0.5 }}>
        <Text style={styles.buttonText}>{text}</Text>
      </LinearGradient>
    </TouchableOpacity>
  );

const InputField = ({ label }) => (
  <View style={styles.inputFieldContainer}>
    <Text style={styles.inputLabel}>{label}</Text>
  </View>
);

export default function AdminLogin() {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [loggedIn, setLoggedIn] = useState(false);
  
    const handleLogin = () => {
      if (email === 'admin@example.com' && password === 'password') {
        setLoggedIn(true);
        Alert.alert('Login Successful', 'Welcome!', [{ text: 'OK', onPress: () => console.log('OK Pressed') }]);
      } else {
        Alert.alert('Login Failed', 'Invalid email or password.', [{ text: 'OK', onPress: () => console.log('OK Pressed') }]);
      }
    };
  return (
    <View style={styles.formContainer}>
        <View style={styles.titleContainer}>
          <Text style={styles.title}>Login</Text>
        </View>
        <View style={styles.inputFieldContainer}>
          <TextInput
            style={styles.input}
            placeholder="Email Address"
            value={email}
            onChangeText={setEmail}
            autoCapitalize="none"
          />
        </View>
        <View style={styles.inputFieldContainer}>
          <TextInput
            style={styles.input}
            placeholder="password"
            value={password}
            onChangeText={setPassword}
            secureTextEntry
          />
        </View>
        <GradientButton text="Login" onPress={handleLogin} />
        {loggedIn && <Text style={styles.successText}>Login successful!</Text>}
        <View style={styles.divider} />
        <GradientButton text="Enter" />
      </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    width: '100%',
    height: '100%',
  },
  formContainer: {
    width: '100%',
    height: '100%',
    justifyContent: 'center',
    alignItems: 'stretch',
    borderRadius: 30,
    backgroundColor: '#f3b0f8',
    shadowColor: '#000',
 
    padding: 30,
    width: '100%',
  },
  titleContainer: {
    marginBottom: 30,
  },
  title: {
    fontSize: 50,
    color: '#000',
    textAlign: 'center',
    fontWeight: 'bold',
  },
  inputFieldContainer: {
    backgroundColor: 'rgba(255, 255, 255, 0.2)',
    borderRadius: 20,
    marginBottom: 20,
    height: 40,
    paddingHorizontal: 20,
    justifyContent: 'center',
  },
  inputLabel: {
    fontSize: 18,
    color: '#463348',
    fontWeight: '200',
  },
  buttonContainer: {
    marginTop: 20,
  },
  buttonContainer: {
    marginTop: 20,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.3,
    shadowRadius: 2,
    elevation: 5, // This elevation value is important for iOS shadow
  },
  buttonWrapper: {
    borderRadius: 20,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.3,
    shadowRadius: 2,
    elevation: 5, // This elevation value is important for iOS shadow
    overflow: 'hidden', // Ensure shadow is clipped within the rounded border
  },
  button: {
    paddingVertical: 12,
    alignItems: 'center',
    borderRadius: 10,
  },
  buttonText: {
    fontSize: 18,
    color: '#FFF',
    fontWeight: 'bold',
  },
  divider: {
    height: 1,
    backgroundColor: 'rgba(255, 255, 255, 0.5)',
    marginVertical: 20,
  },
});
