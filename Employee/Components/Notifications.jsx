// Notifications.js
import React, { useState, useEffect } from "react";
import { View, StyleSheet, Text, ScrollView } from "react-native";
import Header from "./MostComp/Header";
import { collection, getDocs } from 'firebase/firestore';
import { db } from '../firebase.config';

const Notifications = () => {
  const [notifications, setNotifications] = useState([]);

  useEffect(() => {
    const fetchNotifications = async () => {
      try {
        const notificationsCollection = collection(db, 'notifications');
        const notificationsSnapshot = await getDocs(notificationsCollection);
        const notificationsData = notificationsSnapshot.docs.map(doc => doc.data());
        setNotifications(notificationsData);
      } catch (error) {
        console.error('Error fetching notifications: ', error);
      }
    };

    fetchNotifications();
  }, []);

  return (
    <View style={styles.container}>
      <Header heading={"Notifications"} />
      <ScrollView contentContainerStyle={styles.content}>
        {notifications.map((notification, index) => (
          <NotificationCard
            key={index}
            tableNumber = {notification.tableNumber}
            description={notification.description}
            requestType={notification.requestType}
            type={notification.type}
          />
        ))}
      </ScrollView>
    </View>
  );
};

const NotificationCard = ({  tableNumber, description, requestType, type }) => {
  return (
    <View style={styles.card}>
      <Text style={styles.title}>Table Number: {tableNumber}</Text>
      
      <Text style={styles.description}>{description}</Text>
      <Text style={styles.requestType}>Request Type: {requestType}</Text>
      <Text style={styles.type}>Type: {type}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
    backgroundColor: "#f5e1e1",
  },
  content: {
    flexGrow: 1,
    paddingVertical: 120,
    paddingHorizontal: 17,
  },
  card: {
    backgroundColor: "#FFF",
    marginBottom: 16,
    padding: 16,
    borderRadius: 8,
    elevation: 2,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.2,
    shadowRadius: 2,
  },
  title: {
    fontSize: 18,
    fontWeight: "700",
    marginBottom: 8,
  },
  description: {
    fontSize: 16,
    lineHeight: 22,
    color: "#555",
  },
  requestType: {
    fontSize: 16,
    lineHeight: 22,
    color: "#555",
    marginTop: 8,
  },
  type: {
    fontSize: 16,
    lineHeight: 22,
    color: "#555",
    marginTop: 8,
  },
});

export default Notifications;
