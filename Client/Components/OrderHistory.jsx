import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import Header from './Header';
import Footer from './Footer';

const OrderItem = ({ orderId, date, status, items }) => {
  // Calculate total amount owed
  const totalOwed = items.reduce((acc, item) => acc + parseFloat(item.price), 0);
  // Conditionally calculate total amount paid based on status
  const totalPaid = status === 'Paid' ? totalOwed : 0;

  return (
<<<<<<< HEAD
  <>
  <Header heading="Order History"/>
    <View style={styles.container}>
      {/* Header */}
      
      {/* Content */}
      <View style={styles.content}>
        {/* Order items */}
        <View style={styles.orderItem}>
          <Text>Order Id: 12334          Date: 22/12/2023</Text>
          <Text>Status: Delivered</Text>
          {/* Product details */}
          <Text>Product Name                            Price</Text>
          <View style={styles.productDetails}>
            <Text style={styles.productName}>CheeseBurger</Text>
            <Text style={styles.productPrice}>€12.34</Text>
          </View>
          <View style={styles.productDetails}>
            <Text style={styles.productName}>Coffee</Text>
            <Text style={styles.productPrice}>€5.36</Text>
          </View>
=======
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
>>>>>>> b48846bee27f0d48d887c01a945ae13c416941e4
        </View>
        {items.map((item, index) => (
          <View key={index} style={styles.productRow}>
            <Text style={styles.productName}>{item.name}</Text>
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

const MyOrderHistory = () => (
  <>
    <Header heading="My Order History" />
    <View style={styles.container}>
      <OrderItem
        orderId="12334"
        date="22/12/2023"
        status="Delivered"
        items={[
          { name: 'CheeseBurger', price: 12.34 },
          { name: 'Coffee', price: 5.36 },
        ]}
      />
      <OrderItem
        orderId="12337"
        date="10/12/2023"
        status="Paid"
        items={[
          { name: 'Pancake', price: 16.34 },
          { name: 'Coffee', price: 5.36 },
        ]}
      />
    </View>
    <Footer/>
  </>
);

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
