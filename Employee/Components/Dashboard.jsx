import React from "react";
import { View, StyleSheet, Text } from "react-native";
import { Ionicons } from '@expo/vector-icons';

function MyDashboard() {
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <View style={styles.navigation}>
          <View style={styles.backArrow}>
            <Text>&lt;</Text>
          </View>
          <Text style={styles.title}>Dashboard</Text>
          <Ionicons name="person" size={24} color="black" />
        </View>
        <Text style={styles.activeOrders}>Active Orders</Text>
        <Text style={styles.tableNumber}>Table NO: 3     2min</Text>
        <Text style={styles.tableNumber}>Table NO: 7     5min</Text>
        <Text style={styles.tableNumber}>Table NO: 9     1min</Text>
        <View style={styles.notifications}>
          <Text style={styles.notificationText}>Check Notifications</Text>
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
  activeOrders: {
    marginTop: 20,
    backgroundColor: "#FFF",
    borderRadius: 40,
    padding: 10,
    fontSize: 20,
  },
  tableNumber: {
    marginTop: 10,
    backgroundColor: "#FFF",
    borderRadius: 10,
    padding: 20,
    fontSize: 20,
  },
  notifications: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "#F37A90",
    marginTop: 20,
    borderRadius: 10,
    padding: 10,
  },
  notificationText: {
    fontSize: 20,
    marginRight: 10,
  },
});

export default MyDashboard;

