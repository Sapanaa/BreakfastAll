import React, { useState, useEffect } from "react";
import { StyleSheet, View, Text, TouchableOpacity, ScrollView, Image } from "react-native";
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


  const calculateTotalPrice = (menuItems) => {
    return menuItems.reduce((total, item) => total + item.price * item.quantity, 0).toFixed(2);
  };

  const calculateAllTotalPrice = (orders) => {
    return orders.reduce((total, order) => total + parseFloat(calculateTotalPrice(order.menuItems)), 0).toFixed(2);
  };

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
                <View key={itemIndex} style={styles.menuCont}>
                  
           <Image
              resizeMode="cover"
              source={{ uri: item.image }}
              style={styles.menuItemImage}
            />
            <View style={styles.detailsContainer}>

                  <Text style={styles.menuItem}>{item.id}</Text>
                  <Text>Quantity: {item.quantity}</Text>
                  <Text>Price: €{item.price}</Text>
                  <Text style={styles.totalText}>
                  Total Price: €{calculateTotalPrice(order.menuItems)}
                </Text>
                  </View>
                </View>
              ))}
              </View>
            <Divider />
            <View style={styles.totalContainer}>
                
              </View>
          </View>
        ))}
          <View style={styles.allTotalContainer}>
          <Text style={styles.allTotalText}>
            All Orders Total Price: €{calculateAllTotalPrice(orders)}
          </Text>
        </View>
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
  },
  sectionTitle: {
    backgroundColor: "#FFF",
    alignSelf: "flex-end",
    fontSize: 20,
  },
  menuItemImage: {
    width: 100,
    height: 100,
  
  },

  status: {
    marginTop: 19,
    fontSize: 16,
    color: "black",
    fontWeight: "bold",
  },
  divider: {
    marginVertical: 10,
    height: 3,
    backgroundColor: "#000",
  },
  menuList: {
    alignSelf: "center",
    marginTop: 20,
    

  },
  menuCont: {
    flexDirection: "row",
    backgroundColor: "#EFBEDC",
    borderRadius: 10,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
    padding: 10,
    marginBottom: 20,
    width: "100%",
  },
  detailsContainer:{
    flex: 1,
    padding: 10,
  },
  menuItem: {
    fontSize: 20,
    lineHeight: 41,
    fontWeight: "bold",
    color: "#270032",
  },
  allTotalContainer: {
    alignItems: 'center',
    marginVertical: 20,
  },
  allTotalText: {
    fontSize: 20,
    fontWeight: 'bold',
    color: "#270032",
  },
});

export default OrderStatus;
