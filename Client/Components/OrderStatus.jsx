import * as React from "react";
import { View, StyleSheet, Image, Text } from "react-native";
import Footer from "./Footer";
import Header from "./Header";

function MyStatus() {
    
      return (
      <>
       <Header/>
            <View style={styles.container}>
              <View style={styles.header}>
                <View style={styles.backButton}>
                  <Text>&lt;</Text>
                </View>
                <View style={styles.title}>
                  <Text>Order Status</Text>
                </View>
              </View>
              <View style={styles.itemContainer}>
                <View style={styles.itemRow}>
                  <Text style={styles.itemText}>Ordered Item</Text>
                  <Text style={styles.itemText}>Time Elapsed</Text>
                  <Text style={styles.itemText}>Status</Text>
                </View>
                <View style={styles.itemRow}>
                  <Text style={styles.itemText}>Cheese Burger</Text>
                  <Text style={styles.itemText}>3:00</Text>
                  <Text style={styles.statusText}>Pending</Text>
                </View>
                <View style={styles.itemRow}>
                  <Text style={styles.itemText}>Coffee</Text>
                  <Text style={styles.itemText}>5:00</Text>
                  <Text style={styles.statusText}>Pending</Text>
                </View>
                <View style={styles.itemRow}>
                  <Text style={styles.itemText}>Cheese Pizza</Text>
                  <Text style={styles.itemText}>----</Text>
                  <Text style={styles.statusText}>Delivered</Text>
                </View>
                <View style={styles.itemRow}>
                  <Text style={styles.itemText}>Coke</Text>
                  <Text style={styles.itemText}>----</Text>
                  <Text style={styles.statusText}>Delivered</Text>
                </View>
              </View>
            </View>
            <Footer/>
     </>
          );
        }
        
        const styles = StyleSheet.create({
          container: {
            flex: 1,
            alignItems: "center",
            backgroundColor: "#F9E5E5",
            paddingVertical: 20,
          },
          header: {
            flexDirection: "row",
            alignItems: "center",
            padding: 20,
          },
          backButton: {
            borderRadius: 10,
            backgroundColor: "#EC9090",
            padding: 10,
          },
          title: {
            flex: 1,
            justifyContent: "center",
            alignItems: "center",
          },
          itemContainer: {
            width: "90%",
            marginTop: 20,
            backgroundColor: "#ffffff",
            borderRadius: 10,
            padding: 20,
          },
          itemRow: {
            flexDirection: "row",
            justifyContent: "space-between",
            alignItems: "center",
            borderBottomWidth: 1,
            borderBottomColor: "#E0E0E0",
            paddingVertical: 10,
          },
          itemText: {
            fontSize: 16,
            color: "#000",
          },
          statusText: {
            fontSize: 16,
            color: "#FC1919",
          },
        });

export default MyStatus;
