// screens/HotelDetailsScreen.js
import React from "react";
import { View, Text, StyleSheet, TouchableOpacity } from "react-native";
import { useTranslation } from "react-i18next";

const HotelDetailsScreen = ({ route, navigation }) => {
  const { t } = useTranslation();
  const { hotel } = route.params;

  return (
    <View style={styles.container}>
      <Text style={styles.header}>{hotel.name}</Text>
      <Text style={styles.description}>{hotel.description}</Text>
      <Text style={styles.details}>
        {t("Страна")}: {hotel.country}
      </Text>
      <Text style={styles.details}>
        {t("Краткое описание")}: {hotel.description}
      </Text>

      <TouchableOpacity
        style={styles.bookButton}
        onPress={() => navigation.navigate("BookingScreen", { hotel })}
      >
        <Text style={styles.bookButtonText}>
          {t("Выбрать даты бронирования")}
        </Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: "#fff",
  },
  header: {
    fontSize: 24,
    fontWeight: "bold",
    textAlign: "center",
    marginBottom: 20,
  },
  description: {
    fontSize: 16,
    marginBottom: 15,
  },
  details: {
    fontSize: 14,
    color: "#666",
    marginBottom: 10,
  },
  bookButton: {
    backgroundColor: "#007AFF",
    padding: 15,
    borderRadius: 8,
    alignItems: "center",
  },
  bookButtonText: {
    color: "#fff",
    fontWeight: "bold",
    fontSize: 16,
  },
});

export default HotelDetailsScreen;
