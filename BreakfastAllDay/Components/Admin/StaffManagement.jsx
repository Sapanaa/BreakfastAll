import React, { useState } from "react";
import { View, Text, StyleSheet, TextInput, TouchableOpacity, Image, Alert } from "react-native";
import { LinearGradient } from 'expo-linear-gradient';
import Header from "../Next.jsx/Header";
import { doc, setDoc, serverTimestamp, collection } from "firebase/firestore";
import { db } from "../../firebase.config";
// https://firebase.google.com/docs/reference/js/firestore_.md#updatedoc

const SectionTitle = ({ title }) => (
  <Text style={styles.sectionTitle}>{title}</Text>
);

const StaffItem = ({ name, email, status, onRemove }) => {
  const confirmDelete = () => {
    Alert.alert(
      "Confirm Deletion",
      `Are you sure you want to delete ${name}?`,
      [
        {
          text: "Cancel",
          style: "cancel"
        },
        {
          text: "Delete",
          onPress: () => onRemove()
        }
      ],
      { cancelable: true }
    );
  };

  return (
    <View style={styles.staffItem}>
      <Text style={styles.staffName}>{name}</Text>
      <Text style={styles.staffEmail}>{email}</Text>
      <Text style={styles.staffStatus}>{status}</Text>
      <TouchableOpacity onPress={confirmDelete}>
        <Image
          resizeMode="auto"
          source={require('../../assets/DeleteI.png')}
          style={styles.actionIcon}
        />
      </TouchableOpacity>
    </View>
  );
};

const StaffManagement = () => {
  const [newStaffName, setNewStaffName] = useState('');
  const [newStaffEmail, setNewStaffEmail] = useState('');
  const [employees, setEmployees] = useState([
    { name: "Ana", email: "Ana@hotmail.com", status: "Active" },
    { name: "Paul", email: "itspaul@yahoo", status: "Active" }
  ]);
  const [showSuccessMessage, setShowSuccessMessage] = useState(false);

  const handleAddStaff = async () => {
    if (newStaffName.trim() !== '' && newStaffEmail.trim() !== '') {
      const newEmployee = {
        name: newStaffName.trim(),
        email: newStaffEmail.trim(),
        status: "Active"
      };

      // Update employees state to include the new employee
      setEmployees([...employees, newEmployee]);
      const bossRef = collection(db, "Employee");
await setDoc(doc(bossRef), {
  name: newStaffName.trim(),
  email: newStaffEmail.trim(),
  status: "Active"
});


      // Show success message after adding employee
      setShowSuccessMessage(true);

      // Clear input fields after successful addition
      setNewStaffName('');
      setNewStaffEmail('');
    }
  };

  const handleRemoveEmployee = (index) => {
    const updatedEmployees = [...employees];
    updatedEmployees.splice(index, 1); // Remove 1 element at 'index'
    setEmployees(updatedEmployees);
  };

  return (
    <>
      <Header heading={'Manage Staffs'}/>
      <View style={styles.container}>
        <View style={styles.headerTop} />
        <LinearGradient
          colors={['#FBECF8', '#EFC3E8', '#E297D6']}
          style={styles.content}
        >
          <SectionTitle title="Employee List" />
          {employees.map((employee, index) => (
            <StaffItem
              key={index}
              name={employee.name}
              email={employee.email}
              status={employee.status}
              onRemove={() => handleRemoveEmployee(index)}
            />
          ))}
          
          <SectionTitle title="Add Staff" />
          <TextInput
            style={styles.input}
            placeholder="Name"
            value={newStaffName}
            onChangeText={setNewStaffName}
          />
          <TextInput
            style={styles.input}
            placeholder="Email"
            value={newStaffEmail}
            onChangeText={setNewStaffEmail}
          />
          <TouchableOpacity style={styles.button} onPress={handleAddStaff}>
            <Text style={styles.buttonText}>ADD</Text>
          </TouchableOpacity>

          {showSuccessMessage && newStaffName.trim() !== '' && newStaffEmail.trim() !== '' && (
            <Text style={styles.successMessage}>Staff added successfully!</Text>
          )}

          {/* Other sections (Remove Staff, Disable Staff) can be added here */}
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
  successMessage: {
    marginTop: 10,
    color: "#4CAF50",
    fontSize: 16,
    textAlign: "center",
  },
  actionIcon: {
    width: 20,
    height: 20,
  },
});

export default StaffManagement;
