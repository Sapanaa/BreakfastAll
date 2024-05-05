import React from "react";
import { StyleSheet, View, Text, Image, TouchableOpacity } from "react-native";
import Header from "./MostComp/Header";
import Footer from "./MostComp/Footer";

const SectionTitle = ({ title }) => (
  <Text style={styles.sectionTitle}>{title}</Text>
);

const Divider = () => <View style={styles.divider} />;

const Status = () => {
  return (
    <>
    <Header heading={"Status"}/>
    <View style={styles.mainContainer}>
      
      <View style={styles.infoContainer}>
        <SectionTitle title="Table No 3" />
        <Text style={styles.status}>Status: (Active)</Text>
      </View>
      <Divider />
      <View style={styles.menuList}>
        <Text style={styles.menuItem}> Cheese Burger </Text>
        <Text style={styles.menuItem}> Croissant jam and butter </Text>
        <Text style={styles.menuItem}> Scrambled egg </Text>
        <Text style={styles.menuItem}> Pancakes </Text>
      </View>
      <TouchableOpacity>
      <View style={styles.actionContainer}>
        <Text style={styles.actionText}>Accept Payment</Text>
      </View>
      </TouchableOpacity>
      <Divider />

    </View>
    <Footer/>
    </>
  );
};

const styles = StyleSheet.create({
  mainContainer: {
    backgroundColor: "#FDE7E7",
    maxWidth: 480,
    width: "100%",
    margin: "0 auto",
    paddingVertical: 100,
    height: "100%",
  },
  headerContainer: {
    backgroundColor: "#E9BABA",
    padding: 18,
  },
  headerText: {
    fontSize: 30,
    color: "#000",
  },
  infoContainer: {
    paddingHorizontal: 54,
    marginTop: 19,
  },
  sectionTitle: {
    backgroundColor: "#FFF",
    alignSelf: "flex-end",
    padding: 15,
    fontSize: 20,
  },
  status: {
    marginTop: 51,
    fontSize: 16,
  },
  divider: {
    marginVertical: 22,
    height: 3,
    backgroundColor: "#000",
  },
  menuList: {
    alignSelf: "center",
    marginTop: 44,
  },
  menuItem: {
    fontSize: 20,
    lineHeight: 41,
  },
  actionContainer: {
    backgroundColor: "#E5687F",
    alignSelf: "center",
    marginTop: 115,
    padding: 10,
  },
  actionText: {
    color: "#000",
    fontSize: 20,
    fontFamily: "Radley",
  },
  imageContainer: {
    alignSelf: "center",
    marginTop: 49,
  },
  image: {
    width: 42,
    height: 42,
  },
});

export default Status;