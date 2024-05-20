import React, { useState } from "react";
import { View, Text, TouchableOpacity, StyleSheet, Modal } from "react-native";
import { LinearGradient } from 'expo-linear-gradient'; 
import Header from "../Next.jsx/Header";
import Footer from "../Next.jsx/Footer";

import { doc, setDoc } from "firebase/firestore";
import { db } from "./firebase.config";

const AssignEmployee = () => {
  const employees = [
    { label: "Employee 1", value: "emp1" },
    { label: "Employee 2", value: "emp2" },
    { label: "Employee 3", value: "emp3" },
    { label: "Employee 4", value: "emp4" },
    { label: "Employee 5", value: "emp5" },
  ];

  const Dropdown = ({ options }) => {
    const [selectedValue, setSelectedValue] = useState(null);
    const [isVisible, setIsVisible] = useState(false);

    const handleSelect = (value) => {
      setSelectedValue(value);
      setIsVisible(false);
    };

    return (
      <View style={styles.dropdownContainer}>
        <TouchableOpacity onPress={() => setIsVisible(true)} style={styles.dropdownButton}>
          <Text>{selectedValue || 'Select Employee'}</Text>
        </TouchableOpacity>
        <Modal visible={isVisible} animationType="slide">
          <View style={styles.modalContainer}>
            {options.map((option) => (
              <TouchableOpacity
                key={option.value}
                style={styles.optionButton}
                onPress={() => handleSelect(option.value)}
              >
                <Text>{option.label}</Text>
              </TouchableOpacity>
            ))}
            <TouchableOpacity style={styles.closeButton} onPress={() => setIsVisible(false)}>
              <Text style={styles.closeText}>Close</Text>
            </TouchableOpacity>
          </View>
        </Modal>
      </View>
    );
  };

  return (
    <>
    <Header heading={"Assign Emp"}/>

    <LinearGradient
      colors={['#FBECF8', '#EFC3E8','#E297D6']}
      style={styles.container}
    >
    <View style={styles.container}>
        <View style={styles.row}>
        <Text>Table 1</Text>
     <Dropdown options={employees} /></View>
     <View style={styles.row}>
        <Text>Table 2</Text>
     <Dropdown options={employees} /></View>
     <View style={styles.row}>
        <Text>Table 3</Text>
     <Dropdown options={employees} /></View>
     <View style={styles.row}>
        <Text>Table 4</Text>
     <Dropdown options={employees} /></View>
     <View style={styles.row}>
        <Text>Table 5</Text>
     <Dropdown options={employees} /></View>
     <View style={styles.row}>
        <Text>Table 6</Text>
     <Dropdown options={employees} /></View>
     <View style={styles.row}>
        <Text>Table 7</Text>
     <Dropdown options={employees} /></View>
     <View style={styles.row}>
        <Text>Table 8</Text>
     <Dropdown options={employees} /></View>
     <View style={styles.row}>
        <Text>Table 9</Text>
     <Dropdown options={employees} /></View>
    </View>
    </LinearGradient>
    <Footer/>
    </>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    paddingHorizontal: 20,
    width: '100%',
  },
  dropdownContainer: {
    marginBottom: 20,
  },
  dropdownButton: {
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderWidth: 1,
    borderColor: 'gray',
    borderRadius: 8,
    backgroundColor: 'white',

  },
  modalContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    
  },
  optionButton: {
    padding: 20,
    borderBottomWidth: 1,
    borderBottomColor: '#ccc',
    backgroundColor: 'white',
    width: '100%',
    alignItems: 'center',
  },
  closeButton: {
    marginTop: 20,
  },
  closeText: {
    fontSize: 16,
    color: 'blue',
  },
  row:{
    flexDirection: 'row',
    justifyContent: 'center',
    gap: 50,
    alignItems: 'center',

  }
});

export default AssignEmployee;
