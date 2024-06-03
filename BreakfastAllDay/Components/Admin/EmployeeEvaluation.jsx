import React, { useState, useEffect } from "react";
import { View, Text, StyleSheet, TextInput, Alert } from "react-native";
import Header from "../Next.jsx/Header";
import Footer from "../Next.jsx/Footer";
import { collection, getDocs } from "firebase/firestore";
import { db } from "../../firebase.config";

const EmployeeEvaluation = () => {
  const [feedbackData, setFeedbackData] = useState([]);
  const [searchText, setSearchText] = useState("");

  useEffect(() => {
    const fetchFeedback = async () => {
      try {
        const querySnapshot = await getDocs(collection(db, "feedback"));
        const feedbackList = querySnapshot.docs.map((doc) => doc.data());
        setFeedbackData(feedbackList);
      } catch (error) {
        console.error("Error fetching feedback: ", error);
        Alert.alert("Error", "There was an error fetching the feedback data.");
      }
    };

    fetchFeedback();
  }, []);

  const filteredData = feedbackData.filter((item) => {
    const searchLower = searchText.toLowerCase();
    const nameLower = item.name ? item.name.toLowerCase() : "";
    const scoreString = item.score ? item.score.toString() : "";
    return nameLower.includes(searchLower) || scoreString.includes(searchLower);
  });

  return (
    <>
      <Header heading={"Evaluation"} />
      <View style={styles.container}>
        <View style={styles.searchSection}>
          <TextInput
            style={styles.searchInput}
            placeholder="Search by name "
            onChangeText={(text) => setSearchText(text)}
          />
        </View>
        <View style={styles.scoreHeader}>
        <Text>Name</Text>
          <Text>Food</Text>
          <Text>Service</Text>
          <Text>Ambiance</Text>
        </View>
        {filteredData.map((item, index) => (
          <ScoreCard key={index} nickname={item.nickname || "Anonymous"} date={item.food} name={item.service} score={item.ambiance} />
        ))}
      </View>
      <Footer />
    </>
  );
};

const ScoreCard = ({ nickname, date, name, score }) => (
  
  <View style={styles.scoreCard}>
    <View style={styles.cardSection}>
      <Text>{nickname}</Text>
    </View>
    <View style={styles.cardSection}>
      <Text>{date}</Text>
    </View>
    <View style={styles.cardSection}>
      <Text>{name}</Text>
    </View>
    <View style={styles.cardSection}>
      <Text>{score}</Text>
    </View>
  </View>
);

const styles = StyleSheet.create({
  container: {
    width: "100%",
    height: "100%",
    borderRadius: 20,
    backgroundColor: "#FBECF8",
    alignItems: "center",
    maxWidth: 480,
    margin: "0 auto",
    paddingTop: 100,
  },
  searchSection: {
    marginTop: 20,
    width: 250,
    borderRadius: 20,
    height: 25,
    backgroundColor: "#E3D9D9",
    padding: 5,
  },
  searchInput: {
    fontFamily: "Inter, sans-serif",
  },
  scoreHeader: {
    marginTop: 20,
    width: "100%",
    padding: "0 20px",
    alignItems: "center",
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-around",
    backgroundColor: "#C29D9D",
  },
  scoreCard: {
    flexDirection: "row",
    justifyContent: "space-around",
    alignItems: "center",
    width: "100%",
    backgroundColor: "#FFF",
    borderColor: "rgba(0,0,0,0.25)",
    borderWidth: 1,
    boxShadow: "0px 4px 4px 0px rgba(0, 0, 0, 0.25)",
  },
  cardSection: {
    padding: 10,
    fontFamily: "Radley, sans-serif",
  },
});

export default EmployeeEvaluation;
