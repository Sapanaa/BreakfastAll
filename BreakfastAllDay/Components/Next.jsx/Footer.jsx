import React from 'react';
import { View, StyleSheet } from 'react-native';
import { Octicons } from '@expo/vector-icons';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { MaterialIcons } from '@expo/vector-icons';

export default function Footer() {
  return (
    <View style={styles.container}>
      <View style={styles.footer}>
        <Octicons name="person" size={24} color="black" style={styles.icon} />
        <MaterialCommunityIcons name="home-variant-outline" size={24} color="black" style={styles.icon} />
        <MaterialIcons name="favorite" size={24} color="black" style={styles.icon} />
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
    backgroundColor: '#f476cb', // Add a background color for the footer
    paddingVertical: 10, // Add vertical padding to create space between icons and the edge of the footer
  },
  icon: {
    // Add any additional styling for the icons here if needed
    color: '#fff',

  },
});


