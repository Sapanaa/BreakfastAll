import * as React from "react";
import { View, StyleSheet, Text } from "react-native";
import Header from "./Header";
import Footer from "./Footer";

function MyOrderHistory() {
  return (
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
        </View>
        {/* More order items */}
      </View>

      <View style={styles.content}>
        {/* Order items */}
        <View style={styles.orderItem}>
          <Text>Order Id: 12337          Date: 22/12/2023</Text>
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
        </View>
        {/* More order items */}
      </View>
      <View style={styles.paymentSummary}>
        <View style={styles.summaryItem}>
          <Text>Amount Owed:</Text>
          <Text>$70</Text>
        </View>
        <View style={styles.summaryItem}>
          <Text>Amount Paid:</Text>
          <Text>$10</Text>
        </View>
    </View>
    </View>
    <Footer/>
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: "E9BABA",
    maxWidth: 480,
    marginHorizontal: "auto",
    flexDirection: "column",
    paddingHorizontal: 20,
    paddingVertical: 10,
  },
  header: {
    backgroundColor: "rgba(236, 144, 144, 1)",
    flexDirection: "row",
    alignItems: "center",
    paddingHorizontal: 20,
    paddingVertical: 10,
  },
  backButton: {
    width: 36,
    height: 36,
    borderRadius: 10,
    backgroundColor: "#D9D9D9",
    alignItems: "center",
    justifyContent: "center",
  },
  headerText: {
    fontSize: 20,
    color: "#fff",
    marginLeft: 10,
  },
  content: {
    paddingTop: 20,
    backgroundColor: 'ED6BEF',
  },
  orderContainer: {
    width: "100%",
    alignItems: "center",
  },
  orderItem: {
    backgroundColor: "rgba(237, 107, 239, 0.475)",
    width: "80%",
    maxWidth: 334,
    borderRadius: 10,
    marginBottom: 20,
    padding: 10,
  },
  orderDetails: {
    fontFamily: "Hanuman, sans-serif",
    textAlign: "center",
    marginBottom: 10,
  },
  productDetails: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginBottom: 5,
  },
  
  paymentSummary: {
    backgroundColor: "rgba(244, 174, 244, 1)",
    width: "80%",
    maxWidth: 355,
    borderRadius: 15,
    flexDirection: "row",
    justifyContent: "space-around",
    padding: 20,
    marginBottom: 20,
  },
  summaryItem: {
    alignItems: "center",
  },
});

export default MyOrderHistory;
