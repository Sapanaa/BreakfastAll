import * as React from "react";
import { View, StyleSheet, Text } from "react-native";

function MyComponent() {
  return (
    <View style={styles.container}>
      <View style={styles.menuItem}>
        <Text style={styles.menuItemText}>Home</Text>
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
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#C4C4C4",
    alignItems: "center",
    justifyContent: "center",
    paddingVertical: 20,
  },
  menuItem: {
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

export default MyComponent;
