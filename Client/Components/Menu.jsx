import * as React from "react";
import { View, StyleSheet, Image, FlatList, Text, TextInput, TouchableOpacity } from "react-native";
import { useNavigation, useRoute } from '@react-navigation/native';
import Header from "./Header";
import Footer from "./Footer";
import { db } from "../firebase.config";
import { collection, getDocs, setDoc ,doc} from 'firebase/firestore';

function MyMenu() {
  const [menuData, setMenuData] = React.useState([]);
  const navigation = useNavigation();
  const route = useRoute();
  const { scannedData } = route.params;
  const tableNumber = parseInt(scannedData, 10);

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
  const createTableDocument = async () => {
    try {
      const tableRef = collection(db, "tables");
      await setDoc(doc(tableRef, tableNumber.toString()), {}); // Convert tableNumber to string for Firestore doc ID
      console.log("Table document created successfully with ID: ", tableNumber);
    } catch (error) {
      console.error("Error creating table document:", error);
    }
  };
  const handleRequestEmployee = () => {
    // Navigate to the page for requesting an employee
    navigation.navigate('Request',{scannedData: parseInt(scannedData, 10)});
  };

  // Call createTableDocument function when component mounts
  React.useEffect(() => {
    createTableDocument();
  }, []);
 

  return (
    <>
      <View style={styles.container}>
        <Header heading={"Menu"} />
        <View style={styles.search}>
          <Text style={styles.tableNumber}>Table Number: {scannedData}</Text>
          <TextInput style={styles.input} placeholderTextColor="#999" placeholder="Search" />
        </View>
        <TouchableOpacity style={styles.requestButton} onPress={handleRequestEmployee}>
        <Text style={styles.requestButtonText}>Request Employee</Text>
      </TouchableOpacity>
        <Text style={styles.categories}>Brunch Shakes Yummies Desserts</Text>
        <View style={styles.container}>
          <FlatList
            data={menuData}
            renderItem={({ item }) => (
              <TouchableOpacity onPress={() => navigation.navigate('MenuItem', { collectionName: item.id,  scannedData: parseInt(scannedData, 10)  })}>
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
  search: {
    flexDirection: "row",
    alignItems: "center",
    marginTop: 100,
  },
  categories: {
    marginTop: 25,
    fontSize: 20,
  },
  tableNumber: {
    fontSize: 18,
    marginBottom: 10,
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
