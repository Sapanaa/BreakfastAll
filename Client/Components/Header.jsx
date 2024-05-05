import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

export default function Header({ heading }) {
  return (
    <View style={styles.header}>
      <Text style={styles.heading}>{heading}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  header: {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    zIndex: 50,
    backgroundColor: '#ea8484',
    height: 100, // Increased height for the header
    justifyContent: 'flex-end', // Align content to the bottom
    alignItems: 'center', // Center content horizontally
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderBottomWidth: 1,
    borderBottomColor: '#ccc',
  },
  heading: {
    fontSize: 28, // Increased font size for the heading
    fontWeight: 'bold',
    textAlign: 'center',
    paddingBottom: 10, // Padding at the bottom to push heading downwards
  },
});
