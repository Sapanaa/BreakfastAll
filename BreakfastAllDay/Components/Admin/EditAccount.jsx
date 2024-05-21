import React, { useState, useEffect } from "react";
import { View, Text, TouchableOpacity, StyleSheet, Modal, Image, TextInput, Alert, Pressable } from "react-native";
import { LinearGradient } from 'expo-linear-gradient';
import Breakfast from "../../assets/Breakfast.png";
import * as ImagePicker from 'expo-image-picker';
import {  doc, setDoc } from "firebase/firestore"; 
import { db } from "../../firebase.config";

const Dropdown = ({ options, selectedValue, onSelect }) => {
  const [isVisible, setIsVisible] = useState(false);

  const handleSelect = (value) => {
    onSelect(value);
    setIsVisible(false);
  };

  return (
    <View style={styles.dropdownContainer}>
      <TouchableOpacity onPress={() => setIsVisible(true)} style={styles.dropdownButton}>
        <Text>{selectedValue}</Text>
      </TouchableOpacity>
      <Modal visible={isVisible} animationType="slide">
        <View style={styles.modalContainer}>
          {options.map((option) => (
            <TouchableOpacity
              key={option}
              style={styles.optionButton}
              onPress={() => handleSelect(option)}
            >
              <Text>{option}</Text>
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

const InfoSection = ({ title, isInput = false, inputPlaceholder, value, onChangeText }) => (
  <View>
    <Text style={styles.sectionTitle}>{title}</Text>
    {isInput ? (
      <TextInput
        style={styles.inputField}
        placeholder={inputPlaceholder}
        placeholderTextColor="#000"
        value={value}
        onChangeText={onChangeText}
      />
    ) : (
      <View style={styles.sectionDivider} />
    )}
  </View>
);

const ActionButton = ({ title, onPress }) => (
  <TouchableOpacity onPress={onPress} style={styles.actionButton}>
    <Text style={styles.actionButtonText}>{title}</Text>
  </TouchableOpacity>
);

const EditAccount = () => {
  const [selectedColor, setSelectedColor] = useState("Pink");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [address, setAddress] = useState("");
  const [image, setImage] = useState(null);
  const colorOptions = ["Pink", "Blush", "Purple"];

  useEffect(() => {
    (async () => {
      if (Platform.OS !== 'web') {
        const { status } = await ImagePicker.requestMediaLibraryPermissionsAsync();
        if (status !== 'granted') {
          Alert.alert('Permission required', 'Sorry, we need camera roll permissions to make this work!');
        }
      }
    })();
  }, []);

  const handleColorSelect = (color) => {
    setSelectedColor(color);
  };

  const handleSave = async () => {
    try {
      const docRef = doc(db, "UpdateCompany", "CompanyLocPhone"); // Use a fixedocument ID
      await setDoc(docRef, {
        phoneNumber: phoneNumber.trim(),
        address: address.trim(),
        selectedColor: selectedColor,
        image: image // Save image URL or base64 data to the database
      }, { merge: true });
      Alert.alert("Success", "Profile updated successfully!");
    } catch (e) {
      console.error("Error updating profile: ", e);
      Alert.alert("Error", "Failed to update profile.");
    }
  };

  const patternColors = {
    Pink: ['#FBECF8', '#E297D6'],
    Blush: ['#FCE8E6', '#F3A4B5'],
    Purple: ['#EFE9FF', '#B6ACF3']
  };

  const pickImage = async () => {
    let result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.All,
      allowsEditing: true,
      aspect: [4, 3],
      quality: 1,
    });

    if (!result.cancelled) {
      setImage(result.uri);
    }
  };

  return (
    <LinearGradient
    colors={patternColors[selectedColor]} // Change colors based on selected pattern
    style={styles.container}
    >
      <View style={styles.profileInfo}>
        <Pressable onPress={pickImage}>
          {image ? (
            <Image source={{ uri: image }} style={styles.profileImage} />
          ) : (
            <Image
              resizeMode="contain"
              source={Breakfast}
              style={styles.profileImage}
            />
          )}
        </Pressable>
        <Text style={styles.editText}>Edit</Text>
        <Text style={styles.addNewText}>Enter name and add a new picture</Text>
      </View>
      <View style={styles.line} />
      <Text style={styles.mainTitle}>Breakfast All Day</Text>
      <View style={styles.line} />

      <InfoSection
        title="PHONE NUMBER"
        isInput={true}
        inputPlaceholder="Enter your phone number"
        value={phoneNumber}
        onChangeText={setPhoneNumber}
      />
      <InfoSection
        title="Address"
        isInput={true}
        inputPlaceholder="Enter your address"
        value={address}
        onChangeText={setAddress}
      />
      <Text style={styles.pattern}>Choose Pattern</Text>
      <Dropdown
        options={colorOptions}
        selectedValue={selectedColor}
        onSelect={handleColorSelect}
      />
      <View style={styles.actionButtons}>
        <ActionButton title="SAVE" onPress={handleSave} />
        <View style={{ width: 60 }} />
        <ActionButton title="CANCEL" onPress={() => { }} />
      </View>
    </LinearGradient>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    width: '100%',
    justifyContent: "center",
    alignItems: "center",
  },
  profileInfo: {
    marginTop: 43,
    alignItems: "center",
    marginVertical: 20,
  },
  profileImage: {
    width: 100,
    height: 100,
    borderRadius: 50,
    borderColor: 'black',
    borderStyle: 'solid',
  },
  addNewText: {
    marginTop: 12,
    textAlign: "center",
  },
  editText: {
    color: "#000",
    alignSelf: "flex-start",
    marginLeft: 58,
    marginVertical: 8,
  },
  line: {
    borderTopWidth: 1,
    borderTopColor: 'black',
    width: '80%',
  },
  mainTitle: {
    color: "#000",
    marginTop: 8,
    fontSize: 24,
    fontWeight: "400",
  },
  sectionTitle: {
    color: "#000",
    marginTop: 24,
    fontSize: 20,
    fontWeight: "400",
  },
  inputField: {
    borderRadius: 30,
    backgroundColor: "rgba(0, 0, 0, 0.04)",
    marginTop: 24,
    width: 318,
    height: 42,
    paddingHorizontal: 10,
  },
  sectionDivider: {
    borderColor: "rgba(0, 0, 0, 1)",
    borderWidth: 1,
    backgroundColor: "#000",
    marginTop: 7,
    width: 338,
    height: 2,
  },
  dropdownContainer: {
    flexDirection: "row",
    alignItems: "center",
  },
  dropdownButton: {
    borderWidth: 1,
    borderColor: "#000000",
    padding: 10,
    minWidth: 100,
    alignItems: "center",
  },
  modalContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#F5F5F5",
  },
  optionButton: {
    borderWidth: 1,
    borderColor: "#000000",
    padding: 10,
    marginVertical: 5,
    minWidth: 100,
    alignItems: "center",
  },
  closeButton: {
    marginTop: 20,
    borderWidth: 1,
    borderColor: "#000000",
    padding: 10,
    minWidth: 100,
    alignItems: "center",
  },
  closeText: {
    fontWeight: "bold",
  },
  actionButtons: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginVertical: 20,
  },
  actionButton: {
    backgroundColor: "rgba(255, 41, 66, 0.84)",
    padding: 10,
    borderRadius: 10,
  },
  actionButtonText: {
    color: "#FFF",
  },
  pattern: {
    fontSize: 20,
    marginVertical: 20,
  }
});

export default EditAccount;
