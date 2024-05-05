import React, { useState } from "react";
import { View, StyleSheet, Image, Text, TextInput, TouchableOpacity } from "react-native";
import Header from "./MostComp/Header";
import Footer from "./MostComp/Footer";
import Proff from "../assets/Prof.png"

const ProfileDetail = ({ label, value, onChangeText }) => (
  <View>
    <Text style={styles.detailLabel}>{label}</Text>
    <TextInput
      style={styles.detailValue}
      value={value}
      onChangeText={onChangeText}
      placeholder={`Enter ${label}`}
    />
  </View>
);

const ImageContainer = ({ source }) => (
  <Image resizeMode="cover" source={{source}} style={styles.detailImage} />
);

function MyProfile() {
  const [username, setUsername] = useState("Paul Alexander");
  const [email, setEmail] = useState("hello@gmail.com");
  const [phoneNumber, setPhoneNumber] = useState("43254654657");

  const handleUsernameChange = (text) => setUsername(text);
  const handleEmailChange = (text) => setEmail(text);
  const handlePhoneNumberChange = (text) => setPhoneNumber(text);

  return (
    <>
      <Header heading={"My Profile"} />
      <View style={styles.container}>
        <View style={styles.profileSection}>
          <Image resizeMode="auto" source={Proff} style={styles.profilePic} />
          <TouchableOpacity style={styles.changePictureButton}>
            <Text>Change Picture</Text>
          </TouchableOpacity>
          <ProfileDetail label="Username" value={username} onChangeText={handleUsernameChange} />
          <ProfileDetail label="Email ID" value={email} onChangeText={handleEmailChange} />
          <ProfileDetail label="Phone Number" value={phoneNumber} onChangeText={handlePhoneNumberChange} />
          <View style={styles.passwordBox}>
            <Text style={styles.passwordLabel}>Password</Text>
          </View>
          <TouchableOpacity style={styles.updateButton}>
            <Text style={styles.updateButtonText}>Update</Text>
          </TouchableOpacity>
        </View>
      </View>
      <Footer />
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#FDE7E7",
    display: "flex",
    maxWidth: 680,
    width: "100%",
    flexDirection: "column",
    alignItems: "stretch",
    margin: "0 auto",
  },
  profileSection: {
    alignItems: "center",
    paddingBottom: 20,
    paddingTop: 56,
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
  },
  detailLabel: {
    marginTop: 30,
    fontFamily: "Poppins, sans-serif",
    fontSize: 14,
    fontWeight: "500",
  },
  detailValue: {
    fontFamily: "Poppins, sans-serif",
    borderRadius: 8,
    borderColor: "#A9A9A9",
    borderWidth: 1,
    width: "100%",
    backgroundColor: "rgba(0,0,0,0)",
    marginTop: 13,
    padding: 11,
  },
  passwordBox: {
    marginTop: 29,
    borderRadius: 8,
    borderColor: "#A9A9A9",
    borderWidth: 1,
    backgroundColor: "rgba(0,0,0,0)",
    height: 40,
    width: "90%",
    justifyContent: "center",
    paddingLeft: 10,
  },
  passwordLabel: {
    fontSize: 14,
    fontWeight: "500",
  },
  updateButton: {
    backgroundColor: "#171F1D",
    marginTop: 43,
    width: 283,
    alignItems: "center",
    padding: 13,
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
