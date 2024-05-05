import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import Header from './Header';
import Footer from './Footer';

const orderItems = [
  { name: 'Cheese Burger', time: '3:00', status: 'Pending' },
  { name: 'Coffee', time: '5:00', status: 'Pending' },
  { name: 'Cheese Pizza', time: '----', status: 'Delivered' },
  { name: 'Coke', time: '-----', status: 'Delivered' },
];

const OrderItem = ({ name, time, status }) => {
  const getStatusColor = (status) => {
    return status === 'Pending' ? { color: 'red' } : { color: 'green' };
  };

  return (
    <View style={styles.orderItem}>
      <Text style={styles.itemName}>{name}</Text>
      <Text style={styles.itemTime}>{time}</Text>
      <Text style={[styles.itemStatus, getStatusColor(status)]}>{status}</Text>
    </View>
  );
};

const MyStatus = () => {
  return (
    <>
      <Header heading={"Order Status"}/>
      <View style={styles.container}>
        <View style={styles.orderHeader}>
          <Text style={[styles.orderHeaderTitle, { flex: 2 }]}>Ordered Item</Text>
          <Text style={[styles.orderHeaderTitle, { flex: 1.5 }]}>Time Elapsed</Text>
          <Text style={[styles.orderHeaderTitle, { flex: 1 }]}>Status</Text>
        </View>
        {orderItems.map((item, index) => (
          <OrderItem key={index} name={item.name} time={item.time} status={item.status} />
        ))}
      </View>
      <Footer/>
    </>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F9E5E5',
    alignItems: 'center',
    paddingVertical: 20,
    width: '100%',
    marginTop: 100,
  },
  orderHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignSelf: 'stretch',
    paddingHorizontal: 20,
    marginBottom: 10,
  },
  orderHeaderTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#333',
  },
  orderItem: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignSelf: 'stretch',
    paddingHorizontal: 20,
    paddingVertical: 10,
    borderBottomWidth: 1,
    borderBottomColor: '#ccc',
  },
  itemName: {
    flex: 2,
    fontSize: 16,
    color: '#333',
  },
  itemTime: {
    flex: 1.5,
    fontSize: 16,
    color: '#333',
  },
  itemStatus: {
    flex: 1,
    fontSize: 16,
    fontWeight: 'bold',
  },
});

export default MyStatus;
