import React, { useState } from "react";
import { View, Text, StyleSheet, TouchableOpacity, Alert } from "react-native";
import Header from "./Header";
import { AirbnbRating } from "react-native-ratings";
import { collection, addDoc, serverTimestamp, Firestore } from "firebase/firestore";
import { db }from "../firebase.config"

const Feedback = () => {
  const [ratings, setRatings] = useState({
    food: 0,
    service: 0,
    ambiance: 0,
  });

  const handleRatingChange = (field, rating) => {
    setRatings((prevRatings) => ({
      ...prevRatings,
      [field]: rating,
    }));
  };

  const handleRatingSubmit = async (isAnonymous) => {
    console.log("handleRatingSubmit called with isAnonymous:", isAnonymous);
    console.log("Current ratings:", ratings);

    try {
      const docRef = await addDoc(collection(db, 'feedback'), {
        ...ratings,
        isAnonymous,
        timestamp: serverTimestamp(),
      });
      console.log("Document written with ID: ", docRef.id);
      Alert.alert("Success", "Feedback submitted successfully!", [
        {
          text: "OK",
          onPress: () => console.log("OK Pressed"),
        },
      ]);
    } catch (e) {
      console.error("Error adding document: ", e);
      Alert.alert("Error", "There was an error submitting your feedback. Please try again later.");
    }
  };

  return (
    <>
      <Header heading={"Leave Feedback"} />
      <View style={styles.container}>
        <Text style={styles.head}>Feedback Form</Text>
        <View style={styles.form}>
          <Text style={styles.question}>Food</Text>
          <AirbnbRating
            count={5}
            defaultRating={ratings.food}
            size={30}
            showRating={false}
            onFinishRating={(rating) => handleRatingChange('food', rating)}
          />
          <Text style={styles.question}>Service by employee</Text>
          <AirbnbRating
            count={5}
            defaultRating={ratings.service}
            size={30}
            showRating={false}
            onFinishRating={(rating) => handleRatingChange('service', rating)}
          />
          <Text style={styles.question}>Ambiance</Text>
          <AirbnbRating
            count={5}
            defaultRating={ratings.ambiance}
            size={30}
            showRating={false}
            onFinishRating={(rating) => handleRatingChange('ambiance', rating)}
          />
        </View>
        <TouchableOpacity
          style={styles.submitButton}
          onPress={() => handleRatingSubmit(true)} // Submit Anonymously
        >
          <Text>Submit Anonymously</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.submitButton}
          onPress={() => handleRatingSubmit(false)} // Submit with name
        >
          <Text>Submit</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.cancelButton}>
          <Text>Cancel</Text>
        </TouchableOpacity>
      </View>
    </>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#FDE7E7",
    display: "flex",
    maxWidth: 480,
    width: "100%",
    flexDirection: "column",
    alignItems: "stretch",
    margin: "0 auto",
  },
  form: {
    padding: 20,
  },
  head: {
    fontSize: 30,
    textAlign: "center",
    padding: 20,
  },
  question: {
    fontFamily: "Itim",
    fontSize: 18,
    color: "#6C1368",
    marginTop: 20,
  },
  submitButton: {
    backgroundColor: "#E5687F",
    alignSelf: "center",
    borderRadius: 5,
    marginTop: 20,
    padding: 10,
  },
  cancelButton: {
    backgroundColor: "#E5687F",
    alignSelf: "center",
    marginTop: 10,
    padding: 10,
  },
});

export default Feedback;
