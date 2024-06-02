import React, { useState, useEffect } from "react";
import { View, StyleSheet, Text, Image, TouchableOpacity, ActivityIndicator, Alert } from "react-native";
import { useNavigation, useRoute } from '@react-navigation/native';
import Header from "./Header";
import Footer from "./Footer";
import { collection, getDocs, updateDoc, doc, addDoc, setDoc } from "firebase/firestore";
import { db } from "../firebase.config";

export default function MyMenuItem({ route }) {
  const { collectionName, scannedData } = route.params; // scannedData is an integer here
  const [menuItems, setMenuItems] = useState([]);
  const [loading, setLoading] = useState(true);
  const navigation = useNavigation();

  useEffect(() => {
    fetchMenuItems();
  }, [collectionName]);

  const fetchMenuItems = async () => {
    try {
      const querySnapshot = await getDocs(collection(db, collectionName));
      const items = [];
      querySnapshot.forEach((doc) => {
        items.push({ id: doc.id, ...doc.data(), quantity: 0 });
      });
      setMenuItems(items);
    } catch (error) {
      console.error("Error fetching menu items:", error);
    } finally {
      setLoading(false);
    }
  };

 {/* const createTableDocument = async () => {
    try {
      const tableRef = collection(db, "tables");
      await setDoc(doc(tableRef, scannedData.toString()), {}); // Convert to string for document ID
      console.log("Table document created successfully with ID: ", scannedData);
    } catch (error) {
      console.error("Error creating table document:", error);
    }
  };

  useEffect(() => {
    createTableDocument();
  }, [scannedData]);
*/}
  const handleIncrementQuantity = async (itemId) => {
    try {
      const itemRef = doc(db, collectionName, itemId);
      const item = menuItems.find((item) => item.id === itemId);
      await updateDoc(itemRef, {
        quantity: item.quantity + 1 // Incrementing quantity by 1
      });
      setMenuItems((prevItems) =>
        prevItems.map((item) =>
          item.id === itemId ? { ...item, quantity: item.quantity + 1 } : item
        )
      );
    } catch (error) {
      console.error("Error incrementing quantity:", error);
    }
  };

  const handleDecrementQuantity = async (itemId) => {
    try {
      const itemRef = doc(db, collectionName, itemId);
      const item = menuItems.find((item) => item.id === itemId);
      if (item.quantity > 0) {
        await updateDoc(itemRef, {
          quantity: item.quantity - 1 // Decrementing quantity by 1
        });
        setMenuItems((prevItems) =>
          prevItems.map((item) =>
            item.id === itemId ? { ...item, quantity: item.quantity - 1 } : item
          )
        );
      }
    } catch (error) {
      console.error("Error decrementing quantity:", error);
    }
  };

  const handlePlaceOrder = async () => {
    try {
      const orderRef = await addDoc(collection(db, "orders"), {
        menuItems: menuItems.filter(item => item.quantity > 0), // Only add items with quantity > 0
        createdAt: new Date(), // Add a timestamp for when the order was placed
        status: "Pending",
        tableNumber: scannedData // Save scannedData as tableNumber
      });
      console.log("Order placed successfully with ID: ", orderRef.id);
      Alert.alert("Order Placed", `Your order has been placed successfully at table number ${scannedData}.`);
    } catch (error) {
      console.error("Error placing order:", error);
      Alert.alert("Order Failed", "There was an issue placing your order. Please try again.");
    }
  };

  if (loading) {
    return (
      <View style={styles.loadingContainer}>
        <ActivityIndicator size="large" color="#0000ff" />
      </View>
    );
  }

  return (
    <>
      <Header heading={"Menu Items"} />
      <View style={styles.container}>
        {menuItems.map((menuItem) => (
          <View key={menuItem.id} style={styles.menuItemContainer}>
            <Image
              resizeMode="cover"
              source={{ uri: menuItem.image }}
              style={styles.image}
            />
            <View style={styles.detailsContainer}>
            <Text style={styles.naming}>{menuItem.id}</Text>
              <Text style={styles.price}>€{menuItem.price}</Text>
              <Text style={styles.ing}>Ingredients: </Text>
              <Text> {menuItem.ingredients}</Text>
              <Text style={styles.quantityText}>Quantity: {menuItem.quantity}</Text>
              <View style={styles.buttonContainer}>
                <TouchableOpacity
                  style={styles.decrementButton}
                  onPress={() => handleDecrementQuantity(menuItem.id)}
                >
                  <Text style={styles.decrementButtonText}>-</Text>
                </TouchableOpacity>
                <TouchableOpacity
                  style={styles.incrementButton}
                  onPress={() => handleIncrementQuantity(menuItem.id)}
                >
                  <Text style={styles.incrementButtonText}>+</Text>
                </TouchableOpacity>
              </View>
            </View>
          </View>
        ))}
        <Text style={styles.tableText}>Table Number: {scannedData}</Text>
        <TouchableOpacity style={styles.orderButton} onPress={handlePlaceOrder}>
          <Text style={styles.orderButtonText}>Place an Order</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.statusButton} onPress={() => navigation.navigate('OrderStatus', {scannedData: parseInt(scannedData, 10) })}>
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
    fontSize: 20,
    fontWeight: "bold",
    color: "#C42626",
    marginBottom: 10,
  },
  ingredientsText: {
    fontSize: 16,
    marginBottom: 10,
    lineHeight: 20,
  },
  naming:{
    fontSize: 25,
    fontWeight: "bold",
    color: "#00008B",
  },
  quantityText: {
    fontSize: 16,
    fontWeight:"bold",
    color: "#808080",
    marginBottom: 10,
    paddingTop: 5,
  },
  tableText: {
    fontSize: 16,
    marginBottom: 10,
    color: "#0000ff",
  },
  buttonContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    width: "100%",
    marginTop: 10,
  },
  incrementButton: {
    backgroundColor: "#78EEC4",
    borderRadius: 10,
    padding: 5,
    alignItems: "center",
    justifyContent: "center",
  },
  incrementButtonText: {
    fontSize: 20,
    color: "#fff",
  },
  decrementButton: {
    backgroundColor: "#E5687F",
    borderRadius: 10,
    padding: 5,
    alignItems: "center",
    justifyContent: "center",
  },
  decrementButtonText: {
    fontSize: 20,
    color: "#fff",
  },
  ing:{
    fontSize: 15,
    fontWeight: "bold",
    color: "grey",

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
  loadingContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
});
