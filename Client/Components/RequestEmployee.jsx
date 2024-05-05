import React, { useState } from "react";
import { View, Text, StyleSheet, Image, TouchableOpacity, TextInput } from "react-native";
import Footer from "./Footer";
import Header from "./Header";

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

const MyRequest = () => {
  const [othersInputText, setOthersInputText] = useState(""); // State to hold the text input value

  const handleMenuItemPress = (label) => {
    console.log(`Menu item pressed: ${label}`);
    // Additional logic based on the pressed menu item
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
                onChangeText={(text) => setOthersInputText(text)}
              />
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
});

export default MyRequest;
