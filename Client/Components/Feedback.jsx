import React from "react";
import { View, Text, StyleSheet, TouchableOpacity, Alert } from "react-native";
import Header from "./Header";
import { AirbnbRating } from "react-native-ratings";

const Feedback = () => {
  const handleRatingSubmit = (isAnonymous) => {
    // Logic to handle rating submission
    console.log(`Rating submitted ${isAnonymous ? "anonymously" : "with name"}`);

    // Show success message
    Alert.alert("Success", "Feedback submitted successfully!", [
      {
        text: "OK",
        onPress: () => console.log("OK Pressed"),
      },
    ]);
  };

  return (
    <>
      <Header heading={"Leave Feedback"} />
      <View style={styles.container}>
        <Text style={styles.head}>FeedBack Form</Text>
        <View style={styles.form}>
          <Text style={styles.question}>Food</Text>
          <AirbnbRating count={5} defaultRating={0} size={30} showRating={false} />
          <Text style={styles.question}>Service by employee</Text>
          <AirbnbRating count={5} defaultRating={0} size={30} showRating={false} />
          <Text style={styles.question}>Ambiance</Text>
          <AirbnbRating count={5} defaultRating={0} size={30} showRating={false} />
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
