import React from 'react';
import { View, StyleSheet } from 'react-native';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { MaterialIcons } from '@expo/vector-icons';
import { FontAwesome5 } from '@expo/vector-icons';

export default function Footer() {
  return (
    <View style={styles.container}>
      <View style={styles.footer}>
      <MaterialIcons name="person" size={24} color="black" />
      <MaterialIcons name="home" size={24} color="black" />
      <FontAwesome5 name="concierge-bell" size={24} color="black" />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    position: 'absolute',
    bottom: 0,
    left: 0,
    right: 0,
    
  },
  footer: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
    backgroundColor: '#e35f75', // Add a background color for the footer
    paddingVertical: 10, // Add vertical padding to create space between icons and the edge of the footer
  },
  icon: {
    // Add any additional styling for the icons here if needed
    color: '#fff',

  },
});

