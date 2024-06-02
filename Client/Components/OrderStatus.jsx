import React, { useState, useEffect } from "react";
import { StyleSheet, View, Text, TouchableOpacity, ScrollView } from "react-native";
import Header from "./Header";
import Footer from "./Footer";
//import { useRoute } from '@react-navigation/native';
import { collection, getDocs, query, where } from "firebase/firestore";
import { db } from "../firebase.config";

const SectionTitle = ({ title }) => (
  <Text style={styles.sectionTitle}>{title}</Text>
);

const Divider = () => <View style={styles.divider} />;

const OrderStatus = ({route}) => {
  const [orders, setOrders] = useState([]);
  const { scannedData } = route.params;

  useEffect(() => {
    const fetchOrders = async () => {
      try {
        // Query orders collection to filter orders by table number
        const ordersCollection = collection(db, "orders");
        const q = query(ordersCollection, where("tableNumber", "==", scannedData));
        // Fetch orders based on the query
        const ordersSnapshot = await getDocs(q);
        const ordersList = ordersSnapshot.docs.map((doc) => ({ id: doc.id, ...doc.data() }));
        setOrders(ordersList);
      } catch (error) {
        console.error("Error fetching orders: ", error);
      }
    };

    fetchOrders();
  }, [scannedData]); // Update orders whenever the scannedData changes

  return (
    <>
      <Header heading={"Status"} />
      <ScrollView contentContainerStyle={styles.scrollContainer}>
      {orders.map((order, index) => (
          <View key={index}>
            <View style={styles.infoContainer}>
              <Text style={styles.status}>Status: {order.status}</Text>
            </View>
            <View style={styles.menuList}>
              {order.menuItems && order.menuItems.map((item, itemIndex) => (
                <View key={itemIndex}>
                  <Text style={styles.menuItem}>{item.id}</Text>
                  <Text>Quantity: {item.quantity}</Text>
                </View>
              ))}
              </View>
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
});

export default OrderStatus;
