import * as React from "react";
import { View, StyleSheet, Image, Text } from "react-native";

function MyProfile() {
  return (
    <View style={styles.container}>
      <View style={styles.profile}>
        <View style={styles.profileImageContainer}>
          <Image
            source={{
              uri: "https://cdn.builder.io/api/v1/image/assets/TEMP/05ea36dc121a4bb6130efd1d0e98b2bf142723d9b7adc54ab365640bf049d2c3?",
            }}
            style={styles.profileImage}
          />
          <Text style={styles.changePicture}>Change Picture</Text>
        </View>
        <View style={styles.profileInfo}>
          <Text style={styles.label}>Username</Text>
          <Text style={styles.value}>Paul</Text>
          <Text style={styles.label}>Email</Text>
          <Text style={styles.value}>Hello@gmail.com</Text>
          <Text style={styles.label}>Phone Number</Text>
          <Text style={styles.value}>43254654657</Text>
          <Text style={styles.label}>Password</Text>
          {/* Placeholder for password input */}
        </View>
      </View>
      <View style={styles.updateButton}>
        <Text style={styles.updateButtonText}>Update</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#FFF",
  },
  profile: {
    flexDirection: "row",
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
  },
  value: {
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
