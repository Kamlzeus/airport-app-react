import React from "react";
import { View, Text, StyleSheet, ScrollView } from "react-native";

const EcoTravelScreen = ({ route }) => {
  const { title, content } = route.params;

  return (
    <ScrollView style={styles.container}>
      <TouchableOpacity>
        onPress={() => navigation.navigate("InfoScreen")}
      </TouchableOpacity>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: "#f8f8f8",
  },
  title: {
    fontSize: 24,
    fontWeight: "bold",
    marginBottom: 20,
    textAlign: "center",
    color: "#00609E",
  },
  content: {
    fontSize: 16,
    lineHeight: 24,
    color: "#333",
  },
});

export default EcoTravelScreen;
