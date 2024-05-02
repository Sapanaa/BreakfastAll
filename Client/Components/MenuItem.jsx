import * as React from "react";
import { View, StyleSheet, Text, Image } from "react-native";
import Header from "./Header";
import Footer from "./Footer";

function MyMenuItem() {
  return (
    <>
    <Header/>
     <View style={styles.container}>
      <View style={styles.header}>
        <View style={styles.backButton}>
          <Text>&lt;</Text>
        </View>
        <View style={styles.title}>
          <Text>Veg Salad</Text>
        </View>
      </View>
      <View style={styles.imageContainer}>
        <Image
          resizeMode="auto"
          source={{
            uri: "https://www.healthyseasonalrecipes.com/wp-content/uploads/2022/06/healthy-cobb-salad-steps-sq-026.jpg",
          }}
          style={styles.image1}
        />
      </View>
      <View style={styles.priceContainer}>
        <View style={styles.price}>
          <Text>€10.65</Text>
        </View>
      </View>
      <View style={styles.ingredientsContainer}>
        <Text style={styles.ingredientsText}>
          Ingredients
          {"\n\n"}
          Avocados, cherry tomatoes,
          {"\n"}
          cucumber, capsicum, lettuce,
          {"\n"}
          salt, vinegar, olive oil
          {"\n"}
        </Text>
      </View>
      <View style={styles.orderButton}>
        <Text>Place an Order</Text>
      </View>
    </View>
    <Footer/>
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    flex :1,
    borderRadius: 50,
    background:
      "linear-gradient(12deg, rgba(253, 231, 231, 0.87) 99.99%, #999 100%, #E9BABA 100%)",
    display: "flex",
    maxWidth: 480,
    width: "100%",
    flexDirection: "column",
    alignItems: "center",
    margin: "0 auto",
  },
  header: {
    backgroundBlendMode: "multiply",
    backgroundColor: "rgba(236, 144, 144, 1)",
    display: "flex",
    alignItems: "start",
    gap: 20,
    fontWeight: "400",
    padding: "39px 19px 5px",
  },
  backButton: {
    boxShadow: "0px 4px 4px 0px rgba(0, 0, 0, 0.25)",
    display: "flex",
    flexDirection: "column",
    alignItems: "stretch",
    fontSize: 30,
    whiteSpace: "nowrap",
    justifyContent: "centre",
  },
  title: {
    
    flexShrink: "3",
    flexBasis: "auto",
    font: "40px Irish Grover, sans-serif ",
  },
  imageContainer: {
    alignItems: "center",
    borderRadius: 10,
    borderColor: "rgba(0, 0, 0, 1)",
    borderStyle: "solid",
    borderWidth: 1,
    backgroundColor: "#91699F",
    alignSelf: "end",
    display: "flex",
    width: 34,
    justifyContent: "centre",
    height: 34,
    margin: "24px 21px 0 0",
    padding: "0 6px",
  },
  image1: {
    fill: "#FEF7F7",
    position: "relative",
    width: "100%",
    aspectRatio: "1.22",
  },
  priceContainer: {
    display: "flex",
    marginTop: 63,
    width: "100%",
    flexDirection: "column",
    alignItems: "stretch",
    fontSize: 30,
    color: "#000",
    fontWeight: "400",
    padding: "0 28px",
  },
  price: {
    display: "flex",
    alignItems: "stretch",
    gap: 20,
    color: "#C42626",
    whiteSpace: "nowrap",
    justifyContent: "space-between",
    padding: "0 1px",
  },
  ingredientsContainer: {
    marginTop: 30,
    font: "24px Imprima, sans-serif ",
  },
  ingredientsText: {
    fontFamily: "Poppins, sans-serif",
    justifyContent: "center",
    alignItems: "stretch",
    borderRadius: 30,
    backgroundColor: "#78EEC4",
    marginTop: 157,
    fontWeight: "500",
    padding: "15px 50px",
  },
  orderButton: {
    mixBlendMode: "multiply",
    backgroundColor: "#E5687F",
    display: "flex",
    marginTop: 22,
    width: "100%",
    flexDirection: "column",
    alignItems: "end",
    justifyContent: "centre",
    padding: "22px 60px",
  },
});

export default MyMenuItem;
