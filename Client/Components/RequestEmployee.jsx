import React, { useState } from "react";
import { View, StyleSheet, Text , TextInput, ScrollView, SafeAreaView} from "react-native";
import Footer from "./Footer";

function MyRequest() {
    const [inputText, setInputText] = useState("");

  return (
    <>
    <SafeAreaView style={styles.container}>
    <ScrollView contentContainerStyle={styles.scrollViewContent}>
    <View style={styles.header}>
          <Text style={styles.headerText}>Request Employee</Text>
        </View>
        <View style={styles.contentContainer}>
      <View style={styles.optionsContainer}>
        <View style={styles.option}>
          <Text>Drink Order Assistance</Text>
        </View>
        <View style={styles.option}>
          <Text>Technical Support{"\n"}(Wifi connectivity)</Text>
        </View>
        <View style={styles.option}>
          <Text>Menu Recommendation</Text>
        </View>
        <View style={styles.option}>
          <Text>General Enquiry</Text>
        </View>
        <View style={styles.option}>
          <Text>Get Check</Text>
        </View>
        <Text style={styles.others}>Others</Text>
        <View style={styles.inputContainer}>
          <TextInput
            style={styles.input}
            multiline
            placeholder="Write here..."
            value={inputText}
            onChangeText={setInputText}
          />
        </View>
        </View>
      </View>
    </ScrollView>
     </SafeAreaView>
    <Footer/>
    </>
  );
}

const styles = StyleSheet.create({
  container: {
   // flex :1,
    maxWidth: 480,
    width: "100%",
    margin: "0 auto",
  },
  scrollViewContent: {
    flexGrow: 1,
  },
  
  header: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "#EC9090",
    padding: 20,
    borderRadius: 50,
    marginBottom: 20,
  },
  backButton: {
    backgroundColor: "#D9D9D9",
    borderRadius: 10,
    padding: 10,
  },
  headerText: {
    marginLeft: 20,
    fontSize: 20,
    //fontFamily: "Itim, sans-serif",
    color: "#221C1C",
  },
  optionsContainer: {
    padding: 20,
    marginBottom: 20,
  },
  option: {
    backgroundColor: "#EBB3B3",
    borderRadius: 20,
    padding: 15,
    marginBottom: 15,
  },
  others: {
    marginTop: 20,
    //fontFamily: "Imprima, sans-serif",
    color: "#000",
    fontSize: 18,
  },
  inputContainer: {
    backgroundColor: "#D9D9D9",
    borderRadius: 20,
    padding: 20,
    marginTop: 10,
  },
  input: {
    height: 100,
    fontSize: 16,
  },

});

export default MyRequest;
