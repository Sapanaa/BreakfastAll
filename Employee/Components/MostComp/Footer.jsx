import React from 'react';
import { View, StyleSheet , TouchableOpacity} from 'react-native';
import { Octicons } from '@expo/vector-icons';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { MaterialIcons } from '@expo/vector-icons';

export default function Footer() {
  const handleHomePress = () => {
    console.log('Home icon pressed');
  };
  return (
    <View style={styles.container}>
      <View style={styles.footer}>
      
        {/*<Octicons name="person" size={24} color="black" style={styles.icon} />*/}
        <TouchableOpacity onPress={handleHomePress}>
        <MaterialCommunityIcons name="home-variant-outline" size={24} color="black" style={styles.icon} />
      {/*<MaterialIcons name="favorite" size={24} color="black" style={styles.icon} />*/}
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
    backgroundColor: '#e0a5a5', // Add a background color for the footer
    paddingVertical: 15, // Add vertical padding to create space between icons and the edge of the footer
  },
  icon: {
    // Add any additional styling for the icons here if needed
    color: '#fff',

  },
});


