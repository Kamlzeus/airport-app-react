import React, { useState } from "react";
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  Alert,
} from "react-native";

const CarRentalScreen = () => {
  const [selectedClass, setSelectedClass] = useState("Эконом");
  const [selectedTransmission, setSelectedTransmission] = useState("Автомат");
  const [priceRange, setPriceRange] = useState([1000, 10000]);

  const handleApplyFilters = () => {
    Alert.alert(
      "Фильтры применены!",
      `Класс: ${selectedClass}\nТрансмиссия: ${selectedTransmission}\nЦена: ${priceRange[0]} - ${priceRange[1]}`
    );
  };

  return (
    <View style={styles.container}>
      <Text style={styles.header}>Аренда машин</Text>
      <TouchableOpacity style={styles.button} onPress={handleApplyFilters}>
        <Text style={styles.buttonText}>Применить фильтры</Text>
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
