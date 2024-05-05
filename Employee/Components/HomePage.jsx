import React from "react";
import { View, StyleSheet, Image, Text, TouchableOpacity } from "react-native";
import Header from "./MostComp/Header";
import Footer from "./MostComp/Footer";

const menuItems = [
  { title: "Dashboard", key: "dashboard" },
  { title: "Evaluation Page", key: "evaluation" },
  { title: "Edit Profile", key: "editProfile" },
  { title: "Notifications", key: "notifications" },
  { title: "Status", key: "status" },
];

const MenuItem = ({ title }) => (
  <View style={styles.menuItem}>
    <View style={styles.menuItemTextContainer}>
      <Text style={styles.arr}>{title}</Text>
    </View>
    <TouchableOpacity>
    <View style={styles.arrowContainer}>
      <View style={styles.arrowIcon}>
        <Text style={styles.arr}>&gt;</Text>
      </View>
    </View>
    </TouchableOpacity>
  </View>
);

const Home = () => {
  return (
    <>
    <Header heading={"Home"}/>
    <View style={styles.container}>
      <View style={styles.divider} />
      {menuItems.map((item) => (
        <MenuItem key={item.key} title={item.title} />
      ))}
      
    </View>
    <Footer/>
    </>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#f5e2e2",
    display: "flex",
    maxWidth: 680,
    width: "100%",
    flexDirection: "column",
    alignItems: "center",
  },
  header: {
    borderColor: "#000",
    borderWidth: 1,
    backgroundColor: "#E9BABA",
    alignSelf: "stretch",
    alignItems: "center",
    padding: 34,
    fontSize: 20,
  },
  divider: {
    borderRadius: 20,
    backgroundColor: "#FFF",
    marginTop: 21,
    width: 246,
    height: 39,
  },
  menuItem: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginTop: 10,
    width: "100%",
    padding: 20,
  },
  menuItemTextContainer: {
    fontSize: 20,
  },
  arrowContainer: {
    justifyContent: "center",
    alignItems: "flex-end",
  },
  arr: {
    fontSize: 20,
    fontWeight: "bold",
    
  },
  arrowIcon: {
    borderRadius: 10,
    backgroundColor: "#c73749",
    borderColor: "#000",
    borderWidth: 1,
    marginTop: 10,

    justifyContent: "center",
    alignItems: "center",
    padding: 11,
  },
  footer: {
    backgroundColor: "#E5687F",
    alignSelf: "stretch",
    alignItems: "center",
    justifyContent: "center",
    padding: 29,
    marginTop: 367,
  },
  footerImage: {
    width: 42,
    height: 29, // Assuming an aspect ratio of 1.45, adjust accordingly.
  },
});

export default Home;