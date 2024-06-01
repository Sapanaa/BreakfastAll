// Footer.js

import React from 'react';
import { View, StyleSheet, TouchableOpacity, Text } from 'react-native'; // Import Text component
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { MaterialIcons } from '@expo/vector-icons';
import { FontAwesome5 } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native'; // Import the useNavigation hook

export default function Footer() {
  const navigation = useNavigation(); // Initialize the navigation object

  const handleOrderStatusNavigation = () => {
    navigation.navigate('OrderStatus'); // Navigate to the OrderStatus page
  };

  return (
    <View style={styles.container}>
      <View style={styles.footer}>
        <TouchableOpacity>
          <MaterialIcons name="person" size={24} color="black" />
        </TouchableOpacity>
        <TouchableOpacity>
          <MaterialIcons name="home" size={24} color="black" />
        </TouchableOpacity>
        <TouchableOpacity onPress={handleOrderStatusNavigation}>
          {/* Wrap the FontAwesome5 icon inside a Text component */}
          <Text>
            <FontAwesome5 name="concierge-bell" size={24} color="black" />
          </Text>
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
  },
  footer: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
    backgroundColor: '#e35f75',
    paddingVertical: 10,
  },
});
