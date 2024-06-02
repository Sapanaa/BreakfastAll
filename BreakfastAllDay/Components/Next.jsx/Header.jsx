import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';

export default function Header({ heading }) {
  return (
    <View style={styles.header}>
<View style={styles.headin}> 
      <Text style={styles.heading}>{heading}</Text>
      </View>
    </View>
  );
}
const styles = StyleSheet.create({
  header: {
    position: 'absolute',
    top: 0,
    width: '100%',
    zIndex: 67,
    backgroundColor: '#EFC3E8', // Add a background color for the header
    paddingVertical: 15,
    paddingHorizontal: 20,
    height: '12%',
    flexDirection: 'row',
    alignItems: 'center', // Align items vertically in the center
    flex: 1, // Allow header to take up available vertical space
    
  },
  backbtn:{
    width: 35,
    height: 35, 
    alignItems: 'center',
    justifyContent: 'center',
    marginRight: 10,
    borderRadius: 5,
    backgroundColor: '#c72c47',
    marginTop: 19,
    borderWidth: 1,
    borderColor: 'black',
    borderStyle: 'solid',
  },
  back: {
    fontSize: 24,
    width: '100px',
    borderRadius: 5,
    
  },
  headin:{
    alignItems: 'center',
    position: 'absolute',
    bottom: '20%',
    right: '40%',
  },
  heading: {
    fontSize: 24,
  },
});