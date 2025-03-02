import React, { useState } from "react";
import { View, Text, StyleSheet, TouchableOpacity, Alert } from "react-native";
import { useTranslation } from "react-i18next";

const CarRentalScreen = () => {
  const { t } = useTranslation();
  const [selectedClass, setSelectedClass] = useState(t("Эконом"));
  const [selectedTransmission, setSelectedTransmission] = useState(
    t("Автомат")
  );
  const [priceRange, setPriceRange] = useState([1000, 10000]);

  const handleApplyFilters = () => {
    Alert.alert(
      t("Фильтры применены!"),
      t(
        `"Класс": ${selectedClass}\n"Трансмиссия": ${selectedTransmission}\n"Цена": ${priceRange[0]} - ${priceRange[1]}`
      )
    );
  };

  return (
    <View style={styles.container}>
      <Text style={styles.header}>{t("Аренда машин")}</Text>
      <TouchableOpacity style={styles.button} onPress={handleApplyFilters}>
        <Text style={styles.buttonText}>{t("Применить фильтры")}</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
  header: {
    fontSize: 24,
    fontWeight: "bold",
    marginBottom: 20,
  },
  button: {
    backgroundColor: "#007AFF",
    padding: 15,
    borderRadius: 10,
    alignItems: "center",
  },
  buttonText: {
    color: "#fff",
    fontSize: 16,
    fontWeight: "bold",
  },
});

export default CarRentalScreen;
