import * as React from "react";
import { View, StyleSheet, Text } from "react-native";
import { Ionicons } from '@expo/vector-icons';

function MyHome() {
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <View style={styles.navigation}>
          <View style={styles.backArrow}>
            <Text>&lt;</Text>
          </View>
          <Text style={styles.title}>Home</Text>
          <Ionicons name="person" size={24} color="black" />
        </View>
      <View style={styles.menuItem}>
        <Text style={styles.menuItemText}>Dashboard</Text>
        <Text style={styles.menuItemArrow}>&gt;</Text>
      </View>
      <View style={styles.menuItem}>
        <Text style={styles.menuItemText}>Evaluation Page</Text>
        <Text style={styles.menuItemArrow}>&gt;</Text>
      </View>
      <View style={styles.menuItem}>
        <Text style={styles.menuItemText}>Edit Profile</Text>
        <Text style={styles.menuItemArrow}>&gt;</Text>
      </View>
      <View style={styles.menuItem}>
        <Text style={styles.menuItemText}>Notifications</Text>
        <Text style={styles.menuItemArrow}>&gt;</Text>
      </View>
      <View style={styles.menuItem}>
        <Text style={styles.menuItemText}>Status</Text>
        <Text style={styles.menuItemArrow}>&gt;</Text>
      </View>
    </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#C4C4C4",
  },
  header: {
    width: "100%",
    backgroundColor: "#E9BABA",
    paddingVertical: 20,
    paddingHorizontal: 30,
  },
  navigation: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
  },
  backArrow: {
    width: 36,
    height: 36,
    borderRadius: 18,
    backgroundColor: "#D9D9D9",
    justifyContent: "center",
    alignItems: "center",
  },
  title: {
    fontSize: 20,
    fontWeight: "bold",
  },
  icon: {
    fontSize: 24,
  },
  menuItem: {
    flex:1,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    backgroundColor: "#E9BABA",
    paddingHorizontal: 20,
    paddingVertical: 10,
    borderRadius: 10,
    marginBottom: 10,
  },
  menuItemText: {
    fontSize: 20,
    fontWeight: "bold",
  },
  menuItemArrow: {
    fontSize: 20,
  },
});

export default MyHome;
