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

  const acceptOrder = async (orderId) => {
    try {
      const orderRef = doc(db, "orders", orderId);
      await updateDoc(orderRef, { status: "Accepted" });
      setOrders(orders.map(order => order.id === orderId ? { ...order, status: "Accepted" } : order));
    } catch (error) {
      console.error("Error updating order status: ", error);
    }
  };

  const deliverOrder = async (orderId) => {
    try {
      const orderRef = doc(db, "orders", orderId);
      await updateDoc(orderRef, { status: "Delivered" });
      setOrders(orders.map(order => order.id === orderId ? { ...order, status: "Delivered" } : order));
    } catch (error) {
      console.error("Error updating order status: ", error);
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
              {order.menuItems && order.menuItems.map((item, itemIndex) => (
                <View key={itemIndex}>
                  <Text style={styles.menuItem}>{item.id}</Text>
                  <Text>Quantity: {item.quantity}</Text>
                </View>
              ))}
              </View>
            {order.status === "Pending" && (
              <TouchableOpacity onPress={() => acceptOrder(order.id)}>
                <View style={styles.actionContainer}>
                  <Text style={styles.actionText}>Accept Order</Text>
                </View>
              </TouchableOpacity>
            )}
            {order.status === "Accepted" && (
              <TouchableOpacity onPress={() => deliverOrder(order.id)}>
                <View style={styles.actionContainer}>
                  <Text style={styles.actionText}>Delivered</Text>
                </View>
              </TouchableOpacity>
            )}
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
  menuItemContainer: {
    marginBottom: 10,
  },
  menuItem: {
    fontSize: 20,
    lineHeight: 24,
  },
  actionContainer: {
    backgroundColor: "#E5687F",
    alignSelf: "center",
    marginTop: 20,
    padding: 10,
  },
  actionText: {
    color: "#000",
    fontSize: 20,
    fontFamily: "Radley",
  },
});

export default Status;
