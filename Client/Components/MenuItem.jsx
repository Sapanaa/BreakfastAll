import * as React from "react";
import { View, StyleSheet, Text, Image, TouchableOpacity } from "react-native";
import Header from "./Header";
import Footer from "./Footer";

function MyMenuItem() {
  return (
    <>
      <Header heading={"Veg Salad"}/>
      <View style={styles.container}>
        <View style={styles.menuItemContainer}>
          <Image
            resizeMode="cover"
            source={{
              uri: "https://www.healthyseasonalrecipes.com/wp-content/uploads/2022/06/healthy-cobb-salad-steps-sq-026.jpg",
            }}
            style={styles.image}
          />
          <View style={styles.detailsContainer}>
            <Text style={styles.price}>€10.65</Text>
            <Text style={styles.ingredientsText}>
              Ingredients: {"\n"}
              Avocados, cherry tomatoes, cucumber, capsicum, lettuce, salt, vinegar, olive oil
            </Text>
          </View>
        </View>
        <TouchableOpacity style={styles.orderButton}>
          <Text style={styles.orderButtonText}>Place an Order</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.statusButton}>
          <Text style={styles.statusButtonText}>Check Order Status</Text>
        </TouchableOpacity>
      </View>
      <Footer />
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fdeaea",
    alignItems: "center",
    justifyContent: "center",
    paddingHorizontal: 20,
  },
  menuItemContainer: {
    flexDirection: "row",
    backgroundColor: "#fff",
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
  image: {
    width: 120,
    height: 120,
    borderRadius: 10,
    marginRight: 10,
  },
  detailsContainer: {
    flex: 1,
    padding: 10,
  },
  price: {
    fontSize: 24,
    fontWeight: "bold",
    color: "#C42626",
    marginBottom: 10,
  },
  ingredientsText: {
    fontSize: 16,
    marginBottom: 10,
    lineHeight: 20,
  },
  orderButton: {
    backgroundColor: "#78EEC4",
    borderRadius: 30,
    paddingVertical: 12,
    paddingHorizontal: 30,
    alignItems: "center",
    marginBottom: 10,
  },
  orderButtonText: {
    fontSize: 18,
    color: "#fff",
    fontWeight: "bold",
  },
  statusButton: {
    backgroundColor: "#E5687F",
    borderRadius: 15,
    paddingVertical: 10,
    paddingHorizontal: 30,
    alignItems: "center",
  },
  statusButtonText: {
    fontSize: 16,
    color: "#fff",
    fontWeight: "bold",
  },
});

export default MyMenuItem;
