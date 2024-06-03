import * as React from "react";
import { View, StyleSheet, Text, TextInput, TouchableOpacity, Button, Image, ActivityIndicator, Alert } from "react-native";
import { doc, getDoc, setDoc } from 'firebase/firestore';
import { db } from '../firebase.config';
import Header from "./Header";
import Footer from "./Footer";
import { useState, useEffect } from 'react';
import * as ImagePicker from 'expo-image-picker';
import { useNavigation } from '@react-navigation/native';

function MyProfile() {
  const [nickname, setNickname] = useState('Guest');
  const [image, setImage] = useState(null);
  const [loading, setLoading] = useState(true);
  const navigation = useNavigation();

  const fetchNickname = async () => {
    try {
      const clientRef = doc(db, 'clients', 'unique_client_id');
      const clientSnap = await getDoc(clientRef);
      if (clientSnap.exists() && clientSnap.data().nickname) {
        setNickname(clientSnap.data().nickname);
      }
      setLoading(false);
    } catch (error) {
      console.error("Error fetching nickname: ", error);
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchNickname();
  }, []);

  const pickImage = async () => {
    let result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.All,
      allowsEditing: true,
      aspect: [4, 3],
      quality: 1,
    });

    if (!result.canceled) {
      setImage(result.assets[0].uri);
    }
  };

  const handleSave = async () => {
    try {
      const clientRef = doc(db, 'clients', 'unique_client_id');
      await setDoc(clientRef, { nickname }, { merge: true });
      Alert.alert("Profile saved successfully!");
      fetchNickname(); // Fetch the nickname again after saving
    } catch (error) {
      console.error("Error saving profile: ", error);
      Alert.alert("Error saving profile: ", error.message);
    }
  };

  const handleRequestEmployee = () => {
    navigation.navigate('Request');
  };

  const handleLeaveFeedback = () => {
    navigation.navigate('Feedback');
  };

  if (loading) {
    return (
      <View style={styles.container}>
        <ActivityIndicator size="large" color="#B83838" />
      </View>
    );
  }

  return (
    <>
      <Header heading={"My Profile"} />
      <View style={styles.container}>
        <View style={styles.content}>
          <View style={styles.greeting}>
            <Text style={styles.text}>Hello {nickname},</Text>
            <Text style={styles.text}>Welcome</Text>
          </View>
          {image && <Image source={{ uri: image }} style={styles.image} />}

          <Button title="Upload Picture" onPress={pickImage} />
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
            <Text style={styles.employeeText}>Leave Feedback</Text>
            <TouchableOpacity style={styles.forwardButton} onPress={handleLeaveFeedback}>
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
  image: {
    width: 100,
    height: 100,
    borderRadius: 50,
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
