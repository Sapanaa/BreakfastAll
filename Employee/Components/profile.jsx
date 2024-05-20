// MyProfile.js
import React, { useState } from "react";
import { View, StyleSheet, Image, Text, TextInput, TouchableOpacity } from "react-native";
import Header from "./Header";
import Footer from "./Footer";
import Pro from "../assets/ClientP.png";
import { collection, doc, setDoc, addDoc } from 'firebase/firestore';
import { db } from '../firebase.config';

function MyProfile() {
  const [nickname, setNickname] = useState('');

  const handleEditProfile = () => {
    console.log("Edit Profile clicked");
  };

  const handleSave = async () => {
    try {
      const clientRef = doc(db, 'clients', 'unique_client_id'); // Replace 'unique_client_id' with the actual client ID
      await setDoc(clientRef, { nickname }, { merge: true });
      console.log("Name saved successfully!");
    } catch (error) {
      console.error("Error saving name: ", error);
    }
  };

  const handleMenuItemRequest = async (menuItem) => {
    try {
      await addDoc(collection(db, 'notifications'), {
        title: 'Menu Item Requested',
        description: `Client has requested the following item: ${menuItem.name}. Please prepare it.`,
        timestamp: new Date(),
      });
      console.log('Notification sent successfully!');
    } catch (error) {
      console.error('Error sending notification: ', error);
    }
  };

  return (
    <>
      <Header heading={"My Profile"} />
      <View style={styles.container}>
        <View style={styles.content}>
          <View style={styles.greeting}>
            <Text style={styles.text}>Hello Ana,</Text>
            <Text style={styles.text}>Welcome</Text>
          </View>
          <Image resizeMode="cover" source={Pro} style={styles.profileImage} />
          <TouchableOpacity style={styles.editProfile} onPress={handleEditProfile}>
            <Text style={styles.editProfileText}>Edit Picture</Text>
          </TouchableOpacity>
          <TextInput
            style={styles.input}
            placeholder="Enter Nickname"
            placeholderTextColor="#999"
            value={nickname}
            onChangeText={setNickname}
          />
          <TouchableOpacity style={styles.action} onPress={handleSave}>
            <Text style={styles.buttonText}>Save</Text>
          </TouchableOpacity>
          <View style={styles.employeeRequest}>
            <Text style={styles.employeeText}>Check Order-History</Text>
            <TouchableOpacity style={styles.forwardButton} onPress={() => handleMenuItemRequest({ name: 'Sample Item' })}>
              <Text style={styles.forwardButtonText}>&#10132;</Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>
      <Footer />
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: 20,
    paddingTop: 100,
    backgroundColor: "#fdeaea",
  },
  text: {
    color: "#B83838",
    fontSize: 24,
    fontWeight: "bold",
    marginBottom: 10,
  },
  content: {
    alignItems: "center",
  },
  greeting: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 20,
  },
  profileImage: {
    width: 120,
    height: 120,
    borderRadius: 60,
    marginBottom: 20,
  },
  editProfile: {
    backgroundColor: "#EC9090",
    borderRadius: 8,
    paddingVertical: 10,
    paddingHorizontal: 20,
    marginBottom: 20,
  },
  editProfileText: {
    fontSize: 18,
    color: "#B83838",
  },
  input: {
    borderWidth: 1,
    borderColor: "#ccc",
    borderRadius: 8,
    paddingHorizontal: 12,
    paddingVertical: 10,
    fontSize: 16,
    color: "#333",
    marginBottom: 20,
    width: "100%",
  },
  action: {
    backgroundColor: "#EC9090",
    borderRadius: 30,
    paddingVertical: 15,
    paddingHorizontal: 50,
    marginBottom: 20,
    alignItems: "center",
  },
  buttonText: {
    fontSize: 18,
    fontWeight: "bold",
    color: "#000",
  },
  employeeRequest: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    marginBottom: 20,
    width: "100%",
  },
  employeeText: {
    fontSize: 18,
    color: "#333",
  },
  forwardButton: {
    backgroundColor: "#E5687F",
    borderRadius: 8,
    padding: 10,
    alignItems: "center",
  },
  forwardButtonText: {
    fontSize: 24,
    color: "#000",
  },
});

export default MyProfile;
