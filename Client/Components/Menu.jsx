import * as React from "react";
import { View, StyleSheet, Image, FlatList, Text, TextInput, TouchableOpacity } from "react-native";
import { useNavigation } from '@react-navigation/native';
import Header from "./Header";
import Footer from "./Footer";
import { db } from "../firebase.config";
import { collection, getDocs } from 'firebase/firestore';

function MyMenu() {
  const [menuData, setMenuData] = React.useState([]);
  const navigation = useNavigation();

  React.useEffect(() => {
    const fetchMenuData = async () => {
      const menuCollectionRef = collection(db, "menu");
      const menuSnapshot = await getDocs(menuCollectionRef);
      const menuData = [];
      menuSnapshot.forEach((doc) => {
        menuData.push({ id: doc.id, ...doc.data() });
      });
      setMenuData(menuData);
    };

    fetchMenuData();
  }, []);

  return (
    <>
      <View style={styles.container}>
        <Header heading={"Menu"} />
        <View style={styles.search}>
          <TextInput style={styles.input} placeholderTextColor="#999" placeholder="Search" />
        </View>
        <Text style={styles.categories}>Brunch Shakes Yummies Desserts</Text>
        <View style={styles.container}>
          <FlatList
            data={menuData}
            renderItem={({ item }) => (
              <TouchableOpacity onPress={() => navigation.navigate('MenuItem', { collectionName: item.id })}>
                <MenuItem item={item} />
              </TouchableOpacity>
            )}
            keyExtractor={(item) => item.id}
            numColumns={2}
          />
        </View>
      </View>
      <Footer />
    </>
  );
}

const MenuItem = ({ item }) => {
  return (
    <View>
      <Image source={{ uri: item.imageUrl }} style={styles.image} />
      <Text style={styles.text}>{item.text}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fdeaea",
    alignItems: "center",
    paddingHorizontal: 2,
    marginTop: 23,
    width: "100%",
  },
  text: {
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
    marginLeft: 20,
  },
  input: {
    borderWidth: 1,
    borderColor: "#ccc",
    borderRadius: 8,
    paddingHorizontal: 12,
    paddingVertical: 10,
    fontSize: 16,
    color: "#333",
    width: 200,
  },
});

export default MyMenu;
