import React, { useState, useEffect } from "react";
import { StyleSheet, View, Text, TouchableOpacity, ScrollView } from "react-native";
import Header from "./MostComp/Header";
import Footer from "./MostComp/Footer";
import { collection, getDocs, doc, updateDoc } from "firebase/firestore";
import { db } from "../firebase.config";

const SectionTitle = ({ title }) => (
  <Text style={styles.sectionTitle}>{title}</Text>
);

const Divider = () => <View style={styles.divider} />;

const Status = () => {
  const [orders, setOrders] = useState([]);

  useEffect(() => {
    const fetchOrders = async () => {
      try {
        const ordersCollection = collection(db, "orders");
        const ordersSnapshot = await getDocs(ordersCollection);
        const ordersList = ordersSnapshot.docs.map((doc) => ({ id: doc.id, ...doc.data() }));
        setOrders(ordersList);
      } catch (error) {
        console.error("Error fetching orders: ", error);
      }
    };

    fetchOrders();
  }, []);

  useEffect(() => {
    const paidOrders = orders.filter(order => order.status !== "Paid");
    setOrders(paidOrders);
  }, [orders]);

  const handleAcceptPayment = async (orderId) => {
    try {
      const orderRef = doc(db, "orders", orderId);
      await updateDoc(orderRef, { status: "Paid" });
      // Update the local state to reflect the change
      setOrders((prevOrders) =>
        prevOrders.filter(order => order.id !== orderId)
      );
    } catch (error) {
      console.error("Error accepting payment: ", error);
    }
  };

  return (
    <>
      <Header heading={"Status"} />
      <ScrollView contentContainerStyle={styles.scrollContainer}>
        {orders.map((order, index) => (
          <View key={index}>
            <View style={styles.infoContainer}>
              <SectionTitle title={`Table No ${order.tableNumber}`} />
              <Text style={styles.status}>Status: {order.status}</Text>
            </View>
            <Divider />
            <View style={styles.menuList}>
              {order.menuItem.map((item, itemIndex) => (
                <Text key={itemIndex} style={styles.menuItem}>
                  {item.menuName}
                </Text>
              ))}
            </View>
            <TouchableOpacity onPress={() => handleAcceptPayment(order.id)}>
              <View style={styles.actionContainer}>
                <Text style={styles.actionText}>Accept Payment</Text>
              </View>
            </TouchableOpacity>
            <Divider />
          </View>
        ))}
      </ScrollView>
      <Footer />
    </>
  );
};

const styles = StyleSheet.create({
  scrollContainer: {
    flexGrow: 1,
    backgroundColor: "#FDE7E7",
    paddingVertical: 100,
    paddingHorizontal: 20,
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
});

export default Status;
