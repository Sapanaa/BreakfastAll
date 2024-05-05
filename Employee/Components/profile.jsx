import * as React from "react";
import {View, StyleSheet, Image, Text, TextInput, TouchableOpacity } from "react-native";

function MyProfile() {
  return (
    <View style={styles.container}>
      <View style={styles.profile}>
        <View style={styles.profileImageContainer}>
          <Image
            source={{
              uri: "https://assets.epicurious.com/photos/647df8cad9749492c4d5d407/1:1/w_1600,c_limit/StrawberryMilkshake_RECIPE_053123_3599.jpg", // Update the image URI here
            }}
            style={styles.profileImage}
          />
          <Text style={styles.changePicture}>Change Picture</Text>
        </View>
        <View style={styles.profileInfo}>
          <Text style={styles.label}>Username</Text>
          <TextInput
            style={styles.input}
            placeholder="Enter username"
            placeholderTextColor="#999"
          />
          <Text style={styles.label}>Email</Text>
          <TextInput
            style={styles.input}
            placeholder="Enter email"
            placeholderTextColor="#999"
          />
          <Text style={styles.label}>Phone Number</Text>
          <TextInput
            style={styles.input}
            placeholder="Enter phone number"
            placeholderTextColor="#999"
          />
          <Text style={styles.label}>Password</Text>
          <TextInput
            style={styles.input}
            placeholder="Enter password"
            placeholderTextColor="#999"
            secureTextEntry={true}
          />
        </View>
      </View>
      <TouchableOpacity style={styles.updateButton}>
        <Text style={styles.updateButtonText}>Update</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "flex-start",
    alignItems: "center",
    backgroundColor: "#FFF",
    paddingTop: 20,
  },
  profile: {
    flexDirection: "column",
    alignItems: "center",
    paddingHorizontal: 20,
  },
  profileImageContainer: {
    marginRight: 20,
  },
  profileImage: {
    width: 100,
    height: 100,
    borderRadius: 50,
  },
  changePicture: {
    marginTop: 10,
    textAlign: "center",
    fontSize: 14,
    color: "#666",
  },
  profileInfo: {
    flex: 1,
  },
  label: {
    fontSize: 14,
    fontWeight: "bold",
    marginBottom: 5,
    marginTop: 10,
  },
  input: {
    borderWidth: 1,
    borderColor: "#999",
    borderRadius: 5,
    paddingVertical: 8,
    paddingHorizontal: 10,
    fontSize: 14,
    marginBottom: 10,
  },
  updateButton: {
    backgroundColor: "#171F1D",
    paddingVertical: 15,
    paddingHorizontal: 30,
    borderRadius: 10,
    marginTop: 20,
  },
  updateButtonText: {
    color: "#FFF",
    fontSize: 15,
    fontWeight: "bold",
  },
});

export default MyProfile;