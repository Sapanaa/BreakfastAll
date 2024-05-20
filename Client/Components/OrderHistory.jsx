import React, { useState, useEffect } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import Header from './Header';
import Footer from './Footer';
import { collection, getDocs } from 'firebase/firestore';
import { db } from '../firebase.config';

const OrderItem = ({ orderId, date, status, items }) => {
  // Calculate total amount owed
  const totalOwed = items.reduce((acc, item) => acc + parseFloat(item.price), 0);
  // Conditionally calculate total amount paid based on status
  const totalPaid = status === 'Paid' ? totalOwed : 0;

  return (
    <View style={styles.orderItem}>
      <View style={styles.orderInfo}>
        <Text style={styles.orderIdText}>Order ID: {orderId}</Text>
        <Text style={styles.dateText}>Date: {date}</Text>
        <Text style={styles.statusText}>Status: {status}</Text>
      </View>
      <View style={styles.productList}>
        <View style={styles.productHeader}>
          <Text style={styles.productHeaderItem}>Product Name</Text>
          <Text style={styles.productHeaderItem}>Price</Text>
        </View>
        {items.map((item, index) => (
          <View key={index} style={styles.productRow}>
            <Text style={styles.productName}>{item.menuName}</Text>
            <Text style={styles.productPrice}>{`€${item.price}`}</Text>
          </View>
        ))}
      </View>
      <View style={styles.amountSection}>
        <Text style={styles.amountText}>Total Amount Owed: €{totalOwed.toFixed(2)}</Text>
        {status === 'Paid' && (
          <Text style={styles.amountText}>Total Amount Paid: €{totalPaid.toFixed(2)}</Text>
        )}
      </View>
    </View>
  );
};

const MyOrderHistory = () => {
  const [orders, setOrders] = useState([]);

  useEffect(() => {
    const fetchOrders = async () => {
      try {
        const ordersCollection = collection(db, 'orders');
        const ordersSnapshot = await getDocs(ordersCollection);
        const ordersData = ordersSnapshot.docs.map(doc => ({ id: doc.id, ...doc.data() }));
        setOrders(ordersData);
      } catch (error) {
        console.error('Error fetching orders: ', error);
      }
    };

    fetchOrders();
  }, []);

  return (
    <>
      <Header heading="My Order History" />
      <View style={styles.container}>
        {orders.map((order, index) => (
          <OrderItem
            key={index}
            orderId={order.orderId}
            date={order.date}
            status={order.status}
            items={order.menuItem} // Use menuItem instead of items
          />
        ))}
      </View>
      <Footer />
    </>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FFF',
    alignItems: 'center',
    justifyContent: 'center',
    paddingVertical: 20,
  },
  orderItem: {
    backgroundColor: '#FBCFE8',
    borderRadius: 10,
    paddingHorizontal: 20,
    paddingVertical: 15,
    marginBottom: 20,
    width: '90%',
    maxWidth: 400,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
  },
  orderInfo: {
    marginBottom: 10,
  },
  orderIdText: {
    fontWeight: 'bold',
    fontSize: 18,
  },
  dateText: {
    fontSize: 16,
  },
  statusText: {
    fontSize: 16,
  },
  productList: {
    marginTop: 10,
  },
  productHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 10,
    borderBottomWidth: 1,
    borderBottomColor: '#ccc',
    paddingBottom: 5,
  },
  productHeaderItem: {
    fontWeight: 'bold',
    fontSize: 16,
  },
  productRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 5,
  },
  productName: {
    fontSize: 14,
  },
  productPrice: {
    fontSize: 14,
  },
  amountSection: {
    marginTop: 10,
  },
  amountText: {
    fontSize: 16,
    fontWeight: 'bold',
  },
});

export default MyOrderHistory;
