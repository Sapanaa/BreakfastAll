import React from 'react';
import { View, Image, StyleSheet, TouchableOpacity, Text, Alert } from 'react-native';



const Nex = () => {
  const imagesData = [
    { id: '1', uri: "https://cdn.builder.io/api/v1/image/assets/TEMP/4f3816a27daa3c740f95c76d38a2be15f193be2965d55f841adb3cbb7fb68d25?apiKey=7d6ce2254cc649fb8454065047516e8a&", style: styles.imageStyle },
    { id: '2', uri: "https://cdn.builder.io/api/v1/image/assets/TEMP/095f7160cfe648cb1e6a0a2e3b09921a9bdd270f424955ebfd4c72857d1839d5?apiKey=7d6ce2254cc649fb8454065047516e8a&", style: styles.imageStyle },
    { id: '3', uri: "https://cdn.builder.io/api/v1/image/assets/TEMP/b53b15c5472f49e0fa829a95ef1f5118b61c88885367c3f0a55cf9dae9fe00bf?apiKey=7d6ce2254cc649fb8454065047516e8a&", style: styles.largeImageStyle },
  ];

  const footerButtonsData = [
    { id: '1', title: 'Home', onPress: () => Alert.alert('Footer Button Pressed', 'Home Pressed') },
    { id: '2', title: 'Profile', onPress: () => Alert.alert('Footer Button Pressed', 'Profile Pressed') },
    { id: '3', title: 'Settings', onPress: () => Alert.alert('Footer Button Pressed', 'Settings Pressed') },
  ];

  return (
    <View style={styles.mainContainer}>
      <View style={styles.imagesContainer}>
        {imagesData.map((image) => (
          <CustomImage key={image.id} sourceUri={image.uri} style={image.style} />
        ))}
      </View>
      <View style={styles.footer}>
        {footerButtonsData.map((button) => (
          <FooterButton key={button.id} title={button.title} onPress={button.onPress} />
        ))}
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  mainContainer: {
    backgroundColor: "#E5687F",
    flex: 1,
    justifyContent: 'space-between',
    paddingTop: 22,
    paddingBottom: 22,
    paddingLeft: 42,
    paddingRight: 42,
  },
  imagesContainer: {
    flexDirection: 'column',
    alignItems: 'center',
  },
  imageStyle: {
    width: 16,
    height: 16 * 1.33,
    marginBottom: 8,
  },
  largeImageStyle: {
    width: 156,
    height: 156 / 6.67,
    marginBottom: 8,
  },
  footer: {
    flexDirection: 'row',
    justifyContent: 'space-evenly',
    width: '100%',
  },
  footerButton: {
    backgroundColor: '#FFF',
    padding: 10,
    borderRadius: 5,
  },
  footerButtonText: {
    color: '#E5687F',
    fontSize: 16,
  },
});

export default Nex;