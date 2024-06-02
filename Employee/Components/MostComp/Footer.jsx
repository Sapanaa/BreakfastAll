import React from 'react';
import { View, StyleSheet, TouchableOpacity } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { Octicons } from '@expo/vector-icons';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { MaterialIcons } from '@expo/vector-icons';

export default function Footer() {
  const navigation = useNavigation();

  const navigateToProfile = () => {
    // Navigate to the profile page when Octicons icon is clicked
    navigation.navigate('Profile');
  };
  const navigateToHome = () => {
    // Navigate to the profile page when Octicons icon is clicked
    navigation.navigate('Home');
  };
  const navigateToStatus = () => {
    // Navigate to the profile page when Octicons icon is clicked
    navigation.navigate('Status');
  };

  return (
    <View style={styles.container}>
      <View style={styles.footer}>
        <TouchableOpacity onPress={navigateToProfile}>
          <Octicons name="person" size={24} color="black" style={styles.icon} />
        </TouchableOpacity>
        <TouchableOpacity onPress={navigateToHome}>

        <MaterialCommunityIcons name="home-variant-outline" size={24} color="black" style={styles.icon} />
        </TouchableOpacity>
        <TouchableOpacity onPress={navigateToStatus}>

        <MaterialIcons name="favorite" size={24} color="black" style={styles.icon} />
        </TouchableOpacity>

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
    zIndex: 60,
  },
  footer: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
    backgroundColor: '#e5687f', // Add a background color for the footer
    paddingVertical: 10, // Add vertical padding to create space between icons and the edge of the footer
  },
  icon: {
    // Add any additional styling for the icons here if needed
    color: '#fff',
  },
});
