import * as React from "react";
import { View, StyleSheet, Image, Text, TextInput, TouchableOpacity  } from "react-native";
import Header from "./Header";
import Footer from "./Footer";

function MyProfile() {
  return (
    <>
    <Header/>
    <View style={styles.container}>
      <View style={styles.header}>
        <View style={styles.backButton}>
          <Text>&lt;</Text>
        </View>
      </View>
      <View style={styles.content}>
        <View style={styles.greeting}>
          <Text>Hello Ana,</Text>
          <Text>Welcome</Text>
        </View>
        <Image
          resizeMode="auto"
          source={{ uri: "https://cdn.builder.io/api/v1/image/assets/TEMP/6c6011e2424229c9789e932c86eda0a4785524e91aa2f62d4d0a229bf4ff041d?" }}
          style={styles.profileImage}
        />
        <View style={styles.actions}>
          <View style={styles.editProfile}>
          <Text style={styles.editProfileText}>Edit Profile</Text>
          </View>
          <View style={styles.action}>
            <TextInput 
            style={styles.input}
            placeholder= "Enter Nickname " 
            placeholderTextColor="#999" />
          </View>
          <TouchableOpacity style={styles.action}>
          <Text style={styles.buttonText}>Save</Text>
          </TouchableOpacity>
        </View>
        <View style={styles.employeeRequest}>
          <Text>Request Employee</Text>
          <View style={styles.forwardButton}>
            <Text>&lt;</Text>
          </View>
        </View>
      </View>
      <View style={styles.footer}>
        <Image
          resizeMode="auto"
          source={{ uri: "https://cdn.builder.io/api/v1/image/assets/TEMP/fb372c6c0c49468f23baad31c728026bca7154c22769e29dece8c16ca4b47542?" }}
          style={styles.footerImage1}
        />
        <Image
          resizeMode="auto"
          source={{ uri: "https://cdn.builder.io/api/v1/image/assets/TEMP/b53b15c5472f49e0fa829a95ef1f5118b61c88885367c3f0a55cf9dae9fe00bf?" }}
          style={styles.footerImage2}
        />
      </View>
    </View>
    <Footer/>
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    maxWidth: 480,
    margin: "0 auto",
    flexDirection: "column",
    alignItems: "stretch",
  },
  header: {
    backgroundColor: "rgba(236, 144, 144, 1)",
    paddingHorizontal: 26,
    paddingVertical: 24,
  },
  backButton: {
    width: 36,
    height: 36,
    borderRadius: 10,
    backgroundColor: "#D9D9D9",
    alignItems: "center",
    justifyContent: "center",
  },
  content: {
    paddingHorizontal: 36,
    marginTop: 7,
  },
  greeting: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 20,
  },
  editProfile: {
    backgroundColor: "#FEDCF9",
    borderRadius: 8,
    padding: 10,
    alignItems: "center",
    marginBottom: 20,
  },
  editProfileText: {
    fontSize: 20,
    color: "#B83838",
  },
  input: {
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 8,
    paddingHorizontal: 12,
    paddingVertical: 10,
    fontSize: 16,
    color: '#333',
    marginBottom: 20,
  },
  
  profileImage: {
    width: 74,
    height: 74,
    borderRadius: 37,
  },
  actions: {
    marginTop: 65,
  },
  action: {
    marginBottom: 20,
  },
  employeeRequest: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    marginTop: 176,
    maxWidth: 290,
  },
  footer: {
    paddingHorizontal: 80,
    paddingVertical: 19,
    backgroundColor: "rgba(229, 104, 127, 1)",
    flexDirection: "row",
    justifyContent: "space-between",
    marginTop: 102,
  },
  footerImage1: {
    width: 24,
    height: 24,
  },
  footerImage2: {
    width: 156,
    height: 24,
  },
});

export default MyProfile;
