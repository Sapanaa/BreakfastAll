import React, { useState } from "react";
import { View, Text, StyleSheet, TextInput, TouchableOpacity, Alert } from "react-native";
import { collection, addDoc, serverTimestamp } from "firebase/firestore";
import { db } from "../firebase.config";
import Header from "./Header";
import { useRoute } from '@react-navigation/native';

import Footer from "./Footer";

const menuItemData = [
  { key: 'drinkOrder', label: 'Drink Order Assistance' },
  { key: 'techSupport', label: 'Technical Support\n(Wifi connectivity)' },
  { key: 'menuRecommendation', label: 'Menu Recommendation' },
  { key: 'generalEnquiry', label: 'General Enquiry' },
  { key: 'getCheck', label: 'Get Check' },
];

const MenuItem = ({ label, onPress }) => (
  <TouchableOpacity onPress={onPress} style={styles.menuItem}>
    <Text style={styles.menuItemText}>{label}</Text>
  </TouchableOpacity>
);

const MyRequest = ({route}) => {
  const [othersInputText, setOthersInputText] = useState("");
 const {scannedData} = route.params;

  const handleMenuItemPress = async (label) => {
    console.log(`Menu item pressed: ${label}`);
    try {
      await addDoc(collection(db, 'notifications'), {
        type: 'request',
        requestType: label,
        tableNumber: scannedData,
        timestamp: serverTimestamp(),
      });
      Alert.alert("Success", "Your request has been submitted successfully!", [
        { text: "OK", onPress: () => console.log("OK Pressed") },
      ]);
    } catch (error) {
      console.error("Error adding request: ", error);
      Alert.alert("Error", "There was an error submitting your request. Please try again later.");
    }
  };

  const handleOthersInputChange = (text) => {
    setOthersInputText(text);
  };

  return (
    <>
      <Header heading={"Request Employee"} />
      <View style={styles.container}>
        <View style={styles.content}>
          <View style={styles.menuList}>
            {menuItemData.map((item) => (
              <MenuItem
                key={item.key}
                label={item.label}
                onPress={() => handleMenuItemPress(item.label)}
              />
            ))}
            <View style={styles.othersSection}>
              <Text>Others</Text>
            </View>
            <View style={styles.othersInput}>
              <TextInput
                style={styles.textInput}
                multiline
                placeholder="Write here..."
                value={othersInputText}
                onChangeText={handleOthersInputChange}
              />
              <TouchableOpacity
                style={styles.submitButton}
                onPress={() => handleMenuItemPress(othersInputText)}
              >
                <Text>Submit Others</Text>
              </TouchableOpacity>
            </View>
          </View>
        </View>
      </View>
      <Footer />
    </>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#FDE7E7",
    paddingTop: 100,
  },
  content: {
    flex: 1,
    paddingHorizontal: 20,
    marginTop: 20,
    width: "100%",
  },
  menuList: {
    backgroundColor: "#FFF",
    paddingVertical: 20,
    paddingHorizontal: 10,
    alignItems: "center",
  },
  menuItem: {
    backgroundColor: "#EBB3B3",
    borderRadius: 20,
    padding: 10,
    marginBottom: 10,
  },
  menuItemText: {
    fontFamily: "Roboto",
    textAlign: "center",
  },
  othersSection: {
    marginBottom: 10,
  },
  othersInput: {
    backgroundColor: "#D9D9D9",
    borderRadius: 20,
    padding: 20,
    height: 100,
    justifyContent: "flex-start",
  },
  textInput: {
    flex: 1,
    fontSize: 16,
    color: "#333",
  },
  submitButton: {
    marginTop: 10,
    backgroundColor: "#E5687F",
    borderRadius: 8,
    padding: 10,
    alignItems: "center",
  },
});

export default MyRequest;
