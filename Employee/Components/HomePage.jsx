import React from "react";
import { View, StyleSheet, Text, TouchableOpacity } from "react-native";
import { useNavigation } from '@react-navigation/native';
import Header from "./MostComp/Header";
import Footer from "./MostComp/Footer";

const menuItems = [
  { title: "Dashboard", screen: "Dashboard" },
  { title: "Evaluation Page", screen: "Evaluation" },
  { title: "Edit Profile", screen: "Profile" },
  { title: "Status", screen: "Status" },
  {title: "Notification", screen: "notification"}
];

const MenuItem = ({ item, id }) => {
  const navigation = useNavigation();

  return (
    <TouchableOpacity onPress={() => navigation.navigate(item.screen, {id: id})}>
      <View style={styles.menuItem}>
        <View style={styles.menuItemTextContainer}>
          <Text style={styles.arr}>{item.title}</Text>
        </View>
        <View style={styles.arrowContainer}>
          <View style={styles.arrowIcon}>
            <Text style={styles.arr}>&gt;</Text>
          </View>
        </View>
      </View>
    </TouchableOpacity>
  );
};

const Home = ({route}) => {
  const id = route.params.id;
  return (
    <>
      <Header heading={"Home"} />
      <View style={styles.container}>
        <View style={styles.divider} />
        {menuItems.map((item, index) => (
          <MenuItem key={index} item={item} id = {id}/>
        ))}
      </View>
      <Footer />
    </>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#f5e2e2",
    display: "flex",
    maxWidth: 680,
    width: "100%",
    height: "100%",
        flexDirection: "column",
    alignItems: "center",
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
    fontFamily: "Inder, sans-serif",
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
    fontFamily: "Inder, sans-serif",
    borderRadius: 10,
    backgroundColor: "#c73749",
    borderColor: "#000",
    borderWidth: 1,
    marginTop: 10,
    justifyContent: "center",
    alignItems: "center",
    padding: 11,
  },
});

export default Home;
