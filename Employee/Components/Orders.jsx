import React from "react";
import { View, Text, StyleSheet, TouchableOpacity } from "react-native";
import Header from "./MostComp/Header";
import Footer from "./MostComp/Footer";

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
  const orders = [
    { tableNumber: "3", product: "Burger", time: "10:55", status: "Not delivered" },
    { tableNumber: "4", product: "Pizza", time: "14:25", status: "Not delivered" },
    { tableNumber: "7", product: "Cola", time: "12:54", status: "Delivered" },
    { tableNumber: "3", product: "Beer", time: "10:23", status: "Delivered" },
  ];

  return (
    <>
    <Header/>
    <View style={styles.container}>
      
      <View style={styles.ordersHeader}>
      <View style={styles.container}>
            <TouchableOpacity style={styles.button}>
                <Text style={styles.text}>Pending orders</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.button}>
                <Text style={styles.text}>Unpaid Orders</Text>
            </TouchableOpacity>
      </View>
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
      <TouchableOpacity>
 <View style={styles.footer}>
        <Text>Check Notifications</Text>
      </View>
      </TouchableOpacity>
    </View>
    </View>

    <Footer/>
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
    flexDirection: "row",
    justifyContent: "space-between",
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
  footer: {

    marginTop: 87,
    padding: 20,
    width: "50%",
    borderRadius: 5,
    alignItems: "center",
    backgroundColor: "#e5687f",
    left: 80,
  },
});

export default Orders;