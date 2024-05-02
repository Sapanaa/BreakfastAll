import React from "react";
import { SafeAreaView, View, StyleSheet, Text } from "react-native";

function MyComponent() {
  const renderRatings = (category) => {
    return (
      <View style={styles.ratingContainer}>
        <Text style={styles.category}>{category}</Text>
        <View style={styles.ratingList}>
          {[1, 2, 3, 4, 5].map((rating) => (
            <View key={rating} style={styles.ratingCircle}>
              <Text style={styles.ratingNumber}>{rating}</Text>
            </View>
          ))}
        </View>
      </View>
    );
  };

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.headerText}>Leave Feedback</Text>
      </View>
      <View style={styles.feedbackForm}>
        <Text style={styles.formTitle}>FEEDBACK FORM</Text>
        {renderRatings("Food")}
        {renderRatings("Service by employee")}
        {renderRatings("Ambiance")}
      </View>
      <View style={styles.buttonContainer}>
        <View style={styles.button}>
          <Text style={styles.buttonText}>Submit</Text>
        </View>
      </View>
      <View style={styles.buttonContainer}>
        <View style={styles.button}>
          <Text style={styles.buttonText}>Cancel</Text>
        </View>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    backgroundColor: "#FFF",
    paddingVertical: 20,
  },
  header: {
    backgroundColor: "#EC9090",
    borderRadius: 50,
    paddingHorizontal: 20,
    paddingVertical: 10,
    marginBottom: 20,
  },
  headerText: {
    fontSize: 20,
    fontFamily: "Itim, sans-serif",
    color: "#221C1C",
  },
  feedbackForm: {
    alignItems: "center",
    borderRadius: 50,
    backgroundColor: "linear-gradient(12deg, )",
    width: "100%",
    flexDirection: "column",
    gap: 20,
    fontSize: 22,
    color: "#000",
    padding: "39px 22px 17px",
  },
  formTitle: {
    fontFamily: "Irish Grover, sans-serif",
  },
  ratingContainer: {
    alignSelf: "stretch",
    alignItems: "center",
  },
  category: {
    color: "#6C1368",
    fontFamily: "Itim, sans-serif",
    marginBottom: 10,
  },
  ratingList: {
    flexDirection: "row",
    justifyContent: "space-between",
    width: "80%",
  },
  ratingCircle: {
    width: 50,
    height: 50,
    borderRadius: 25,
    backgroundColor: "#D9D9D9",
    borderColor: "#6C1368",
    borderWidth: 2,
    justifyContent: "center",
    alignItems: "center",
  },
  ratingNumber: {
    fontFamily: "Itim, sans-serif",
    color: "#6C1368",
    fontSize: 20,
  },
  buttonContainer: {
    flexDirection: "row",
    justifyContent: "center",
    marginBottom: 20,
  },
  button: {
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#E5687F",
    alignSelf: "center",
    borderRadius: 10,
    paddingVertical: 10,
    paddingHorizontal: 20,
    marginBottom: 10,
  },
  buttonText: {
    fontFamily: "Itim, sans-serif",
    textAlign: "center",
    color: "#000",
  },
});

export default MyComponent;
