import * as React from "react";
import { View, StyleSheet, Image,FlatList, Text, TextInput } from "react-native";
import Header from "./Header";
import Footer from "./Footer";
import {data} from "../data";
import Header from "./Header";

function MyMenu() {
  return (
    <>
    

    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.title}>Our Menu</Text>
      </View>
      <View style={styles.search}>         
          <TextInput
      style={styles.input}
      placeholderTextColor="#999" placeholder="Search"
    />
        </View>
      
      <Text style={styles.categories}>Brunch Shakes Yummies Desserts</Text>
      <View style={styles.container}>
      <FlatList
        data={data}
        renderItem={({ item }) => <View>
          <Image source={{uri: item.imageUrl}} style={styles.image} />
          <Text style={styles.text}>{item.text}</Text>
           </View>}
        keyExtractor={item => item.id}
        numColumns={2}
      />
      </View>

    </View>
     <Footer/>
     </>
  );
}

const styles = StyleSheet.create({
  container: {
    flex :1,
    backgroundColor: "#fdeaea",
    alignItems: "center",
    paddingHorizontal: 2,
    marginTop: 23,
    width: "100%",
  },
  text:{
    textAlign: "center",
  },
  header: {
    marginTop: 20,
    alignItems: "center",
    marginBottom: 4,
  },
  title: {
    backgroundColor: "#EC9090",
    
  },
  title: { 
    paddingVertical: 10,
    paddingHorizontal: 20,
    fontSize: 32,
    fontFamily: "Holtwood One SC, sans-serif",
  },
  search: {
    flexDirection: "row",
    alignItems: "center",
    marginTop: 100,
  },

  categories: {
    marginTop: 25,
    fontSize: 20,
  },
  
  image: {
    width: 155,
    aspectRatio: 1,
    marginLeft: 20  
  },
  
  input: {
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 8,
    paddingHorizontal: 12,
    paddingVertical: 10,
    fontSize: 16,
    color: '#333',
    width: 200,
  },
 
});

export default MyMenu;
