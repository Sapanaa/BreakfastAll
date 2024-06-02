// Footer.js

import React from 'react';
import { View, StyleSheet, TouchableOpacity, Text } from 'react-native';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { MaterialIcons } from '@expo/vector-icons';
import { FontAwesome5 } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';

export default function Footer() {
  const navigation = useNavigation();

  const handleProfileNavigation = () => {
    navigation.navigate('Profile');
  };

  const handleOrderStatusNavigation = () => {
    navigation.navigate('OrderStatus');
  };

  return (
    <View style={styles.container}>
      <View style={styles.footer}>
        <TouchableOpacity onPress={handleProfileNavigation}>
          {/* Wrap the MaterialIcons inside a Text component */}
          <Text>
            <MaterialIcons name="person" size={24} color="black" />
          </Text>
        </TouchableOpacity>
        <TouchableOpacity>
          <MaterialIcons name="home" size={24} color="black" />
        </TouchableOpacity>
        <TouchableOpacity onPress={handleOrderStatusNavigation}>
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
