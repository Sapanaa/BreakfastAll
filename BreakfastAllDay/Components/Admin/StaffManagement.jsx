import React from "react";
import { View, Text, StyleSheet, TextInput, TouchableOpacity, Image } from "react-native";
import { LinearGradient } from 'expo-linear-gradient';
import Header from "../Next.jsx/Header";

const SectionTitle = ({ title }) => (
  <Text style={styles.sectionTitle}>{title}</Text>
);

const StaffItem = ({ name, email, status }) => (
  <View style={styles.staffItem}>
    <Text style={styles.staffName}>{name}</Text>
    <Text style={styles.staffEmail}>{email}</Text>
    <Text style={styles.staffStatus}>{status}</Text>
  </View>
);

const StaffManagement = () => {
  return (
    <>
      <Header heading={'Manage Staffs'}/>
      <View style={styles.container}>
        <View style={styles.headerTop} />
        <LinearGradient
          colors={['#FBECF8', '#EFC3E8', '#E297D6']}
          style={styles.content}
        >
          <SectionTitle title="Employee List"   />
          <StaffItem name="Name" email="Email" status="Status" style={styles.staff}/>
          <StaffItem name="Ana" email="Ana@hotmail.com" status="Active" style={styles.staff}/>
          <StaffItem name="Paul" email="itspaul@yahoo" status="Active" style={styles.staff}/>
          <SectionTitle title="Add Staff" />
          <TextInput style={styles.input} placeholder="Name"  />
          <TextInput style={styles.input} placeholder="Email"  />
          <TouchableOpacity style={styles.button}><Text style={styles.buttonText}>ADD</Text></TouchableOpacity>
          <SectionTitle title="Remove Staff" />
          <View style={styles.staffActionItem}>
            <Text style={styles.staffName}>Ana</Text>
            <View style={styles.staffActionContent}>
              <Text style={styles.staffEmail}>Ana@hotmail.com</Text>
              <Image resizeMode="auto" source={{ uri: "https://example.com/path/to/delete/icon", }} style={styles.actionIcon} />
            </View>
          </View>
          <SectionTitle title="Disable Staff" />
          <View style={styles.staffActionItem}>
            <Text style={styles.staffName}>Paul</Text>
            <View style={styles.staffActionContent}>
              <Text style={styles.staffEmail}>itspaul@yahoo</Text>
              <TouchableOpacity style={styles.actionButton}>
                <Text style={styles.buttonText}>SELECT</Text>
              </TouchableOpacity>
            </View>
          </View>
        </LinearGradient>
      </View>
    </>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "stretch",
    justifyContent: "flex-start",
    flexDirection: "column",
    margin: 0,
    width: '100%',
  },
  headerTop: {
    backgroundColor: "#FFCEF7",
    minHeight: 86,
  },
  staff: {
  },
  content: {
    flex: 1,
    padding: 20,
  },
  sectionTitle: {
    color: "#000",
    fontSize: 24,
    marginBottom: 20,
  },
  staffItem: {
    flexDirection: "row",
    justifyContent: "space-between",
    borderTopWidth: 1,
    borderTopColor: "rgba(198, 184, 184, 1)",
    paddingVertical: 10,
    paddingHorizontal: 10,
  },
  input: {
    backgroundColor: "rgba(0, 0, 0, 0.04)",
    marginTop: 16,
    borderRadius: 30,
    paddingHorizontal: 10,
    paddingVertical: 8,
    fontSize: 16,
    maxWidth: 318,
    width: "100%",
  },
  button: {
    backgroundColor: "rgba(255, 41, 66, 0.84)",
    marginTop: 16,
    padding: 10,
    borderRadius: 30,
  },
  buttonText: {
    color: "#fff",
    textAlign: "center",
    fontSize: 16,
  },
  staffActionItem: {
    flexDirection: "row",
    justifyContent: "space-between",
    borderTopWidth: 1,
    borderTopColor: "rgba(198, 184, 184, 1)",
    paddingVertical: 10,
    paddingHorizontal: 10,
    backgroundColor: "rgba(253, 231, 231, 0.87)",
  },
  staffActionContent: {
    flexDirection: "row",
    alignItems: "center",
  },
  actionIcon: {
    marginLeft: 10,
    width: 20,
    height: 20,
  },
  actionButton: {
    backgroundColor: "rgba(255, 41, 66, 0.84)",
    paddingHorizontal: 10,
    paddingVertical: 5,
    borderRadius: 30,
  }
});

export default StaffManagement;
