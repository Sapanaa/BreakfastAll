import * as React from "react";
import { View, StyleSheet, Text, TextInput, TouchableOpacity } from "react-native";
import { doc, setDoc } from 'firebase/firestore';
import { db } from '../firebase.config';
import Header from "./Header";
import Footer from "./Footer";
import { useNavigation } from '@react-navigation/native'; // Import useNavigation hook

function MyProfile() {
  const [nickname, setNickname] = React.useState('');
  const navigation = useNavigation(); // Initialize useNavigation hook

  const handleEditProfile = () => {
    // Handle edit profile action
    console.log("Edit Profile clicked");
  };

  const handleSave = async () => {
    try {
      const clientRef = doc(db, 'clients', 'unique_client_id');
      await setDoc(clientRef, { nickname }, { merge: true });
      console.log("Name saved successfully!");
    } catch (error) {
      console.error("Error saving name: ", error);
    }
  };

  const handleRequestEmployee = () => {
    // Handle request employee action
    console.log("Request Employee clicked");
    navigation.navigate('Request'); // Navigate to the 'RequestEmployee' screen
  };

  const handleleaveFeedback = () => {
    // Handle request employee action
    console.log("Handle Feedback");
    navigation.navigate('Feedback'); // Navigate to the 'RequestEmployee' screen
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
            <Text style={styles.employeeText}>Request Employee</Text>
            <TouchableOpacity style={styles.forwardButton} onPress={handleRequestEmployee}>
              <Text style={styles.forwardButtonText}>&#10132;</Text>
            </TouchableOpacity>
            </View>
          <View style={styles.employeeRequest}>

            <Text style={styles.employeeText}>Leave Feedback</Text>

            <TouchableOpacity style={styles.forwardButton} onPress={handleleaveFeedback}>
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
