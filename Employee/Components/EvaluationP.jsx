import React from 'react';
import { View, Text, StyleSheet, Image } from 'react-native';
import Header from './MostComp/Header';

const RatingRow = ({ month, rating }) => {
  return (
    <View style={styles.rowContainer}>
      <View style={styles.monthContainer}>
        <Text>{month}</Text>
      </View>
      <View style={styles.ratingContainer}>
        <Text>{rating}</Text>
      </View>
    </View>
  );
};

const EvaluationP = 
() => {
  const ratingsData = [
    { month: 'March', rating: '⭐⭐' },
    { month: 'April', rating: '⭐⭐⭐⭐' },
    { month: 'May', rating: '⭐⭐⭐' },
    { month: 'June', rating: '⭐⭐⭐⭐' },
  ];

  return (
    <>
    <Header/>
    <View style={styles.mainContainer}>   
      <View style={styles.ratingSection}>
        <View style={styles.headerRow}>
          <Text>Date</Text>
          <Text>Ratings</Text>
        </View>
        {ratingsData.map((rating, index) => (
          <RatingRow key={index} month={rating.month} rating={rating.rating} />
        ))}
      </View>
      <View style={styles.summaryContainer}>
        <Text> Average Rating: ⭐⭐⭐⭐ (4.0) </Text>
        <Text>Relative Rating: Ranked 2nd out of 4 employees</Text>
      </View>
      </View>
    </>
  );
};

const styles = StyleSheet.create({
  mainContainer: {
    backgroundColor: "#E9BABA",
    display: "flex",
    width: "100%",
    flexDirection: "column",
    alignItems: "center",
  },

  ratingSection: {
    borderRadius: 20,
    display: "flex",
    marginTop: 32,
    width: "100%",
    maxWidth: 333,
    flexDirection: "column",
    padding: 8,
  },
  headerRow: {
    flexDirection: "row",
    justifyContent: "space-between",
    backgroundColor: "#863131",
    padding: 10,
  },
  rowContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    padding: 10,
    borderBottomWidth: 1,
    borderBottomColor: "#dddddd",
  },
  monthContainer: {
    justifyContent: "center",
  },
  ratingContainer: {
    justifyContent: "center",
  },
  summaryContainer: {
    marginTop: 32,
    padding: 8,
  },
  footerContainer: {
    backgroundColor: "#E5687F",
    alignSelf: "stretch",
    display: "flex",
    marginTop: 32,
    alignItems: "center",
    justifyContent: "center",
    padding: 29,
  },
  footerImage: {
    width: 42,
    height: 42,
  },
});

export default EvaluationP;