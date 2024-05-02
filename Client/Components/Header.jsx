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
    backgroundColor: '#ea8484', // Add a background color for the header
    paddingVertical: 15,
    paddingHorizontal: 20,
    borderBottomWidth: 1,
    borderBottomColor: '#ccc', // Add a border color for the bottom border
  },
  heading: {
    fontSize: 24,
    fontWeight: 'bold',
    textAlign: 'center',
    paddingTop: 7 ,
  },
});

