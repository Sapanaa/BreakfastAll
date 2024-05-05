import React from 'react';
import { View, StyleSheet, Image, Text } from 'react-native';
import Header from './MostComp/Header';
import Footer from './MostComp/Footer';

const OrderInfo = ({ tableNumber, time }) => (
  <View style={styles.infoContainer}>
    <Text>Table NO: {tableNumber} </Text>
    <Text>{time}</Text>
  </View>
);

const DashBoard = () => {
  const orders = [
    { tableNumber: 3, time: '2min' },
    { tableNumber: 11, time: '5min' },
    { tableNumber: 9, time: '1min' },
  ];

  return (
    <>
     <Header heading={"DashBoard"} />
      <View style={styles.dashboardContainer}>
        <View style={styles.activeOrdersContainer}>
          <Text style={styles.tex}>Active Orders</Text>
          {orders.map((order, index) => (
            <OrderInfo key={index} tableNumber={order.tableNumber} time={order.time} />
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
    gap: 100,
  },
  notificationCheckContainer: {
    backgroundColor: '#F37A90',
    marginTop: 20,
    padding: 10,
  },
  notificationIconContainer: {
    backgroundColor: '#E5687F',
    marginTop: 20,
    padding: 29,
  },
  tex: {
    fontSize: 20,
  },
  notificationIcon: {
    width: 42,
    height: 30,
  },
});

export default DashBoard;
