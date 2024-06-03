import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity, TextInput, Alert } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient'; // Import LinearGradient
import { useState } from 'react';
import axios from 'axios';


const API_KEY = 'AIzaSyArcWEPMgWNyUwmmJ8rn-uc41d_busPoBs';

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


export default function Login({navigation}) {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [loggedIn, setLoggedIn] = useState(false);
  
    const handleLogin = () => {
      const response = signIn(email, password);
      if (response) {
        setLoggedIn(true);
        navigation.navigate("Home");
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
    backgroundColor: "#f5e1e1",
  },
  formContainer: {
    width: '100%',
    height: '100%',
    justifyContent: 'center',
    alignItems: 'stretch',
    borderRadius: 30,
    backgroundColor: '#f5e1e1',
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
  successText: {
    color: 'green',
    textAlign: 'center',
    marginTop: 20,
    fontSize: 18,
  },
});
