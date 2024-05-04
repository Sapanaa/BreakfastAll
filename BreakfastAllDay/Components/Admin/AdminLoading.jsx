import React from "react";
import { View, StyleSheet, Image, Text, TouchableOpacity, ScrollView } from "react-native";
import Footer from "../Next.jsx/Footer";
import Header from "../Next.jsx/Header";
import { LinearGradient } from 'expo-linear-gradient';

const NavigationItem = ({ title, onPress }) => (
  <TouchableOpacity onPress={onPress} style={styles.navigationItemContainer}>
    <Text style={styles.navigationItemTitle}>{title}</Text>
    <View style={styles.navigationArrowContainer}>
      <Text style={styles.navigationArrow}>&gt;</Text>
    </View>
  </TouchableOpacity>
);

const AdminLoading = () => {
  const navigationItems = [
    { title: "Change Name", onPress: () => {} },
    { title: "Update Logo", onPress: () => {} },
    { title: "Change Number", onPress: () => {} },
    { title: "Change Address", onPress: () => {} },
  ];
  const navigationItem = [
    { title: "Add Staff", onPress: () => {} },
    { title: "Remove Staff", onPress: () => {} },
    { title: "Disable Staff", onPress: () => {} },
    { title: "View Evaluations", onPress: () => {} },
  ];

  return (
    <>
      <Header heading={'Edit Account'}/>
      <View style={styles.container}>
        <LinearGradient
          colors={['#FBECF8', '#EFC3E8','#E297D6']}
          style={styles.linearGradient}
        >
          <ScrollView contentContainerStyle={styles.scrollContainer} horizontal={false}>
            <View style={styles.contentContainer}>
              <Image
                resizeMode="contain"
                source={{ uri: "imageUri" }}
                style={styles.profileImage}
              />
              <View style={styles.sectionContainer}>
                <Text style={styles.sectionTitle}>Configure Account</Text>
              </View>
              {navigationItems.map((item, index) => (
                <NavigationItem key={index} title={item.title} onPress={item.onPress} />
              ))}
              <View style={styles.sectionContainer}>
                <Text style={styles.sectionTitle}>Manage Employee</Text>
              </View>
              {navigationItem.map((item, index) => (
                <NavigationItem key={index} title={item.title} onPress={item.onPress} />
              ))}

            </View>

          </ScrollView>
        </LinearGradient>
      </View>
      <Footer/>
    </>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: 90,
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
    borderWidth: 1,
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
  footerContainer: {
    height: 80,
    width: "100%",
    backgroundColor: "#F670C9",
    borderRadius: 8,
    marginTop: 16,
  },
});

export default AdminLoading;

