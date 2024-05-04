import React from "react";
import { View, StyleSheet, Text, Image, ScrollView } from "react-native";
import Header from "./MostComp/Footer";
import Footer from "./MostComp/Header";

const notificationsData = [
  {
    title: "New Order Placed",
    description: "New order placed at Table 5. Please prepare the following....",
  },
  {
    title: "Order Delivered",
    description: "Order for Table 8 has been delivered successfully.",
  },
  {
    title: "Assistance Request",
    description: "Assistance requested at Table 3. Customer needs help with....",
  },
  {
    title: "Feedback Received",
    description:
      "New feedback received from Table 12: Service rated 4/5 with... Employee friendliness rated 5/5.",
  },
  {
    title: "Feedback Received",
    description:
      "New feedback received from Table 12: Service rated 4/5 with... Employee friendliness rated 5/5.",
  },
  {
    title: "Feedback Received",
    description:
      "New feedback received from Table 12: Service rated 4/5 with... Employee friendliness rated 5/5.",
  },
];

const Notifications = () => {
  return (
    <View style={styles.container}>
    <Header heading={"Notifications"}/>
    <ScrollView contentContainerStyle={styles.content}>
      {notificationsData.map((notification, index) => (
        <NotificationCard
          key={index}
          title={notification.title}
          description={notification.description}
        />
      ))}
    </ScrollView>
    <Footer />
  </View>
  );
};

const NotificationCard = ({ title, description }) => {
  return (
    <View style={styles.card}>
      <Text style={styles.title}>{title}</Text>
      <Text style={styles.description}>{description}</Text>
      {/* Optional: Add an image per notification if needed */}
      {/* <Image source={require('path_to_your_image')} style={styles.image} /> */}
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
  image: {
    marginTop: 12,
    width: "100%",
    height: 200,
    resizeMode: "cover",
    borderRadius: 8,
  },
});

export default Notifications;
