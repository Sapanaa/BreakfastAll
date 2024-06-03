// components/AdminLoading.js

import React from "react";
import { View, StyleSheet, Image, Text, TouchableOpacity, ScrollView } from "react-native";
import { useNavigation } from '@react-navigation/native';
import { LinearGradient } from 'expo-linear-gradient';
import Adm from "../../assets/AdminIm.png";
import Header from "../Next.jsx/Header";

const NavigationItem = ({ title, screenName }) => {
  const navigation = useNavigation();

  const onPress = () => {
    navigation.navigate(screenName);
  };

  return (
    <TouchableOpacity onPress={onPress} style={styles.navigationItemContainer}>
      <Text style={styles.navigationItemTitle}>{title}</Text>
      <View style={styles.navigationArrowContainer}>
        <Text style={styles.navigationArrow}>&gt;</Text>
      </View>
    </TouchableOpacity>
  );
};

const AdminLoading = () => {
  const navigationItems = [
    { title: "Change Name", screenName: "EditAccount" },
    { title: "Update Logo", screenName: "EditAccount" },
    { title: "Change Number", screenName: "EditAccount" },
    { title: "Change Address", screenName: "EditAccount" },
  ];
  const navigationItem = [
    { title: "Add Staff", screenName: "StaffManagement" },
    { title: "Remove Staff", screenName: "StaffManagement" },
    { title: "Disable Staff", screenName: "StaffManagement" },
    { title: "View Evaluations", screenName: "EmployeeEvaluation" },
  ];

  return (
    <>
      <View style={styles.container}>
         <Header heading={"Admin"}/>
        <LinearGradient
          colors={['#FBECF8', '#EFC3E8','#E297D6']}
          style={styles.linearGradient}
        >
         
          <ScrollView contentContainerStyle={styles.scrollContainer} horizontal={false}>
            <View style={styles.contentContainer}>
              <Image
                resizeMode="contain"
                source={Adm}
                style={styles.profileImage}
              />
              <View style={styles.sectionContainer}>
                <Text style={styles.sectionTitle}>Configure Account</Text>
              </View>
              {navigationItems.map((item, index) => (
                <NavigationItem key={index} title={item.title} screenName={item.screenName} />
              ))}
              <View style={styles.sectionContainer}>
                <Text style={styles.sectionTitle}>Manage Employee</Text>
              </View>
              {navigationItem.map((item, index) => (
                <NavigationItem key={index} title={item.title} screenName={item.screenName} />
              ))}

            </View>

          </ScrollView>
        </LinearGradient>
      </View>
    </>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  linearGradient: {
    flex: 1,
  },
  scrollContainer: {
    flexGrow: 1,
    paddingTop: 20, // Add padding top to adjust the content below the header
  },
  contentContainer: {
    alignItems: "center",
    paddingHorizontal: 16,
  },
  profileImage: {
    borderRadius: 84,
    marginTop: 16,
    width: 168,
    height: 168,
    borderColor: 'black',
    borderStyle: 'solid',
  },
  sectionContainer: {
    alignItems: "flex-start",
    width: "100%",
    paddingHorizontal: 20,
    marginTop: 16,
  },
  sectionTitle: {
    fontSize: 18,
    fontWeight: "bold",
    color: "#6C1368",
  },
  navigationItemContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    paddingHorizontal: 20,
    paddingVertical: 12,
    borderBottomWidth: 1,
    borderBottomColor: "#CCCCCC",
    width: "100%",
  },
  navigationItemTitle: {
    fontSize: 16,
    color: "#333",
  },
  navigationArrowContainer: {
    borderWidth: 1,
    borderColor: 'black',
    borderStyle: 'solid',
    borderRadius: 5,
    backgroundColor: '#c72c47',
    justifyContent: 'center',
    width: 25,
    height: 30,
    alignItems: 'center',
  },
  navigationArrow: {
    fontSize: 18,
    color: "#6C1368",
  },
});

export default AdminLoading;
