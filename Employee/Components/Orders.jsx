import React, { useState, useEffect } from "react";
import { View, Text, StyleSheet, TouchableOpacity, Alert } from "react-native";
import Header from "./MostComp/Header";
import { collection, getDocs } from "firebase/firestore";
import { db } from "../firebase.config"; 


const OrderRow = ({ tableNumber, product, time, status }) => (
  <View style={styles.orderRow}>
    <View style={styles.orderCell}>
      <Text>{tableNumber}</Text>
    </View>
    <View style={styles.orderCellProduct}>
      <Text>{product}</Text>
    </View>
    <View style={styles.orderCell}>
      <Text>{time}</Text>
    </View>
    <View style={styles.orderCellStatus}>
      <Text>{status}</Text>
    </View>
  </View>
);

const Orders = () => {
  const [orders, setOrders] = useState([]);

  useEffect(() => {
    const fetchOrders = async () => {
      try {
        const querySnapshot = await getDocs(collection(db, "orders"));
        const ordersList = querySnapshot.docs.map(doc => doc.data());
        setOrders(ordersList);
       // console.log(ordersList); 
      } catch (error) {
        console.error("Error fetching orders: ", error);
        Alert.alert("Error", "There was an error fetching the orders.");
      }
    };

    fetchOrders();
  }, []);

  return (
    <>
      <Header heading="Status" />
      <View style={styles.container}>
        <View style={styles.ordersHeader}>
          <View style={styles.tableHeader}>
            <Text>Table</Text>
            <Text>Product</Text>
            <Text>Time</Text>
            <Text>Status</Text>
          </View>
          {orders.map((order, index) => (
            <OrderRow
              key={index}
              tableNumber={order.tableNumber}
              product={order.product}
              time={order.time}
              status={order.status}
            />
          ))}
        </View>

        <View style={styles.buttonContainer}>
          <TouchableOpacity style={styles.button}>
            <Text style={styles.text}>Pending orders</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.button}>
            <Text style={styles.text}>Unpaid Orders</Text>
          </TouchableOpacity>
        </View>

        <TouchableOpacity>
          <View style={styles.footer}>
            <Text>Check Notifications</Text>
          </View>
        </TouchableOpacity>
      </View>
    </>
  );
};

const styles = StyleSheet.create({
  container: {
    justifyContent: "center",
    alignItems: "stretch",
    backgroundColor: "#f5e2e2",
    display: "flex",
    maxWidth: 480,
    width: "100%",
    height: "100%",
    flexDirection: "column",
    margin: "0 auto",
  },
  header: {
    backgroundColor: "linear-gradient(12deg, rgba(253, 231, 231, 0.87) 99.99%, #999 100%, #E9BABA 100%)",
    padding: 20,
  },
  ordersHeader: {
    marginTop: 30,
    paddingHorizontal: 10,
  },
  tableHeader: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginTop: 20,
    backgroundColor: "#863131",
    padding: 10,
  },
  orderRow: {
    flexDirection: "row",
    justifyContent: "space-between",
    backgroundColor: "#C29D9D",
    padding: 10,
    marginTop: 5,
  },
  orderCell: {
    flex: 1,
    alignItems: "center",
  },
  orderCellProduct: {
    flex: 3,
  },
  orderCellStatus: {
    flex: 2,
  },
  buttonContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginTop: 30,
    paddingHorizontal: 10,
  },
  button: {
    backgroundColor: "#e5687f",
    padding: 10,
    borderRadius: 5,
    alignItems: "center",
    width: "48%",
  },
  text: {
    color: "#fff",
    fontWeight: "bold",
  },
  footer: {
    marginTop: 30,
    padding: 20,
    width: "50%",
    borderRadius: 5,
    alignItems: "center",
    backgroundColor: "#e5687f",
    alignSelf: "center",
  },
});

export default Orders;
