import React from 'react';
import { View, StyleSheet, Text, TextInput, TouchableOpacity } from 'react-native';
import Footer from '../Next.jsx/Footer';
import Header from '../Next.jsx/Header';
import { LinearGradient } from 'expo-linear-gradient';

const FormInput = ({ name, placeholder }) => (
  <View style={styles.inputContainer}>
    <TextInput placeholder={placeholder} style={styles.textInput} />
  </View>
);

const InvitationForm = () => {
  const formFields = [
    { name: 'name', placeholder: 'Name' },
    { name: 'email', placeholder: 'Email Address' },
    { name: 'token', placeholder: 'Enter token' },
    { name: 'validity', placeholder: 'Validity period' },
  ];

  return (
    <>
      <Header heading={'Invitations'} />
      <LinearGradient
        colors={['#FBECF8', '#EFC3E8', '#E297D6']}
        style={styles.container}
      >
        <Text style={styles.sendInviteText}>Send Invite</Text>
        {formFields.map((field, index) => (
          <FormInput key={index} name={field.name} placeholder={field.placeholder} />
        ))}
        <TouchableOpacity style={styles.sendButton}>
          <Text style={styles.sendButtonText}>SEND</Text>
        </TouchableOpacity>
      </LinearGradient>
      <Footer />
    </>
  );
};

const styles = StyleSheet.create({
  container: {
    borderRadius: 8,
    paddingHorizontal: 20,
    paddingVertical: 30,
    width: '100%',
    height: '100%',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundImage: 'linear-gradient(120deg, #4c669f, #192f6a)',
  },
  sendInviteText: {
    fontSize: 24,
    marginTop: 20,
  },
  inputContainer: {
    borderRadius: 30,
    backgroundColor: 'rgba(0, 0, 0, 0.04)',
    marginTop: 26,
    padding: 10,
    width: '60%',
  },
  textInput: {
    fontSize: 16,
    padding: 10,
  },
  sendButton: {
    backgroundColor: 'rgba(255, 41, 66, 0.84)',
    borderRadius: 30,
    width: '50%',
    justifyContent: 'center',
    alignItems: 'center',
    padding: 10,
    marginTop: 26,
  },
  sendButtonText: {
    color: '#FFF',
    fontSize: 16,
    fontWeight: 'bold',
  },
});

export default InvitationForm;
