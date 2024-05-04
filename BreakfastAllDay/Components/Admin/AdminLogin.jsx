import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient'; // Import LinearGradient

const GradientButton = ({ text }) => (
  <TouchableOpacity style={styles.buttonContainer}>
    <View style={styles.button}>
      <Text style={styles.buttonText}>{text}</Text>
    </View>
  </TouchableOpacity>
);

const InputField = ({ label }) => (
  <View style={styles.inputFieldContainer}>
    <Text style={styles.inputLabel}>{label}</Text>
  </View>
);

export default function AdminLogin() {
  return (
    <View style={styles.formContainer}>
        <View style={styles.titleContainer}>
          <Text style={styles.title}>Login</Text>
        </View>
        <InputField label="Email address" />
        <InputField label="*******" />
        <GradientButton text="Login" />
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
    shadowOffset: {
      width: 0,
      height: 30,
    },
    shadowOpacity: 0.5,
    shadowRadius: 60,
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
  button: {
    backgroundColor: '#8359E3',
    borderRadius: 20,
    paddingVertical: 12,
    alignItems: 'center',
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
