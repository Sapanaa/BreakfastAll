import React, { useState, useEffect } from "react";
import { View, StyleSheet, Image, Text, TextInput, TouchableOpacity, Alert } from "react-native";
import Header from "./MostComp/Header";
import Footer from "./MostComp/Footer";
import Proff from "../assets/Prof.png";
import { db } from "../firebase.config";
import { doc, getDoc, updateDoc } from "firebase/firestore";

const ProfileDetail = ({ label, value, onChangeText }) => (
  <View style={styles.detailContainer}>
    <Text style={styles.detailLabel}>{label}</Text>
    <TextInput
      style={styles.detailValue}
      value={value}
      onChangeText={onChangeText}
      placeholder={`Enter ${label}`}
    />
  </View>
);

const MyProfile = ({route}) => {
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const employeeId = route.params.id; 
  console.log(employeeId);
  useEffect(() => {
    const fetchProfileData = async () => {
      try {
        const docRef = doc(db, "employee", employeeId);
        const docSnap = await getDoc(docRef);

        if (docSnap.exists()) {
          const data = docSnap.data();
          setUsername(data.username);
          setEmail(data.email);
          setPhoneNumber(data.phoneNumber);
        } else {
          console.log("No such document!");
        }
      } catch (error) {
        console.error("Error fetching profile data: ", error);
        Alert.alert("Error", "There was an error fetching the profile data.");
      }
    };

    fetchProfileData();
  }, [employeeId]);

  const handleUpdateProfile = async () => {
    try {
      const docRef = doc(db, "Employee", employeeId);
      await updateDoc(docRef, {
        username: username,
        email: email,
        phoneNumber: phoneNumber,
      });
      Alert.alert("Success", "Profile updated successfully.");
    } catch (error) {
      console.error("Error updating profile: ", error);
      Alert.alert("Error", "There was an error updating the profile.");
    }
  };

  return (
    <>
      <Header heading={"My Profile"} />
      <View style={styles.container}>
        <View style={styles.profileSection}>
          <Image resizeMode="cover" source={Proff} style={styles.profilePic} />
          <TouchableOpacity style={styles.changePictureButton}>
            <Text>Change Picture</Text>
          </TouchableOpacity>
          <ProfileDetail label="Username" value={username} onChangeText={setUsername} />
          <ProfileDetail label="Email ID" value={email} onChangeText={setEmail} />
          <ProfileDetail label="Phone Number" value={phoneNumber} onChangeText={setPhoneNumber} />
          <View style={styles.passwordBox}>
            <Text style={styles.passwordLabel}>Password</Text>
          </View>
          <TouchableOpacity style={styles.updateButton} onPress={handleUpdateProfile}>
            <Text style={styles.updateButtonText}>Update</Text>
          </TouchableOpacity>
        </View>
      </View>
      <Footer />
    </>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#FDE7E7",
    display: "flex",
    maxWidth: 680,
    width: "100%",
    flexDirection: "column",
    alignItems: "stretch",
    margin: "0 auto",
    paddingHorizontal: 20,
    paddingVertical: 40,
  },
  profileSection: {
    alignItems: "center",
    paddingBottom: 20,
  },
  profilePic: {
    borderColor: "#FFFFFF",
    borderWidth: 5,
    borderRadius: 71,
    width: 142,
    height: 142,
  },
  changePictureButton: {
    marginTop: 4,
    fontFamily: "Poppins, sans-serif",
    color: "#007BFF",
  },
  detailContainer: {
    width: "100%",
    marginBottom: 20,
  },
  detailLabel: {
    marginTop: 20,
    fontFamily: "Poppins, sans-serif",
    fontSize: 14,
    fontWeight: "500",
    color: "#333",
  },
  detailValue: {
    fontFamily: "Poppins, sans-serif",
    borderRadius: 8,
    borderColor: "#A9A9A9",
    borderWidth: 1,
    width: "100%",
    backgroundColor: "#FFF",
    marginTop: 10,
    padding: 11,
    fontSize: 16,
  },
  passwordBox: {
    marginTop: 30,
    borderRadius: 8,
    borderColor: "#A9A9A9",
    borderWidth: 1,
    backgroundColor: "#FFF",
    height: 40,
    width: "100%",
    justifyContent: "center",
    paddingLeft: 10,
  },
  passwordLabel: {
    fontSize: 14,
    fontWeight: "500",
    color: "#333",
  },
  updateButton: {
    backgroundColor: "#171F1D",
    marginTop: 40,
    width: "100%",
    alignItems: "center",
    padding: 15,
    borderRadius: 10,
  },
  updateButtonText: {
    color: "#FFF",
    fontSize: 15,
    fontWeight: "700",
    fontFamily: "Poppins, sans-serif",
  },
});

export default MyProfile;