import React, { useEffect, useState } from 'react';
import { View, StyleSheet, Text } from 'react-native';
import Header from './MostComp/Header';
import Footer from './MostComp/Footer';
import { collection, getDocs } from 'firebase/firestore';
import { db } from '../firebase.config';

const OrderInfo = ({ tableNumber, createdAt }) => (
  <View style={styles.infoContainer}>
    <Text>Table NO: {tableNumber}</Text>
    <Text>{new Date(createdAt.seconds * 1000).toLocaleString()}</Text>
  </View>
);

const DashBoard = () => {
  const [orders, setOrders] = useState([]);

  useEffect(() => {
    const fetchOrders = async () => {
      try {
        const ordersCollection = collection(db, 'orders');
        const ordersSnapshot = await getDocs(ordersCollection);
        const ordersList = ordersSnapshot.docs.map(doc => ({ id: doc.id, ...doc.data() }));
        setOrders(ordersList);
      } catch (error) {
        console.error("Error fetching orders: ", error);
      }
    };

    fetchOrders();
  }, []);

  return (
    <>
      <Header heading="DashBoard" />
      <View style={styles.dashboardContainer}>
        <View style={styles.activeOrdersContainer}>
          <Text style={styles.tex}>Active Orders</Text>
          {orders.map((order) => (
            <OrderInfo key={order.id} tableNumber={order.tableNumber} createdAt={order.createdAt} />
          ))}
        </View>
      </View>
      <Footer />
    </>
  );
};

const styles = StyleSheet.create({
  dashboardContainer: {
    backgroundColor: "#f5e1e1",
    maxWidth: 680,
    width: '100%',
    alignItems: 'center',
    justifyContent: 'center',
    margin: '0 auto',
    height: '100%',
  },
  activeOrdersContainer: {
    marginTop: 20,
    justifyContent: "center",
    alignItems: "center",
  },
  infoContainer: {
    backgroundColor: '#FFF',
    borderRadius: 10,
    marginTop: 10,
    padding: 33,
    width: 320,
    maxWidth: '100%',
    flexDirection: "row",
    justifyContent: "space-between",
  },
  tex: {
    fontSize: 20,
  },
});

export default DashBoard;
