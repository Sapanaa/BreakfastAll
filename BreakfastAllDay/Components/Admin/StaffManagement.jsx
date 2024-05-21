import React, { useState, useEffect } from "react";
import { View, Text, StyleSheet, TextInput, TouchableOpacity, Alert, ScrollView } from "react-native";
import { LinearGradient } from 'expo-linear-gradient';
import Header from "../Next.jsx/Header";
import { doc, setDoc, deleteDoc, collection, getDocs, getDoc } from "firebase/firestore";
import { db } from "../../firebase.config";

const SectionTitle = ({ title }) => (
  <Text style={styles.sectionTitle}>{title}</Text>
);

const StaffItem = ({ name, email, status }) => (
  <View style={styles.staffItem}>
    <Text style={styles.staffText}>{name}</Text>
    <Text style={styles.staffText}>{email}</Text>
    <Text style={styles.staffText}>{status}</Text>
  </View>
);

const StaffManagement = () => {
  const [newStaffName, setNewStaffName] = useState('');
  const [newStaffEmail, setNewStaffEmail] = useState('');
  const [employees, setEmployees] = useState([]);
  const [showSuccessMessage, setShowSuccessMessage] = useState(false);
  const [searchEmail, setSearchEmail] = useState('');
  const [searchSuccessMessage, setSearchSuccessMessage] = useState('');
  const [searchErrorMessage, setSearchErrorMessage] = useState('');
  const [addErrorMessage, setAddErrorMessage] = useState('');

  useEffect(() => {
    const fetchEmployees = async () => {
      try {
        const querySnapshot = await getDocs(collection(db, "Employee"));
        const fetchedEmployees = querySnapshot.docs.map(doc => ({
          ...doc.data(),
          id: doc.id
        }));
        setEmployees(fetchedEmployees);
      } catch (error) {
        console.error("Error fetching employees: ", error);
      }
    };

    fetchEmployees();
  }, []);

  const handleAddStaff = async () => {
    if (newStaffName.trim() !== '' && newStaffEmail.trim() !== '') {
      const newEmployee = {
        name: newStaffName.trim(),
        email: newStaffEmail.trim(),
        status: "Active"
      };

      try {
        // Check if email already exists
        const emailSnapshot = await getDoc(doc(db, "Employee", newStaffEmail.trim()));
        if (emailSnapshot.exists()) {
          setAddErrorMessage("An employee with this email already exists.");
          return;
        }

        // Add new employee if email does not exist
        await setDoc(doc(db, "Employee", newStaffEmail.trim()), newEmployee);

        setEmployees([...employees, { ...newEmployee, id: newStaffEmail.trim() }]);

        setShowSuccessMessage(true);
        setNewStaffName('');
        setNewStaffEmail('');
        setAddErrorMessage('');
      } catch (error) {
        console.error("Error adding employee: ", error);
      }
    } else {
      Alert.alert("Error", "Please fill in both name and email.");
    }
  };

  const handleRemoveEmployee = async (id) => {
    try {
      const employeeDocRef = doc(db, "Employee", id);
      await deleteDoc(employeeDocRef);

      const updatedEmployees = employees.filter(employee => employee.id !== id);
      setEmployees(updatedEmployees);
      setSearchSuccessMessage('Employee deleted successfully');
      setSearchErrorMessage('');
    } catch (error) {
      console.error("Error removing employee: ", error);
      setSearchErrorMessage('Error removing employee');
      setSearchSuccessMessage('');
    }
  };

  const handleSearchAndDelete = async () => {
    try {
      const employeeToDelete = employees.find(employee => employee.email === searchEmail.trim());
      if (employeeToDelete) {
        await handleRemoveEmployee(employeeToDelete.id);
        setSearchEmail('');
        setSearchSuccessMessage('Employee deleted successfully');
        setSearchErrorMessage('');
      } else {
        setSearchErrorMessage('Employee not found');
        setSearchSuccessMessage('');
      }
    } catch (error) {
      console.error("Error searching and deleting employee: ", error);
      setSearchErrorMessage('Error searching and deleting employee');
      setSearchSuccessMessage('');
    }
  };

  return (
    <>
      <Header heading={'Manage Staffs'} />
      <View style={styles.container}>
        <View style={styles.headerTop} />
        <LinearGradient
          colors={['#FBECF8', '#EFC3E8', '#E297D6']}
          style={styles.content}
        >
          <ScrollView contentContainerStyle={styles.scrollContent}>
            <SectionTitle title="Employee List" />
            {employees.map((employee, index) => (
              <StaffItem
                key={index}
                name={employee.name}
                email={employee.email}
                status={employee.status}
              />
            ))}

            <SectionTitle title="Add Staff" />
            <TextInput
              style={styles.input}
              placeholder="Name"
              value={newStaffName}
              onChangeText={(text) => {
                setNewStaffName(text);
                setAddErrorMessage('');
              }}
              autoComplete="off"
              textContentType="none"
            />
            <TextInput
              style={styles.input}
              placeholder="Email"
              value={newStaffEmail}
              onChangeText={(text) => {
                setNewStaffEmail(text);
                setAddErrorMessage('');
              }}
              autoComplete="off"
              textContentType="none"
              keyboardType="email-address"
            />
            <TouchableOpacity style={styles.button} onPress={handleAddStaff}>
              <Text style={styles.buttonText}>ADD</Text>
            </TouchableOpacity>

            {showSuccessMessage && (
              <Text style={styles.successMessage}>Staff added successfully!</Text>
            )}

            {addErrorMessage && (
              <Text style={styles.errorMessage}>{addErrorMessage}</Text>
            )}

            <SectionTitle title="Search and Delete Staff" />
            <TextInput
              style={styles.input}
              placeholder="Enter email to search"
              value={searchEmail}
              onChangeText={(text) => {
                setSearchEmail(text);
                setSearchErrorMessage('');
                setSearchSuccessMessage('');
              }}
              autoComplete="off"
              textContentType="none"
              keyboardType="email-address"
            />
            <TouchableOpacity style={styles.button} onPress={handleSearchAndDelete}>
              <Text style={styles.buttonText}>SEARCH AND DELETE</Text>
            </TouchableOpacity>

            {searchSuccessMessage && (
              <Text style={styles.successMessage}>{searchSuccessMessage}</Text>
            )}

            {searchErrorMessage && (
              <Text style={styles.errorMessage}>{searchErrorMessage}</Text>
            )}
          </ScrollView>
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
  scrollContent: {
    flexGrow: 1,
    justifyContent: "center",
    alignItems: "center",
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
    width: '100%',
  },
  staffText: {
    flex: 1,
    fontSize: 16,
    textAlign: 'center',
  },
  input: {
    backgroundColor: "rgba(0, 0, 0, 0.04)",
    marginTop: 16,
    borderRadius: 30,
    paddingHorizontal: 10,
    paddingVertical: 8,
    fontSize: 16,
    width: "80%",
  },
  button: {
    backgroundColor: "rgba(255, 41, 66, 0.84)",
    marginTop: 16,
    padding: 10,
    borderRadius: 30,
    width: "60%",
    alignItems: 'center',
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
  errorMessage: {
    marginTop: 10,
    color: "#FF0000",
    fontSize: 16,
    textAlign: "center",
  },
});

export default StaffManagement;
